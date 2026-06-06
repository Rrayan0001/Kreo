import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import Timeline from "@/components/Timeline";
import Comparison from "@/components/Comparison";
import BusinessFlow from "@/components/BusinessFlow";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Marquee */}
        <Ticker />

        {/* Services / Solutions Specifications */}
        <Services />

        {/* Timeline Methodology Section */}
        <Timeline />

        {/* Comparison Section (Why Choose Kreo) */}
        <Comparison />

        {/* Call to Action Consultation Banner */}
        <CTA />

        {/* BusinessFlow OS Details */}
        <BusinessFlow />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
