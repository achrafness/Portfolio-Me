import Navbar from "@/layout/Navbar";
import DesignerCredit from "@/components/DesignerCredit";
import Awards from "@/features/about/Awards";
import {
  Contact,
  Greetings,
  WhoAmI,
  WhatIDo
} from "@/features/home"
const page = () => {
  return (
    <div className="home">
      <div className="hero bg-mirage h-screen overflow-hidden">
          <div className="h-full">
            <div className="py-8 h-full custom-container flex flex-col">
              <Navbar />
              <Greetings />
            </div>
          </div>
      </div>
      <WhatIDo/>
      <WhoAmI/>
      <Awards featuredOnly />
      <Contact/>
      <DesignerCredit/>
    </div>
  );
};
export default page;
