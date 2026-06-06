import React from "react";

interface ComparisonRow {
  title: string;
  icon: string;
  others: React.ReactNode;
  kreo: React.ReactNode;
}

export default function Comparison() {
  const comparisonRows: ComparisonRow[] = [
    {
      title: "Speed to Market",
      icon: "speed",
      others: <span className="text-gray-500 font-medium">Weeks to Months</span>,
      kreo: <span className="text-primary font-bold">Days</span>,
    },
    {
      title: "Full Integration",
      icon: "integration_instructions",
      others: <span className="material-symbols-outlined text-red-500 text-2xl">close</span>,
      kreo: <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>,
    },
    {
      title: "Ongoing Support",
      icon: "support_agent",
      others: <span className="text-gray-500 font-medium">Hourly Billing</span>,
      kreo: <span className="text-primary font-bold">Included Partner</span>,
    },
    {
      title: "AI Native",
      icon: "psychology",
      others: <span className="material-symbols-outlined text-red-500 text-2xl">close</span>,
      kreo: <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>,
    },
  ];

  return (
    <section id="insight" className="bg-[#faf6f3] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-12 lg:px-8">
        <div className="mb-14 text-center fade-in-up">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">Why Choose Kreo?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 leading-relaxed text-base">
            We deliver innovative, scalable, and secure solutions tailored to your business
            needs—combining expert talent, modern technology, and a results-driven approach.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hidden md:block scale-in">
          {/* Orange column highlight — spans full height behind the last column */}
          <div className="comparison-table">
            {/* Header Row */}
            <div className="comparison-header">
              <div className="comparison-col-feature text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Features
              </div>
              <div className="comparison-col-others text-center font-bold text-lg text-gray-400">
                Others / Freelancers
              </div>
              {/* KreoSoftwares header — the orange panel is a sibling pseudo-layer */}
              <div className="comparison-col-kreo-header">
                <span>KreoSoftwares</span>
              </div>
            </div>

            {/* Data Rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className={`comparison-row${index === comparisonRows.length - 1 ? " comparison-row-last" : ""}`}
              >
                <div className="comparison-col-feature font-bold text-gray-900 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary/60">{row.icon}</span>
                  {row.title}
                </div>
                <div className="comparison-col-others flex items-center justify-center">
                  {row.others}
                </div>
                <div className="comparison-col-kreo flex items-center justify-center">
                  {row.kreo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Cards View */}
        <div className="space-y-4 md:hidden">
          {comparisonRows.map((row, index) => (
            <div
              key={index}
              className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">{row.icon}</span>
                <span className="font-bold text-gray-900">{row.title}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-[10px] text-gray-400 uppercase mb-1">Others</p>
                  <div className="flex justify-center">{row.others}</div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
                  <p className="text-[10px] text-primary uppercase mb-1 font-semibold">KreoSoftwares</p>
                  <div className="flex justify-center">{row.kreo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
