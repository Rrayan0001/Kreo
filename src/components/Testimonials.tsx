"use client";

import React, { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  org?: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<"electrons" | "clients">("electrons");

  const electrons: Testimonial[] = [
    {
      name: "Rohit Patil",
      role: "Graduate Intern (Embedded Systems)",
      org: "Now at Bosch",
      quote: "Kreo's IoT labs gave me real-world exposure to sensors integration and firmware builds that no textbook could cover. The mentorship during my final year project was absolute gold.",
      rating: 5,
    },
    {
      name: "Sahana Deshpande",
      role: "Full-Stack Web Trainee",
      org: "Now Software Engineer at TCS",
      quote: "Getting certified with Kreo wasn't just about the certificate. The weekly coding hackathons pushed my limits and taught me React, Next.js, and version control structures.",
      rating: 5,
    },
    {
      name: "Aditya Hegde",
      role: "Student (Mechanical Prototyping)",
      org: "SDM College of Engineering",
      quote: "The CAD and Industrial Product Design workshop clarified the transition from hardware assembly to custom software controls. Excellent guidance from Mayur and Janhavi.",
      rating: 5,
    },
  ];

  const clients: Testimonial[] = [
    {
      name: "Gopal Chandan",
      role: "Founder & Director",
      org: "Chandan Ventures",
      quote: "Kreo designed and launched our corporate pipeline tracking dashboard in record time. Their software consultancy streamlined our client onboarding cycles significantly.",
      rating: 5,
    },
    {
      name: "Dr. Anil Kumar",
      role: "Administrative Head",
      org: "KLE Tech Institutes",
      quote: "We partnered with Kreo for student certification pathways and technical workshops. Their execution pipeline is structured, and their mentors are highly qualified.",
      rating: 5,
    },
    {
      name: "Ramesh Joshi",
      role: "Operations Manager",
      org: "Arcon Logistics",
      quote: "Our custom tracking site built by Kreo operates with near-zero latency. The dedicated support team has been proactive, monitoring our database sync workflows 24/7.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <span key={i} className="material-symbols-outlined text-accent-yellow text-sm fill-[1]">
        star
      </span>
    ));
  };

  const activeTestimonials = activeCategory === "electrons" ? electrons : clients;

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#09090b] text-white relative overflow-clip border-t border-zinc-900">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div data-reveal="fade-up" className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Testimonials</span>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Voices of Validation
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Read stories of technical transformation, from our student interns to our corporate enterprise clients.
          </p>
        </div>

        {/* Toggle Controls */}
        <div data-reveal="fade-up" className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("electrons")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${
              activeCategory === "electrons"
                ? "bg-zinc-800 border-primary/50 text-white shadow-lg shadow-primary/5"
                : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            What Our Electrons Say
          </button>
          
          <button
            onClick={() => setActiveCategory("clients")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-bold transition-all duration-300 ${
              activeCategory === "clients"
                ? "bg-zinc-800 border-primary/50 text-white shadow-lg shadow-primary/5"
                : "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">handshake</span>
            What Our Clients Say
          </button>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTestimonials.map((item, idx) => (
            <div
              key={idx}
              data-reveal="zoom-up"
              data-reveal-delay={String(idx * 150)}
              className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between hover:border-zinc-700/50 transition-all duration-300 relative group"
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-zinc-800 font-serif text-6xl pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
                “
              </div>

              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex gap-1 mb-5">
                  {renderStars(item.rating)}
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-medium italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="relative z-10 pt-5 border-t border-zinc-800/80 mt-auto">
                <h4 className="font-bold text-white text-base leading-tight mb-1">{item.name}</h4>
                <p className="text-xs text-primary font-semibold tracking-wide">
                  {item.role} {item.org && <span className="text-zinc-500">| {item.org}</span>}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
