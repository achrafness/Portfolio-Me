"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const spring = { type: "spring", stiffness: 70, damping: 16 };

// Hero content: drifts down by `speed` x the scroll distance (and can fade out).
// Only used once or twice per page, so the page-scroll listener stays cheap.
const HeroParallax = ({ children, className, speed, fade }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed], { clamp: false });
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <motion.div className={className} style={{ y, opacity: fade ? opacity : 1 }}>
      {children}
    </motion.div>
  );
};

// Default: reveals the element (fade + slide in) once when it enters the viewport.
// The scroll drift (+offset to -offset px) is a CSS scroll-driven animation
// (.parallax-drift in globals.css), so it runs off the main thread with no JS per scroll.
const Parallax = ({ children, className, offset = 30, fromTop = false, speed = 0.2, fade = false, delay = 0, x = 0 }) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (fromTop) {
    return (
      <HeroParallax className={className} speed={speed} fade={fade}>
        {children}
      </HeroParallax>
    );
  }

  return (
    <motion.div
      className={`${className ?? ""} ${offset ? "parallax-drift" : ""}`}
      style={offset ? { "--drift": `${offset}px` } : undefined}
      initial={{ opacity: 0, scale: 0.94, x, y: x ? 0 : 70 }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        default: { duration: 0.6, delay, ease: "easeOut" },
        x: { ...spring, delay },
        y: { ...spring, delay },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
