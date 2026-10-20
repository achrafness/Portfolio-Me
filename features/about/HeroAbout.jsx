import Parallax from "@/components/Parallax";
import Image from "next/image";
import Achraf from "@/public/images/neon_photo.png";

const HeroAbout = () => {
  return (
    <div className="flex flex-col md:flex-row mx-4 md:mx-16 my-8 md:my-0 h-full gap-8 md:gap-0 justify-center items-center">
      {/* Image Section */}
      <Parallax fromTop speed={0.15} className="flex w-full md:w-1/2 justify-center items-center">
        <Image
          src={Achraf}
          height="500"
          width="500"
          className="size-[250px] sm:size-[350px] md:size-[420px]"
          alt="Picture of the author"
          priority
        />
      </Parallax>

      {/* Text Section */}
      <Parallax fromTop speed={0.3} fade className="text-4xl md:text-5xl w-full md:w-1/2 flex justify-center md:justify-start items-center text-white text-center md:text-left">
        <div>
          <h2 className="text-purple-heart pb-4 md:pb-7">About Me</h2>
          <p className="text-xl md:text-3xl leading-7 md:leading-9">
            I am Achraf, a web pentester and CTF player from Khenchela,
            Algeria. Passionate about offensive security, I am looking for
            an R&amp;D engineering internship in advanced attack emulation
            (Red Team).
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroAbout;