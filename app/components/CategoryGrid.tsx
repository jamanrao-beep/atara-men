"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "../lib/products";

export default function CategoryGrid() {
  return (
    <section className="max-w-[1600px] mx-auto w-full px-6 lg:px-10 py-24">
      <div className="text-center mb-16">
        <span className="text-accent-label text-antique-gold mb-4 block">CURATED FOR YOU</span>
        <h2 className="text-4xl md:text-5xl font-serif text-obsidian">Shop By Collection</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {categories.map((cat) => (
          <Link
            href={`/collections/${cat.slug}`}
            key={cat.slug}
            className="group relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Solid gradient scrim attached to the text container */}
            <div className="absolute inset-x-0 bottom-0 pt-20 pb-4 px-4 lg:pb-6 lg:px-6 flex flex-col justify-end bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-transparent">
              <h3 className="text-lg font-serif text-pearl mb-1 relative z-10">{cat.title}</h3>
              <p className="text-xs text-pearl/80 font-light tracking-wide relative z-10">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
