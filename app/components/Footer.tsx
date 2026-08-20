"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Craftsmanship", href: "/about" },
    { label: "Sustainability", href: "/about" },
    { label: "Careers", href: "/about" },
  ],
  help: [
    { label: "Contact Us", href: "/contact" },
    { label: "Shipping & Delivery", href: "/contact" },
    { label: "Returns & Exchange", href: "/contact" },
    { label: "FAQs", href: "/contact" },
  ],
  shop: [
    { label: "All Collections", href: "/collections" },
    { label: "Sherwanis", href: "/collections/sherwanis" },
    { label: "Bandhgalas", href: "/collections/bandhgalas" },
    { label: "Kurta Sets", href: "/collections/kurtas" },
    { label: "Nehru Jackets", href: "/collections/nehru-jackets" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-pearl/70">
      {/* Main footer */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/images/ATARA_WHITE_CROPPED.png"
              alt="Atara Men"
              width={160}
              height={60}
              className="h-12 w-auto mb-8 opacity-90"
            />
            <p className="text-sm leading-relaxed mb-8 max-w-xs">
              Premium Indian menswear crafted for the modern gentleman. Bespoke sherwanis, bandhgalas, and kurtas for life&apos;s most distinguished occasions.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Pinterest", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-10 h-10 border border-pearl/20 flex items-center justify-center hover:bg-pearl/10 hover:border-antique-gold transition-all"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-pearl font-medium mb-6">About Atara</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-pearl transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-pearl font-medium mb-6">Customer Service</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-pearl transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-pearl font-medium mb-6">Join The Circle</h4>
            <p className="text-sm mb-6 leading-relaxed">
              Subscribe for exclusive previews, early access to new collections, and members-only offers.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-pearl/20 px-4 py-3 text-sm text-pearl placeholder:text-pearl/40 focus:outline-none focus:border-antique-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-antique-gold text-obsidian px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-antique-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pearl/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-pearl/40">
            © 2026 Atara Men. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-pearl/40">
            <Link href="/policies/privacy" className="hover:text-pearl/70 transition-colors">Privacy Policy</Link>
            <Link href="/policies/terms" className="hover:text-pearl/70 transition-colors">Terms of Service</Link>
            <Link href="/policies/shipping" className="hover:text-pearl/70 transition-colors">Shipping Policy</Link>
            <Link href="/policies/returns" className="hover:text-pearl/70 transition-colors">Returns & Exchange</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
