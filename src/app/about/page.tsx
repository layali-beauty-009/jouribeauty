import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Jouri Beauty — premium skincare serums born for the UAE.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.35em] uppercase text-gold-dark mb-3">Our Story</p>
      <h1 className="font-serif text-5xl text-charcoal mb-8">Jouri Beauty</h1>
      <div className="max-w-2xl space-y-6 text-muted leading-relaxed">
        <p>
          <strong className="text-charcoal font-medium">Jouri</strong> (جوري) means
          something precious — and that is how we think about your skin. Born in
          the United Arab Emirates, Jouri Beauty offers three focused serums, each
          designed to solve one category of concern with clarity and care.
        </p>
        <p>
          We believe skincare should be honest: every product tells you the
          problem it addresses and the solution it delivers. No vague promises —
          just caffeine for tired eyes, bakuchiol for gentle anti-aging, and
          copper peptides for barrier repair.
        </p>
        <p>
          Our formulas use proven actives — retinol, hyaluronic acid, vitamin C,
          GHK-Cu, and more — in textures suited to life under the Gulf sun.
        </p>
        <p className="text-charcoal">
          Welcome to jouribeauty.store — your ritual starts here.
        </p>
      </div>
    </div>
  );
}
