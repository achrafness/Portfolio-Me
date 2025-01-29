import express from "@/public/icons/express-js.svg"
import node from "@/public/icons/node-js.svg"
import react from "@/public/icons/react-js.svg"
import mongo from "@/public/icons/mongodb.svg"
import Image from "next/image"
const TechUsed = () => {
    const Images = [mongo, express,react,node]
    return (
        <div className="tech-used bg-mirage py-12 borders-gray bg-grid">
            <div className="custom-container">
                <h1 className="text-6xl text-white text-center mb-12"><span className="text-purple-heart">Technologies</span> I use</h1>
                <div className="flex justify-between px-24">
                    {Images.map((item,index)=>{
                        return (<Image src={item} key={index}/>)
                    })}
                </div>
            </div>
        </div>
    )
}
export default TechUsed