"use client";

import React from "react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      style={{ background: "rgba(5,5,5,0.72)", backdropFilter: "blur(6px)" }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="privacy-title"
    >
      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h1 id="privacy-title" className="text-2xl font-bold text-gray-900">
            Privacy Policy
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
            <h2 className="text-lg font-bold text-gray-900 mb-3">Introduction</h2>
            <p className="text-sm leading-relaxed">
              Kreo ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Information We Collect</h2>
            <p className="text-sm leading-relaxed mb-3">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you provide.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Device Information:</strong> Browser type, IP address, and device identifiers.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">How We Use Your Information</h2>
            <p className="text-sm leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Provide, maintain, and improve our services</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Send you technical notices and support messages</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Respond to your comments, questions, and requests</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Analyze and track website usage trends and patterns</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Data Security</h2>
            <p className="text-sm leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@kreo.com" className="text-primary underline">privacy@kreo.com</a>.
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
