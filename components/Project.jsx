"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

const Project = ({ title, description, images, date, tech = [], interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3 });

    // Automatic slideshow, only while the card is on screen
    useEffect(() => {
        if (inView && images.length > 1) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, interval);

            return () => clearInterval(timer); // Cleanup on unmount
        }
    }, [inView, images.length, interval]);

    // Change image on hover
    const handleHover = () => {
        if (images.length > 1) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    return (
        <div className="rounded-3xl w-full sm:w-[400px] md:w-[500px] h-auto md:min-h-[620px] bg-mirage project text-white p-4 md:p-6">
            {/* Image Container */}
            <div
                ref={ref}
                className={`relative w-full h-[250px] sm:h-[300px] md:h-[380px] rounded-lg overflow-hidden ${images.length > 0 ? "bg-white" : "bg-grid borders-gray flex items-center justify-center"}`}
                onMouseEnter={handleHover}
            >
                {images.length > 0 ? (
                    // next/image serves a resized WebP/AVIF instead of the full 1920px PNG
                    <Image
                        src={images[currentImageIndex]}
                        alt={title}
                        fill
                        sizes="(max-width: 640px) 100vw, 500px"
                        className="object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                ) : (
                    <span className="text-4xl md:text-5xl text-Pickled-Bluewoodapprox">&lt; {title} /&gt;</span>
                )}
            </div>

            {/* Text Content */}
            <div className="text-start py-2">
                <div className="flex justify-between items-baseline gap-4">
                    <h1 className="text-3xl md:text-[40px] md:leading-tight text-purple-heart">{title}</h1>
                    {date && <span className="text-sm md:text-base text-Pickled-Bluewoodapprox whitespace-nowrap">{date}</span>}
                </div>
                <p className="text-lg md:text-2xl mt-2">{description}</p>
                {tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {tech.map((item) => (
                            <span key={item} className="text-sm md:text-base px-3 py-1 rounded-full border border-purple-heart text-white">
                                {item}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Project;
