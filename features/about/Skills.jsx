import Image from "next/image"
import skillsAnimation from "@/public/images/skills_animation.gif"
import Skill from "./Skill"
const Skills = () => {
  return (
    <div className="bg-mirage py-12"> 
      <div className="custom-container">
        <h2 className="text-6xl text-purple-heart text-center mb-12">Skills</h2>
        <div className="flex justify-center items-center gap-8">
          <div className="w-1/2 flex flex-col">
            <Skill />
            <Skill />
            <Skill />
          </div>
          <div className="w-1/2">
            <Image src={skillsAnimation} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills