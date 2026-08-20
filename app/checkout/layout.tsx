import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

export const metadata = {
  title: "Secure Checkout - Atara Men",
};

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-alabaster flex flex-col font-sans text-obsidian">
      {/* Minimal Header */}
      <header className="w-full border-b border-cashmere bg-pearl relative z-10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image
              src="/assets/images/atara_croped_logo.png"
              alt="Atara Men"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
          <div className="flex items-center gap-2 text-xs text-charcoal tracking-widest uppercase font-medium">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Secure Checkout
          </div>
        </div>
      </header>

      {/* Checkout Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10 lg:py-16">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="w-full border-t border-cashmere py-6 text-center text-xs text-charcoal">
        <p>&copy; {new Date().getFullYear()} Atara Men. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="#" className="hover:text-obsidian transition-colors">Refund Policy</Link>
          <Link href="#" className="hover:text-obsidian transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-obsidian transition-colors">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
