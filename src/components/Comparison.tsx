"use client";

import React, { useState } from "react";

interface FeatureCompare {
  title: string;
  icon: string;
  // Desktop spacious copy
  legacyTitle: string;
  legacyDesc: string;
  legacyMetric: string;
  legacyVal: number;
  kreoTitle: string;
  kreoDesc: string;
  kreoMetric: string;
  kreoVal: number;
  // Mobile compact copy
  legacyCompactDesc: string;
  kreoCompactDesc: string;
}

export default function Comparison() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const comparisons: FeatureCompare[] = [
    {
      title: "Speed to Market",
      icon: "speed",
      legacyTitle: "Weeks to Months",
      legacyDesc: "Scattered freelancer schedules, miscommunication, and endless redesign loops delay launch.",
      legacyMetric: "Est. 12+ Weeks",
      legacyVal: 20,
      kreoTitle: "3 to 5 Days Delivery",
      kreoDesc: "Our production-ready boilerplate engine and agile flow deploy production code in days.",
      kreoMetric: "Est. 3-5 Days",
      kreoVal: 95,
      legacyCompactDesc: "Scattered freelancer schedules & endless redesign loops.",
      kreoCompactDesc: "Agile blueprint engine deploys production code in days.",
    },
    {
      title: "Architecture & Integration",
      icon: "integration_instructions",
      legacyTitle: "Fragmented Platforms",
      legacyDesc: "Disjointed tools, custom hacks, and expensive multi-SaaS subscriptions that don't talk to each other.",
      legacyMetric: "High Maintenance",
      legacyVal: 35,
      kreoTitle: "Unified Kreo OS Ecosystem",
      kreoDesc: "All tools, custom databases, CRM integrations, and serverless logic running on a single secure dashboard.",
      kreoMetric: "100% Unified",
      kreoVal: 100,
      legacyCompactDesc: "Disjointed tools, custom hacks, and high maintenance costs.",
      kreoCompactDesc: "All tools, databases, and serverless logic in one dashboard.",
    },
    {
      title: "Support Model",
      icon: "support_agent",
      legacyTitle: "Hourly Billing / Ghosting",
      legacyDesc: "Paying for every small bug fix, long delays in replies, or developers disappearing mid-project.",
      legacyMetric: "$$$ Per Hour",
      legacyVal: 30,
      kreoTitle: "Dedicated Engineering Partner",
      kreoDesc: "Direct communication channels, proactive system monitoring, and continuous updates built-in.",
      kreoMetric: "24/7 Dedicated Support",
      kreoVal: 98,
      legacyCompactDesc: "Paying for every small tweak; developers ghosting mid-project.",
      kreoCompactDesc: "Direct Slack channel, continuous monitoring, and proactive updates.",
    },
    {
      title: "AI Integration",
      icon: "psychology",
      legacyTitle: "Basic API Wrappers",
      legacyDesc: "Simple prompts and chat interfaces without vector embeddings, semantic cache, or model tuning.",
      legacyMetric: "Low Customization",
      legacyVal: 15,
      kreoTitle: "Enterprise AI Native Agents",
      kreoDesc: "Custom fine-tuned agents, automated retrieval (RAG), and logic flows that optimize operational costs.",
      kreoMetric: "Fully Agentic",
      kreoVal: 96,
      legacyCompactDesc: "Simple prompts without context retrieval, RAG, or tuning.",
      kreoCompactDesc: "Custom fine-tuned LLM agents trained on operational data.",
    },
  ];

  return (
    <section id="insight" className="relative bg-[#09090b] py-12 md:py-24 lg:py-28 overflow-hidden border-t border-zinc-900">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-12 lg:px-8 z-10">
        
        {/* ======================================================== */}
        {/* DESKTOP VIEW: Spacious, High-Fidelity Duel Layout         */}
        {/* ======================================================== */}
        <div className="hidden md:block">
          {/* Section Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Traditional vs. <span className="text-primary">Kreo OS</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-base md:text-lg leading-relaxed">
              See how our advanced engineering ecosystem outperforms legacy development timelines, fragmentations, and support models.
            </p>
          </div>

          {/* Dynamic Selector Buttons */}
          <div className="grid grid-cols-4 gap-4 mb-10">
            {comparisons.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center justify-center gap-3 px-5 py-4 rounded-xl border transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-zinc-800/60 border-primary/60 text-white shadow-sm"
                    : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:bg-zinc-900/80 hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="font-bold text-sm tracking-wide">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Comparison Dashboard Grid */}
          <div className="grid grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Legacy Route */}
            <div className="flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/50">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Legacy Route</span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 text-xs font-semibold">
                    <span className="material-symbols-outlined text-[14px] text-zinc-500">cancel</span>
                    Freelancers & Agencies
                  </span>
                </div>

                <h3 className="text-2xl font-black text-zinc-300 mb-3">
                  {comparisons[activeTab].legacyTitle}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {comparisons[activeTab].legacyDesc}
                </p>
              </div>

              {/* Metric Panel */}
              <div className="bg-zinc-950/40 border border-zinc-900 rounded-xl p-5 mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-zinc-500 font-medium">Efficiency Index</span>
                  <span className="text-xs font-bold text-zinc-400">{comparisons[activeTab].legacyMetric}</span>
                </div>
                <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-zinc-600 h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${comparisons[activeTab].legacyVal}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Kreo OS Route (Glowing Premium Neon Card) */}
            <div className="relative flex flex-col justify-between bg-orange-950/5 border border-primary/30 rounded-2xl p-8 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/50">
              {/* Corner Light Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">High-Speed Execution</span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    KreoSoftwares
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-3">
                  {comparisons[activeTab].kreoTitle}
                </h3>
                <p className="text-zinc-300 text-base leading-relaxed mb-6">
                  {comparisons[activeTab].kreoDesc}
                </p>
              </div>

              {/* Metric Panel */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-zinc-400 font-medium">Performance Delivery</span>
                  <span className="text-xs font-bold text-white tracking-wide">{comparisons[activeTab].kreoMetric}</span>
                </div>
                <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${comparisons[activeTab].kreoVal}%` }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Ultra-Compact Zero-Scroll Dashboard          */}
        {/* ======================================================== */}
        <div className="block md:hidden">
          {/* Compact Header */}
          <div className="mb-6 text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2 block">Quick Comparison</span>
            <h2 className="text-2xl font-black text-white leading-tight">
              Traditional vs. <span className="text-primary">Kreo OS</span>
            </h2>
          </div>

          {/* Dynamic Static Selector Grid (2x2 Grid, Compact padding) */}
          <div className="grid grid-cols-2 gap-2 mb-6 w-full">
            {comparisons.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-center transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-zinc-800/60 border-primary/60 text-white shadow-sm"
                    : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:bg-zinc-900/80 hover:text-white"
                }`}
              >
                <span className="material-symbols-outlined text-[16px] shrink-0">{item.icon}</span>
                <span className="font-bold text-[11px] sm:text-xs tracking-tight truncate">{item.title}</span>
              </button>
            ))}
          </div>

          {/* Compact Split Dashboard Card */}
          <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-5 backdrop-blur-md w-full">
            <div className="flex flex-col divide-y divide-zinc-800/60 gap-5">
              
              {/* Top half: Legacy Route */}
              <div className="pb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Legacy Option</span>
                  <span className="flex items-center gap-1 text-[10px] text-zinc-500 font-semibold bg-zinc-800/40 border border-zinc-700/40 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-[12px]">close</span>
                    Freelance/Agencies
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-300 mb-1.5">
                  {comparisons[activeTab].legacyMetric}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {comparisons[activeTab].legacyCompactDesc}
                </p>
              </div>

              {/* Bottom half: Kreo OS Route */}
              <div className="pt-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Kreo Execution</span>
                  <span className="flex items-center gap-1 text-[10px] text-primary font-semibold bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                    <span className="material-symbols-outlined text-[12px]">check</span>
                    KreoSoftwares
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {comparisons[activeTab].kreoMetric}
                </h3>
                <p className="text-zinc-300 text-xs leading-relaxed">
                  {comparisons[activeTab].kreoCompactDesc}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
