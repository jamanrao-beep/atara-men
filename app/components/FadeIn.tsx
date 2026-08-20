"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({ 
  children, 
  delay = 0,
  direction = "up" 
}: { 
  children: ReactNode; 
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...(direction !== "none" ? directions[direction] : {}) 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Custom easing for premium feel
      }}
    >
      {children}
    </motion.div>
  );
}
