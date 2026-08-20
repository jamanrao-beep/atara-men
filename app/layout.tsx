import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atara Men | Modern Indian Menswear",
  description: "Premium sherwanis, bandhgalas, and elegant menswear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodoni.variable} ${jost.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-sans bg-alabaster text-charcoal">
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
