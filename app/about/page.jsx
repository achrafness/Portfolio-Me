import Navbar from "@/layout/Navbar"
import { HeroAbout, Education, Skills, Certifications } from "@/features/about"
const page = () => {
  return (
    <div className="projects">
      <div className="hero bg-mirage h-screen">
          <div className="h-full">
            <div className="py-8 h-full custom-container flex flex-col">
            <Navbar />
            <HeroAbout />
          </div>
        </div>
      </div>
      <Education />
      <Skills />
      <Certifications />
    </div>
  )
}
export default page