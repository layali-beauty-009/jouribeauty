import type { Metadata } from "next";
import Link from "next/link";
import { businessConfig } from "@/config/business";

export const metadata: Metadata = {
  title: "من نحن",
  description: `${businessConfig.brand.nameLocal} — صيدلية السيرومات لبشرة الخليج.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:py-16">
      <p className="text-[0.65rem] tracking-[0.35em] uppercase text-royal font-semibold mb-3">
        من نحن
      </p>
      <h1 className="font-sans text-2xl md:text-3xl font-bold text-navy mb-2">
        {businessConfig.brand.nameLocal}
      </h1>
      <p className="text-sm text-royal font-medium mb-8">{businessConfig.brand.tagline}</p>

      <div className="space-y-6 text-muted leading-relaxed text-sm">
        <p>
          <strong className="text-navy font-semibold">جوري</strong> تعني الشيء الثمين — وهكذا
          نتعامل مع بشرتك. أنشأنا <strong className="text-navy">جوري للجمال</strong> لنكون
          <strong className="text-navy"> صيدلية السيرومات</strong> في الخليج: ثلاث تركيبات فقط،
          كل واحدة لهمّ محدد، بمكوّنات نشطة بتركيز واضح.
        </p>
        <p>
          لا نبيع عشرات المنتجات العشوائية. نملك ثلاثة سيرومات نفتخر بها — للعين، لمكافحة
          التجاعيد والبهتان، ولإصلاح البشرة المرهقة — ونشرح لكل واحد:{" "}
          <span className="text-navy font-medium">المشكلة، المكوّن، الحل، طريقة الاستخدام</span>.
        </p>
        <p>
          نتحدث بصدق عن جو الإمارات والخليج: المكيف، الشمس، السهر، والسفر. تركيباتنا للعناية
          بالبشرة فقط — بدون ادعاءات علاجية — مع{" "}
          {businessConfig.cod.paymentLabel.toLowerCase()} و{businessConfig.cod.returnGuarantee}.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {[
          { label: "سيروم العين", sub: "كافيين ٥٪ + رولر", tone: "from-royal/20 to-electric/10" },
          { label: "سيروم التجاعيد", sub: "باكوتشيول", tone: "from-lavender/40 to-lilac/30" },
          { label: "سيروم الإصلاح", sub: "GHK-Cu", tone: "from-ice/50 to-pearl" },
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-2xl border border-mist bg-gradient-to-br ${item.tone} p-4 text-center`}
          >
            <p className="text-xs font-bold text-navy">{item.label}</p>
            <p className="text-[11px] text-muted mt-1">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-navy text-pearl p-6 text-center">
        <p className="text-sm font-semibold">جاهزة لتجربة روتين واضح؟</p>
        <Link
          href="/products"
          className="inline-block mt-4 rounded-full bg-electric text-teal-dark px-8 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          تصفّحي السيرومات
        </Link>
      </div>
    </div>
  );
}
