"use client";

import Link from "next/link";
import { products } from "../lib/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  const featured = products.slice(0, 4);

  return (
    <section className="max-w-[1600px] mx-auto w-full px-6 lg:px-10 py-24">
      <div className="flex justify-between items-end mb-14">
        <div>
          <span className="text-accent-label text-antique-gold mb-3 block">HANDPICKED</span>
          <h2 className="text-4xl md:text-5xl font-serif text-obsidian">Best Sellers</h2>
        </div>
        <Link
          href="/collections"
          className="hidden md:flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-charcoal hover:text-obsidian transition-colors font-medium"
        >
          View All <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="md:hidden mt-10 text-center">
        <Link href="/collections" className="btn-secondary px-10 py-3 text-xs">
          View All Products
        </Link>
      </div>
    </section>
  );
}
