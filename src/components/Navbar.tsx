"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navOpacity, setNavOpacity] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 60);
      // Compute a smooth opacity from 0.2 -> 0.95 as the user scrolls up to 800px
      const computed = Math.min(0.95, 0.2 + y / 800);
      setNavOpacity(Number(computed.toFixed(3)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // initialize once
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const startProjectUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeqSIyE2cCTSjNK8b7_HFdrt096DWIZQNxBU282n9bAYvjlog/viewform?usp=header";

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-md shadow-sm border-b border-gray-100 py-2" : "py-4"}`}
        style={
          scrolled
            ? { backgroundColor: `rgba(255,255,255,${navOpacity})` }
            : { background: "transparent" }
        }
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-3 transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}
          >
            <div className="relative w-11 h-11 flex items-center justify-center rounded-lg bg-white/15 overflow-hidden border border-white/20">
              <Image
                src="/images/logo.jpeg"
                alt="Kreo logo"
                fill
                className="object-contain"
                sizes="44px"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/#testimonials"
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="/#contact-form"
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                Contact Us
              </Link>
            </nav>
            <Link
              href="/#contact-form"
              className={`text-sm font-bold h-10 px-6 rounded-lg flex items-center transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
            className={`md:hidden cursor-pointer bg-transparent border-0 w-11 h-11 flex items-center justify-center transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 md:hidden mobile-nav-in">
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <Image src="/images/logo.jpeg" alt="Kreo logo" fill className="object-contain" sizes="40px" />
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="text-gray-800 bg-transparent border-0 w-11 h-11 flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>
          <nav className="flex flex-col gap-4 text-lg">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-800 hover:text-primary py-3.5 border-b border-gray-100 flex items-center">
              About Us
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-800 hover:text-primary py-3.5 border-b border-gray-100 flex items-center">
              Services
            </Link>
            <Link href="/gallery" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-800 hover:text-primary py-3.5 border-b border-gray-100 flex items-center">
              Gallery
            </Link>
            <Link href="/#testimonials" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-800 hover:text-primary py-3.5 border-b border-gray-100 flex items-center">
              Testimonials
            </Link>
            <Link href="/#contact-form" onClick={() => setMobileMenuOpen(false)} className="font-medium text-gray-800 hover:text-primary py-3.5 border-b border-gray-100 flex items-center">
              Contact Us
            </Link>
            <Link
              href="/#contact-form"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-white h-12 px-6 rounded-lg inline-flex items-center justify-center w-full mt-6 font-bold"
            >
              Start Project
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
