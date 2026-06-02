import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getProducts, formatPrice } from "@/lib/api";
import { getProductTheme } from "@/lib/productTheme";
import { productsMarketing } from "@/config/productsMarketing";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { business } from "@/config/business";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const products = await getProducts().catch(() => []);
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const theme = getProductTheme(slug);
  const meta = productsMarketing[slug];

  return (
    <div className="max-w-lg md:max-w-2xl mx-auto px-4 py-6 pb-16">
      {/* Price / back bar */}
      <div className="flex items-center justify-between bg-ice/40 rounded-2xl px-4 py-3 mb-4 border border-mist">
        <Link
          href="/#products"
          className="w-10 h-10 rounded-full bg-navy text-pearl flex items-center justify-center text-sm hover:bg-royal transition-colors"
          aria-label="Back to products"
        >
          ←
        </Link>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider text-muted">From</p>
          <p className="font-semibold text-navy">{formatPrice(product.priceAed)}</p>
        </div>
      </div>

      <article className="bg-white rounded-3xl border border-mist shadow-sm overflow-hidden">
        <div className="p-3">
          <span
            className={`inline-block mb-2 text-[10px] font-medium px-3 py-1 rounded-full border ${theme.pill}`}
          >
            {meta?.badgeText} • {meta?.routineLabel}
          </span>
          <ImagePlaceholder slug={slug} label={product.name} className="rounded-2xl" />
        </div>

        <div className="p-5">
          <h1 className="font-serif text-2xl text-navy leading-snug">{product.name}</h1>
          <p className={`mt-2 font-serif italic ${theme.accent}`}>{product.tagline}</p>
          <p className="mt-4 text-sm text-muted leading-relaxed">{product.description}</p>

          {meta && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-accent text-sm">{"★".repeat(Math.round(meta.rating))}</span>
              <span className="text-xs text-muted">({meta.reviewsCount} reviews)</span>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {product.keyIngredients.map((ing) => (
              <span key={ing} className={`text-xs border px-3 py-1.5 rounded-full ${theme.pill}`}>
                {ing}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="mt-8 w-full bg-navy text-pearl rounded-full py-4 text-sm font-medium tracking-wide hover:bg-royal transition-colors"
          >
            Order — {business.cod.label}
          </button>
          <p className="text-center text-xs text-muted mt-2">{business.cod.note}</p>
        </div>
      </article>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-navy mb-4">Problem → Solution</h2>
        <div className="space-y-3">
          {product.benefits.map((b, i) => (
            <div
              key={b.id}
              className={`bg-white rounded-2xl border ${theme.border} p-5`}
            >
              <p className={`text-xs font-medium ${theme.accent}`}>Problem {i + 1}</p>
              <p className="mt-1 text-sm text-navy font-medium">{b.problem}</p>
              <p className={`text-xs font-medium mt-3 ${theme.accent}`}>Solution</p>
              <p className="mt-1 text-sm text-muted">{b.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 bg-white rounded-2xl border border-mist p-5">
        <h3 className="font-serif text-lg text-navy mb-2">How to use</h3>
        <p className="text-sm text-muted leading-relaxed">{product.usage}</p>
      </section>
    </div>
  );
}
