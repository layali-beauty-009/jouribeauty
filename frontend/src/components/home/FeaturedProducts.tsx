import type { Product } from "@/lib/api";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductShowcaseCard } from "./ProductShowcaseCard";

type Props = {
  label: string;
  title: string;
  subtitle: string;
  products: Product[];
};

export function FeaturedProducts({ label, title, subtitle, products }: Props) {
  return (
    <section className="px-4 py-16 bg-white border-y border-mist" id="products">
      <div className="max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {products.map((p) => (
            <ProductShowcaseCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
