import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm"
const Contact = () => {
  return (
    <div className="bg-mirage text-center bg-grid">
      <div className="custom-container">
        <Reveal>
        <p className="text-6xl text-purple-heart py-8">Contact</p>
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm/>
        </Reveal>
      </div>
    </div>
  )
}
export default Contact