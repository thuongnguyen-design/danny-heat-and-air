// src/pages/_app.js
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useReveal from "@/hooks/useReveal";

export default function App({ Component, pageProps }) {
  useReveal();

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
