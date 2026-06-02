import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-navy/20 bg-navy text-pearl mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-brand text-2xl italic">Jouri Beauty</p>
          <p className="mt-4 text-sm text-ice/90 leading-relaxed max-w-xs">
            Premium serums crafted for the UAE climate. Science-backed actives,
            elegant rituals.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-ice mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-pearl/85">
            <li>
              <Link href="/products" className="hover:text-ice transition-colors">
                All Serums
              </Link>
            </li>
            <li>
              <Link href="/routine" className="hover:text-ice transition-colors">
                Skincare Routine
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-ice transition-colors">
                Our Story
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-ice mb-4">UAE</p>
          <p className="text-sm text-pearl/85 leading-relaxed">
            Ships across the United Arab Emirates.
            <br />
            <a
              href="mailto:hello@jouribeauty.store"
              className="text-lavender hover:underline mt-2 inline-block"
            >
              hello@jouribeauty.store
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-6 text-xs text-ice/70 tracking-wide">
        © {new Date().getFullYear()} Jouri Beauty. All rights reserved.
      </div>
    </footer>
  );
}
