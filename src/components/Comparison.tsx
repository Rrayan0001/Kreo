"use client";

import React, { useState } from "react";

interface FeatureCompare {
  title: string;
  icon: string;
  legacyMetric: string;
  legacyDesc: string;
  kreoMetric: string;
  kreoDesc: string;
}

export default function Comparison() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const comparisons: FeatureCompare[] = [
    {
      title: "Speed to Market",
      icon: "speed",
      legacyMetric: "Est. 12+ Weeks",
      legacyDesc: "Scattered freelancer schedules & endless redesign loops.",
      kreoMetric: "3 to 5 Days Launch",
      kreoDesc: "Agile blueprint engine deploys production code in days.",
    },
    {
      title: "Architecture & Integration",
      icon: "integration_instructions",
      legacyMetric: "Fragmented Subscriptions",
      legacyDesc: "Disjointed tools, custom hacks, and high maintenance costs.",
      kreoMetric: "Unified OS Ecosystem",
      kreoDesc: "All tools, databases, and serverless logic in one dashboard.",
    },
    {
      title: "Support Model",
      icon: "support_agent",
      legacyMetric: "Unpredictable Hourly Billing",
      legacyDesc: "Paying for every small tweak; developers ghosting mid-project.",
      kreoMetric: "Dedicated Partner Model",
      kreoDesc: "Direct Slack channel, continuous monitoring, and proactive updates.",
    },
    {
      title: "AI & Automation",
      icon: "psychology",
      legacyMetric: "Basic Chat API Wrappers",
      legacyDesc: "Simple prompts without context retrieval, RAG, or tuning.",
      kreoMetric: "Enterprise Agentic Workflows",
      kreoDesc: "Custom fine-tuned LLM agents trained on operational data.",
    },
  ];

  return (
    <section id="insight" className="relative bg-[#09090b] py-8 md:py-12 lg:py-16 overflow-hidden border-t border-zinc-900">
      {/* Dynamic background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col justify-center h-full">
        
        {/* Compact Header */}
        <div className="mb-6 md:mb-8 text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2 block">Quick Comparison</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Traditional vs. <span className="text-primary">Kreo OS</span>
          </h2>
        </div>

        {/* Dynamic Static Selector Grid (Compact padding, no vertical scroll) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6 max-w-4xl mx-auto w-full">
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
        <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-md max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60 gap-6 md:gap-0">
            
            {/* Left Column: Legacy Route */}
            <div className="md:pr-8 pb-6 md:pb-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Legacy Option</span>
                <span className="flex items-center gap-1 text-[11px] text-zinc-500 font-semibold bg-zinc-800/40 border border-zinc-700/40 px-2.5 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[13px]">close</span>
                  Freelance/Agencies
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-300 mb-2">
                {comparisons[activeTab].legacyMetric}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {comparisons[activeTab].legacyDesc}
              </p>
            </div>

            {/* Right Column: Kreo OS Route (Clean visual hierarchy) */}
            <div className="md:pl-8 pt-6 md:pt-0">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Kreo Execution</span>
                <span className="flex items-center gap-1 text-[11px] text-primary font-semibold bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[13px]">check</span>
                  KreoSoftwares
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {comparisons[activeTab].kreoMetric}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {comparisons[activeTab].kreoDesc}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
