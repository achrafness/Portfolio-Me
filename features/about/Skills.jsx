import Image from "next/image";
import skillsAnimation from "@/public/images/skills_animation.gif";
import Skill from "./Skill";

const Skills = () => {
  const skillsData = [
    {
      title: "Offensive Security",
      skills: [
        { name: "Web Pentest", iconName: "Bug" },
        { name: "Red Teaming", iconName: "Swords" },
        { name: "CTF", iconName: "Flag" },
        { name: "Blue Teaming", iconName: "Shield" },
        { name: "Cryptography", iconName: "Lock" },
      ],
    },
    {
      title: "Dev",
      skills: [
        { name: "Python", iconName: "Code" },
        { name: "JavaScript", iconName: "Braces" },
        { name: "Bash", iconName: "Terminal" },
        { name: "React.js", iconName: "Atom" },
        { name: "Next.js", iconName: "Globe" },
        { name: "Express.js", iconName: "Server" },
        { name: "FastAPI", iconName: "Zap" },
        { name: "SQL & NoSQL", iconName: "Database" },
      ],
    },
    {
      title: "Infrastructure",
      skills: [
        { name: "Docker", iconName: "Box" },
        { name: "VPS", iconName: "Cloud" },
        { name: "Platform Deployment", iconName: "Rocket" },
      ],
    },
  ];

  const languages = ["Arabic (native)", "French", "English"];
  const softSkills = ["Leadership", "Problem solving", "Teamwork", "Creativity"];

  return (
    <div className="bg-mirage py-8 md:py-12">
      <div className="custom-container">
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
          Skills
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Skills List */}
          <div className="w-full lg:w-2/5 flex flex-col gap-8">
            {skillsData.map((skill, index) => (
              <Skill key={skill.title} title={skill.title} skills={skill.skills} />
            ))}
          </div>

          {/* Animation Image */}
          <div className="w-full lg:w-3/5 flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[700px]"
            >
              <source src="/videos/skills_animation.webm" type="video/webm" />              
              <img src="/images/skills_animation.gif" alt="skills_animation animation" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Languages & Soft Skills */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-8 md:mt-12 text-center">
          {[
            { title: "Languages", items: languages },
            { title: "Soft Skills", items: softSkills },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="text-xl md:text-2xl font-bold text-Pickled-Bluewoodapprox mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-base md:text-xl px-4 py-1 rounded-full border border-purple-heart text-white">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;