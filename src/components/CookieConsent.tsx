"use client";

import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent_choice");
    if (!consent) {
      // Trigger slide-in with a short delay for animation flow
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie_consent_choice", choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] bg-white/95 backdrop-blur-md border border-orange-100 rounded-2xl shadow-xl p-5 slide-in-left transition-all duration-500">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 shrink-0 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-xl">cookie</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-base leading-tight">Cookie Preferences</h4>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Privacy & Analytics</p>
          </div>
        </div>

        {/* Text */}
        <p className="text-xs text-gray-600 leading-relaxed">
          We use cookies to optimize web experience, analyze site traffic, and deliver customized solutions. You can accept or decline our analytics cookies.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-1">
          <button
            onClick={() => handleChoice("accepted")}
            className="flex-1 bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors cursor-pointer shadow-md shadow-primary/15 flex items-center justify-center gap-1"
          >
            Accept All
          </button>
          <button
            onClick={() => handleChoice("declined")}
            className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-semibold py-2.5 px-4 rounded-lg transition-all cursor-pointer flex items-center justify-center"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
