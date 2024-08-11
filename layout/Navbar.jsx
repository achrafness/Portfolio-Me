import Link from "next/link"
import Logo from "@/components/Logo"
const Navbar = () => {
    return (
        <div className="navbar flex justify-between items-center px-12 py-6 mx-16 navbar border-solid border-Pickled-Bluewoodapprox border-[1.5px]  bg-transparent">
            <Logo />
            <ul className="flex gap-8 text-white text-2xl">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="contact">Contact</Link></li>
            </ul>
        </div>
    )
}
export default Navbar