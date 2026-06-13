import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import AboutPreview from "@/components/AboutPreview";
import ServicesPreview from "@/components/ServicesPreview";
import Comparison from "@/components/Comparison";
import BusinessFlow from "@/components/BusinessFlow";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Chatbot from "@/components/Chatbot";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section — always visible immediately */}
        <Hero />

        {/* Tech Stack Marquee */}
        <div data-reveal="fade-in">
          <Ticker />
        </div>

        {/* About Preview Section */}
        <AboutPreview />

        {/* Services Preview Section */}
        <ServicesPreview />

        {/* Comparison Section (Why Choose Kreo) */}
        <div data-reveal="slide-right">
          <Comparison />
        </div>

        {/* Call to Action Consultation Banner */}
        <CTA />

        {/* BusinessFlow OS Details */}
        <BusinessFlow />

        {/* Testimonials (Electrons & Clients) */}
        <Testimonials />

        {/* Happy Clients & Educational Partners */}
        <Clients />

        {/* Details Collection Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <div data-reveal="fade-up" data-reveal-delay="200">
        <Footer />
      </div>

      {/* Interactive Widgets */}
      <CookieConsent />
      <Chatbot />

      {/* Mount the scroll-reveal observer (renders nothing) */}
      <ScrollReveal />
    </div>
  );
}
