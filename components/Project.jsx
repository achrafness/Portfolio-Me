"use client";
import { useState, useEffect } from "react";

const Project = ({ title, description, images, interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Automatic slideshow
    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, interval);

            return () => clearInterval(timer); // Cleanup on unmount
        }
    }, [images.length, interval]);

    // Change image on hover
    const handleHover = () => {
        if (images.length > 1) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    return (
        <div className="rounded-3xl w-full sm:w-[400px] md:w-[500px] h-auto md:h-[620px] bg-mirage project text-white p-4 md:p-6">
            {/* Image Container */}
            <div
                className="w-full h-[250px] sm:h-[300px] md:h-[380px] bg-white rounded-lg overflow-hidden"
                onMouseEnter={handleHover}
            >
                {images.length > 0 && (
                    <img
                        src={images[currentImageIndex]}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                )}
            </div>

            {/* Text Content */}
            <div className="text-start py-2">
                <h1 className="text-3xl md:text-[40px] text-purple-heart">{title}</h1>
                <p className="text-lg md:text-2xl mt-2">{description}</p>
            </div>
        </div>
    );
};

export default Project;