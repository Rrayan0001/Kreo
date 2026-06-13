"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Chatbot from "@/components/Chatbot";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Standalone compact Header/Banner for About Page */}
      <div className="bg-[#09090b] text-white pt-28 pb-14 md:pt-36 md:pb-18 relative overflow-clip border-b border-zinc-900">
        {/* Background decorative patterns */}
        <div className="absolute inset-0 tech-bg-pattern pointer-events-none opacity-5"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Identity, Vision & Team
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Founded in 2024, KREO is dedicated to empowering individuals, institutions, and businesses through innovation, technology, education, and professional development.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        {/* Full About component */}
        <About />

        {/* Call to action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactives */}
      <CookieConsent />
      <Chatbot />
      <ScrollReveal />
    </div>
  );
}
