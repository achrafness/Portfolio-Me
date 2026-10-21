import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Link from "next/link";

// featuredOnly: home page version, shows the highlighted results + a link to the full list
const Awards = ({ featuredOnly = false }) => {
  const awards = [
    {
      year: "2025",
      place: "3rd place",
      event: "CTF El Djazair",
      featured: true,
      note: "National cybersecurity competition, 400 participants.",
    },
    { year: "2025", place: "2nd place", event: "Project 0", note: "Cyber, AI and coding." },
    {
      year: "2025",
      place: "10th place",
      event: "Machine-in-the-Middle Challenge, Hack The Box",
      featured: true,
      note: "Offensive security with AI agents.",
    },
    { year: "2025", place: "11th worldwide", event: "HackTheBox CTF, Hackfinity Battle", featured: true },
    { year: "2025", place: "4th worldwide", event: "CubeCTF", note: "CTFtime event.", featured: true },
    { year: "2024", place: "1st place", event: "GDG Dev-Challenge", featured: true },
    { year: "2024", place: "2nd place", event: "Code Master", note: "Programming contest." },
    { year: "2024", place: "3rd place", event: "Project 0", note: "Cyber, AI and coding." },
    { year: "2024", place: "4th place", event: "Dataland Datathon" },
    { year: "2024", place: "4th worldwide", event: "PearlCTF", note: "CTFtime event, 457 teams.", featured: true },
    { year: "2024", place: "8th place", event: "CTF Inghack", note: "18 teams." },
  ];
  const shown = featuredOnly ? awards.filter((award) => award.featured) : awards;

  return (
    <div className={`bg-mirage py-8 md:py-12 ${featuredOnly ? "borders-gray" : "bg-grid borders-gray-top"}`}>
      <div className="custom-container">
        <Reveal>
        <h2 className="text-4xl md:text-6xl text-purple-heart text-center mb-8 md:mb-12">
          Awards & Competitions
        </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {shown.map((award, index) => (
            <Parallax key={`${award.year}-${award.event}`} offset={[10, 20, 30][index % 3]} delay={(index % 3) * 0.12}>
            <div
              className="h-full bg-[rgba(19,32,38,0.92)] project rounded-2xl p-6 flex flex-col gap-2"
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

        {featuredOnly && (
          <div className="text-center">
            <Link href="/about">
              <button className="m-6 md:m-10 bg-purple-heart py-3 md:py-4 px-6 md:px-8 text-xl md:text-2xl text-white rounded-xl hover:bg-purple-700 transition-colors">
                ALL AWARDS
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Awards;
