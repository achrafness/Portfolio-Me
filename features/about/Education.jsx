import Image from "next/image";
import GDG from "@/public/images/google-developers-seeklogo.png";
import Nexus from "@/public/images/nexus.png";

const Education = () => {
  return (
    <div className="bg-mirage py-8 md:py-12 bg-grid borders-gray">
      <div className="custom-container">
        {/* Education Section */}
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
          Education
        </h2>
        <div className="text-white py-2 px-4 flex flex-col justify-center">
          <p className="text-lg md:text-3xl leading-7 md:leading-9 px-4 md:px-20">
            I studied Computer Science in the University of Batna 2 class of 2027
            (engineer’s degree, common in french speaking countries, and North
            Africa), after two years, I participated in a national exam to join
            the Higher National School of Computer Science and Numerical
            Technologies, in the City of Bejaia, which you have to be in the top
            10% of your class to be eligible for taking it. <br />
            The remaining 3 years of my degree will be in Bejaia, taking common
            core CS advanced courses for a year, and then choose a concentration
            to study for the last 2 years.
          </p>
        </div>

        {/* Extracurricular Activities Section */}
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mt-8 md:mt-12 mb-8 md:mb-12">
          Extracurricular Activities
        </h2>
        <div className="text-white text-lg md:text-xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Image src={GDG} height={52} alt="GDG Batna Logo" />
            <p className="text-center">GDG Batna, development team.</p>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Image src={Nexus} height={52} alt="NEXUS Bejaia Logo" />
            <p className="text-center">NEXUS Bejaia, leader development team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;