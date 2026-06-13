"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const categories = [
  { name: "All", icon: "grid_view" },
  { name: "Development Labs", icon: "developer_board" },
  { name: "IoT & Hardware Desk", icon: "memory" },
  { name: "Collaboration Zone", icon: "sports_esports" },
  { name: "Classrooms & Seminars", icon: "school" }
];

const images = [
  { id: 1, src: "/gallery/gallery-1.jpeg", alt: "Collaborative Coding Workspace", title: "Collaborative Coding Workspace", category: "Development Labs" },
  { id: 2, src: "/gallery/gallery-2.jpeg", alt: "KREO Presentation & Seminar", title: "KREO Presentation & Seminar", category: "Classrooms & Seminars" },
  { id: 3, src: "/gallery/gallery-3.jpeg", alt: "Ultrasonic Radar IoT System", title: "Ultrasonic Radar IoT System", category: "IoT & Hardware Desk" },
  { id: 4, src: "/gallery/gallery-4.jpeg", alt: "Guest Lecture by Technical Lead Janhavi Akalwadi", title: "Guest Lecture by Technical Lead Janhavi Akalwadi", category: "Classrooms & Seminars" },
  { id: 5, src: "/gallery/gallery-5.jpeg", alt: "Smart Home Automation Prototype", title: "Smart Home Automation Prototype", category: "IoT & Hardware Desk" },
  { id: 6, src: "/gallery/gallery-6.jpeg", alt: "Full-Stack Development Presentation", title: "Full-Stack Development Presentation", category: "Classrooms & Seminars" },
  { id: 7, src: "/gallery/gallery-7.jpeg", alt: "Architecture Planning & System Design", title: "Architecture Planning & System Design", category: "Collaboration Zone" },
  { id: 8, src: "/gallery/gallery-8.jpeg", alt: "Sprint Roles & Tasks Allocation", title: "Sprint Roles & Tasks Allocation", category: "Collaboration Zone" },
  { id: 9, src: "/gallery/gallery-9.jpeg", alt: "Career Guidance & Skill Workshop", title: "Career Guidance & Skill Workshop", category: "Classrooms & Seminars" },
  { id: 10, src: "/gallery/gallery-10.jpeg", alt: "Interactive Corporate Values Session", title: "Interactive Corporate Values Session", category: "Classrooms & Seminars" },
];

export default function Gallery() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400">Loading gallery...</div>}>
      <GalleryContent />
    </Suspense>
  );
}

function GalleryContent() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      const decodedParam = decodeURIComponent(categoryParam);
      const matchedCat = categories.find(
        (c) => c.name.toLowerCase() === decodedParam.toLowerCase()
      );
      if (matchedCat) {
        setActiveCategory(matchedCat.name);
      }
    }
  }, [categoryParam]);

  const filteredImages = images.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-32 bg-gray-50 relative overflow-hidden min-h-screen">
      {/* Decorative Background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Category Tabs (Segmented Capsule Control) */}
        <div className="flex justify-center mb-10 md:mb-12" data-reveal="fade-up">
          <div className="inline-flex p-1 bg-white rounded-2xl border border-gray-200/60 shadow-sm gap-1 max-w-full overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 select-none shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {cat.icon}
                  </span>
                  <span className="whitespace-nowrap">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="bg-white rounded-2xl overflow-hidden cursor-pointer group border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              data-reveal="fade-up"
              data-reveal-delay={`${(index % 3) * 100}`}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay on hover - subtle dark tint and zoom-in icon */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-primary transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <span className="material-symbols-outlined text-2xl">zoom_in</span>
                  </div>
                </div>
              </div>

              {/* Text Info Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-gray-100">
                <div>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1.5 block">
                    {image.category}
                  </span>
                  <h3 className="text-gray-900 font-bold text-base leading-tight group-hover:text-primary transition-colors duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black/50 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-1 w-full min-h-0">
              <Image
                src={selectedImage}
                alt="Expanded view"
                fill
                className="object-contain"
                quality={100}
              />
            </div>
            {(() => {
              const imgData = images.find(img => img.src === selectedImage);
              return imgData ? (
                <div className="bg-black/60 backdrop-blur-md p-4 text-center border-t border-white/10">
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest">{imgData.category}</p>
                  <h3 className="text-white text-base md:text-lg font-bold mt-1">{imgData.title}</h3>
                </div>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
