import Image from "next/image";
import skillsAnimation from "@/public/images/skills_animation.gif";
import Skill from "./Skill";

const Skills = () => {
  const skillsData = [
    {
      title: "Web App & Desktop App",
      skills: [
        { name: "React", iconName: "Cpu" },
        { name: "Next.js", iconName: "Database" },
        { name: "Node.js", iconName: "Settings" },
        // { name: "Electron", iconName: "Flask" },
        // { name: "TypeScript", iconName: "Code2" },
        // { name: "Redux", iconName: "Shield" },
      ],
    },
    {
      title: "Security",
      skills: [
        { name: "Penetration Testing", iconName: "Bug" },
        { name: "Network Security", iconName: "Network" },
        { name: "Cryptography", iconName: "Lock" },
        { name: "Security Auditing", iconName: "Shield" },
        { name: "Risk Assessment", iconName: "Shield" },
      ],
    },
    {
      title: "Problem Solving",
      skills: [
        { name: "Algorithms", iconName: "Cpu" },
        { name: "Data Structures", iconName: "Database" },
        { name: "System Design", iconName: "Settings" },
        { name: "Debugging", iconName: "Bug" },
        { name: "Performance Optimization", iconName: "Shield" },
      ],
    },
  ];

  return (
    <div className="bg-mirage py-8 md:py-12">
      <div className="custom-container">
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
          Skills
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Skills List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {skillsData.map((skill, index) => (
              <Skill key={skill.title} title={skill.title} skills={skill.skills} />
            ))}
          </div>

          {/* Animation Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[500px]"
            >
              <source src="/videos/skills_animation.webm" type="video/webm" />              
              <img src="/images/skills_animation.gif" alt="skills_animation animation" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;