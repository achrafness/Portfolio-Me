import express from "@/public/icons/express-js.svg"
import node from "@/public/icons/node-js.svg"
import react from "@/public/icons/react-js.svg"
import mongo from "@/public/icons/mongodb.svg"
import Image from "next/image"
const TechUsed = () => {
    const Images = [mongo, express, react, node]
    return (
        <div className="tech-used bg-mirage py-8 md:py-12 borders-gray bg-grid">
            <div className="custom-container">
                {/* Titles */}
                <h1 className="md:text-6xl text-4xl  text-white text-center mb-12"><span className="text-purple-heart">Technologies</span> I use</h1>
                {/* images */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4 md:px-24">
                    {Images.map((item, index) => (
                        <div key={index} className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                            <Image
                                src={item}
                                alt={`Tech icon ${index + 1}`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default TechUsed