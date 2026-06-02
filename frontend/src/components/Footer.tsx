import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-sand bg-charcoal text-cream mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-serif text-2xl tracking-[0.15em] uppercase">Jouri Beauty</p>
          <p className="mt-4 text-sm text-sand/80 leading-relaxed max-w-xs">
            Premium serums crafted for the UAE climate. Science-backed actives,
            elegant rituals.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-sand/90">
            <li>
              <Link href="/products" className="hover:text-gold transition-colors">
                All Serums
              </Link>
            </li>
            <li>
              <Link href="/routine" className="hover:text-gold transition-colors">
                Skincare Routine
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                Our Story
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-4">UAE</p>
          <p className="text-sm text-sand/90 leading-relaxed">
            Ships across the United Arab Emirates.
            <br />
            <a
              href="mailto:hello@jouribeauty.store"
              className="text-gold hover:underline mt-2 inline-block"
            >
              hello@jouribeauty.store
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-6 text-xs text-sand/60 tracking-wide">
        © {new Date().getFullYear()} Jouri Beauty. All rights reserved.
      </div>
    </footer>
  );
}
