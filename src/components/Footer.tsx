import React from "react";
import Image from "next/image";

export default function Footer() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.4879839051514!2d75.0060246!3d15.458162100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8cd795af6a8af%3A0xcb9a937f06ee47ba!2sKreo%20softwares!5e0!3m2!1sen!2sin!4v1770354685926!5m2!1sen!2sin";

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 mb-12">
          {/* Contact Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-11 h-11 overflow-hidden rounded-lg bg-white/10 border border-white/10">
                <Image
                  src="/logo.jpeg"
                  alt="Kreo Softwares logo"
                  fill
                  className="object-contain"
                  sizes="44px"
                />
              </div>
              <span className="font-display text-2xl font-bold text-white">
                Kreo Softwares
              </span>
            </div>
            <p className="mb-8 max-w-md text-gray-400 leading-relaxed">
              Your trusted technology partner for scalable software solutions, digital transformation,
              and innovative IT services across India.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5">Visit Us</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    R N Shetty Stadium Complex, 1st Floor, Shop No. 27,
                    <br />KCD College Road, Dharwad – 580001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5">Call Us</h4>
                  <a
                    href="tel:+918123685041"
                    className="text-sm text-gray-400 hover:text-primary transition-colors block"
                  >
                    +91 81236 85041
                  </a>
                  <a
                    href="tel:+919980411129"
                    className="text-sm text-gray-400 hover:text-primary transition-colors block"
                  >
                    +91 99804 11129
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5">Email Us</h4>
                  <a
                    href="mailto:kreo.pvt.ltd@gmail.com"
                    className="text-sm text-gray-400 hover:text-primary transition-colors block"
                  >
                    kreo.pvt.ltd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Frame */}
          <div className="h-[240px] md:h-full min-h-[240px] md:min-h-[320px] w-full overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kreo Softwares Location Map"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 overflow-hidden rounded">
              <Image src="/logo.jpeg" alt="Logo" fill className="object-contain" sizes="24px" />
            </div>
            <span className="text-sm font-bold text-white">Kreo Softwares</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 Kreo Softwares. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a
              href="https://instagram.com/kreo_softwares"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all text-lg"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/in/kreo_softwares"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all text-lg"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://wa.link/irrnl8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all text-lg"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
