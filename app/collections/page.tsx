import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { categories } from "../lib/products";

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-alabaster min-h-screen">
        {/* Hero */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-16 pb-12">
          <span className="text-accent-label text-antique-gold mb-4 block">DISCOVER</span>
          <h1 className="text-5xl md:text-6xl font-serif text-obsidian mb-4">All Collections</h1>
          <p className="text-charcoal font-light text-lg max-w-lg">
            Explore our curated range of premium Indian menswear — from regal sherwanis to contemporary indo-western fusion.
          </p>
        </div>

        {/* Collections grid */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                href={`/collections/${cat.slug}`}
                key={cat.slug}
                className="group relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Solid gradient scrim attached to the text container */}
                <div className="absolute inset-x-0 bottom-0 pt-24 pb-8 px-8 lg:px-10 flex flex-col justify-end bg-gradient-to-t from-obsidian/90 via-obsidian/60 to-transparent">
                  <h2 className="text-2xl md:text-3xl font-serif text-pearl mb-2 relative z-10">{cat.title}</h2>
                  <p className="text-sm text-pearl/80 font-light mb-4 relative z-10">{cat.description}</p>
                  <div className="relative z-10">
                    <span className="text-xs tracking-[0.15em] uppercase text-pearl border-b border-pearl/50 pb-1 inline-block group-hover:border-pearl transition-colors">
                      Explore {cat.title}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
