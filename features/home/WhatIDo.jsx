import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import { Bug, Swords, Server } from "lucide-react"

const WhatIDo = () => {
    const areas = [
        {
            icon: Bug,
            title: "Web Pentesting",
            description: "Finding and exploiting vulnerabilities in web applications.",
        },
        {
            icon: Swords,
            title: "Red Teaming",
            description: "Offensive security and attack emulation, including with AI agents.",
        },
        {
            icon: Server,
            title: "Infrastructure",
            description: "Deploying and managing platforms on VPS with Docker, including CTF platforms.",
        },
    ]
    return (
        <div className="what-i-do bg-mirage py-8 md:py-12 borders-gray bg-grid">
            <div className="custom-container">
                {/* Titles */}
                <Reveal>
                <h1 className="md:text-6xl text-4xl  text-white text-center mb-12">What I <span className="text-purple-heart">do</span></h1>
                </Reveal>
                {/* areas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                    {areas.map((item, index) => (
                        <Parallax key={item.title} offset={[10, 20, 30][index % 3]} delay={index * 0.12}>
                        <div className="h-full bg-[rgba(19,32,38,0.8)] project rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center text-center gap-3">
                            <item.icon size={56} className="text-purple-heart" />
                            <h2 className="text-2xl md:text-3xl">{item.title}</h2>
                            <p className="text-base md:text-lg text-gray-300">{item.description}</p>
                        </div>
                        </Parallax>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default WhatIDo
