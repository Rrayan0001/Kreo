import React from "react";

export default function CTA() {
  const consultationUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfqlB98dAnGISbReIGRJjDMlCRktA2zE2V3Dr6T6XBTvZUoRg/viewform?usp=header";

  return (
    <section className="py-16 md:py-28 px-5 md:px-12 lg:px-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-black/10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 fade-in-up">
        <p className="text-orange-200 text-sm font-bold uppercase tracking-widest mb-4">
          Start Your Project Today
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white leading-tight">
          Ready to engineer your solution?
        </h2>
        <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Consult with our experts today to transform your requirements into a robust technical
          reality — delivered on time, on budget.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-primary h-14 px-10 rounded-lg flex items-center justify-center font-black hover:bg-orange-50 transition-colors shadow-2xl text-base w-full sm:w-auto"
          >
            <span className="material-symbols-outlined mr-2">calendar_month</span>
            Book a Free Consultation
          </a>
          <a
            href="tel:+918123685041"
            className="border-2 border-white/40 text-white h-14 px-10 rounded-lg flex items-center justify-center font-semibold hover:bg-white/10 transition-all text-base w-full sm:w-auto"
          >
            <span className="material-symbols-outlined mr-2">call</span>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
