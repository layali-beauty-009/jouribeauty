import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/config/products";
import { ProductShowcaseCard } from "@/components/home/ProductShowcaseCard";
import type { Product } from "@/lib/api";

export const metadata: Metadata = {
  title: "السيرومات",
  description: "تسوّقي سيرومات جوري للجمال — عين، تجاعيد وبهتان، وإصلاح الحاجز.",
};

function toApiProduct(p: (typeof products)[0]): Product {
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    tagline: p.heroSubheadline,
    description: p.mechanism,
    volume: p.offers[0]?.subtitle ?? "",
    priceAed: p.offers[0]?.price ?? 199,
    category: p.category,
    keyIngredients: p.ingredientStack.map((i) => (typeof i === "string" ? i : i.name)),
    features: p.badges,
    usage: p.usage?.steps.join(" ") ?? "",
    benefits: [],
  };
}

export default function ProductsPage() {
  const list = products.map(toApiProduct);

  return (
    <div className="px-4 py-8 max-w-lg md:max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-muted hover:text-royal">
        ← الرئيسية
      </Link>
      <p className="text-[0.65rem] tracking-[0.35em] uppercase text-royal font-semibold mt-4">
        صيدلية السيرومات
      </p>
      <h1 className="font-sans text-2xl font-bold text-navy mt-2">سيرومات جوري للجمال</h1>
      <p className="text-sm text-muted mt-2 max-w-md">
        ثلاث تركيبات مركّزة — اختاري حسب همّ بشرتك. مكوّنات واضحة ودفع عند الاستلام.
      </p>
      <p className="text-sm text-muted mt-2 mb-8">ثلاث تركيبات. اختاري همّك.</p>
      <div className="space-y-8">
        {list.map((p) => (
          <ProductShowcaseCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
