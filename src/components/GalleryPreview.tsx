"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const previewImages = [
  { id: 1, src: "/gallery/gallery-1.jpeg", alt: "Collaborative Coding Workspace" },
  { id: 2, src: "/gallery/gallery-2.jpeg", alt: "KREO Presentation & Seminar" },
  { id: 3, src: "/gallery/gallery-3.jpeg", alt: "Ultrasonic Radar IoT System" },
  { id: 4, src: "/gallery/gallery-4.jpeg", alt: "Guest Lecture by Founder Janhavi Akalwadi" },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-16" data-reveal="fade-up">
          <span className="text-sm font-bold text-primary uppercase tracking-widest mb-3 block">
            Inside Kreo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Our Workspace Gallery
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Take a sneak peek into our creative environment, events, and the culture that drives innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {previewImages.map((img, index) => (
            <div 
              key={img.id} 
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md"
              data-reveal="bottom"
              data-reveal-delay={`${index * 150}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center" data-reveal="fade-up">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View Full Gallery
            <span className="material-symbols-outlined text-xl">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
