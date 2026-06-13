"use client";

import React, { useState, useEffect } from "react";

interface FlowStep {
  step: string;
  icon: string;
  status: string;
  statusColor: string;
  title: string;
  tagline: string;
  description: string;
}

export default function BusinessFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Auto-rotate steps every 4 seconds unless hovered/selected by user
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const steps: FlowStep[] = [
    {
      step: "01",
      icon: "public",
      status: "SYSTEM ACTIVE",
      statusColor: "text-emerald-500 bg-emerald-50 border-emerald-200",
      title: "Core Web Engine",
      tagline: "High-Performance Conversions",
      description: "Blazing-fast loading pages tailored for high conversion rates. Fully optimized for search engine rankings, accessibility, and fluid user interactions.",
    },
    {
      step: "02",
      icon: "hub",
      status: "SYNC PIPELINE RUNNING",
      statusColor: "text-blue-500 bg-blue-50 border-blue-200",
      title: "Real-time CRM Sync",
      tagline: "Instant Lead Routing",
      description: "Leads captured are routed within milliseconds directly to your database or sales pipelines, triggering instant validation and notification workflows.",
    },
    {
      step: "03",
      icon: "settings_suggest",
      status: "DAEMON IDLE - LISTENING",
      statusColor: "text-orange-500 bg-orange-50 border-orange-200",
      title: "Automated Triggers",
      tagline: "24/7 Action & Nurturing",
      description: "Event-driven sequences that send personalized emails, schedule calendar hooks, and nurture prospects automatically without manual intervention.",
    },
    {
      step: "04",
      icon: "monitoring",
      status: "COMPUTING REALTIME",
      statusColor: "text-purple-500 bg-purple-50 border-purple-200",
      title: "Predictive Analytics",
      tagline: "Live Insights Dashboard",
      description: "Consolidated user behaviors, page performance tracking, and conversion drop-offs visualized live to back up product choices with concrete data.",
    },
  ];

  // Render the dynamic simulator screen based on active step
  const renderSimulator = () => {
    switch (activeStep) {
      case 0:
        return (
          <div className="flex flex-col h-full justify-between p-3 sm:p-5 text-zinc-800">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-mono font-bold text-gray-400">browser_preview.exe</span>
              <div className="flex gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              </div>
            </div>
            {/* Visual website mockup */}
            <div className="flex-1 flex flex-col justify-center items-center py-4 sm:py-6">
              <div className="w-full max-w-[220px] sm:max-w-[280px] bg-white rounded-xl border border-gray-200 shadow-lg p-3 sm:p-4 relative overflow-hidden">
                <div className="h-2.5 sm:h-3 w-12 sm:w-16 bg-gray-200 rounded mb-3 sm:mb-4"></div>
                <div className="h-5 sm:h-6 w-full bg-gradient-to-r from-primary to-orange-400 rounded mb-2"></div>
                <div className="h-2.5 sm:h-3 w-20 sm:w-28 bg-gray-100 rounded mb-3 sm:mb-4"></div>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  <div className="h-6 sm:h-8 bg-orange-50 rounded border border-orange-100"></div>
                  <div className="h-6 sm:h-8 bg-orange-50 rounded border border-orange-100"></div>
                  <div className="h-6 sm:h-8 bg-orange-50 rounded border border-orange-100"></div>
                </div>
                <div className="w-full h-8 sm:h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                  <span className="w-10 sm:w-12 h-2 sm:h-2.5 bg-primary/60 rounded"></span>
                </div>
              </div>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 sm:p-3 text-center">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-600">⚡ Performance Score: 100/100 Mobile</span>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col h-full justify-between p-3 sm:p-5 text-zinc-800">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-mono font-bold text-gray-400">crm_payload_sync.json</span>
              <span className="text-[10px] font-bold text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">Web Hook</span>
            </div>
            {/* Dynamic database connection flow */}
            <div className="flex-1 flex flex-col justify-center items-center py-4">
              <div className="w-full space-y-2 sm:space-y-3 font-mono text-[10px] sm:text-[11px] text-gray-600 bg-gray-50 rounded-xl p-2.5 sm:p-4 border border-gray-100 shadow-inner overflow-x-auto">
                <p className="text-blue-500">{"{"}</p>
                <p className="pl-4"><span className="text-purple-500">"event"</span>: "lead_captured",</p>
                <p className="pl-4"><span className="text-purple-500">"source"</span>: "Kreo OS Engine",</p>
                <p className="pl-4"><span className="text-purple-500">"data"</span>: {"{"}</p>
                <p className="pl-8"><span className="text-purple-500">"name"</span>: "Rrayan",</p>
                <p className="pl-8"><span className="text-purple-500">"status"</span>: <span className="text-emerald-600">"auto_qualified"</span></p>
                <p className="pl-4">{"}"},</p>
                <p className="pl-4 text-gray-400">// synced to CRM pipeline (0.12s)</p>
                <p className="text-blue-500">{"}"}</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5 sm:p-3 text-center">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-blue-600">✓ Salesforce & HubSpot synced</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col h-full justify-between p-3 sm:p-5 text-zinc-800">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-mono font-bold text-gray-400">automation_node_tree.flow</span>
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
            </div>
            {/* Nodes and steps map */}
            <div className="flex-1 flex items-center justify-center py-4 sm:py-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg sm:text-xl animate-pulse">mail</span>
                </div>
                <div className="w-5 sm:w-8 h-0.5 bg-gradient-to-r from-primary/80 to-gray-300 relative shrink-0">
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary animate-ping"></div>
                </div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-gray-400 text-lg sm:text-xl">event_available</span>
                </div>
                <div className="w-5 sm:w-8 h-0.5 bg-gray-200 shrink-0"></div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-gray-400 text-lg sm:text-xl">sms</span>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-2.5 sm:p-3 text-center">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-orange-600">⚙ 3 triggers executed today</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col h-full justify-between p-3 sm:p-5 text-zinc-800">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-mono font-bold text-gray-400">analytics_report.log</span>
              <span className="text-[10px] font-bold text-purple-600 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full">Real-time</span>
            </div>
            {/* Analytics charts mockup */}
            <div className="flex-1 flex flex-col justify-center py-4">
              <div className="flex items-end justify-between px-2 sm:px-4 h-20 sm:h-24 gap-2 sm:gap-3">
                <div className="w-full bg-purple-100 rounded-t-lg h-[40%]"></div>
                <div className="w-full bg-purple-200 rounded-t-lg h-[60%]"></div>
                <div className="w-full bg-purple-300 rounded-t-lg h-[80%]"></div>
                <div className="w-full bg-gradient-to-t from-primary to-orange-400 rounded-t-lg h-[100%]"></div>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-100 rounded-lg p-2.5 sm:p-3 text-center">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-purple-600">📈 Conversion Rate: +38.4%</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="business" className="bg-[#FAF9F6] py-20 md:py-28 relative overflow-clip border-t border-gray-100">
      {/* Background blueprint elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-12 lg:px-8 z-10">
        
        {/* Header */}
        <div data-reveal="fade-up" className="mb-16 text-center max-w-3xl mx-auto">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Want Our Full Service?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Introducing BusinessFlow OS</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
            Our proprietary operating system that connects every aspect of your digital presence into a unified, intelligent machine.
          </p>
        </div>

        {/* Console Grid */}
        <div data-reveal="fade-up" data-reveal-delay="150" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Block: Flow Controllers (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-white border-primary shadow-[0_12px_30px_rgba(216,86,4,0.08)] scale-[1.01]"
                    : "bg-white/50 border-gray-200 hover:bg-white hover:border-gray-300"
                }`}
              >
                {/* Step badge */}
                <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-sm sm:text-base transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                }`}>
                  {item.step}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">{item.title}</h3>
                    {/* Status Badge */}
                    <span className={`text-[9px] font-bold border px-2 py-0.5 rounded-full uppercase tracking-wider transition-all duration-300 ${
                      activeStep === idx ? item.statusColor : "text-gray-400 bg-gray-50 border-gray-200"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-[10px] sm:text-xs font-semibold text-primary/80 mb-2">{item.tagline}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  
                  {/* Embedded Inline Simulator View for Mobile viewports */}
                  <div className={`mt-4 border border-gray-100 rounded-xl bg-white/80 overflow-hidden shadow-inner lg:hidden transition-all duration-500 ${
                    activeStep === idx ? "max-h-[300px] opacity-100 p-1.5 sm:p-2" : "max-h-0 opacity-0 overflow-hidden"
                  }`}>
                    {activeStep === idx && renderSimulator()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Block: Live Dashboard Console (5 Cols - Hidden on Mobile) */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden aspect-[4/5] flex flex-col justify-between p-1">
              
              {/* Outer tech styling */}
              <div className="absolute top-2 left-2 w-3 h-3 bg-gray-200 rounded-full"></div>
              <div className="absolute top-2 right-2 w-3 h-3 bg-gray-200 rounded-full"></div>
              
              {/* Terminal Screen Container */}
              <div className="flex-1 bg-white/70 backdrop-blur-md rounded-xl overflow-hidden">
                {renderSimulator()}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
