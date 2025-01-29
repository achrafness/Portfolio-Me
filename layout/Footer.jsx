import Logo from "../components/Logo"
import email from "../public/icons/email.svg"
import linkedin from "../public/icons/linkedin.svg"
import github from "../public/icons/github-gray.svg"
import facebook from "../public/icons/facebook.svg"
import Image from "next/image"
const Footer = () => {
  const apps = [email, linkedin, github, facebook]
  return (
    <div className="bg-mirage py-5 borders-gray-top">
      <div className="px-32 flex justify-between items-center ">
        <div>
          <Logo />
        </div>
        <div className="flex gap-16">
          {apps.map((item, index) => {
            return (<Image src={item} key={index} />)
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer