"use client";

import React, { useState, useEffect } from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import CookiePolicy from "@/components/CookiePolicy";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedChoice = localStorage.getItem("kreo_cookie_consent");
    if (savedChoice === "accepted" || savedChoice === "declined") {
      setIsVisible(false);
      return;
    }

    // Show after a brief moment if no choice is stored
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem("kreo_cookie_consent", choice);
    setIsVisible(false);
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPrivacy(true);
  };

  const handleCookieClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCookie(true);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Privacy Policy Modal */}
      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}

      {/* Cookie Policy Modal */}
      {showCookie && <CookiePolicy onClose={() => setShowCookie(false)} />}

      {/* Full-screen backdrop — sits above the hero (z-60) */}
      <div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        style={{ background: "rgba(5,5,5,0.72)", backdropFilter: "blur(6px)" }}
        aria-modal="true"
        role="dialog"
        aria-labelledby="cookie-title"
      >
        {/* Modal Card */}
        <div
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6"
          style={{
            animation: "cookieModalIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors p-1"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 shrink-0 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">policy</span>
            </div>
            <div>
              <h4 id="cookie-title" className="font-bold text-gray-900 text-2xl leading-tight">
                Cookie Preferences
              </h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">
                Privacy &amp; Analytics
              </p>
            </div>
          </div>

          {/* Body */}
          <p className="text-sm text-gray-600 leading-relaxed">
            We use cookies to enhance your browsing experience, analyze site traffic,
            and deliver personalized content. You can choose to accept or decline our
            analytics cookies below.
          </p>

          {/* Info Box with Shield */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-3">
            <div className="w-6 h-6 shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-primary text-lg block">verified_user</span>
            </div>
            <div>
              <p className="text-xs text-gray-600 leading-relaxed">
                By accepting, you agree to our{" "}
                <a href="#" onClick={handlePrivacyClick} className="text-primary underline underline-offset-2 hover:text-primary-hover font-medium">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" onClick={handleCookieClick} className="text-primary underline underline-offset-2 hover:text-primary-hover font-medium">
                  Cookie Policy
                </a>
                .
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-2">
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
    </>
  );
}
