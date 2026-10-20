import Parallax from "@/components/Parallax";
import AutoplayVideo from "@/components/AutoplayVideo";

const HeroProjects = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-16 my-8 md:my-0 h-full gap-8 md:gap-0 justify-center items-center">
      {/* Image Section */}
      <Parallax fromTop speed={0.15} className="flex w-full md:w-1/2 justify-center items-center">
      <AutoplayVideo src="/videos/prototyping.webm" className="size-[250px] sm:size-[300px] md:size-[375px]" />
      </Parallax>

      {/* Text Section */}
      <Parallax fromTop speed={0.3} fade className="text-4xl md:text-5xl w-full md:w-1/2 flex justify-center md:justify-start items-center text-white text-center md:text-left">
        <div>
          <h2 className="text-purple-heart pb-4 md:pb-7">Projects</h2>
          <p className="text-xl md:text-3xl leading-7 md:leading-9">
            This page showcases a collection of my projects, from CTF
            platforms and developer tools to real-time web apps, where
            I've transformed ideas into functional, user-centric applications.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroProjects;