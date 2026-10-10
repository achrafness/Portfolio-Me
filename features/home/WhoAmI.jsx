import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Link from "next/link"
import aboutMe from "@/public/icons/about me arrow.svg"
import Image from "next/image"
const WhoAmI = () => {
    return (
        <div className="who-am-i hero bg-mirage  relative w-full">
            <div className="h-full">
                <div className="pt-12 pb-6 h-full custom-container text-white text-center">
                    <Reveal>
                    <h1 className="md:text-6xl text-4xl">Who I am <span className="text-purple-heart">?</span></h1>
                    </Reveal>
                    <Parallax offset={20}>
                    <p className="text-xl md:text-4xl mx-auto pt-4">
                        I am Achraf, a cybersecurity engineering student at ESTIN Béjaïa,
                        passionate about offensive security. I break web apps in CTFs
                        and pentests, and I write challenges for others to break.
                    </p>
                    </Parallax>
                    <Link href="/about">
                        <div className="flex items-center justify-center md:justify-end mt-8 md:mt-10 cursor-pointer">
                            <p className="text-xl md:text-2xl text-right mr-2">about me</p>
                            <Image
                                src={aboutMe}
                                alt="About Me Arrow"
                                className="w-6  h-6 md:w-10 md:h-10"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default WhoAmI