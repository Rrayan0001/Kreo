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
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="hero-video-overlay" />

        {/* Minimal centered text */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-32">
          <p className="fade-in text-xs font-bold uppercase tracking-[0.3em] text-orange-300 mb-6">
            Engineering Digital Transformation
          </p>
          <h1 className="fade-in-up delay-100 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] tracking-tight max-w-4xl">
            Build Smarter.<br />Grow Faster.
          </h1>
          <div className="fade-in-up delay-300 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="btn-primary bg-primary hover:bg-primary-hover text-white h-13 px-10 py-3.5 rounded-lg font-bold flex items-center gap-2 justify-center shadow-2xl shadow-primary/40 text-base"
            >
              Explore Our Work
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f9f9f9] to-transparent z-10 pointer-events-none" />
      </section>
    </>
  );
}
