"use client";

import React from "react";

interface CookiePolicyProps {
  onClose: () => void;
}

export default function CookiePolicy({ onClose }: CookiePolicyProps) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      style={{ background: "rgba(5,5,5,0.72)", backdropFilter: "blur(6px)" }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="cookie-policy-title"
    >
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h1 id="cookie-policy-title" className="text-2xl font-bold text-gray-900">
            Cookie Policy
          </h1>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 transition-colors p-1"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">What Are Cookies?</h2>
            <p className="text-sm leading-relaxed">
              Cookies are small pieces of data stored on your device that help websites remember information about you. They enhance your browsing experience and allow us to understand how you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Essential Cookies</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  These cookies are necessary for the website to function properly. They cannot be disabled.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Analytical Cookies</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  These cookies help us understand how visitors interact with our website, allowing us to improve our services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Preference Cookies</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  These cookies remember your choices and preferences to personalize your experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">Marketing Cookies</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  These cookies track your activity across websites to deliver targeted advertisements and content.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Your Cookie Choices</h2>
            <p className="text-sm leading-relaxed mb-3">
              You have the right to decide whether to accept or reject non-essential cookies. Most browsers allow you to:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Delete existing cookies from your device</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Block future cookies from being set on your device</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Receive notifications when a cookie is being set</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Third-Party Cookies</h2>
            <p className="text-sm leading-relaxed">
              Our website may contain links to and from third-party websites. We are not responsible for the cookie practices of third parties. We encourage you to review their privacy policies and cookie policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have questions about our use of cookies, please contact us at <a href="mailto:privacy@kreo.com" className="text-primary underline">privacy@kreo.com</a>.
            </p>
          </section>
        </div>

        {/* Footer with Accept Button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
