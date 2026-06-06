"use client";

import { useEffect } from "react";

/**
 * Registers an IntersectionObserver on every element that carries a
 * `data-reveal` attribute and toggles the `revealed` class so that
 * the CSS transitions defined in globals.css play at the right moment.
 *
 * It uses a MutationObserver to automatically discover new elements added
 * dynamically by React state updates or late hydration, and applies a
 * setTimeout-based delay to ensure the browser paints the initial state
 * before transitioning.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? "0";
            
            // Set inline transitionDelay dynamically so any custom staggers work
            el.style.transitionDelay = `${delay}ms`;

            // Wait a frame before adding the revealed class to ensure the initial state is painted
            requestAnimationFrame(() => {
              el.classList.add("revealed");
            });

            observer.unobserve(el); // Animate only once
            observedElements.delete(el);
          }
        });
      },
      { 
        threshold: 0.05, // Trigger as soon as the element starts entering the screen
        rootMargin: "0px 0px -20px 0px" 
      }
    );

    const observeNewElements = () => {
      const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)");
      elements.forEach((el) => {
        if (!observedElements.has(el)) {
          observedElements.add(el);
          observer.observe(el);
        }
      });
    };

    // Delay initial check slightly to allow CSS opacity: 0 to paint first
    const timer = setTimeout(() => {
      observeNewElements();
    }, 100);

    // Watch the DOM for modifications (e.g., dynamic component hydration)
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Renders nothing - hook provider
  return null;
}
