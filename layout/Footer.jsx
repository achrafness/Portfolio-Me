import Logo from "../components/Logo";
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const apps = [
    { icon: Mail, label: "Email", href: "mailto:achraf.nessighaoui13@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/achraf-abdelouadoud-nessighaoui", external: true },
    { icon: Github, label: "GitHub", href: "https://github.com/achrafness", external: true },
  ];

  return (
    <footer className="bg-mirage py-6 md:py-8 borders-gray-top">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          {/* Logo */}
          <Logo />

          {/* Social Icons */}
          <div className="flex gap-4">
            {apps.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={item.label}
                title={item.label}
                className="w-11 h-11 flex items-center justify-center rounded-xl border border-Pickled-Bluewoodapprox text-gray-300 hover:text-white hover:border-purple-heart hover:bg-purple-heart transition-colors"
              >
                <item.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-5 pt-5 border-t border-Pickled-Bluewoodapprox text-center text-sm md:text-base text-gray-400">
          © {new Date().getFullYear()} Achraf Nessighaoui
        </p>
      </div>
    </footer>
  );
};

export default Footer;
