"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  // Use client-side detection to determine which video to render.
  // We initialize with a default (e.g. empty) to prevent hydration mismatches,
  // then resolve immediately on mount.
  const [videoSrc, setVideoSrc] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkResponsiveSrc = () => {
      const isMobile = window.innerWidth <= 767;
      setVideoSrc(isMobile ? "/Portrait.mp4" : "/hero-video.mp4");
    };

    // Run on mount
    checkResponsiveSrc();

    // Listen to resize in case orientation changes
    window.addEventListener("resize", checkResponsiveSrc);
    return () => window.removeEventListener("resize", checkResponsiveSrc);
  }, []);

  // Force play the video explicitly when source changes to prevent mobile browser load blocks
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was prevented or postponed:", err);
      });
    }
  }, [videoSrc]);

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
        {videoSrc && (
          <video
            ref={videoRef}
            key={videoSrc} // key forces DOM element recreation on src switch
            className="hero-video-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Dark Overlay — lighter on mobile so video shows through more */}
        <div className="hero-video-overlay" />

        {/* Bottom scrim — gradient behind text only, doesn't cover the video subject */}
        <div className="hero-bottom-scrim" />

        {/*
          Desktop: text pinned to bottom-left (justify-end items-start text-left) so video is clear
          Mobile:  text pinned to bottom-center (justify-end items-center text-center)
        */}
        <div className="absolute inset-0 z-10 flex flex-col items-center md:items-start justify-end text-center md:text-left px-5 sm:px-8 md:px-20 lg:px-24 pb-8 md:pb-14">
          <p className="fade-in text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-300 mb-3 sm:mb-6 px-2 md:px-0">
            Engineering Digital Transformation
          </p>
          <h1 className="fade-in-up delay-100 text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight w-full max-w-[260px] sm:max-w-xl md:max-w-3xl">
            Build Smarter.<br />Grow Faster.
          </h1>
          <div className="fade-in-up delay-300 mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full max-w-[240px] sm:max-w-none">
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
