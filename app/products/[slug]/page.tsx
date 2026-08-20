"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getProductBySlug, products, sizeChart } from "../../lib/products";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";
import FadeIn from "../../components/FadeIn";
import ProductReviews from "../../components/ProductReviews";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0]?.name || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const { addToCart } = useCart();

  // Fallback for unknown slugs
  if (!product) {
    const fallback = products[0];
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-alabaster flex items-center justify-center flex-col gap-6 py-24">
          <h1 className="text-3xl font-serif text-obsidian">Product Not Found</h1>
          <p className="text-charcoal font-light">Showing our featured piece instead.</p>
          <Link href={`/products/${fallback.slug}`} className="btn-primary px-8 py-3 text-sm">
            View {fallback.title}
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="bg-alabaster">
        {/* Breadcrumb */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-4">
          <nav className="flex items-center gap-2 text-xs text-charcoal">
            <Link href="/" className="hover:text-obsidian transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-obsidian transition-colors">Collections</Link>
            <span>/</span>
            <Link href={`/collections/${product.categorySlug}`} className="hover:text-obsidian transition-colors">{product.category}</Link>
            <span>/</span>
            <span className="text-obsidian">{product.title}</span>
          </nav>
        </div>

        {/* Product layout */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Image gallery */}
            <div className="lg:col-span-7">
              <FadeIn direction="none">
                {/* Main image */}
                <div className="relative aspect-[3/4] bg-pearl border border-cashmere overflow-hidden mb-4">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                  {product.badge && (
                    <span className="absolute top-6 left-6 text-[10px] tracking-[0.15em] uppercase font-medium bg-obsidian text-pearl px-4 py-2 z-10">
                      {product.badge}
                    </span>
                  )}
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} direction="none">
                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-3">
                    {product.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`relative w-20 h-24 border overflow-hidden transition-all ${
                          selectedImage === i ? "border-obsidian" : "border-cashmere hover:border-charcoal"
                        }`}
                      >
                        <Image src={img} alt={`${product.title} view ${i + 1}`} fill sizes="80px" className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </FadeIn>
            </div>

            {/* Right: Product info */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <FadeIn direction="up" delay={0.3}>
                <span className="text-accent-label text-antique-gold mb-3 block">{product.collection}</span>
                <h1 className="text-3xl md:text-4xl font-serif text-obsidian mb-3">{product.title}</h1>
                <p className="text-2xl text-obsidian font-light mb-8">{product.price}</p>

                <p className="text-charcoal font-light leading-relaxed mb-10">
                  {product.description}
                </p>

                {/* Color selector */}
                <div className="mb-8">
                  <span className="text-xs tracking-[0.15em] uppercase text-obsidian font-medium mb-4 block">
                    Color
                  </span>
                  <div className="flex gap-3">
                    {product.colors.map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-colors ${
                          selectedColor === c.name ? "border-obsidian" : "border-cashmere hover:border-obsidian"
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        <span className="sr-only">{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size selector */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs tracking-[0.15em] uppercase text-obsidian font-medium">Select Size</span>
                    <button
                      onClick={() => setShowSizeChart(true)}
                      className="text-xs text-charcoal underline underline-offset-4 hover:text-obsidian transition-colors"
                    >
                      Size Guide
                    </button>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 border text-sm transition-all ${
                          selectedSize === size
                            ? "border-obsidian bg-obsidian text-pearl"
                            : "border-cashmere text-charcoal hover:border-obsidian"
                        } flex items-center justify-center font-medium`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to cart */}
                <button 
                  onClick={() => {
                    const colorDetails = product.colors.find(c => c.name === selectedColor) || product.colors[0];
                    addToCart({
                      id: `${product.slug}-${selectedSize}-${selectedColor}`,
                      product,
                      size: selectedSize,
                      colorName: colorDetails.name,
                      colorHex: colorDetails.hex,
                      quantity: 1
                    });
                  }}
                  className="btn-primary w-full py-5 text-sm mb-4"
                >
                  Add to Cart — {product.price}
                </button>

                <button className="btn-secondary w-full py-4 text-xs mb-10">
                  Add to Wishlist
                </button>

                {/* Accordions */}
                <div className="border-t border-cashmere">
                  {["Product Details", "Shipping & Delivery", "Returns & Exchange"].map((item) => (
                    <details key={item} className="border-b border-cashmere group">
                      <summary className="py-5 flex justify-between items-center cursor-pointer text-sm text-obsidian font-medium">
                        {item}
                        <svg className="w-4 h-4 text-charcoal group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </summary>
                      <div className="pb-5 text-sm text-charcoal font-light leading-relaxed">
                        {item === "Product Details" && (
                          <ul className="space-y-2 list-disc list-inside">
                            <li>Premium quality fabric with hand-finished details</li>
                            <li>Dry clean only</li>
                            <li>Made in India with ethically sourced materials</li>
                            <li>Model is 6&apos;1&quot; wearing size M</li>
                          </ul>
                        )}
                        {item === "Shipping & Delivery" && (
                          <p>Free shipping on orders above ₹25,000. Standard delivery in 5-7 business days. Express delivery available at checkout.</p>
                        )}
                        {item === "Returns & Exchange" && (
                          <p>We offer a 30-day hassle-free return and exchange policy. Items must be unworn with original tags attached.</p>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
          <ProductReviews />
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <FadeIn>
            <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pb-24">
              <h2 className="text-3xl font-serif text-obsidian mb-10">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Size Chart Modal */}
        {showSizeChart && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/40 backdrop-blur-sm" onClick={() => setShowSizeChart(false)}>
            <div className="bg-pearl max-w-lg w-full mx-6 p-8 relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowSizeChart(false)}
                className="absolute top-4 right-4 text-charcoal hover:text-obsidian transition-colors"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-serif text-obsidian mb-6">Size Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-cashmere">
                      {sizeChart.headers.map((h) => (
                        <th key={h} className="py-3 px-3 text-left text-xs tracking-wider uppercase text-charcoal font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeChart.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-cashmere/50">
                        {row.map((cell, i) => (
                          <td key={i} className={`py-3 px-3 ${i === 0 ? "font-medium text-obsidian" : "text-charcoal font-light"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-charcoal mt-4 font-light">All measurements are in inches. For the best fit, we recommend getting measured by a professional tailor.</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
