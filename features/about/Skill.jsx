"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Database, Bug, Lock, Shield, Swords, Flag, Code, Braces, Terminal, Atom, Globe, Server, Zap, Box, Cloud, Rocket } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Skill = ({ title, skills }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle skill as active

  // Navigation handlers
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
  };

  // Map icon names to actual icon components
  const iconComponents = {
    Database,
    Bug,
    Lock,
    Shield,
    Swords,
    Flag,
    Code,
    Braces,
    Terminal,
    Atom,
    Globe,
    Server,
    Zap,
    Box,
    Cloud,
    Rocket,
  };

  // Calculate the indices of the visible skills
  const visibleSkills = [
    skills[(currentIndex - 1 + skills.length) % skills.length], // Left skill
    skills[currentIndex], // Middle (active) skill
    skills[(currentIndex + 1) % skills.length], // Right skill
  ];

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-Pickled-Bluewoodapprox">
          {title}
        </h3>
      </div>
      <div className="skill flex items-center px-1 md:px-2 justify-between">
        <button
          onClick={handlePrevious}
          className="p-2 rounded-full text-purple-heart hover:bg-gray-100"
          aria-label="Previous skill"
        >
          <ChevronLeft size={24} />
        </button>
        {/* Equal columns keep the active skill centered; items slide to their new slot */}
        <div className="w-4/5 grid grid-cols-3 items-center gap-2 md:gap-4 px-2 md:px-4 overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleSkills.map((skill, index) => {
              const IconComponent = iconComponents[skill.iconName];
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: index === 1 ? 1 : 0.6, scale: index === 1 ? 1.15 : 0.9 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className={`flex flex-col items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg transition-colors duration-300 ${
                    index === 1 ? "text-purple-heart" : "text-Pickled-Bluewoodapprox"
                  }`}
                >
                  {IconComponent && <IconComponent size={32} className="flex-shrink-0" />}
                  <p className="text-sm md:text-xl font-medium text-center">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full text-purple-heart hover:bg-gray-100"
          aria-label="Next skill"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Skill;