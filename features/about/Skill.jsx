"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Cpu, Database, Settings, Bug, Network, Lock, Shield } from "lucide-react";
import debounce from "lodash.debounce";

const Skill = ({ title, skills }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle skill as active

  // Debounced navigation handlers
  const handlePrevious = debounce(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? skills.length - 1 : prevIndex - 1));
  }, 300);

  const handleNext = debounce(() => {
    setCurrentIndex((prevIndex) => (prevIndex === skills.length - 1 ? 0 : prevIndex + 1));
  }, 300);

  // Map icon names to actual icon components
  const iconComponents = {
    Cpu,
    Database,
    Settings,
    Bug,
    Network,
    Lock,
    Shield,
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
        <div className="w-4/5  flex justify-between items-center gap-2 md:gap-4 px-2 md:px-4">
          {visibleSkills.map((skill, index) => {
            const IconComponent = iconComponents[skill.iconName];
            return (
              <div
                key={skill.name}
                className={`flex flex-col items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg transition-colors duration-300 ${
                  index === 1 ? "text-purple-heart" : "text-Pickled-Bluewoodapprox"
                }`}
              >
                {IconComponent && <IconComponent size={32} className="flex-shrink-0" />}
                <p className="text-sm md:text-xl font-medium text-center">
                  {skill.name}
                </p>
              </div>
            );      
          })}
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