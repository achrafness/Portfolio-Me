const Certifications = () => {
    const certifications = [
        {
            title: "Legacy JavaScript Data Structures & Algorithms",
            organization: "source",
            date: "Issue date",
            position: "left"
        },
        {
            title: "Introduction to programming with Python",
            organization: "CS50",
            date: "Issue date",
            position: "right"
        },
        {
            title: "Project-0 Hackathon 3rd place",
            organization: "Elec Club",
            date: "Issue date",
            position: "left"
        },
        {
            title: "GDG Dev Challenges Backend dev 1st place",
            organization: "GDG Batna",
            date: "Aug 2024",
            position: "right"
        }
    ];

    return (
        <div className="bg-mirage py-12 bg-grid borders-gray">
            <div className="custom-container">
                <h2 className="text-6xl text-purple-heart text-center mb-12">Licenses & Certifications</h2>
                <div className="relative">
                    {/* Vertical Line in the Middle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-purple-heart"></div>

                    {/* Start Point */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 bg-purple-heart rounded-full"></div>

                    {/* End Point */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-6 h-6 bg-purple-heart rounded-full"></div>
                    
                    {/* Certifications */}
                    <div className="space-y-16">
                        {certifications.map((cert, index) => (
                            <div key={index} className={`flex items-center ${cert.position === 'left' ? 'justify-start' : 'justify-end'
                                }`}>
                                {/* Timeline Content */}
                                <div className={`relative ${cert.position === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'
                                    } w-[45%]`}>
                                    {/* Content Box */}
                                    <div className="bg-[rgba(19,32,38,0.8)] p-6 rounded-lg backdrop-blur-sm border border-purple-heart">
                                        <h3 className="text-white text-lg font-medium mb-3">
                                            {cert.title}
                                        </h3>
                                        <div className="flex justify-between text-sm text-purple-heart">
                                            <span className={cert.position === 'right' ? 'mr-auto' : 'ml-auto'}>
                                                {cert.organization}
                                            </span>
                                            <span className={cert.position === 'right' ? 'ml-4' : 'mr-4'}>
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