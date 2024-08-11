import Image from "next/image"
import prototyping from "@/public/images/prototyping.gif"
const Greetings = () => {
    return (
        <div className="flex mx-16 py-8">
            <div className="flex w-1/2 justify-center items-center">
                <Image
                    src={prototyping}
                    height="450"
                    className="size-[375px]"
                    alt="Picture of the author"
                />
            </div>
            <div className="w-1/2 text-white py-2 px-4 flex flex-col justify-center">
                <h2 className="text-5xl text-purple-heart pb-7">Projects</h2>
                <p className="text-3xl leading-9">
                    This page showcases a collection
                    of my full-stack development
                    projects, where I've transformed
                    ideas into functional, user-centric
                    applications.
                </p>
            </div>
        </div>
    )
}
export default Greetings