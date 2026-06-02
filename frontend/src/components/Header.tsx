import Link from "next/link";

const links = [
  { href: "/products", label: "Serums" },
  { href: "/routine", label: "Routine" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-mist/80 bg-pearl/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <span className="font-brand text-2xl italic text-navy group-hover:text-royal transition-colors">
            Jouri
          </span>
          <span className="block text-[10px] tracking-[0.35em] uppercase text-muted -mt-0.5">
            Beauty
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide uppercase text-muted">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-royal transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/products"
          className="text-xs tracking-[0.2em] uppercase bg-navy text-pearl px-5 py-2.5 hover:bg-royal transition-colors"
        >
          Shop
        </Link>
      </div>
    </header>
  );
}
