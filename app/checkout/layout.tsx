import Image from "next/image";
import Link from "next/link";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-alabaster flex flex-col">
      {/* Distraction-free Checkout Header */}
      <header className="border-b border-cashmere bg-pearl py-6 px-6 lg:px-10 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/assets/images/ATARA_WHITE_CROPPED.png"
            alt="Atara Men"
            width={120}
            height={45}
            className="h-8 w-auto invert" // Invert for dark logo on light background if it's white text
          />
        </Link>
        <div className="flex items-center gap-2 text-obsidian text-sm font-medium">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Secure Checkout
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-6 lg:px-10 py-12">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-cashmere bg-pearl py-8 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal">
          <p>© 2026 Atara Men. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/policies/privacy" className="hover:text-obsidian transition-colors">Privacy Policy</Link>
            <Link href="/policies/terms" className="hover:text-obsidian transition-colors">Terms of Service</Link>
            <Link href="/policies/returns" className="hover:text-obsidian transition-colors">Returns & Exchange</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
