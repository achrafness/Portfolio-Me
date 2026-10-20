"use client"
import { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const TypewriterComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const typewriter = new Typewriter(el, {
      strings: ['Web Pentester', 'CTF Player', 'Red Teamer', 'Cybersecurity Student'],
      autoStart: true,
      loop: true,
      delay: 50,
    });
    // stop the animation loop when leaving the page so instances don't pile up
    return () => {
      typewriter.stop();
      el.innerHTML = '';
    };
  }, []);

  return <span ref={ref} className='text-purple-heart'></span>;
};

export default TypewriterComponent;
