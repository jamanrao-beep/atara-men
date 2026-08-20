"use client";

export default function Newsletter() {
  return (
    <section className="bg-alabaster border-t border-cashmere">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-24 text-center">
        <span className="text-accent-label text-antique-gold mb-4 block">STAY CONNECTED</span>
        <h2 className="text-3xl md:text-4xl font-serif text-obsidian mb-4">Join The Atara Circle</h2>
        <p className="text-charcoal font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Be the first to discover new collections, exclusive offers, and behind-the-scenes
          glimpses into our craftsmanship.
        </p>
        <form
          className="flex flex-col sm:flex-row max-w-md mx-auto gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-cashmere bg-pearl px-5 py-4 text-sm text-obsidian placeholder:text-charcoal/50 focus:outline-none focus:border-obsidian transition-colors"
          />
          <button
            type="submit"
            className="btn-primary px-8 py-4 text-xs whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
