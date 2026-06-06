import React from "react";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

export default function Services() {
  const services: ServiceCard[] = [
    {
      icon: "architecture",
      title: "Business Websites",
      description:
        "Custom frontend/backend solutions built for scale. Utilizing React, Next.js, and robust API layers.",
      delay: "delay-100",
    },
    {
      icon: "table_chart",
      title: "Administrative Systems",
      description:
        "Robust dashboards and internal tooling systems designed to streamline operations and data management.",
      delay: "delay-200",
    },
    {
      icon: "school",
      title: "Internship & Academic Projects",
      description:
        "Career-oriented internship and academic projects with practical exposure, guided development, and end-to-end support.",
      delay: "delay-300",
    },
    {
      icon: "memory",
      title: "AI & Machine Learning",
      description:
        "Predictive models and intelligent automation. Integrating LLMs and custom datasets for smarter workflows.",
      delay: "delay-100",
    },
    {
      icon: "campaign",
      title: "Social Media Marketing",
      description:
        "Data-driven social media marketing and brand growth. Campaign optimization and audience engagement systems.",
      delay: "delay-200",
    },
    {
      icon: "devices",
      title: "Hardware & IoT Projects",
      description:
        "Smart hardware solutions and IoT system development. Device automation and real-time data monitoring platforms.",
      delay: "delay-300",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-5 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6 fade-in-up">
        <div>
          <div className="section-divider"></div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Solution Blueprints
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Detailed technical specifications for our core service categories. Each solution is
            architected for scalability and performance.
          </p>
        </div>
        <a
          href="#services"
          className="text-primary hover:text-primary-hover font-bold flex items-center gap-2 group shrink-0"
        >
          View Full Specs
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_right_alt
          </span>
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`card-hover relative bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-4 fade-in-up ${service.delay} group cursor-default`}
          >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 tech-bg-pattern pointer-events-none rounded-xl"></div>

            {/* Top: icon + title */}
            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-12 h-12 border border-primary/20 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>

            {/* Bottom: hover arrow */}
            <div className="relative z-10 mt-auto pt-5 border-t border-dashed border-gray-200 flex items-center justify-between">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Learn more</span>
              <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>

            {/* Hover left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
