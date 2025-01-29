import Link from "next/link"
import aboutMe from "@/public/icons/about me arrow.svg"
import Image from "next/image"
const WhoAmI = () => {
    return (
        <div className="who-am-i hero bg-mirage  relative w-full">
            <div className="h-full">
                <div className="pt-12 pb-6 h-full custom-container text-white text-center">
                    <h1 className="text-6xl">Who I am <span className="text-purple-heart">?</span></h1>
                    <p className="text-4xl">
                        I am Achraf, a computer science student with many interests, and a
                        broad set of skills that extend beyond the keyboard and screen.
                    </p>
                    <Link href="/about" >
                        <div className="flex items-center w-full justify-end mt-10 cursor-pointer">
                            <p className="text-2xl text-right">about me</p>
                            <Image src={aboutMe} sizes="10px" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default WhoAmI