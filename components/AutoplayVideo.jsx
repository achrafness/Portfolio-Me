"use client";
import { useEffect, useRef } from "react";

// Looping muted video that only plays while it is on screen.
const AutoplayVideo = ({ src, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} src={src} loop muted playsInline preload="metadata" className={className} />
  );
};

export default AutoplayVideo;
