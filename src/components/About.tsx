"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

interface Achievement {
  number: string;
  label: string;
  desc: string;
}

export default function About() {
  const [activeTab, setActiveTab] = useState<"company" | "vision" | "values">("company");

  const values: ValueCard[] = [
    {
      icon: "menu_book",
      title: "Knowledge",
      description: "Promoting continuous learning, skill development, and excellence across every program and engagement we deliver.",
    },
    {
      icon: "handshake",
      title: "Recruitment",
      description: "Connecting talent with opportunities and fostering professional growth through strategic industry partnerships.",
    },
    {
      icon: "groups",
      title: "Empowerment",
      description: "Enabling individuals and organizations to achieve their full potential through guided training, mentorship, and support.",
    },
    {
      icon: "tune",
      title: "Optimization",
      description: "Delivering efficient, innovative, and result-oriented solutions that maximize value for every stakeholder.",
    },
    {
      icon: "verified_user",
      title: "Integrity",
      description: "Upholding honesty, transparency, and accountability in all our endeavors — from client projects to academic programs.",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Janhavi Akalwadi",
      role: "Technical Lead",
      image: "/TechnicalLeadJanhaviAkalwadi.jpeg",
      bio: "Architecting scale solutions, guiding full-stack development runs, and managing tech pipelines.",
    },
    {
      name: "Mayur Akalwadi",
      role: "Business Development Manager",
      image: "/BusinessDevelopmentManagerMayurAkalwadi.jpeg",
      bio: "Driving strategic partnerships and operations, connecting custom software requirements with execution plans.",
    },
    {
      name: "Guruprasad Vankalakunti",
      role: "Marketing Manager",
      image: "/MarketingManagerGuruprasadVankalakunti.jpeg",
      bio: "Leading growth plans, digital communications, and customer relations across regional clusters.",
    },
    {
      name: "Bindu Gowda",
      role: "Software Developer",
      image: "/SoftwareDeveloperBinduGowda.jpeg",
      bio: "Developing responsive frontends, solid APIs, and maintaining robust system integrations.",
    },
  ];

  const achievements: Achievement[] = [
    { number: "150+", label: "Projects Completed", desc: "Production-ready websites, apps, and administrative platforms." },
    { number: "2500+", label: "Students Mentored", desc: "Equipped with hands-on development skills & career paths." },
    { number: "5+", label: "Regional Locations", desc: "Serving Dharwad, Sankeshwar, Bagalkot, Kolhapur, and Davangere." },
    { number: "100%", label: "Client Satisfaction", desc: "Delivered with precision, high-speed execution, and full support." },
  ];

  const clients = [
    { name: "Chandan", url: "https://schoolchandan.edu.in" },
    { name: "Arcon", url: "https://arconespl.com" },
    { name: "SKPSH", url: "https://skpsh.in" },
    { name: "IgnitePrime", url: "https://ignitesportsfitness.in" },
    { name: "PlanNetM", url: null },
    { name: "KLE", url: null },
  ];

  return (
    <section id="about" className="pt-10 pb-16 md:pt-12 md:pb-20 bg-[#faf9f6] border-t border-gray-100 relative overflow-clip">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-24 right-10 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* ========================================== */}
        {/* KNOW US / CORE VALUE TABS                  */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          {/* Left Column: Heading & Tab Selection */}
          <div data-reveal="slide-left" className="lg:col-span-5">
            <div className="section-divider"></div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">About Kreo</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Innovation. Technology. Education. Growth.
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Founded in 2024, KREO is a multidisciplinary company dedicated to empowering individuals,
              institutions, and businesses through innovation, technology, and professional development.
              We deliver solutions across software development, industrial design, training, workshops,
              consultancy, and career guidance.
            </p>

            {/* Selector tabs */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveTab("company")}
                className={`flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                  activeTab === "company"
                    ? "bg-white border-primary/50 text-gray-900 shadow-md shadow-primary/5 scale-[1.01]"
                    : "bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900"
                }`}
              >
                <span className={`material-symbols-outlined text-[22px] ${activeTab === "company" ? "text-primary" : "text-gray-400"}`}>
                  domain
                </span>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Know Us</h4>
                  <span className="text-xs text-gray-400">Our history, identity, and commitment</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("vision")}
                className={`flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                  activeTab === "vision"
                    ? "bg-white border-primary/50 text-gray-900 shadow-md shadow-primary/5 scale-[1.01]"
                    : "bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900"
                }`}
              >
                <span className={`material-symbols-outlined text-[22px] ${activeTab === "vision" ? "text-primary" : "text-gray-400"}`}>
                  rocket_launch
                </span>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Vision & Mission</h4>
                  <span className="text-xs text-gray-400">What drives our forward progress</span>
                </div>
              </button>

              <button
                onClick={() => setActiveTab("values")}
                className={`flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 ${
                  activeTab === "values"
                    ? "bg-white border-primary/50 text-gray-900 shadow-md shadow-primary/5 scale-[1.01]"
                    : "bg-white/50 border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900"
                }`}
              >
                <span className={`material-symbols-outlined text-[22px] ${activeTab === "values" ? "text-primary" : "text-gray-400"}`}>
                  verified
                </span>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Core Values</h4>
                  <span className="text-xs text-gray-400">The parameters that guide our standards</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Tab Content Display */}
          <div data-reveal="slide-right" className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative min-h-[320px] flex flex-col justify-between">
            {/* blueprint background grid */}
            <div className="absolute inset-0 tech-bg-pattern pointer-events-none rounded-2xl opacity-10"></div>
            
            <div className="relative z-10 flex-grow flex flex-col justify-center">
              {activeTab === "company" && (
                <div className="fade-in">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase block mb-2">Founded 2024</span>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Who We Are</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    KREO is a dynamic company dedicated to empowering individuals, institutions, and businesses
                    through innovation, technology, education, and professional development.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base mt-4">
                    At KREO, we believe in creating value through knowledge, technology, and strategic partnerships.
                    Our commitment is to bridge the gap between ideas and execution, helping our clients, students,
                    and partners achieve sustainable growth and success.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Software Development","Industrial Design","Training Programs","Consultancy","Certifications"].map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-primary/5 border border-primary/20 text-primary px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="fade-in space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-primary text-xl">visibility</span>
                      <h3 className="text-lg font-bold text-gray-900">Our Vision</h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      To become a trusted and versatile company that drives innovation, learning, and growth across
                      industries by delivering excellence in technology, education, and professional services.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="material-symbols-outlined text-primary text-xl">track_changes</span>
                      <h3 className="text-lg font-bold text-gray-900">Our Mission</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Provide innovative and practical solutions that address real-world challenges.",
                        "Empower students, professionals, businesses, and institutions through quality services and skill development.",
                        "Foster creativity, collaboration, and continuous learning.",
                        "Deliver reliable and impactful solutions that contribute to sustainable growth and success.",
                      ].map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">check_circle</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="fade-in">
                  <span className="text-xs font-bold text-primary tracking-wider uppercase block mb-1">The KREO Acronym</span>
                  <p className="text-xs text-gray-400 mb-4">Each letter of our name reflects a core operating value.</p>
                  <div className="flex flex-col gap-3">
                    {values.map((val, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/50 flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-primary text-[16px]">{val.icon}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-900 mb-0.5">
                            <span className="text-primary">{val.title[0]}</span>{val.title.slice(1)}
                          </h4>
                          <p className="text-xs text-gray-550 leading-relaxed">{val.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tab Footer Accent */}
            <div className="relative z-10 mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
              <span>KREO GROUP ECOLOGY</span>
              <span className="font-mono">BUILD_REV_2026.06</span>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* ACHIEVEMENTS                               */}
        {/* ========================================== */}
        <div data-reveal="fade-up" className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {achievements.map((ach, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:border-primary/30 transition-all duration-300 group">
              <span className="text-4xl md:text-5xl font-black text-primary mb-2 block tracking-tight group-hover:scale-105 transition-transform duration-300 font-serif">
                {ach.number}
              </span>
              <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1.5">{ach.label}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{ach.desc}</p>
            </div>
          ))}
        </div>

        {/* ========================================== */}
        {/* HAPPY CLIENTS                              */}
        {/* ========================================== */}
        <div data-reveal="fade-up" className="mb-24">
          <div className="text-center mb-8">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">Our Network</span>
            <h3 className="text-xl font-bold text-gray-900">Happy Clients & Educational Partners</h3>
          </div>
          
          {/* Client Logo Track */}
          <div className="relative overflow-clip w-full py-4 border-y border-dashed border-gray-200">
            <div className="flex justify-around items-center flex-wrap gap-8 md:gap-12">
              {clients.map((client, idx) =>
                client.url ? (
                  <a
                    key={idx}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white border border-gray-200 shadow-sm rounded-xl text-gray-800 font-black text-sm md:text-base tracking-widest select-none cursor-pointer hover:border-primary/40 hover:text-primary transition-all duration-300 hover:shadow-md hover:scale-105"
                  >
                    {client.name.toUpperCase()}
                  </a>
                ) : (
                  <div
                    key={idx}
                    className="px-6 py-3 bg-white border border-gray-200 shadow-sm rounded-xl text-gray-800 font-black text-sm md:text-base tracking-widest select-none cursor-default transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md hover:scale-105"
                  >
                    {client.name.toUpperCase()}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* TEAM SECTION                               */}
        {/* ========================================== */}
        <div className="mb-24" id="team">
          <div data-reveal="fade-up" className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Expert Squad</span>
            <div className="section-divider mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Meet The Core Team</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Our specialists combine business acumen, branding agility, systems architecture, and code execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                data-reveal="fade-up"
                data-reveal-delay={String(idx * 100)}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Absolute Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-base leading-tight drop-shadow-sm">{member.name}</h4>
                    <span className="text-xs text-orange-300 font-semibold tracking-wide">{member.role}</span>
                  </div>
                </div>
                
                {/* Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-gray-600 leading-relaxed flex-grow">{member.bio}</p>
                  
                  {/* Social indicators */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3 text-gray-400">
                    <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-primary transition-colors">
                      alternate_email
                    </span>
                    <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-primary transition-colors">
                      share
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* GALLERY SECTION                            */}
        {/* ========================================== */}
        <div id="gallery">
          <div data-reveal="fade-up" className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Visual Log</span>
            <div className="section-divider mx-auto"></div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Work & Workspace Gallery</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Take a look at our laboratory configurations, development pipelines, and collaborative learning workspaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Gallery Card 1: Software Lab */}
            <div data-reveal="zoom-up" className="relative h-64 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between overflow-hidden group select-none">
              {/* background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none"></div>
              {/* floating glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-300"></div>

              {/* Icon & Title */}
              <div className="relative z-10">
                <div className="w-10 h-10 border border-primary/20 rounded-lg bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[22px]">developer_board</span>
                </div>
                <h4 className="font-bold text-white text-base">Development Labs</h4>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">Where full-stack pipelines and client builds are optimized.</p>
              </div>

              {/* Wireframe overlay */}
              <div className="relative z-10 mt-auto flex items-end justify-between">
                <span className="text-[10px] font-mono text-zinc-600">WORKSPACE // LAB_01</span>
                <span className="material-symbols-outlined text-primary text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Gallery Card 2: IoT & Prototyping */}
            <div data-reveal="zoom-up" data-reveal-delay="100" className="relative h-64 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between overflow-hidden group select-none">
              {/* background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-yellow/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-accent-yellow/20 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="w-10 h-10 border border-accent-yellow/20 rounded-lg bg-accent-yellow/5 flex items-center justify-center text-accent-yellow mb-4">
                  <span className="material-symbols-outlined text-[22px]">memory</span>
                </div>
                <h4 className="font-bold text-white text-base">IoT & Hardware Desk</h4>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">Sensor nodes integration, CAD planning, and microchips testing.</p>
              </div>

              <div className="relative z-10 mt-auto flex items-end justify-between">
                <span className="text-[10px] font-mono text-zinc-600">HARDWARE // DEPT_02</span>
                <span className="material-symbols-outlined text-accent-yellow text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Gallery Card 3: Hackathon Center */}
            <div data-reveal="zoom-up" data-reveal-delay="200" className="relative h-64 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between overflow-hidden group select-none">
              {/* background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="w-10 h-10 border border-emerald-500/20 rounded-lg bg-emerald-500/5 flex items-center justify-center text-emerald-400 mb-4">
                  <span className="material-symbols-outlined text-[22px]">sports_esports</span>
                </div>
                <h4 className="font-bold text-white text-base">Collaboration Zone</h4>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">Sprints mapping, developer syncs, and hackathon challenges.</p>
              </div>

              <div className="relative z-10 mt-auto flex items-end justify-between">
                <span className="text-[10px] font-mono text-zinc-600">COLLAB // SYNC_03</span>
                <span className="material-symbols-outlined text-emerald-400 text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Gallery Card 4: Learning Seminars */}
            <div data-reveal="zoom-up" data-reveal-delay="300" className="relative h-64 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between overflow-hidden group select-none">
              {/* background grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="w-10 h-10 border border-purple-500/20 rounded-lg bg-purple-50/5 flex items-center justify-center text-purple-400 mb-4">
                  <span className="material-symbols-outlined text-[22px]">school</span>
                </div>
                <h4 className="font-bold text-white text-base">Classrooms & Seminars</h4>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">Practical training spaces, certification lectures, and guidance modules.</p>
              </div>

              <div className="relative z-10 mt-auto flex items-end justify-between">
                <span className="text-[10px] font-mono text-zinc-600">LECTURE // HALL_04</span>
                <span className="material-symbols-outlined text-purple-400 text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
