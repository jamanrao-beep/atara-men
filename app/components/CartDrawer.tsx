"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-pearl z-[110] shadow-2xl flex flex-col"
        >
        <div className="flex items-center justify-between p-6 border-b border-cashmere">
          <h2 className="text-xl font-serif text-obsidian">Your Bag</h2>
          <button 
            onClick={closeCart}
            className="text-charcoal hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-60">
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <div>
                <p className="text-lg font-serif text-obsidian mb-2">Your bag is empty</p>
                <p className="text-sm text-charcoal font-light">Looks like you haven&apos;t added any items yet.</p>
              </div>
              <button onClick={closeCart} className="btn-secondary px-8 py-3 mt-4 text-xs">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-cashmere pb-6">
                  <Link href={`/products/${item.product.slug}`} onClick={closeCart}>
                    <div className="relative w-24 aspect-[3/4] bg-alabaster">
                      <Image 
                        src={item.product.images[0]} 
                        alt={item.product.title} 
                        fill 
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-sm font-medium text-obsidian hover:text-antique-gold transition-colors">
                        <Link href={`/products/${item.product.slug}`} onClick={closeCart}>
                          {item.product.title}
                        </Link>
                      </h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-charcoal hover:text-regal-wine transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-charcoal font-light mb-3">
                      Color: {item.colorName} | Size: {item.size}
                    </p>
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex items-center border border-cashmere">
                        <button 
                          className="px-3 py-1 text-obsidian hover:bg-alabaster transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >-</button>
                        <span className="px-3 text-xs font-medium text-obsidian">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 text-obsidian hover:bg-alabaster transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >+</button>
                      </div>
                      <p className="text-sm text-obsidian font-medium">
                        ₹{(item.product.priceNum * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-cashmere bg-alabaster/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm tracking-wider uppercase text-obsidian font-medium">Subtotal</span>
              <span className="text-lg font-serif text-obsidian">₹{cartTotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-charcoal font-light mb-6 text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <Link 
              href="/checkout"
              onClick={closeCart}
              className="btn-primary w-full py-4 text-sm tracking-widest block text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
