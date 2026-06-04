export function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="border-b border-gold/20 bg-teal-dark py-2.5 text-center text-xs font-semibold tracking-wide text-pearl md:text-sm">
      <span className="inline-flex items-center gap-2">
        <span className="text-gold" aria-hidden>
          ✦
        </span>
        {text}
        <span className="text-gold" aria-hidden>
          ✦
        </span>
      </span>
    </div>
  );
}
