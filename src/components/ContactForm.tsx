"use client";

import React, { useState, useEffect } from "react";

// EDIT THIS URL TO INTEGRATE YOUR OWN CALENDLY SCHEDULE PAGE
const CALENDLY_URL = "https://calendly.com/kreo_pvt_ltd";

export default function ContactForm() {
  const [activeContactMethod, setActiveContactMethod] = useState<"calendly" | "form">("calendly");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        // Reset form inputs
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Web Development",
          message: "",
        });
      } else {
        alert(data.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      console.error("Failed to submit requirements:", err);
      alert("Unable to connect to the server. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 px-5 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6 fade-in-up">
            <div>
              <div className="section-divider"></div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-md">
                Choose a method below to connect with us. You can schedule an instant live discovery session or submit custom specs.
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

          {/* Right Side: Interactive Scheduling & Form Panel */}
          <div className="lg:col-span-7 bg-white border border-gray-200/70 rounded-2xl p-4 sm:p-6 md:p-8 shadow-md relative overflow-hidden fade-in-up delay-100">
            
            {/* Toggle tabs for booking method */}
            <div className="flex gap-2 p-1 bg-gray-50 border border-gray-200/60 rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setActiveContactMethod("calendly")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeContactMethod === "calendly"
                    ? "bg-white text-primary shadow-sm border border-gray-100"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                Book Discovery Call
              </button>
              <button
                type="button"
                onClick={() => setActiveContactMethod("form")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeContactMethod === "form"
                    ? "bg-white text-primary shadow-sm border border-gray-100"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">edit_note</span>
                Send Requirements
              </button>
            </div>

            {/* Conditionally render selected method */}
            {activeContactMethod === "calendly" ? (
              /* Calendly Inline Widget Embed */
              <div className="relative w-full h-[550px] border border-gray-100 rounded-xl overflow-hidden shadow-inner bg-gray-50">
                <iframe
                  src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=d85604`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="Schedule a consultation with Kreo Softwares"
                ></iframe>
              </div>
            ) : isSuccess ? (
              /* Success Screen for Manual Form */
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-500 shadow-sm animate-float">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Details Submitted Successfully!</h3>
                <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
                  Thank you for sharing your requirements. One of our lead software engineers will review your request and get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 mt-4 underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Send another message
                </button>
              </div>
            ) : (
              /* Requirements Form Layout */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="e.g. Rahul Patil"
                      className="bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-primary/50 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none transition-all min-h-[48px]"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="e.g. rahul@example.com"
                      className="bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-primary/50 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none transition-all min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="e.g. +91 98765 43210"
                      className="bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-primary/50 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none transition-all min-h-[48px]"
                    />
                  </div>

                  {/* Service Needed */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Service Category
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-primary/50 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none transition-all min-h-[48px] cursor-pointer"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Administrative System">Administrative Dashboard</option>
                      <option value="AI/ML Solutions">AI/ML Integration</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Hardware & IoT Projects">IoT/Hardware Project</option>
                      <option value="Academic Project">Academic Internship Project</option>
                    </select>
                  </div>
                </div>

                {/* Message Brief */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Project Specifications / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Provide a brief description of what you are looking to build..."
                    rows={4}
                    className="bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-primary/50 focus:bg-white rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none transition-all min-h-[100px] resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-hover disabled:bg-primary/70 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors cursor-pointer shadow-lg shadow-primary/10 flex items-center justify-center gap-2 text-sm select-none"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting Details...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[20px]">send</span>
                      Submit Project Details
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
