"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* MSME Floating Banner */}
      <div className="msme-banner" aria-label="MSME Certified">
        <div className="relative w-full h-full">
          <Image
            src="/msme.png"
            alt="MSME Logo"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 110px, 180px"
            priority
          />
        </div>
      </div>

      {/* Full-bleed video hero */}
      <section className="hero-video-section">
        {/* Background Video */}
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/* Portrait video for mobile screens */}
          <source src="/Portrait.mp4" type="video/mp4" media="(max-width: 767px)" />
          {/* Landscape video for tablet/desktop */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay — lighter on mobile so video shows through more */}
        <div className="hero-video-overlay" />

        {/* Mobile bottom scrim — gradient behind text only, doesn't cover the video subject */}
        <div className="hero-bottom-scrim md:hidden" />

        {/*
          Desktop: centered text (justify-center)
          Mobile:  text pinned to bottom (justify-end pb-10) so the video is fully visible above
        */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-end md:justify-center text-center px-5 sm:px-8 md:px-12 pb-10 md:pb-0 md:py-32">
          <p className="fade-in text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-300 mb-3 sm:mb-6 px-2">
            Engineering Digital Transformation
          </p>
          <h1 className="fade-in-up delay-100 text-[1.75rem] sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.08] tracking-tight w-full max-w-[260px] sm:max-w-xl md:max-w-4xl">
            Build Smarter.<br />Grow Faster.
          </h1>
          <div className="fade-in-up delay-300 mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-[240px] sm:max-w-none">
            <a
              href="#services"
              className="btn-primary bg-primary hover:bg-primary-hover text-white h-11 sm:h-13 px-7 sm:px-10 py-2.5 sm:py-3.5 rounded-lg font-bold flex items-center gap-2 justify-center shadow-2xl shadow-primary/40 text-sm sm:text-base"
            >
              Explore Our Work
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
