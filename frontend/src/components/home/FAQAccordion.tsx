"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-14 sm:py-16" id="faq">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="divide-y divide-mist border border-mist rounded-2xl bg-white overflow-hidden shadow-sm">
          {items.map((item, i) => (
            <div key={item.q}>
              <button
                type="button"
                className="w-full flex items-center gap-4 p-4 md:p-5 text-right hover:bg-pearl/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="flex-1 font-medium text-navy text-sm md:text-[0.9375rem] leading-snug">
                  {item.q}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-light transition-colors ${
                    open === i ? "bg-navy text-pearl ring-2 ring-gold/40" : "bg-gold/10 text-navy"
                  }`}
                >
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0 text-sm text-muted leading-relaxed text-right border-t border-mist/50 bg-pearl/30">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
