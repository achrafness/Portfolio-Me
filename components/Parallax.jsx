"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

// Moves its children at a different speed than the page scroll.
// - default: reveals the element (fade + slide in) when it enters the viewport, then
//   drifts it from +offset to -offset px while it crosses the viewport
// - fromTop: for hero content, drifts down by `speed` x the scroll distance (and can fade out)
const Parallax = ({ children, className, offset = 30, fromTop = false, speed = 0.2, fade = false, delay = 0, x = 0 }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const yTop = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
  const opacityTop = useTransform(scrollY, [0, 600], [1, 0]);

  // reveal: starts shifted (down, or sideways when `x` is set) and springs into place
  const revealY = useSpring(x ? 0 : 70, { stiffness: 70, damping: 16 });
  const revealX = useSpring(x, { stiffness: 70, damping: 16 });
  const drift = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const yInView = useTransform([drift, revealY], ([d, r]) => d + r);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      revealY.set(0);
      revealX.set(0);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, delay, revealY, revealX]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (fromTop) {
    return (
      <motion.div ref={ref} className={className} style={{ y: yTop, opacity: fade ? opacityTop : 1 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: yInView, x: revealX }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
