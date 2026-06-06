"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Always show the cookie modal on every page load/visit
    // Show after a brief moment so the hero renders first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    /* Full-screen backdrop — sits above the hero (z-60) */
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: "rgba(5,5,5,0.72)", backdropFilter: "blur(6px)" }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="cookie-title"
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-5"
        style={{
          animation: "cookieModalIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards",
        }}
      >
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary to-amber-400" />

        {/* Header */}
        <div className="flex items-start gap-3 pt-2">
          <div className="w-11 h-11 shrink-0 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">cookie</span>
          </div>
          <div>
            <h4 id="cookie-title" className="font-bold text-gray-900 text-lg leading-tight">
              Cookie Preferences
            </h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
              Privacy &amp; Analytics
            </p>
          </div>
        </div>

        {/* Body */}
        <p className="text-sm text-gray-600 leading-relaxed">
          We use cookies to optimize your web experience, analyze site traffic,
          and deliver personalized solutions. You can choose to accept or decline
          our analytics cookies below.
        </p>

        {/* Links row */}
        <p className="text-xs text-gray-400">
          By accepting, you agree to our{" "}
          <a href="#" className="text-primary underline underline-offset-2 hover:text-primary-hover">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary underline underline-offset-2 hover:text-primary-hover">
            Cookie Policy
          </a>
          .
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-1">
          <button
            id="cookie-accept-btn"
            onClick={() => handleChoice("accepted")}
            className="flex-1 bg-primary hover:bg-primary-hover text-white text-sm font-bold py-3 px-4 rounded-xl transition-colors cursor-pointer shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-base">check_circle</span>
            Accept All
          </button>
          <button
            id="cookie-decline-btn"
            onClick={() => handleChoice("declined")}
            className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
