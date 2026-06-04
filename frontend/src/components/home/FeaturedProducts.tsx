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
    <section className="relative overflow-x-clip bg-white px-4 py-14 sm:py-16" id="products">
      <div className="mx-auto max-w-lg sm:max-w-2xl lg:max-w-5xl">
        <SectionHeader label={label} title={title} subtitle={subtitle} />
        <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-3 lg:gap-6">
          {products.map((p) => (
            <ProductShowcaseCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
