import Image from "next/image"
import Achraf from "@/public/images/neon_photo.png"
const HeroAbout = () => {
    return (
        <div className="flex mx-16 py-8">
            <div className="flex w-1/2 justify-center items-center">
                <Image
                    src={Achraf}
                    height="500"
                    className="size-[420px]"
                    alt="Picture of the author"
                />
            </div>
            <div className="w-1/2 text-white py-2 px-4 flex flex-col justify-center">
                <h2 className="text-5xl text-purple-heart pb-7">About Me</h2>
                <p className="text-3xl leading-9">
                    I am Achraf, a computer science student with many interests,
                    and a broad set of skills that extend beyond the keyboard and
                    screen. I hope this section gives you an idea on my skills
                    and what I can do.
                </p>
            </div>
        </div>
    )
}
export default HeroAbout