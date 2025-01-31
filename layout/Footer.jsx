import Logo from "../components/Logo";
import email from "../public/icons/email.svg";
import linkedin from "../public/icons/linkedin.svg";
import github from "../public/icons/github-gray.svg";
import facebook from "../public/icons/facebook.svg";
import Image from "next/image";

const Footer = () => {
  const apps = [email, linkedin, github, facebook];

  return (
    <div className="bg-mirage py-5 borders-gray-top">
      <div className="px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Logo />
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 md:gap-16">
          {apps.map((item, index) => (
            <div key={index} className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <Image
                src={item}
                alt={`Social icon ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;  