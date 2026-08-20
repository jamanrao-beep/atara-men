"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ReturnsPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-alabaster min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h1 className="text-4xl font-serif text-obsidian mb-8">Returns & Exchange</h1>
          <div className="prose prose-sm prose-charcoal max-w-none">
            <p><strong>Last Updated: [Date]</strong></p>
            <p>[Insert your real returns and exchange policy content here. Detail the timeframe for returns, condition requirements, and how to initiate a return.]</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
