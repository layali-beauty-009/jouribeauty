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
      <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl bg-teal-dark p-8 text-center text-pearl shadow-xl ring-1 ring-gold/20 sm:max-w-2xl md:p-12 lg:max-w-4xl">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c4a574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative">
          <span className="text-[11px] font-bold tracking-[0.25em] text-gold">{label}</span>
          <p className="mt-2 font-brand text-2xl text-pearl">جوري للجمال</p>
          <h2 className="mt-4 font-sans text-xl font-extrabold leading-snug md:text-2xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-pearl/85">{subtitle}</p>

          {chips && chips.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {chips.map((chip) => (
                <span
                  key={chip.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[11px] font-semibold text-pearl"
                >
                  <BrandIcon name={chip.icon} className="h-3.5 w-3.5 text-gold" />
                  {chip.text}
                </span>
              ))}
            </div>
          )}

          <Link
            href="/products"
            className="mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-10 text-sm font-bold text-navy shadow-lg transition-colors hover:bg-pearl"
          >
            {cta}
            <span aria-hidden>←</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
