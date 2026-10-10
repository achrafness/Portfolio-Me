import Navbar from "@/layout/Navbar"
import {
  HeroProjects,
  Projects
} from "@/features/projects"
const page = () => {
  return (
    <div className="projects">
      <div className="hero bg-mirage h-screen overflow-hidden">
          <div className="h-full">
            <div className="py-8 h-full custom-container flex flex-col">
            <Navbar />
            <HeroProjects/>
          </div>
        </div>
      </div>
      <Projects />      
    </div>
  )
}
export default page