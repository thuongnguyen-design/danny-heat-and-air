#!/bin/bash

echo "Creating .dockerignore..."
cat << 'EOF' > .dockerignore
Dockerfile
docker-compose.yml
node_modules
npm-debug.log
README.md
.next
.git
EOF

echo "Creating Dockerfile..."
cat << 'EOF' > Dockerfile
# Stage 1: Install dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install

# Stage 2: Build the Next.js app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Stage 3: Production server
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
EOF

echo "Creating docker-compose.yml..."
cat << 'EOF' > docker-compose.yml
version: '3.8'
services:
  hvac-website:
    build: .
    container_name: delta-sierra-hvac
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
EOF

echo "Updating next.config.js for standalone output..."
# This injects output: 'standalone' right below reactStrictMode
sed -i '/reactStrictMode: true,/a \ \ output: "standalone",' next.config.js

echo "Building and starting container..."
docker compose up -d --build

echo "Done! The site is deploying."
