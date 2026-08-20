"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ShippingPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-alabaster min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h1 className="text-4xl font-serif text-obsidian mb-8">Shipping Policy</h1>
          <div className="prose prose-sm prose-charcoal max-w-none">
            <p><strong>Last Updated: [Date]</strong></p>
            <p>[Insert your real shipping policy content here. Outline processing times, shipping methods, international shipping terms, and duties.]</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
