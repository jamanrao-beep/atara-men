"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  {
    label: "Wedding",
    href: "/collections/wedding",
    submenu: [
      { label: "For Grooms", href: "/collections/sherwanis" },
      { label: "For Family", href: "/collections/bandhgalas" },
      { label: "Haldi & Mehendi", href: "/collections/kurtas" },
    ],
  },
  {
    label: "Clothing",
    href: "/collections",
    submenu: [
      { label: "Sherwanis", href: "/collections/sherwanis" },
      { label: "Bandhgalas", href: "/collections/bandhgalas" },
      { label: "Kurta Sets", href: "/collections/kurtas" },
      { label: "Nehru Jackets", href: "/collections/nehru-jackets" },
      { label: "Indo-Western", href: "/collections/indo-western" },
    ],
  },
  { label: "Accessories", href: "/collections/accessories" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { openCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="w-full bg-obsidian text-pearl/80 text-xs py-2 px-6 hidden md:flex justify-between items-center z-50 relative">
        <div className="flex gap-6">
          <span className="tracking-wider">INR (₹)</span>
          <Link href="/contact" className="hover:text-pearl transition-colors tracking-wider">Find Stores</Link>
        </div>
        <div className="tracking-widest text-center flex-1">
          ENJOY A LUXURY FEEL
        </div>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-pearl transition-colors tracking-wider">Track Order</Link>
          <Link href="/contact" className="hover:text-pearl transition-colors tracking-wider">Contact</Link>
        </div>
      </div>

      {/* Main navigation */}
      <header className="w-full z-40 sticky top-0 transition-all duration-500">
        <div 
          className={`w-full transition-all duration-500 ${
            scrolled ? "py-4 px-4 md:px-8 bg-transparent" : "py-0 bg-alabaster"
          }`}
        >
          <div 
            className={`mx-auto transition-all duration-700 ease-in-out ${
              scrolled
                ? "max-w-6xl bg-white/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50 rounded-2xl px-6 lg:px-10"
                : "max-w-[1600px] px-6 lg:px-10"
            }`}
          >
            <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`w-6 h-[1.5px] bg-obsidian transition-transform ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`w-6 h-[1.5px] bg-obsidian transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-[1.5px] bg-obsidian transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>

            {/* Desktop nav links (left) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(link.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    className="text-xs tracking-[0.15em] uppercase font-medium text-obsidian hover:text-antique-gold transition-colors py-6 inline-block"
                  >
                    {link.label}
                  </Link>
                  {/* Submenu */}
                  {link.submenu && activeSubmenu === link.label && (
                    <div className="absolute top-full left-0 bg-pearl border border-cashmere min-w-[220px] py-4 shadow-[0_20px_40px_rgba(26,26,26,0.08)]">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-6 py-2.5 text-xs tracking-wider uppercase text-charcoal hover:text-obsidian hover:bg-alabaster transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Center Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0">
              <Image
                src="/assets/images/atara_croped_logo.png"
                alt="Atara Men"
                width={140}
                height={60}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav links (right) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-[0.15em] uppercase font-medium text-obsidian hover:text-antique-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-5">
              {/* Search */}
              <button aria-label="Search" className="text-obsidian hover:text-antique-gold transition-colors">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>
              {/* User */}
              <Link href="/contact" aria-label="Account" className="text-obsidian hover:text-antique-gold transition-colors hidden md:block">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </Link>
              {/* Cart */}
              <button
                onClick={openCart}
                aria-label="Cart"
                className="text-obsidian hover:text-antique-gold transition-colors relative"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-antique-gold text-pearl text-[9px] rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-pearl border-t border-cashmere">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-8 py-3.5 text-sm tracking-widest uppercase text-obsidian hover:text-antique-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pl-12">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-xs tracking-wider uppercase text-charcoal hover:text-obsidian"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
