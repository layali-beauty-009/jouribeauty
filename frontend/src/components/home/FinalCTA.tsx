import Link from "next/link";
import { BrandIcon, type BrandIconName } from "@/components/ui/BrandIcons";

type Chip = { icon: BrandIconName; text: string };

export function FinalCTA({
  label,
  title,
  subtitle,
  cta,
  chips,
}: {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
  chips?: Chip[];
}) {
  return (
    <section className="mx-4 mb-6">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-navy via-teal-dark to-navy text-pearl p-8 md:p-12 text-center relative overflow-hidden shadow-xl shadow-navy/20">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative">
          <p className="font-brand text-2xl text-electric/95 mb-2">جوري للجمال</p>
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-pearl/70 font-semibold">
            {label}
          </p>
          <h2 className="font-sans text-xl md:text-2xl font-bold mt-4 leading-snug">{title}</h2>
          <p className="mt-4 text-sm text-pearl/85 leading-relaxed max-w-md mx-auto">{subtitle}</p>

          {chips && chips.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {chips.map((chip) => (
                <span
                  key={chip.text}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium bg-white/10 border border-white/15 rounded-full px-3 py-1.5"
                >
                  <BrandIcon name={chip.icon} className="w-3.5 h-3.5 text-electric" />
                  {chip.text}
                </span>
              ))}
            </div>
          )}

          <Link
            href="/products"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold rounded-full py-3.5 px-10 text-sm hover:bg-pearl transition-colors shadow-lg"
          >
            {cta}
            <span aria-hidden>←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
