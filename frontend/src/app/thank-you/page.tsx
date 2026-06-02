import Link from "next/link";
import { businessConfig } from "@/config/business";

type Props = { searchParams: Promise<{ total?: string }> };

export default async function ThankYouPage({ searchParams }: Props) {
  const { total } = await searchParams;

  return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-navy text-pearl text-3xl flex items-center justify-center mx-auto">
        ✓
      </div>
      <h1 className="font-sans text-2xl font-bold text-navy mt-6">شكراً لطلبك!</h1>
      <p className="text-muted mt-4 leading-relaxed">
        استلمنا طلبك. فريق {businessConfig.brand.nameLocal} سيتواصل معك قريباً لتأكيد العنوان.
        {total && (
          <>
            <br />
            <span className="font-semibold text-navy">المجموع: {total} د.إ</span>
          </>
        )}
      </p>
      <p className="text-sm text-muted mt-4">{businessConfig.cod.paymentLabel}</p>
      <Link
        href="/"
        className="inline-block mt-10 rounded-full bg-navy text-pearl px-8 py-3 text-sm font-medium"
      >
        العودة للمتجر
      </Link>
    </div>
  );
}
