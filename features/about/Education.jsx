import Image from "next/image";
import GDG from "@/public/images/google-developers-seeklogo.png";
import Nexus from "@/public/images/nexus.png";

const Education = () => {
  const schools = [
    {
      school: "ESTIN — Higher School of Computer Science and Digital Technologies",
      location: "Béjaïa, Algeria",
      degree: "Engineer's degree in Computer Science, Cybersecurity",
      date: "2024 - Present",
      details:
        "Admitted through the national entrance exam after a top ranking in the common core. Security track: operating systems security, network security, advanced cryptography, formal methods for security, information systems security audit, system and network administration, biometrics.",
    },
    {
      school: "University of Batna 2",
      location: "Batna, Algeria",
      degree: "Common core in Computer Science",
      date: "2022 - 2024",
      details:
        "Fundamentals of computer science: algorithms, data structures, object-oriented programming, databases, operating systems, networks, graph theory, probability and statistics.",
    },
  ];

  return (
    <div className="bg-mirage py-8 md:py-12 bg-grid borders-gray">
      <div className="custom-container">
        {/* Education Section */}
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
          Education
        </h2>
        <div className="text-white flex flex-col gap-8">
          {schools.map((item) => (
            <div key={item.school} className="bg-mirage border-2 border-purple-heart rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 md:gap-6">
                <h3 className="text-2xl md:text-4xl">{item.school}</h3>
                <span className="text-purple-heart text-lg md:text-2xl whitespace-nowrap">{item.date}</span>
              </div>
              <span className="block text-Pickled-Bluewoodapprox text-lg md:text-xl mt-1">
                {item.degree} · {item.location}
              </span>
              <p className="text-base md:text-xl mt-4">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Extracurricular Activities Section */}
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mt-8 md:mt-12 mb-8 md:mb-12">
          Extracurricular Activities
        </h2>
        <div className="text-white text-lg md:text-xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Image src={GDG} height={52} alt="GDG Batna Logo" />
            <p className="text-center">GDG Batna, development team.</p>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Image src={Nexus} height={52} alt="NEXUS Bejaia Logo" />
            <p className="text-center">Nexus Security Club Béjaïa, technical team.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
