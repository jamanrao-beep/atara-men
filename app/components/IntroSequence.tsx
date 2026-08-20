"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroSequence({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide the intro sequence after 4 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro-layer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-alabaster flex flex-col items-center justify-center"
          >
            {/* We can show a 3D element revolving in the center of the intro - REMOVED */}
            
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-[200px] flex justify-center"
              >
                <Image 
                  src="/assets/images/atara_croped_logo.png" 
                  alt="Atara Men" 
                  width={250} 
                  height={250} 
                  className="mb-8 opacity-90 w-full h-auto"
                  priority
                  loading="eager"
                />
              </motion.div>
              
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "250px", opacity: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                className="h-[1px] bg-charcoal max-w-[80vw]"
              />
              
              <motion.p 
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 1, letterSpacing: "0.3em" }}
                transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
                className="text-accent-label text-charcoal mt-6 text-center px-4"
              >
                THE LUXURY EXPERIENCE
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
