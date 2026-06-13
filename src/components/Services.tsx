import React from "react";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  delay: string;
}

export default function Services() {
  const services: ServiceCard[] = [
    {
      icon: "co_present",
      title: "Workshops & Training Programs",
      description:
        "Industry-oriented workshops designed to enhance technical, professional, and practical skills, conducted by experienced mentors and industry experts.",
      highlights: ["Emerging Technologies", "Career Development", "Entrepreneurship", "Domain-Specific Learning"],
      delay: "delay-100",
    },
    {
      icon: "explore",
      title: "Career Guidance & Mentorship",
      description:
        "Personalized career guidance that helps students and professionals make informed decisions about higher education, internships, certifications, and industry readiness.",
      highlights: ["Higher Education Pathways", "Internship Connect", "Industry Readiness", "Skill Mapping"],
      delay: "delay-200",
    },
    {
      icon: "code_blocks",
      title: "Hackathons & Innovation Challenges",
      description:
        "We organize and support hackathons, coding competitions, innovation challenges, ideathons, and technical events that encourage creativity and teamwork.",
      highlights: ["Coding Competitions", "Ideathons", "Innovation Sprints", "Team Collaboration"],
      delay: "delay-300",
    },
    {
      icon: "workspace_premium",
      title: "Certification Courses",
      description:
        "Get certified with us. Comprehensive syllabus-aligned certification programs spanning software, AI/ML, cloud, IoT, design, business, and emerging technologies.",
      highlights: ["Software Development", "AI & Machine Learning", "Cloud Computing", "UI/UX Design", "Digital Marketing"],
      delay: "delay-100",
    },
    {
      icon: "architecture",
      title: "Software Solutions & Consultancy",
      description:
        "Delivering innovative, scalable, and business-focused software solutions tailored to organizational needs, from web and mobile apps to ERP/CRM and cloud systems.",
      highlights: ["Custom Software", "Web & Mobile Apps", "Cloud Applications", "ERP & CRM", "IT Strategy"],
      delay: "delay-200",
    },
    {
      icon: "precision_manufacturing",
      title: "Industrial Product Design",
      description:
        "Transforming ideas into market-ready products through innovative design, engineering, and development solutions — from concept to commercialization.",
      highlights: ["New Product Development", "Prototype Validation", "3D Modeling", "Manufacturing Solutions", "Design Optimization"],
      delay: "delay-300",
    },
    {
      icon: "school",
      title: "Academic Projects",
      description:
        "End-to-end academic project development for Diploma, UG, PG, and final year students across all engineering, science, commerce, and management disciplines.",
      highlights: ["Final Year Projects", "Research Projects", "B.E / B.Tech / M.Tech", "AI & IoT Domains", "BBA / MBA / B.Com"],
      delay: "delay-100",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-5 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <div data-reveal="fade-up" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
        <div>
          <div className="section-divider"></div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            From software consultancy and industrial design to academic mentoring and certified courses —
            we deliver end-to-end solutions across technology, education, and professional development.
          </p>
        </div>
        <a
          href="#contact-form"
          className="text-primary hover:text-primary-hover font-bold flex items-center gap-2 group shrink-0"
        >
          Start a Project
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
            data-reveal={index % 2 === 0 ? "slide-left" : "slide-right"}
            data-reveal-delay={String(index * 100)}
            className={`card-hover relative bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-4 group cursor-default`}
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

              {/* Highlights chips */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {service.highlights.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold uppercase tracking-wide bg-gray-50 border border-gray-200 text-gray-500 group-hover:border-primary/30 group-hover:text-primary/70 group-hover:bg-primary/5 px-2 py-0.5 rounded-full transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
