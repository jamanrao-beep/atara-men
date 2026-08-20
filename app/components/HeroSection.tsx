"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row">
      {/* Left content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-20 py-24 lg:py-0 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent-label text-antique-gold mb-6"
        >
          NEW SEASON
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-obsidian leading-[0.95] mb-8"
        >
          Elevate Your
          <br />
          <span className="italic font-normal">Everyday Look</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-charcoal text-lg font-light leading-relaxed max-w-md mb-12"
        >
          Timeless pieces, modern fits. Designed for confidence.
          Made for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <Link href="/collections" className="btn-primary px-10 py-4 text-sm">
            Shop New Arrivals
          </Link>
          <Link href="/collections" className="btn-secondary px-10 py-4 text-sm">
            Explore Collections
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-cashmere border-2 border-alabaster flex items-center justify-center text-[10px] text-charcoal font-medium"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium text-obsidian">4.9K+</p>
            <p className="text-xs text-charcoal">Happy Customers</p>
          </div>
        </motion.div>
      </div>

      {/* Right image */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto relative overflow-hidden">
        <Image
          src="/assets/images/1.png"
          alt="Premium Indian Menswear - Atara Men Collection"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
          priority
          loading="eager"
        />
        {/* Subtle gradient overlay on mobile for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster/20 to-transparent lg:hidden" />
      </div>
    </section>
  );
}
