import { useEffect } from "react";

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * Adds "visible" class to elements with "reveal" or "reveal-stagger" when they enter the viewport.
 * Call once in _app.js — no per-component wiring needed.
 */
export default function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".reveal, .reveal-stagger");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
