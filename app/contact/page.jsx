import Navbar from "@/layout/Navbar"
import Parallax from "@/components/Parallax"
import { Contact } from "@/features/home"

export const metadata = {
  title: "Contact | Achraf Nessighaoui",
};

const page = () => {
  return (
    <div className="contact">
      <div className="hero bg-mirage overflow-hidden">
          <div className="h-full">
            <div className="py-8 h-full custom-container flex flex-col">
            <Navbar />
            <Parallax fromTop speed={0.15} fade className="mx-4 md:mx-16 py-12 md:py-20 text-white text-center">
              <h2 className="text-4xl md:text-5xl text-purple-heart pb-4 md:pb-7">Get in touch</h2>
              <p className="text-xl md:text-3xl leading-7 md:leading-9">
                Open to internships, CTF collaborations and security or
                development projects. Send me a message below, or reach me at{" "}
                <a href="mailto:achraf.nessighaoui13@gmail.com" className="text-purple-heart break-all">
                  achraf.nessighaoui13@gmail.com
                </a>
                .
              </p>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="borders-gray-top">
        <Contact />
      </div>
    </div>
  )
}
export default page
