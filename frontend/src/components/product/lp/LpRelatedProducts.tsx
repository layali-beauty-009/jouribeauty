import Link from "next/link";
import type { ProductConfig } from "@/types/product";
import { displayText, formatPriceParts } from "@/lib/format";
import { encodePublicPath, getProductImages } from "@/lib/getProductImages";
import { IconSparkles } from "@/components/ui/BrandIcons";

/** منتجات ذات صلة — بطاقات عمودية مثل namabeauty.shop */
export function LpRelatedProducts({
  related,
}: {
  related: ProductConfig[];
  accentColor?: string;
}) {
  if (!related.length) return null;

  return (
    <section className="relative overflow-x-clip bg-white px-4 py-12">
      <div className="mx-auto max-w-lg">
        <div className="mb-8 text-center">
          <span className="mb-3 inline-block text-[11px] font-bold tracking-[0.25em] text-gold">
            اكتشفي أكثر
          </span>
          <h2 className="text-xl font-extrabold leading-tight text-navy sm:text-2xl">
            سيرومات أخرى من جوري للجمال
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            لكل همّ بشرة تركيبة واضحة — اختاري ما يناسبك.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {related.map((r) => {
            const img = getProductImages(r).heroProduct ?? getProductImages(r).heroBeforeAfter;
            const price = formatPriceParts(r.offers[0]?.price ?? 199);

            return (
              <Link
                key={r.slug}
                href={`/products/${r.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-mist bg-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-xl"
              >
                <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-[10px] font-extrabold text-navy ring-1 ring-navy/10">
                  <IconSparkles className="h-3 w-3 shrink-0" />
                  اكتشفي
                </span>

                <div className="relative aspect-square overflow-hidden bg-clinical">
                  {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={encodePublicPath(img)}
                      alt={r.shortName}
                      className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-muted">
                      {r.shortName}
                    </div>
                  )}
                </div>

                <div className="flex flex-grow flex-col p-5 text-right">
                  <p className="text-[10px] font-semibold text-royal">{displayText(r.routineNameLocal)}</p>
                  <h3 className="mt-1 text-lg font-extrabold leading-snug text-navy">
                    {displayText(r.cardHeadline)}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-grow text-sm leading-relaxed text-muted">
                    {displayText(r.cardSubheadline)}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-mist pt-4">
                    <div className="text-right">
                      <p className="text-[11px] text-muted">يبدأ من</p>
                      <p className="text-lg font-extrabold leading-tight text-navy tabular-nums sm:text-xl">
                        {price.amount}{" "}
                        <span className="text-sm font-semibold">{price.currency}</span>
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-clinical px-4 py-2 text-sm font-extrabold text-navy transition-colors group-hover:bg-navy group-hover:text-pearl">
                      اكتشفي
                      <span aria-hidden>←</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
