export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <span className="text-accent-label text-regal-wine mb-4 tracking-widest">
          The Wedding Edit
        </span>
        <h1 className="text-5xl md:text-7xl mb-6">
          Premium Indian Menswear
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-charcoal mb-12 font-light">
          Experience the pinnacle of luxury with our bespoke sherwanis, bandhgalas, and kurtas. Tailored to perfection for your special day.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="btn-primary">
            Explore Collection
          </button>
          <button className="btn-secondary">
            Book Consultation
          </button>
        </div>
      </main>

      {/* Showcasing Color Palette & Shadows */}
      <section className="w-full bg-pearl py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-center mb-16">Design Elements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="bg-alabaster luxury-shadow p-12 text-center border border-cashmere flex flex-col items-center">
              <div className="w-16 h-16 bg-obsidian rounded-full mb-6"></div>
              <h3 className="text-2xl mb-4">Obsidian Tailor</h3>
              <p className="text-charcoal font-light">The primary text and heavy UI color, softer than pure black.</p>
            </div>

            <div className="bg-alabaster luxury-shadow p-12 text-center border border-cashmere flex flex-col items-center">
              <div className="w-16 h-16 bg-antique-gold rounded-full mb-6"></div>
              <h3 className="text-2xl mb-4">Antique Gold</h3>
              <p className="text-charcoal font-light">The core luxury touch, used sparingly for accents and icons.</p>
            </div>

            <div className="bg-alabaster luxury-shadow p-12 text-center border border-cashmere flex flex-col items-center">
              <div className="w-16 h-16 bg-regal-wine rounded-full mb-6"></div>
              <h3 className="text-2xl mb-4">Regal Wine</h3>
              <p className="text-charcoal font-light">A nod to traditional Indian wedding wear, perfect for seasonal tags.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
