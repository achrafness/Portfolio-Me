import Reveal from "@/components/Reveal";
const Certifications = () => {
    // newest first; cards alternate left/right on the timeline
    const certifications = [
      {
        title: "Certified Penetration Testing Specialist (CPTS)",
        organization: "Hack The Box",
        date: "2026 · in progress",
      },
      {
        title: "Ethical Hacker",
        organization: "Cisco Networking Academy",
        date: "2026",
      },
      {
        title: "Network Defense",
        organization: "Cisco Networking Academy",
        date: "2026",
      },
      {
        title: "EF SET English Certificate · C1 Advanced (63/100)",
        organization: "EF Education First",
        date: "2026",
      },
      {
        title: "TCF Tout public (French) · B2 (408/699)",
        organization: "France Éducation international",
        date: "2025",
      },
      {
        title: "CS50's Introduction to Programming with Python",
        organization: "Harvard University · edX",
        date: "2024",
      },
      {
        title: "Legacy JavaScript Algorithms and Data Structures",
        organization: "freeCodeCamp",
        date: "2024",
      },
      {
        title: "Introduction to Cybersecurity",
        organization: "Cisco Networking Academy",
        date: "2024",
      },
    ].map((cert, index) => ({ ...cert, position: index % 2 ? "right" : "left" }));
  
    return (
      <div className="bg-mirage py-8 md:py-12 bg-grid borders-gray overflow-x-clip">
        <div className="custom-container">
          <Reveal>
          <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
            Licenses & Certifications
          </h2>
          </Reveal>
          <div className="relative">
            {/* Vertical Line in the Middle */}
            <div className="hidden md:block   absolute left-1/2 transform -translate-x-1/2 h-full w-1 md:w-2 bg-purple-heart"></div>
  
            {/* Start Point */}
            <div className="hidden md:block  absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 md:w-6 md:h-6 bg-purple-heart rounded-full"></div>
  
            {/* End Point */}
            <div className="hidden md:block  absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-4 h-4 md:w-6 md:h-6 bg-purple-heart rounded-full"></div>
  
            {/* Certifications */}
            <div className="space-y-8 md:space-y-16">
              {certifications.map((cert, index) => (
                <Reveal
                  key={index}
                  x={cert.position === "left" ? -80 : 80}
                  className={`flex items-center justify-center ${cert.position === "left" ? "md:justify-start" : "md:justify-end"
                    }`}
                >
                  {/* Timeline Content */}
                  <div
                    className={`${cert.position === "left" ? "md:pr-12 text-right" : "md:pl-12 text-left"
                      } w-full md:w-1/2`}
                  >
                    {/* Content Box */}
                    <div className={`relative bg-[rgba(19,32,38,0.92)] ${cert.position === "left" ? "content-box-left" : "content-box-right"} p-4 md:p-6 rounded-lg border-2 border-purple-heart flex flex-col h-[200px] justify-between`}>
                      <h3 className="text-white text-left text-xl  md:text-3xl font-medium mb-2 md:mb-3">
                        {cert.title}
                      </h3>
                      <div className="flex justify-between text-xs md:text-sm text-purple-heart w-full">
                        <span >
                          {cert.organization}
                        </span>
                        <span>
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Certifications;