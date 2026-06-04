import type { Metadata } from "next";
import Link from "next/link";
import { getProductTheme } from "@/lib/productTheme";

export const metadata: Metadata = {
  title: "روتين العناية",
  description: "كيف تستخدمين سيرومات جوري للجمال مع بعض — صباح ومساء.",
};

const steps = [
  {
    time: "الصباح",
    border: "border-mist",
    heading: "text-royal",
    items: [
      {
        product: "سيروم الباكوتشيول",
        slug: "bakuchiol-anti-aging-serum",
        note: "للإشراقة والتماسك — أو بدّلي لسيروم الإصلاح أيام الحساسية.",
      },
      {
        product: "سيروم العين بالكافيين",
        slug: "caffeine-under-eye-serum",
        note: "آخر خطوة تحت العين قبل واقي الشمس.",
      },
    ],
  },
  {
    time: "المساء",
    border: "border-mist",
    heading: "text-navy",
    items: [
      {
        product: "سيروم إصلاح الحاجز GHK-Cu",
        slug: "ghk-cu-barrier-repair-serum",
        note: "ممتاز بعد الشمس أو السفر — يرطّب ويدعم الحاجز طوال الليل.",
      },
      {
        product: "سيروم العين بالكافيين",
        slug: "caffeine-under-eye-serum",
        note: "لمنطقة العين فقط — فيه ريتينول، لا تستخدميه على كل الوجه.",
      },
    ],
  },
];

export default function RoutinePage() {
  return (
    <div className="mx-auto max-w-lg md:max-w-2xl px-4 py-10">
      <Link href="/" className="text-sm text-muted hover:text-royal">
        ← الرئيسية
      </Link>
      <p className="text-[0.65rem] tracking-[0.25em] text-royal mb-3 font-semibold mt-4">دليل الروتين</p>
      <h1 className="font-sans text-2xl font-bold text-navy mb-4">روتين جوري للجمال</h1>
      <p className="text-muted mb-10 leading-relaxed text-sm">
        ثلاث سيرومات، علامة واحدة. استخدميهم بترتيب بسيط — عين، وجه، وإصلاح الحاجز — بدون ما تثقلي
        بشرتك.
      </p>

      <div className="space-y-8">
        {steps.map((block) => (
          <div key={block.time} className={`border ${block.border} p-6 bg-white rounded-2xl shadow-sm`}>
            <h2 className={`font-sans text-lg font-bold ${block.heading} mb-5`}>{block.time}</h2>
            <ol className="space-y-6">
              {block.items.map((item, i) => {
                const theme = getProductTheme(item.slug);
                return (
                  <li key={item.slug} className="flex gap-4 flex-row-reverse text-right">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border ${theme.border} ${theme.accent} flex items-center justify-center text-sm font-medium`}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <Link
                        href={`/products/${item.slug}`}
                        className={`font-semibold text-ink ${theme.hoverAccent} transition-colors text-sm`}
                      >
                        {item.product}
                      </Link>
                      <p className="mt-1 text-sm text-muted leading-relaxed">{item.note}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 bg-navy text-pearl text-sm leading-relaxed rounded-2xl">
        <strong className="text-electric">تنبيه:</strong> سيروم العين فيه ريتينول — للمنطقة تحت العين
        فقط. لا تخلطيه على كل الوجه مع منتجات قوية إلا إذا نصحك مختص.
      </div>
    </div>
  );
}
