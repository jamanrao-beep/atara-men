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
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/10 to-transparent" />
            {/* Text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-lg font-serif text-pearl mb-1">{cat.title}</h3>
              <p className="text-xs text-pearl/60 font-light tracking-wide">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
