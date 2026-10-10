"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";

const STORAGE_KEY = "designer-credit-dismissed";

// News-style pop up thanking the designer; shown once per browser session
const DesignerCredit = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed z-50 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[380px] bg-mirage project rounded-2xl p-5 text-white"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-3 right-3 p-1 rounded-lg text-gray-400 hover:text-white hover:bg-purple-heart transition-colors"
          >
            <X size={18} />
          </button>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest text-white bg-purple-heart rounded-full px-3 py-1">
            <Sparkles size={14} /> Thanks
          </span>
          <p className="text-lg md:text-xl mt-3 pr-4">
            This website was designed by{" "}
            <span className="text-purple-heart">Hamza</span> in 2024. Thank you!
          </p>
          <a
            href="https://hamza-dzn.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-base text-gray-300 underline underline-offset-4 hover:text-white transition-colors"
          >
            hamza-dzn.me
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesignerCredit;
