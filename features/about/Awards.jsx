import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
const Awards = () => {
  const awards = [
    {
      year: "2025",
      place: "3rd place",
      event: "CTF El Djazair",
      note: "National cybersecurity competition, 400 participants.",
    },
    { year: "2025", place: "2nd place", event: "Project 0", note: "Cyber, AI and coding." },
    {
      year: "2025",
      place: "10th place",
      event: "Machine-in-the-Middle Challenge, Hack The Box",
      note: "Offensive security with AI agents.",
    },
    { year: "2025", place: "11th worldwide", event: "HackTheBox CTF, Hackfinity Battle" },
    { year: "2025", place: "4th worldwide", event: "CubeCTF", note: "CTFtime event." },
    { year: "2024", place: "1st place", event: "GDG Dev-Challenge" },
    { year: "2024", place: "2nd place", event: "Code Master", note: "Programming contest." },
    { year: "2024", place: "3rd place", event: "Project 0", note: "Cyber, AI and coding." },
    { year: "2024", place: "4th place", event: "Dataland Datathon" },
    { year: "2024", place: "4th worldwide", event: "PearlCTF", note: "CTFtime event, 457 teams." },
    { year: "2024", place: "8th place", event: "CTF Inghack", note: "18 teams." },
  ];

  return (
    <div className="bg-mirage py-8 md:py-12 bg-grid borders-gray-top">
      <div className="custom-container">
        <Reveal>
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
          Awards & Competitions
        </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {awards.map((award, index) => (
            <Parallax key={`${award.year}-${award.event}`} offset={[10, 20, 30][index % 3]} delay={(index % 3) * 0.12}>
            <div
              className="h-full bg-[rgba(19,32,38,0.8)] project rounded-2xl p-6 backdrop-blur-sm flex flex-col gap-2"
            >
              <div className="flex justify-between items-baseline">
                <span className="text-2xl md:text-3xl text-purple-heart">{award.place}</span>
                <span className="text-base md:text-lg text-Pickled-Bluewoodapprox">{award.year}</span>
              </div>
              <h3 className="text-xl md:text-2xl">{award.event}</h3>
              {award.note && <p className="text-sm md:text-base text-gray-300">{award.note}</p>}
            </div>
            </Parallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
