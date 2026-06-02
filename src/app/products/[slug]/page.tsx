import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, getProducts, formatPrice } from "@/lib/api";

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

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <Link
        href="/products"
        className="text-sm text-muted hover:text-gold-dark transition-colors"
      >
        ← All serums
      </Link>

      <div className="mt-8 grid lg:grid-cols-2 gap-16">
        <div className="aspect-square bg-gradient-to-b from-sand/50 to-cream border border-sand flex flex-col items-center justify-center p-12">
          <span className="text-xs tracking-[0.3em] uppercase text-muted">
            {product.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-center mt-4 text-charcoal leading-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-muted">{product.volume}</p>
        </div>

        <div>
          <p className="font-serif text-2xl text-gold-dark italic">{product.tagline}</p>
          <p className="mt-6 text-3xl font-medium">{formatPrice(product.priceAed)}</p>
          <p className="mt-6 text-muted leading-relaxed">{product.description}</p>

          <div className="mt-8">
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">
              Key ingredients
            </p>
            <div className="flex flex-wrap gap-2">
              {product.keyIngredients.map((ing) => (
                <span
                  key={ing}
                  className="text-xs border border-sand px-3 py-1.5 bg-white/60"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs tracking-[0.25em] uppercase text-muted mb-3">Benefits</p>
            <div className="flex flex-wrap gap-2">
              {product.features.map((f) => (
                <span key={f} className="text-xs bg-charcoal text-cream px-3 py-1.5">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-10 w-full md:w-auto bg-charcoal text-cream px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold-dark transition-colors cursor-pointer"
          >
            Add to bag — Coming soon
          </button>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="font-serif text-3xl text-charcoal mb-2">
          Problem → Solution
        </h2>
        <p className="text-muted mb-10 max-w-xl">
          What this serum treats and how it works for your skin.
        </p>
        <div className="space-y-6">
          {product.benefits.map((b, i) => (
            <div
              key={b.id}
              className="grid md:grid-cols-2 gap-6 border border-sand p-6 md:p-8 bg-white/40"
            >
              <div>
                <span className="text-xs text-gold-dark font-medium">Problem {i + 1}</span>
                <p className="mt-2 text-charcoal">{b.problem}</p>
              </div>
              <div>
                <span className="text-xs text-gold-dark font-medium">Solution</span>
                <p className="mt-2 text-muted">{b.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-sand pt-12">
        <h3 className="font-serif text-2xl mb-4">How to use</h3>
        <p className="text-muted leading-relaxed max-w-2xl">{product.usage}</p>
      </section>
    </div>
  );
}
