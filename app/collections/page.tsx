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
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <h2 className="text-2xl md:text-3xl font-serif text-pearl mb-2">{cat.title}</h2>
                  <p className="text-sm text-pearl/60 font-light mb-4">{cat.description}</p>
                  <span className="text-xs tracking-[0.15em] uppercase text-pearl border-b border-pearl/50 pb-1 inline-block group-hover:border-pearl transition-colors">
                    Explore {cat.title}
                  </span>
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
