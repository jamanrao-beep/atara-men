const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Premium Fabrics",
    subtitle: "Feel the difference.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M5 12l5 5L20 7" />
      </svg>
    ),
    title: "Bespoke Tailoring",
    subtitle: "Tailored for you.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4a2 2 0 012 2v6a2 2 0 01-2 2H6" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Free Delivery",
    subtitle: "On orders over ₹25,000",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Easy Returns",
    subtitle: "30-day return policy.",
  },
];

export default function TrustBanner() {
  return (
    <section className="w-full border-y border-cashmere bg-pearl">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-8">
        <div className="flex flex-wrap justify-between items-center gap-8">
          {features.map((feat, i) => (
            <div key={feat.title} className="flex items-center gap-4">
              {i > 0 && (
                <div className="hidden lg:block w-px h-10 bg-cashmere mr-8" />
              )}
              <div className="text-obsidian">{feat.icon}</div>
              <div>
                <p className="text-sm font-medium text-obsidian tracking-wide">{feat.title}</p>
                <p className="text-xs text-charcoal font-light">{feat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
