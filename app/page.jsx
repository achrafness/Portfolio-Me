import Navbar from "@/layout/Navbar";
import Greetings from "./features/Greetings";
import TechUsed from "./features/TechUsed";
import WhoAmI from "./features/WhoAmI";
import FeaturedProjects from "./features/FeaturedProjects";
import Contact from "./features/Contact";
const page = () => {
  return (
    <div className="home">
      <div className="hero bg-mirage h-screen">
        <div className="h-full">
          <div className="py-8 h-full custom-container">
            <Navbar />
            <Greetings />
          </div>
        </div>
      </div>
      <TechUsed/>
      <WhoAmI/>
      <FeaturedProjects/>
      <Contact/>
    </div>
  );
};
export default page;
