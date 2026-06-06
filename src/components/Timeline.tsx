import React from "react";

interface TimelineStep {
  icon: string;
  title: string;
  description: string;
}

export default function Timeline() {
  const steps: TimelineStep[] = [
    {
      icon: "search",
      title: "Analysis",
      description: "Deep dive requirements gathering and feasibility studies.",
    },
    {
      icon: "architecture",
      title: "Blueprint",
      description: "System architecture design and database schema mapping.",
    },
    {
      icon: "construction",
      title: "Build",
      description: "Agile development cycles with continuous integration.",
    },
    {
      icon: "rocket_launch",
      title: "Deploy",
      description: "Rigorous QA testing, staging, and production launch.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20">
        <div data-reveal="fade-up" className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">
            Our Methodology
          </span>
          <div className="section-divider mx-auto"></div>
          <h2 className="text-3xl font-black text-gray-900">Execution Pipeline</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-base leading-relaxed">
            A proven four-phase process that takes your idea from concept to production reliably.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                data-reveal="fade-up"
                data-reveal-delay={String(idx * 150)}
                className={`relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0 group`}
              >
                <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full bg-white border-2 border-gray-200 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300 flex items-center justify-center mb-0 md:mb-6 relative">
                  <span className="material-symbols-outlined text-2xl md:text-3xl text-gray-400 group-hover:text-primary transition-colors duration-300">
                    {step.icon}
                  </span>
                  {/* Step number on mobile inside/on the corner of the badge */}
                  <div className="md:hidden absolute -top-1 -right-1 w-5.5 h-5.5 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center border border-white">
                    {idx + 1}
                  </div>
                </div>
                
                {/* Step number on desktop */}
                <div className="hidden md:block absolute -top-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
