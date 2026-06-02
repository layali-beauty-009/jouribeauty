import Link from "next/link";

export function FinalCTA({
  label,
  title,
  subtitle,
  cta,
}: {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
}) {
  return (
    <section className="mx-4 mb-14">
      <div className="max-w-lg md:max-w-2xl mx-auto rounded-3xl bg-navy text-pearl p-8 md:p-12 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <div className="relative">
          <p className="text-xs tracking-[0.35em] uppercase text-accent font-medium">{label}</p>
          <h2 className="font-serif text-2xl md:text-3xl mt-4 leading-snug">{title}</h2>
          <p className="mt-4 text-sm text-pearl/85 leading-relaxed">{subtitle}</p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-accent text-navy font-semibold rounded-full py-3.5 px-10 text-sm hover:opacity-90 transition-opacity"
          >
            {cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
