import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Jouri Beauty — premium skincare serums born for the UAE.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs tracking-[0.35em] uppercase text-royal mb-3 font-medium">Our Story</p>
      <h1 className="font-brand text-4xl italic text-navy mb-8">Jouri Beauty</h1>
      <div className="max-w-2xl space-y-6 text-muted leading-relaxed">
        <p>
          <strong className="text-navy font-medium">Jouri</strong> (جوري) means
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
        <div className="flex gap-4 pt-2">
          <div className="flex-1 rounded-lg bg-gradient-to-br from-royal/20 to-electric/10 p-4 border border-royal/20">
            <p className="text-xs uppercase tracking-wider text-royal font-medium">Eye</p>
            <p className="text-sm mt-1 text-ink">Royal blue · 5% Caffeine</p>
          </div>
          <div className="flex-1 rounded-lg bg-gradient-to-br from-lavender to-lilac/50 p-4 border border-lilac">
            <p className="text-xs uppercase tracking-wider text-lilac-dark font-medium">Face</p>
            <p className="text-sm mt-1 text-ink">Lavender · Bakuchiol</p>
          </div>
          <div className="flex-1 rounded-lg bg-gradient-to-br from-ice to-pearl p-4 border border-ice-dark/40">
            <p className="text-xs uppercase tracking-wider text-navy font-medium">Repair</p>
            <p className="text-sm mt-1 text-ink">Ice blue · GHK-Cu</p>
          </div>
        </div>
        <p className="text-navy pt-4">
          Welcome to jouribeauty.store — your ritual starts here.
        </p>
      </div>
    </div>
  );
}
