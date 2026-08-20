import Image from "next/image";
import Link from "next/link";

export default function EditorialBanner() {
  return (
    <section className="max-w-[1600px] mx-auto w-full px-6 lg:px-10 pb-24">
      {/* Full-width editorial banner */}
      <div className="relative w-full min-h-[500px] overflow-hidden flex flex-col md:flex-row">
        {/* Left text panel */}
        <div className="w-full md:w-1/2 bg-obsidian p-12 lg:p-20 flex flex-col justify-center relative z-10">
          <span className="text-accent-label text-antique-gold mb-4">
            LIMITED TIME OFFER
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-pearl leading-tight mb-6">
            New Season.
            <br />
            New Styles.
          </h2>
          <p className="text-pearl/60 text-lg font-light mb-10 max-w-sm leading-relaxed">
            Up to 30% off on selected premium heritage pieces. Elevate your wardrobe this season.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-antique-gold text-obsidian px-10 py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-antique-gold/90 transition-colors self-start"
          >
            Shop Now
          </Link>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
          <Image
            src="/assets/images/4.png"
            alt="Heritage Craftsmanship"
            fill
            sizes="(max-width: 1024px) 100vw, 25vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Second editorial row — two cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="relative aspect-[16/9] overflow-hidden group">
          <Image
            src="/assets/images/1.png"
            alt="The Art of Dressing"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-10">
            <span className="text-accent-label text-antique-gold mb-2 block">FOR THE GROOM</span>
            <h3 className="text-2xl md:text-3xl font-serif text-pearl mb-4">The Wedding Edit</h3>
            <Link href="/collections/sherwanis" className="text-xs tracking-[0.15em] uppercase text-pearl border-b border-pearl/50 pb-1 hover:border-pearl transition-colors">
              Explore Collection
            </Link>
          </div>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden group">
          <Image
            src="/assets/images/3.png"
            alt="Everyday Luxury"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-10">
            <span className="text-accent-label text-antique-gold mb-2 block">FESTIVE SEASON</span>
            <h3 className="text-2xl md:text-3xl font-serif text-pearl mb-4">Everyday Luxury</h3>
            <Link href="/collections/kurtas" className="text-xs tracking-[0.15em] uppercase text-pearl border-b border-pearl/50 pb-1 hover:border-pearl transition-colors">
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
