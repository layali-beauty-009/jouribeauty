type Item = { icon: string; title: string; text: string };

export function TrustStrip({ items }: { items: Item[] }) {
  return (
    <section className="px-4 pb-8">
      <div className="max-w-lg md:max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl border border-mist p-4 flex items-center gap-3"
          >
            <span className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center text-navy text-lg">
              {item.icon === "truck" ? "🚚" : item.icon === "cod" ? "💳" : "🌿"}
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">{item.title}</p>
              <p className="text-xs text-muted">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
