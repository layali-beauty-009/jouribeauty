import type { Product } from "@/lib/api";
import { ProductShowcaseCard } from "./ProductShowcaseCard";

type Props = {
  label: string;
  title: string;
  subtitle: string;
  products: Product[];
};

export function FeaturedProducts({ label, title, subtitle, products }: Props) {
  return (
    <section className="px-4 py-14 bg-white border-y border-mist" id="products">
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto text-center mb-10">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-royal font-semibold">{label}</p>
        <h2 className="font-sans text-xl md:text-2xl font-bold text-navy mt-3 leading-snug">{title}</h2>
        <p className="mt-3 text-sm text-muted leading-relaxed">{subtitle}</p>
      </div>
      <div className="max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto space-y-8">
        {products.map((p) => (
          <ProductShowcaseCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
