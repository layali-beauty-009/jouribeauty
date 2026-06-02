"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function FAQAccordion({
  label,
  title,
  subtitle,
  items,
}: {
  label: string;
  title: string;
  subtitle: string;
  items: Item[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-4 py-14 bg-cream">
      <div className="max-w-lg md:max-w-2xl mx-auto text-center mb-10">
        <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium">{label}</p>
        <h2 className="font-sans text-xl md:text-2xl font-bold text-navy mt-3">{title}</h2>
        <p className="mt-3 text-sm text-muted">{subtitle}</p>
      </div>
      <div className="max-w-lg md:max-w-2xl mx-auto divide-y divide-mist border border-mist rounded-2xl bg-white overflow-hidden">
        {items.map((item, i) => (
          <div key={item.q}>
            <button
              type="button"
              className="w-full flex items-center gap-4 p-4 text-left hover:bg-pearl/50 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ice/60 text-navy flex items-center justify-center text-lg font-light">
                {open === i ? "−" : "+"}
              </span>
              <span className="flex-1 font-medium text-navy text-sm">{item.q}</span>
            </button>
            {open === i && (
              <div className="px-4 pb-4 pl-16 text-sm text-muted leading-relaxed">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
