import Link from "next/link";
import { getProducts } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts().catch(() => []);

  return (
    <>
      <section className="relative overflow-hidden border-b border-mist">
        <div
          className="absolute inset-0 bg-gradient-to-br from-royal/10 via-lavender/20 to-ice/25 pointer-events-none"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs tracking-[0.4em] uppercase text-royal mb-6 font-medium">
            United Arab Emirates
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-navy leading-[1.1] max-w-3xl">
            Three serums.
            <br />
            <span className="text-royal italic">Every concern.</span>
          </h1>
          <p className="mt-8 text-lg text-muted max-w-xl leading-relaxed">
            Jouri Beauty brings clinic-inspired actives to your daily ritual —
            from tired eyes to aging skin and a weakened barrier. Each formula
            targets a real problem with a clear solution.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-block bg-navy text-pearl px-8 py-3.5 text-sm tracking-[0.2em] uppercase hover:bg-royal transition-colors"
            >
              Shop Serums
            </Link>
            <Link
              href="/routine"
              className="inline-block border border-navy text-navy px-8 py-3.5 text-sm tracking-[0.2em] uppercase hover:border-royal hover:text-royal transition-colors bg-white/50"
            >
              Build Your Routine
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <span className="h-3 w-12 rounded-full bg-royal" title="Caffeine Eye Serum" />
            <span className="h-3 w-12 rounded-full bg-lavender border border-lilac-dark/20" title="Bakuchiol Serum" />
            <span className="h-3 w-12 rounded-full bg-ice border border-navy/10" title="GHK-Cu Serum" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
              The Collection
            </p>
            <h2 className="font-serif text-4xl text-navy">Our 3 Serums</h2>
          </div>
          <Link
            href="/products"
            className="hidden md:inline text-sm tracking-wide text-royal hover:underline"
          >
            View all →
          </Link>
        </div>
        {products.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-muted text-center py-12">
            Products loading soon. Connect the API at api.jouribeauty.store.
          </p>
        )}
      </section>

      <section className="bg-navy text-pearl">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-12 text-center md:text-left">
          {[
            {
              title: "Problem-led",
              text: "Every serum lists the skin concern it addresses — no guesswork.",
              dot: "bg-royal",
            },
            {
              title: "UAE-ready",
              text: "Formulas suited to heat, sun, and active lifestyles in the Emirates.",
              dot: "bg-lavender",
            },
            {
              title: "Clean luxury",
              text: "Vegan, cruelty-free actives in elegant, purposeful packaging.",
              dot: "bg-ice",
            },
          ].map((item) => (
            <div key={item.title}>
              <span className={`inline-block h-1.5 w-8 rounded-full ${item.dot} mb-4`} />
              <h3 className="font-serif text-2xl text-ice mb-3">{item.title}</h3>
              <p className="text-sm text-pearl/80 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
