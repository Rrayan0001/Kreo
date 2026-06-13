"use client";

import React from "react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[#faf9f6] border-t border-gray-100 relative overflow-clip">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div data-reveal="slide-left" className="lg:col-span-6">
            <div className="section-divider"></div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              Innovation. Technology. Education. Growth.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Founded in 2024, KREO is a dynamic company dedicated to empowering individuals,
              institutions, and businesses through innovation, technology, education, and professional development.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We deliver multidisciplinary solutions across software development, industrial design, training programs,
              consultancy, and career guidance.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-bold px-6 py-3 bg-primary text-white rounded-lg shadow-lg shadow-primary/20 hover:bg-primary-hover hover:shadow-primary/30 transition-all duration-300 group text-sm"
            >
              Read Our Full Story
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform text-lg">
                arrow_forward
              </span>
            </Link>
          </div>

          <div data-reveal="slide-right" className="lg:col-span-6 relative">
            <div className="absolute inset-0 tech-bg-pattern pointer-events-none rounded-2xl opacity-10"></div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md relative overflow-clip flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="text-xs font-bold text-primary tracking-wider uppercase block mb-1">Our Core Pillars</span>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Empowering with KREO Values</h3>
                
                <div className="space-y-4">
                  {[
                    { l: "K", t: "Knowledge", d: "Promoting continuous learning and excellence" },
                    { l: "R", t: "Recruitment", d: "Connecting talent with industry opportunities" },
                    { l: "E", t: "Empowerment", d: "Enabling individuals to achieve full potential" },
                    { l: "O", t: "Optimization", d: "Delivering efficient, result-oriented solutions" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 font-bold text-primary text-sm">
                        {item.l}
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-gray-900">{item.t}</h4>
                        <p className="text-[11px] text-gray-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
