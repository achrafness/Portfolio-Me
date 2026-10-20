import Parallax from "@/components/Parallax";
import AutoplayVideo from "@/components/AutoplayVideo";
import TypewriterComponent from "@/components/TypewriterComponent";

const Greetings = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-16 my-8 md:my-0 h-full gap-8 md:gap-0 justify-center items-center">
      {/* Text Section */}
      <Parallax fromTop speed={0.15} fade className="text-4xl md:text-6xl w-full md:w-1/2 flex justify-center md:justify-start items-center text-white text-center md:text-left">
        <p>
          Greetings,
          <br />
          I am <span className="text-purple-heart">Achraf</span>
          <br />a <TypewriterComponent />
        </p>
      </Parallax>

      {/* Image Section */}
      <Parallax fromTop speed={0.3} className="flex w-full md:w-1/2 justify-center items-center">
        <AutoplayVideo src="/videos/programmer.webm" className="size-[300px] md:size-[400px]" />
      </Parallax>
    </div>
  );
};

export default Greetings;