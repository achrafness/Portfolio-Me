import Navbar from "@/layout/Navbar"
import HeroProjects from "./features/HeroProjects"
const page = () => {
  return (
    <div className="projects">
      <div className="hero bg-mirage h-screen">
        <div className="h-full">
          <div className="py-8 h-full custom-container">
            <Navbar />
            <HeroProjects/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page