"use client"
import { useState, useEffect } from 'react';

const Project = ({ title, description, images, interval = 3000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle automatic slideshow
    useEffect(() => {
        if (images.length > 1) {
            const timer = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, interval);

            return () => clearInterval(timer); // Cleanup on unmount
        }
    }, [images.length, interval]);

    // Function to handle hover (switch to next image on hover)
    const handleHover = () => {
        if (images.length > 1) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    return (
        <div className="rounded-3xl w-[500px] h-[620px] bg-mirage project text-white p-6">
            <div
                className="w-[450px] h-[380px] bg-white rounded-lg overflow-hidden"
                onMouseEnter={handleHover} // Change image on hover
            >
                {images.length > 0 && (
                    <img
                        src={images[currentImageIndex]}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                )}
            </div>
            <div className="text-start py-2">
                <div className="text-[40px] text-purple-heart">
                    <h1>{title}</h1>
                </div>
                <p className="text-2xl">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Project;