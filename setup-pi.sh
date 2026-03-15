#!/usr/bin/env bash
# =============================================================
#  HVAC Website — Raspberry Pi 5 Setup Script
#  Run once: bash setup-pi.sh
#  Then start dev server: npm run dev
#  Access at: http://localhost:3000  OR  http://<your-pi-ip>:3000
# =============================================================
set -e

BOLD='\033[1m'; CYAN='\033[0;36m'; GREEN='\033[0;32m'
YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'

banner() { echo -e "\n${CYAN}${BOLD}══ $1 ══${NC}"; }
ok()     { echo -e "${GREEN}  ✓ $1${NC}"; }
warn()   { echo -e "${YELLOW}  ⚠ $1${NC}"; }
die()    { echo -e "${RED}  ✗ $1${NC}"; exit 1; }

echo -e "${CYAN}${BOLD}"
cat <<'ART'
  ██╗  ██╗██╗   ██╗ █████╗  ██████╗    ███████╗██╗████████╗███████╗
  ██║  ██║██║   ██║██╔══██╗██╔════╝    ██╔════╝██║╚══██╔══╝██╔════╝
  ███████║██║   ██║███████║██║         ███████╗██║   ██║   █████╗
  ██╔══██║╚██╗ ██╔╝██╔══██║██║         ╚════██║██║   ██║   ██╔══╝
  ██║  ██║ ╚████╔╝ ██║  ██║╚██████╗    ███████║██║   ██║   ███████╗
   Pi 5 Local Dev Setup  —  Your HVAC Website
ART
echo -e "${NC}"

# ── 1. System packages ────────────────────────────────────────
banner "Step 1 — System update"
sudo apt-get update -qq && sudo apt-get upgrade -y -qq
ok "System packages up to date"

# Install curl, git if missing
for pkg in curl git; do
  if ! command -v $pkg &>/dev/null; then
    warn "$pkg not found — installing..."
    sudo apt-get install -y -qq $pkg
    ok "$pkg installed"
  else
    ok "$pkg already present"
  fi
done

# ── 2. Node.js LTS via NodeSource ─────────────────────────────
banner "Step 2 — Node.js"
if command -v node &>/dev/null; then
  NODE_VER=$(node -v)
  MAJOR=$(echo $NODE_VER | cut -d'.' -f1 | tr -d 'v')
  if [ "$MAJOR" -ge 18 ]; then
    ok "Node.js $NODE_VER is compatible (≥18 required)"
  else
    warn "Node.js $NODE_VER is too old. Upgrading to LTS..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ok "Node.js updated: $(node -v)"
  fi
else
  warn "Node.js not found — installing LTS..."
  curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ok "Node.js installed: $(node -v)"
fi
ok "npm: $(npm -v)"

# ── 3. Install dependencies ───────────────────────────────────
banner "Step 3 — Project dependencies"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if [ ! -f package.json ]; then
  die "package.json not found. Make sure all project files are in the same folder as this script."
fi

echo "  Installing npm packages (this takes ~2 min on Pi)..."
npm install --silent
ok "All dependencies installed"

# ── 4. Environment file ───────────────────────────────────────
banner "Step 4 — Environment configuration"
if [ ! -f .env.local ]; then
  cat > .env.local <<ENV
# ── Local Dev Config ──────────────────────────────────────────
# Replace these with your real values before going to production

NEXT_PUBLIC_SITE_NAME="Your HVAC Company"
NEXT_PUBLIC_PHONE="(555) 123-4567"
NEXT_PUBLIC_EMAIL="service@yourhvac.com"
NEXT_PUBLIC_CITY="Your City"
NEXT_PUBLIC_STATE="CA"

# Security — generate a real secret: openssl rand -hex 32
FORM_SECRET=dev_secret_change_before_production_$(openssl rand -hex 8)

# Email notifications (optional for local dev — leave blank to skip)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
NOTIFY_EMAIL=

# reCAPTCHA — get free keys at google.com/recaptcha
# Leave blank locally — honeypot still works without it
RECAPTCHA_SECRET_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
ENV
  ok ".env.local created — edit it with your business details"
else
  ok ".env.local already exists — skipping"
fi

# ── 5. Get local IP ───────────────────────────────────────────
banner "Step 5 — Network info"
LOCAL_IP=$(hostname -I | awk '{print $1}')
ok "Pi local IP: $LOCAL_IP"

# ── 6. Done — print instructions ─────────────────────────────
echo ""
echo -e "${GREEN}${BOLD}══════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}${BOLD}  ✓  Setup complete! Here's how to run your site:${NC}"
echo -e "${GREEN}${BOLD}══════════════════════════════════════════════════════${NC}"
echo ""
echo -e "  ${BOLD}Start dev server:${NC}"
echo -e "    ${CYAN}npm run dev${NC}"
echo ""
echo -e "  ${BOLD}View in browser:${NC}"
echo -e "    On this Pi:      ${CYAN}http://localhost:3000${NC}"
echo -e "    From any device: ${CYAN}http://${LOCAL_IP}:3000${NC}"
echo ""
echo -e "  ${BOLD}Edit your business info:${NC}"
echo -e "    ${CYAN}nano .env.local${NC}  (name, phone, city, etc.)"
echo ""
echo -e "  ${BOLD}When ready to deploy to a real domain:${NC}"
echo -e "    ${CYAN}npm run build && npm start${NC}"
echo ""
echo -e "${YELLOW}  Tip: The site hot-reloads — any file you save updates instantly.${NC}"
echo ""
