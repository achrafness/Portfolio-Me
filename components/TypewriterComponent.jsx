"use client"
import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const TypewriterComponent = () => {
  useEffect(() => {
    const typewriter = new Typewriter('#typewriter', {
      strings: ['Full stack Dev', 'Cs Student'],
      autoStart: true,
      loop: true,
      delay: 50,
    });
  }, []); 

  return <span id="typewriter" className='text-purple-heart'></span>;
};

export default TypewriterComponent;
