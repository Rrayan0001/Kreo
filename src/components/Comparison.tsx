"use client";

import React, { useState } from "react";

interface FeatureCompare {
  title: string;
  icon: string;
  legacyTitle: string;
  legacyDesc: string;
  legacyMetric: string;
  legacyVal: number; // 0-100 for visual bar
  kreoTitle: string;
  kreoDesc: string;
  kreoMetric: string;
  kreoVal: number; // 0-100 for visual bar
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
    },
    {
      title: "Ongoing Support",
      icon: "support_agent",
      legacyTitle: "Hourly Billing / Ghosting",
      legacyDesc: "Paying for every small bug fix, long delays in replies, or developers disappearing mid-project.",
      legacyMetric: "$$$ Per Hour",
      legacyVal: 30,
      kreoTitle: "Dedicated Engineering Partner",
      kreoDesc: "Direct communication channels, proactive system monitoring, and continuous updates built-in.",
      kreoMetric: "24/7 Dedicated Support",
      kreoVal: 98,
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
    },
  ];

  return (
    <section id="insight" className="relative bg-[#09090b] py-20 md:py-28 overflow-hidden">
      {/* Dynamic backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-12 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Traditional vs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Kreo OS</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-base md:text-lg leading-relaxed">
            See how our advanced engineering ecosystem outperforms legacy development timelines, fragmentations, and support models.
          </p>
        </div>

        {/* Dynamic Selector Buttons (Horizontal Scroll on Mobile) */}
        <div className="flex md:grid md:grid-cols-4 gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-none mb-10 border-b border-zinc-800/60 md:border-none">
          {comparisons.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-shrink-0 md:w-full flex items-center justify-center gap-3 px-5 py-4 rounded-xl border transition-all duration-300 ${
                activeTab === idx
                  ? "bg-primary/10 border-primary text-white shadow-[0_0_20px_rgba(216,86,4,0.15)]"
                  : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:bg-zinc-900/80 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="font-bold text-sm tracking-wide">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Comparison Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Legacy Route */}
          <div className="flex flex-col justify-between bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/50">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Legacy Route</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/20 border border-red-900/30 text-red-400 text-xs font-semibold">
                  <span className="material-symbols-outlined text-[14px]">cancel</span>
                  Freelancers & Agencies
                </span>
              </div>

              <h3 className="text-2xl font-black text-zinc-300 mb-3">
                {comparisons[activeTab].legacyTitle}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
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
          <div className="relative flex flex-col justify-between bg-orange-950/5 border-2 border-primary/40 shadow-[0_0_50px_rgba(216,86,4,0.06)] rounded-2xl p-6 md:p-8 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_60px_rgba(216,86,4,0.12)]">
            
            {/* Corner Light Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">High-Speed Execution</span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-orange-300 text-xs font-semibold animate-pulse-glow">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  KreoSoftwares
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                {comparisons[activeTab].kreoTitle}
              </h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6">
                {comparisons[activeTab].kreoDesc}
              </p>
            </div>

            {/* Metric Panel */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-5 mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-orange-400/80 font-medium">Performance Delivery</span>
                <span className="text-xs font-bold text-white tracking-wide">{comparisons[activeTab].kreoMetric}</span>
              </div>
              <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-primary to-orange-400 h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${comparisons[activeTab].kreoVal}%` }}
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
