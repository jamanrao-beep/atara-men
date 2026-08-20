"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { getProductsByCategory, getCategoryBySlug, products } from "../../lib/products";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const category = getCategoryBySlug(slug);
  const categoryProducts = getProductsByCategory(slug);

  // Fallback: if slug is "new-arrivals", "wedding", or "accessories" show all products
  const displayProducts = categoryProducts.length > 0 ? categoryProducts : products;
  const title = category?.title || slug?.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") || "Collection";
  const description = category?.description || "Explore our curated selection of premium Indian menswear.";

  return (
    <>
      <Navbar />
      <main className="bg-alabaster min-h-screen">
        {/* Header */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-16 pb-12">
          <nav className="flex items-center gap-2 text-xs text-charcoal mb-8">
            <Link href="/" className="hover:text-obsidian transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-obsidian transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-obsidian">{title}</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-serif text-obsidian mb-3">{title}</h1>
          <p className="text-charcoal font-light text-lg max-w-lg mb-6">{description}</p>
          <p className="text-xs text-charcoal tracking-wider">{displayProducts.length} PIECES</p>
        </div>

        {/* Product grid */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {displayProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
