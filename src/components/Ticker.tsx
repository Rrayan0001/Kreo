import React from "react";

const techItems = [
  { icon: "code_blocks", label: "React" },
  { icon: "terminal", label: "NodeJS" },
  { icon: "cloud", label: "AWS" },
  { icon: "data_object", label: "Python" },
  { icon: "deployed_code", label: "Docker" },
  { icon: "dataset", label: "PostgreSQL" },
  { icon: "phone_android", label: "React Native" },
  { icon: "security", label: "Cybersecurity" },
];



function TickerRow({
  items,
  reverse = false,
  colorClass = "text-gray-700",
}: {
  items: { icon?: string; label: string }[];
  reverse?: boolean;
  colorClass?: string;
}) {
  const trackClass = reverse ? "ticker-track-reverse" : "ticker-track";
  return (
    <div className="ticker">
      <div className={trackClass}>
        <div className="ticker-group">
          {items.map((item, idx) => (
            <div key={`a-${idx}`} className={`flex items-center gap-2 ${colorClass}`}>
              {item.icon && (
                <span className="material-symbols-outlined text-3xl text-primary opacity-80">
                  {item.icon}
                </span>
              )}
              <span className="font-bold text-lg">{item.label}</span>
              <span className="text-platinum mx-2">•</span>
            </div>
          ))}
        </div>
        <div className="ticker-group" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`b-${idx}`} className={`flex items-center gap-2 ${colorClass}`}>
              {item.icon && (
                <span className="material-symbols-outlined text-3xl text-primary opacity-80">
                  {item.icon}
                </span>
              )}
              <span className="font-bold text-lg">{item.label}</span>
              <span className="text-platinum mx-2">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="w-full bg-white border-b border-gray-100 overflow-hidden">
      <div className="py-5">
        <div className="max-w-7xl mx-auto px-6 mb-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            Powered by Modern Standards
          </p>
        </div>
        <div className="opacity-70 hover:opacity-100 transition-opacity duration-500">
          <TickerRow items={techItems} colorClass="text-gray-700" />
        </div>
      </div>
    </div>
  );
}
