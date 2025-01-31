const Certifications = () => {
    const certifications = [
      {
        title: "Legacy JavaScript Data Structures & Algorithms",
        organization: "source",
        date: "Issue date",
        position: "left",
      },
      {
        title: "Introduction to programming with Python",
        organization: "CS50",
        date: "Issue date",
        position: "right",
      },
      {
        title: "Project-0 Hackathon 3rd place",
        organization: "Elec Club",
        date: "Issue date",
        position: "left",
      },
      {
        title: "GDG Dev Challenges Backend dev 1st place",
        organization: "GDG Batna",
        date: "Aug 2024",
        position: "right",
      },
    ];
  
    return (
      <div className="bg-mirage py-8 md:py-12 bg-grid borders-gray">
        <div className="custom-container">
          <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
            Licenses & Certifications
          </h2>
          <div className="relative">
            {/* Vertical Line in the Middle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 md:w-2 bg-purple-heart"></div>
  
            {/* Start Point */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 md:w-6 md:h-6 bg-purple-heart rounded-full"></div>
  
            {/* End Point */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-4 h-4 md:w-6 md:h-6 bg-purple-heart rounded-full"></div>
  
            {/* Certifications */}
            <div className="space-y-8 md:space-y-16">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`flex items-center ${cert.position === "left" ? "justify-start" : "justify-end"
                    }`}
                >
                  {/* Timeline Content */}
                  <div
                    className={`relative ${cert.position === "left" ? "pr-4 md:pr-8 text-right" : "pl-4 md:pl-8 text-left"
                      } w-full md:w-[45%]`}
                  >
                    {/* Content Box */}
                    <div className="bg-[rgba(19,32,38,0.8)] p-4 md:p-6 rounded-lg backdrop-blur-sm border border-purple-heart">
                      <h3 className="text-white text-base md:text-lg font-medium mb-2 md:mb-3">
                        {cert.title}
                      </h3>
                      <div className="flex justify-between text-xs md:text-sm text-purple-heart">
                        <span className={cert.position === "right" ? "mr-auto" : "ml-auto"}>
                          {cert.organization}
                        </span>
                        <span className={cert.position === "right" ? "ml-2 md:ml-4" : "mr-2 md:mr-4"}>
                          {cert.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Certifications;