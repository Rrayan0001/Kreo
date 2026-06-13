"use client";

import React from "react";

interface ClientItem {
  name: string;
  url: string | null;
}

export default function Clients() {
  const clients: ClientItem[] = [
    { name: "Chandan", url: "https://schoolchandan.edu.in" },
    { name: "Arcon", url: "https://arconespl.com" },
    { name: "SKPSH", url: "https://skpsh.in" },
    { name: "IgnitePrime", url: "https://ignitesportsfitness.in" },
    { name: "PlanNetM", url: null },
    { name: "KLE", url: null },
  ];

  return (
    <section className="py-20 md:py-24 bg-white border-t border-gray-100 relative overflow-clip">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div data-reveal="fade-up" className="text-center mb-12 md:mb-16">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Our Network</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Happy Clients &amp; Educational Partners</h2>
        </div>

        {/* Client Boxes */}
        <div data-reveal="fade-up" className="relative w-full">
          <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8">
            {clients.map((client, idx) =>
              client.url ? (
                <a
                  key={idx}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white border border-gray-200 shadow-sm rounded-2xl text-gray-800 font-bold text-sm md:text-base tracking-widest select-none cursor-pointer transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md hover:scale-105"
                >
                  {client.name.toUpperCase()}
                </a>
              ) : (
                <div
                  key={idx}
                  className="px-8 py-4 bg-white border border-gray-200 shadow-sm rounded-2xl text-gray-800 font-bold text-sm md:text-base tracking-widest select-none cursor-default transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md hover:scale-105"
                >
                  {client.name.toUpperCase()}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
