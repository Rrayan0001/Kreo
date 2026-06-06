import React from "react";

interface FlowStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

export default function BusinessFlow() {
  const steps: FlowStep[] = [
    {
      step: "01",
      icon: "public",
      title: "Website",
      description: "High-conversion landing pages capture traffic.",
    },
    {
      step: "02",
      icon: "hub",
      title: "CRM Integration",
      description: "Leads are instantly routed and qualified.",
    },
    {
      step: "03",
      icon: "settings_suggest",
      title: "Automation",
      description: "Follow-ups, scheduling, and nurturing happen 24/7.",
    },
    {
      step: "04",
      icon: "monitoring",
      title: "Analytics",
      description: "Real-time data for instant optimization.",
    },
  ];

  return (
    <section id="business" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle orange glow top-right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center fade-in-up">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Want Our Full Service?<br />
            <span className="text-primary">Introducing BusinessFlow OS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-base">
            Our proprietary operating system that connects every aspect of your digital presence
            into a unified, intelligent machine.
          </p>
        </div>

        {/* Desktop Flow */}
        <div className="relative mt-12 hidden md:block">
          {/* Connecting line */}
          <div className="absolute top-[40px] left-0 w-full h-0.5 bg-gray-100 z-0"></div>
          <div className="absolute top-[40px] left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 z-0 opacity-50"></div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className={`flex flex-col items-center fade-in-up delay-${(idx + 1) * 100}`}>
                <div className="w-20 h-20 bg-white border-2 border-primary/30 rounded-full flex items-center justify-center shadow-md mb-6 relative group hover:border-primary hover:shadow-primary/20 hover:shadow-xl transition-all duration-300">
                  <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
                  <div className="absolute -bottom-3 bg-primary text-white text-[10px] font-black px-2.5 py-0.5 rounded-full tracking-widest">
                    {item.step}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mt-2">{item.title}</h4>
                <p className="text-center text-sm text-gray-600 mt-2 px-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile list */}
        <div className="flex flex-col gap-5 md:hidden">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl bg-gray-50 shadow-sm"
            >
              <div className="shrink-0 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-black text-sm">
                {item.step}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
