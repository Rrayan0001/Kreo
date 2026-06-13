"use client";

import React, { useState } from "react";

interface ServiceSection {
  title: string;
  list: string[];
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  delay: string;
  fullDesc: string;
  sections: ServiceSection[];
}

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceCard | null>(null);

  const services: ServiceCard[] = [
    {
      icon: "co_present",
      title: "Workshops & Training Programs",
      description:
        "Industry-oriented workshops designed to enhance technical, professional, and practical skills. Conconducted by experienced mentors and industry experts.",
      highlights: ["Emerging Tech", "Career Growth", "Innovation", "Syllabus Training"],
      delay: "delay-100",
      fullDesc:
        "Industry-oriented workshops designed to enhance technical, professional, and practical skills. Our sessions are conducted by experienced mentors and industry experts, covering emerging technologies, career development, innovation, entrepreneurship, and domain-specific learning.",
      sections: [
        {
          title: "Core Focus Areas",
          list: [
            "Emerging Technologies & Digital Skills",
            "Professional Career Development Modules",
            "Innovation, Creativity & Ideation",
            "Entrepreneurship & Startup Mentorship",
            "Domain-Specific Practical Workshops",
            "Corporate Training & Team Sprints",
          ],
        },
      ],
    },
    {
      icon: "explore",
      title: "Career Guidance & Mentorship",
      description:
        "Personalized career guidance programs that help students and professionals make informed decisions about education, paths, and industry readiness.",
      highlights: ["Education Pathways", "Internships", "Certifications", "Profile Building"],
      delay: "delay-200",
      fullDesc:
        "Personalized career guidance programs that help students and professionals make informed decisions about higher education, career opportunities, skill development, internships, certifications, and industry readiness.",
      sections: [
        {
          title: "Mentorship Offerings",
          list: [
            "Higher Education Path Planning",
            "Industry Opportunities & Alignment",
            "Targeted Skill Development Mapping",
            "Internship Placement & Connections",
            "CV, Resume, & LinkedIn Profile Optimization",
            "Mock Interviews & Technical Assessments",
          ],
        },
      ],
    },
    {
      icon: "code_blocks",
      title: "Hackathons & Innovation Challenges",
      description:
        "We organize and support hackathons, coding competitions, innovation challenges, and technical events that encourage problem-solving and teamwork.",
      highlights: ["Ideathons", "Coding Sprints", "Technical Challenges", "Team Building"],
      delay: "delay-300",
      fullDesc:
        "We organize and support hackathons, coding competitions, innovation challenges, ideathons, and technical events that encourage creativity, problem-solving, teamwork, and real-world application of knowledge.",
      sections: [
        {
          title: "Event Formats & Support",
          list: [
            "University & Corporate Ideathons",
            "Rapid Prototyping Coding Sprints",
            "Innovation Sprints & Problem Solving",
            "Technical Event Organizing & Consulting",
            "Cross-Functional Team Collaboration Setup",
            "Mentoring & Pitch Review Sessions",
          ],
        },
      ],
    },
    {
      icon: "architecture",
      title: "Software Solutions & Consultancy",
      description:
        "Delivering innovative, scalable, and business-focused software solutions tailored to organizational needs, from web apps to ERP systems.",
      highlights: ["Custom Web/Mobile", "DevOps/Cloud", "ERP & CRM", "Digital Audit"],
      delay: "delay-100",
      fullDesc:
        "Delivering innovative, scalable, and business-focused software solutions tailored to organizational needs. We collaborate with startups and enterprises to engineer next-generation platforms.",
      sections: [
        {
          title: "Software Offerings",
          list: [
            "Custom Software Development",
            "Web Application Development",
            "Mobile Application Development (iOS & Android)",
            "Enterprise Solutions & Microservices",
            "Cloud-Based Applications & DevOps Setup",
            "ERP & CRM Platform Integrations",
            "Digital Transformation Consulting",
            "IT Strategy & Technology Advisory",
            "Active Maintenance & Ongoing Technical Support",
          ],
        },
      ],
    },
    {
      icon: "precision_manufacturing",
      title: "Industrial Product Design",
      description:
        "Transforming ideas into market-ready products through innovative design, engineering, and development solutions from concept to commercialization.",
      highlights: ["3D CAD Modeling", "Prototype Validation", "FEA Analysis", "Commercialization"],
      delay: "delay-200",
      fullDesc:
        "Transforming ideas into market-ready products through innovative design, engineering, and development solutions. We collaborate with startups, enterprises, and manufacturing companies to design innovative products that meet market demands and business objectives.",
      sections: [
        {
          title: "Design & Validation Services",
          list: [
            "New Product Design & Development",
            "Prototype Design & Hardware Validation",
            "Industrial & Manufacturing Solutions",
            "Product Innovation Consulting",
            "Concept-to-Commercialization Support",
            "3D Modeling & Product Visualization",
            "Design Optimization & Engineering Analysis (FEA)",
            "Industry-Specific Hardware Development (IoT/CAD)",
          ],
        },
      ],
    },
    {
      icon: "school",
      title: "Academic Projects Support",
      description:
        "Comprehensive academic project development and guidance services for students across all levels, engineering domains, and business programs.",
      highlights: ["Diploma/UG/PG", "AI/ML & IoT", "ME/Civil/ECE/CS", "Document Support"],
      delay: "delay-300",
      fullDesc:
        "Comprehensive academic project development and guidance services for students across all educational levels, disciplines, and professional programs. From project ideation and documentation to development, implementation, testing, and final presentation support.",
      sections: [
        {
          title: "Project Levels Supported",
          list: [
            "Diploma Projects",
            "Undergraduate (UG) Projects",
            "Postgraduate (PG) Projects",
            "Final Year Capstone Projects",
            "Research-Based Projects",
            "Mini and Major College Projects",
            "Industry-Oriented Real-World Projects",
          ],
        },
        {
          title: "Domains & Programs Covered",
          list: [
            "Computer Science & IT (B.Sc, M.Sc, BCA, MCA, B.E, B.Tech)",
            "Artificial Intelligence & Machine Learning",
            "Data Science & Analytics",
            "Cybersecurity & Cryptography",
            "IoT & Embedded Systems (Arduino, Raspberry Pi, ESP32)",
            "Electronics & Communication Engineering (ECE)",
            "Electrical & Electronics Engineering (EEE)",
            "Mechanical Engineering (CAD/SolidWorks)",
            "Civil Engineering & Structural Design",
            "Commerce & Accounting (B.Com / M.Com / Finance)",
            "Management (BBA / MBA / Strategic Business)",
            "Healthcare & Interdisciplinary Projects",
            "Customized Industry-Oriented Project Support",
          ],
        },
      ],
    },
    {
      icon: "workspace_premium",
      title: "Certification Courses Offered",
      description:
        "Comprehensive syllabus-aligned certification programs spanning software engineering, business administration, commerce, and emerging tech.",
      highlights: ["Programming/AI", "Web/Mobile Dev", "MBA/BBA Programs", "HR & Marketing"],
      delay: "delay-100",
      fullDesc:
        "Get Certified with Us. Comprehensive curriculum-aligned certification programs designed to build core competencies and improve corporate placement readiness.",
      sections: [
        {
          title: "Certification Domains",
          list: [
            "Software Development & Programming (Python, Java, JS, C++)",
            "Artificial Intelligence & Machine Learning Certification",
            "Data Science & Advanced Analytics",
            "Cloud Computing (AWS / Azure / GCP DevOps)",
            "Cybersecurity & Threat Mitigation",
            "Internet of Things (IoT) Technologies",
            "Web & Mobile Application Development",
            "UI/UX Design & Frontend Prototyping",
            "Digital Marketing & Growth Hacking",
            "Industrial Technologies & Smart Labs",
            "Business Administration (BBA) Core Competencies",
            "Master of Business Administration (MBA) Strategic Training",
            "Commerce & Digital Accounting (B.Com. / M.Com.)",
            "Finance & Investment Portfolio Management",
            "Human Resource Management Systems",
            "Marketing & Business Analytics",
            "Entrepreneurship & Business Development Sprints",
            "Professional & Employability soft-skills Modules",
            "Emerging Technologies (Web3, Blockchain, Edge Computing)",
            "Customized Corporate Training & Placement Prep Programs",
          ],
        },
      ],
    },
  ];

  const handleLearnMore = (service: ServiceCard) => {
    setActiveService(service);
  };

  const handleModalCTA = () => {
    setActiveService(null);
    window.open("https://calendly.com/kreo-pvt-ltd/30min", "_blank");
  };

  return (
    <>
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
            className="text-primary hover:text-primary-hover font-bold flex items-center gap-2 group shrink-0 select-none"
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
              data-reveal-delay={String((index % 3) * 100)}
              onClick={() => handleLearnMore(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleLearnMore(service);
                }
              }}
              className="card-hover relative bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-4 group cursor-pointer transition-all active:scale-[0.99]"
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 tech-bg-pattern pointer-events-none rounded-xl opacity-5"></div>

              {/* Top: icon + title */}
              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-12 h-12 border border-primary/20 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{service.description}</p>

                {/* Highlights chips */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {service.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-bold uppercase tracking-wide bg-gray-50 border border-gray-200 text-gray-500 group-hover:border-primary/30 group-hover:text-primary/70 group-hover:bg-primary/5 px-2.5 py-0.5 rounded-full transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom: hover arrow */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleLearnMore(service);
                }}
                className="relative z-10 mt-auto pt-5 border-t border-dashed border-gray-200 flex items-center justify-between w-full cursor-pointer"
              >
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider group-hover:text-primary transition-colors">Learn more</span>
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

      {/* Detailed Service Modal Overlay */}
      {activeService && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          style={{
            animation: "fadeIn 0.25s ease-out forwards",
          }}
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border border-gray-100 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-6 overflow-y-auto max-h-[85vh] fade-in"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "cookieModalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors p-1"
              aria-label="Close details"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Header section inside modal */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
              <div className="w-14 h-14 shrink-0 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-3xl">{activeService.icon}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-2xl leading-tight">
                  {activeService.title}
                </h3>
                <span className="text-xs text-primary font-bold uppercase tracking-widest mt-1 block">
                  Kreo Service Specification
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              {activeService.fullDesc}
            </p>

            {/* Structured Details Sections */}
            <div className="space-y-6 flex-grow">
              {activeService.sections.map((section, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200/60 rounded-xl p-5">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">circle_notifications</span>
                    {section.title}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 leading-relaxed">
                        <span className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5 select-none">check_circle</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-end pt-4 border-t border-gray-100 items-center gap-3">
              <button
                onClick={() => setActiveService(null)}
                className="px-5 py-2.5 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all cursor-pointer"
              >
                Back to Grid
              </button>
              <button
                onClick={handleModalCTA}
                className="px-5 py-2.5 text-xs font-bold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-lg shadow-primary/25 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm">calendar_month</span>
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
