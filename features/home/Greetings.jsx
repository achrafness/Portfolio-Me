import Image from "next/image"
import Programmer from "../../public/images/programmer.gif"
import TypewriterComponent from "@/components/TypewriterComponent"
const Greetings = () => {
  return (
    <div className="flex mx-16 ">
      <div className="text-6xl w-1/2 flex justify-start items-center text-white">
        <p>Greetings,<br />
          I am <span className="text-purple-heart">Achraf</span><br />
          a <TypewriterComponent /> </p>
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <Image
        src={Programmer}
        height="500"
        className="size-[400px]"
        alt="Picture of the author"
        />
      </div>
    </div>
  )
}
export default Greetings