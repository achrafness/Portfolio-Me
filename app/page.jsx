import Navbar from "@/layout/Navbar";
import {
  Contact,
  Greetings,
  FeaturedProjects,
  WhoAmI,
  TechUsed
} from "@/features/home"
const page = () => {
  return (
    <div className="home">
      <div className="hero bg-mirage h-screen">
          <div className="h-full">
            <div className="py-8 h-full custom-container flex flex-col">
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
