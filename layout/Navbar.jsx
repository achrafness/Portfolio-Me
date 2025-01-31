"use client"
import Link from "next/link";
import Logo from "@/components/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`flex flex-col navbar ${isMenuOpen ? "pb-0 pt-6":"py-6"} md:py-6 mx-4 md:mx-16 border-solid border-Pickled-Bluewoodapprox border-[1.5px] bg-transparent`}>
      <div className="flex justify-between items-center px-4 md:px-12">
        <Logo />
        {/* desktop  */}
        <ul className="hidden md:flex gap-4 md:gap-8 text-white text-xl md:text-2xl">
          <li><Link href="/" aria-label="Home">Home</Link></li>
          <li><Link href="/projects" aria-label="Projects">Projects</Link></li>
          <li><Link href="/about" aria-label="About">About</Link></li>
          <li><Link href="/contact" aria-label="Contact">Contact</Link></li>
        </ul>
        {/* mobile  */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>
      <div>
      {isMenuOpen && (
          <ul className="flex flex-col space-y-2 px-2 py-4">
            <li>
              <Link
                href="/"
                aria-label="Home"
                onClick={closeMenu}
                className="text-white hover:text-gray-300 p-2 rounded-xl transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                aria-label="Projects"
                onClick={closeMenu}
                className="text-white hover:text-gray-300 p-2 rounded-xl transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                aria-label="About"
                onClick={closeMenu}
                className="text-white hover:text-gray-300 p-2 rounded-xl transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                aria-label="Contact"
                onClick={closeMenu}
                className="text-white hover:text-gray-300 p-2 rounded-xl transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
      )}
      </div>
    </nav>
  );
};

export default Navbar;