import Image from "next/image";
import Link from "next/link";
import { Product } from "../lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group flex flex-col">
      {/* Image container */}
      <div className="w-full aspect-[3/4] bg-pearl relative overflow-hidden mb-4 border border-cashmere">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase font-medium text-pearl px-3 py-1.5 ${
            product.badge.toLowerCase().includes('new') ? 'bg-antique-gold' : 'bg-obsidian'
          }`}>
            {product.badge}
          </span>
        )}
        {/* Wishlist */}
        <button
          className="absolute top-4 right-4 w-9 h-9 bg-pearl/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pearl"
          aria-label="Add to wishlist"
          onClick={(e) => e.preventDefault()}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>
        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 bg-obsidian/90 backdrop-blur-sm text-pearl text-center py-3 text-xs tracking-[0.15em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          Quick View
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 mt-4">
        <span className="text-[11px] tracking-[0.15em] uppercase text-obsidian font-semibold opacity-80">
          {product.collection}
        </span>
        <h3 className="text-sm font-medium text-obsidian group-hover:text-antique-gold transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-charcoal font-light">{product.price}</p>
        {/* Color swatches */}
        <div className="flex gap-1.5 mt-1">
          {product.colors.map((c) => (
            <div
              key={c.hex}
              className="w-3.5 h-3.5 rounded-full border border-cashmere"
              style={{ backgroundColor: c.hex }}
              title={c.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
