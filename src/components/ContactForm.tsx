"use client";

import React, { useEffect, useState } from "react";

// EDIT THIS URL TO INTEGRATE YOUR OWN CALENDLY SCHEDULE PAGE
const CALENDLY_URL = "https://calendly.com/kreo-pvt-ltd/30min";

export default function ContactForm() {
  const [isCalendlyActive, setIsCalendlyActive] = useState(false);
  // Catch booking completion event from the Calendly iframe
  useEffect(() => {
    const handleCalendlyEvent = async (e: MessageEvent) => {
      // Check that the origin is Calendly and it contains event payload data
      if (e.origin.includes("calendly.com") && e.data.event) {
        // 'calendly.event_scheduled' signals a successful appointment booking
        if (e.data.event === "calendly.event_scheduled") {
          const { invitee, event } = e.data.payload;
          
          console.log("Calendly schedule event triggered:", invitee.uri);

          try {
            // Send booking event details to our secure backend API route
            const res = await fetch("/api/calendly", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                inviteeUri: invitee.uri,
                eventUri: event.uri,
              }),
            });
            const data = await res.json();
            console.log("Calendly sync API response:", data);
          } catch (err) {
            console.error("Failed to sync booking event with backend:", err);
          }
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvent);
    return () => window.removeEventListener("message", handleCalendlyEvent);
  }, []);

  return (
    <section id="contact-form" className="py-16 md:py-24 px-5 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div data-reveal="fade-up" className="lg:col-span-5 space-y-6">
            <div>
              <div className="section-divider"></div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-md">
                Select an available date and time on the calendar to schedule a live discovery session with one of our lead software engineers.
              </p>
            </div>

            {/* Quick Contact details card */}
            <div className="bg-white border border-gray-200/60 rounded-2xl p-6 shadow-sm space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Our Head Office</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                    Shop No. 27, 1st Floor, R N Shetty Stadium Complex, KCD College Road, Dharwad - 580001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Direct Calling</h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">+91 81236 85041 • +91 99804 11129</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Email Support</h4>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">kreo.pvt.ltd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Calendly Interactive Booking Console */}
          <div data-reveal="fade-up" data-reveal-delay="150" className="lg:col-span-7 bg-white border border-gray-200/70 rounded-2xl p-4 sm:p-6 shadow-md relative">
            <div
              className="relative w-full h-[550px] border border-gray-100 rounded-xl overflow-hidden shadow-inner bg-gray-50"
              onMouseLeave={() => setIsCalendlyActive(false)}
            >
              <iframe
                src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=d85604`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  pointerEvents: isCalendlyActive ? "auto" : "none",
                }}
                title="Schedule a consultation with Kreo"
              ></iframe>
              {/* Escape/Lock button for mobile scroll recovery */}
              {isCalendlyActive && (
                <button
                  onClick={() => setIsCalendlyActive(false)}
                  className="absolute bottom-3 right-3 bg-[#09090b] hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded-lg shadow-xl flex items-center gap-1.5 z-20 text-xs cursor-pointer border border-zinc-700 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  Lock Scroll
                </button>
              )}
              {/* Subtle Overlay text prompt for desktop */}
              {!isCalendlyActive && (
                <div
                  className="absolute inset-0 backdrop-blur-[1px] bg-black/5 select-none flex items-center justify-center cursor-pointer z-10 transition-opacity duration-300"
                  onClick={() => setIsCalendlyActive(true)}
                >
                  <span className="bg-primary hover:bg-primary-hover text-white text-xs font-bold py-2.5 px-5 rounded-lg shadow-lg flex items-center gap-1.5 pointer-events-none">
                    <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                    Click to Book Session
                  </span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
