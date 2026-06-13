"use client";

import React from "react";
import Link from "next/link";

export default function ServicesPreview() {
  const pillars = [
    {
      icon: "architecture",
      title: "Software Solutions",
      desc: "Custom software, web/mobile applications, ERP & CRM, and IT strategy consulting.",
    },
    {
      icon: "school",
      title: "Educational Programs",
      desc: "Workshops, training, certification courses, and academic project mentoring.",
    },
    {
      icon: "precision_manufacturing",
      title: "Industrial Product Design",
      desc: "Transforming concepts into market-ready physical products with 3D modeling and prototyping.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-clip">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <div className="section-divider"></div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Our Professional Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl text-base leading-relaxed">
              We bridge software engineering, physical product design, and skill development to provide comprehensive growth opportunities.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center justify-center font-bold px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-lg shadow-sm hover:border-primary/20 hover:text-primary transition-all duration-300 group text-sm shrink-0"
          >
            Explore All 7 Services
            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform text-lg">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <Link
              key={idx}
              href="/services"
              data-reveal="fade-up"
              data-reveal-delay={String(idx * 150)}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group relative flex flex-col justify-between min-h-[240px] cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 border border-primary/20 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-5">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center justify-between text-xs text-gray-400 group-hover:text-primary transition-colors">
                <span>View options</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
