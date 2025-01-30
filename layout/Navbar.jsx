import Link from "next/link";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center px-4 md:px-12 py-6 mx-4 md:mx-16 border-solid border-Pickled-Bluewoodapprox border-[1.5px] bg-transparent">
      <Logo />
      <ul className="flex gap-4 md:gap-8 text-white text-xl md:text-2xl">
        <li><Link href="/" aria-label="Home">Home</Link></li>
        <li><Link href="/projects" aria-label="Projects">Projects</Link></li>
        <li><Link href="/about" aria-label="About">About</Link></li>
        <li><Link href="/contact" aria-label="Contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;