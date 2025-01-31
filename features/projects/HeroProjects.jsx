import Image from "next/image";
import prototyping from "@/public/images/prototyping.gif";

const HeroProjects = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-16 my-8 md:my-0 h-full gap-8 md:gap-0 justify-center items-center">
      {/* Image Section */}
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <Image
          src={prototyping}
          height="450"
          width="450"
          className="size-[250px] sm:size-[300px] md:size-[375px]"
          alt="Prototyping animation"
        />
      </div>

      {/* Text Section */}
      <div className="text-4xl md:text-5xl w-full md:w-1/2 flex justify-center md:justify-start items-center text-white text-center md:text-left">
        <div>
          <h2 className="text-purple-heart pb-4 md:pb-7">Projects</h2>
          <p className="text-xl md:text-3xl leading-7 md:leading-9">
            This page showcases a collection of my full-stack development
            projects, where I've transformed ideas into functional, user-centric
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroProjects;