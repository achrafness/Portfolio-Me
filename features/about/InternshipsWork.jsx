const InternshipsWork = () => {
  const experiences = [
    {
      title: "Technical Team Member",
      organization: "Nexus Security Club",
      location: "Béjaïa, Algeria",
      date: "Jan 2025 - Present",
      points: [
        "Organizing and hosting local and national CTFs.",
        "Authoring Web, Cryptography and AI Security challenges for NextZero CTF and NextRace CTF.",
        "Technical operations: VPS, Docker and platform deployment.",
        "Mentoring in IGNition, the club's cybersecurity training program.",
      ],
    },
    {
      title: "Development Team Lead",
      organization: "Nexus Security Club",
      location: "Béjaïa, Algeria",
      date: "Sep 2024 - Sep 2025",
      points: [
        "Built Cicada, the club's official CTF platform.",
        "Lead instructor of NexCamp, a web and mobile development workshop.",
        "Supervised DevClash, a development competition (jury and technical coordination).",
      ],
    },
    {
      title: "Telecommunications Intern",
      organization: "Algérie Télécom",
      location: "Khenchela, Algeria",
      date: "Jul - Aug 2024",
      points: [
        "Introduction to telecom infrastructure and transmission equipment.",
        "Technical assistance and network management.",
        "Took part in configuring and maintaining the access network and customer equipment.",
      ],
    },
  ];

  return (
    <div className="bg-mirage py-8 md:py-12">
      <div className="custom-container">
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
          Internships & Work Experience
        </h2>
        <div className="flex flex-col gap-8 w-full text-white">
          {experiences.map((item) => (
            <div key={item.title} className="bg-mirage border-2 border-purple-heart rounded-2xl p-6 md:p-8">
              <h3 className="text-3xl md:text-5xl">{item.title}</h3>
              <span className="block text-purple-heart text-xl md:text-3xl mt-1">
                {item.organization} · {item.date}
              </span>
              <span className="block text-Pickled-Bluewoodapprox text-lg md:text-xl">{item.location}</span>
              <ul className="text-lg md:text-2xl mt-4 space-y-2 list-disc pl-6 marker:text-purple-heart">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipsWork;
