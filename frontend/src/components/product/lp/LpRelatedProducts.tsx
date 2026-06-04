import Link from "next/link";
import type { ProductConfig } from "@/types/product";
import { formatPrice } from "@/lib/format";
import { getProductImages } from "@/lib/getProductImages";
import { encodePublicPath } from "@/lib/getProductImages";

export function LpRelatedProducts({
  related,
  accentColor,
}: {
  related: ProductConfig[];
  accentColor: string;
}) {
  if (!related.length) return null;

  return (
    <section className="px-4 mt-12 pb-4">
      <p className="text-[0.65rem] tracking-[0.25em] text-center font-semibold mb-2" style={{ color: accentColor }}>
        اكتشفي أكثر
      </p>
      <h2 className="text-center font-sans text-base font-bold text-navy mb-6">
        سيرومات أخرى من جوري للجمال
      </h2>
      <div className="space-y-4 max-w-lg mx-auto">
        {related.map((r) => {
          const img = getProductImages(r).heroProduct;
          return (
            <Link
              key={r.slug}
              href={`/products/${r.slug}`}
              className="flex gap-4 bg-white rounded-2xl border border-mist p-3 shadow-sm hover:border-electric/40 transition-colors text-right"
            >
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold text-royal">{r.routineNameLocal}</p>
                <p className="font-semibold text-navy text-sm mt-0.5 leading-snug">{r.cardHeadline}</p>
                <p className="text-xs text-muted mt-1 line-clamp-2">{r.cardSubheadline}</p>
                <p className="text-sm font-bold mt-2" style={{ color: accentColor }}>
                  يبدأ من {formatPrice(r.offers[0]?.price ?? 199)}
                </p>
                <span className="inline-block mt-2 text-xs font-semibold text-navy underline-offset-2 hover:underline">
                  اكتشفي التركيبة ←
                </span>
              </div>
              {img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={encodePublicPath(img)}
                  alt={r.shortName}
                  className="w-24 h-24 object-contain rounded-xl bg-clinical/30 flex-shrink-0"
                />
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
