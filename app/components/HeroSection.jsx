'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const fullText =
    'Revolutionizing agriculture, logistics, infrastructure, and more with smart aerial technology.';
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typingInterval);
    }, 30); // typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
  className="relative h-screen flex items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-white via-blue-100 to-blue-300 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"
  id="hero"
>
      {/* Floating Drones */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-24 h-24 md:w-32 md:h-32 z-0 opacity-70"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image src="/bg-drones/drone1.png" alt="Drone 1" fill className="object-contain" />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[10%] w-20 h-20 md:w-28 md:h-28 z-0 opacity-80"
        initial={{ y: -15 }}
        animate={{ y: 15 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image src="/bg-drones/drone2.png" alt="Drone 2" fill className="object-contain" />
      </motion.div>

      <motion.div
        className="absolute bottom-[5%] left-[15%] w-16 h-16 md:w-24 md:h-24 z-0 opacity-70"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image src="/bg-drones/drone1.png" alt="Drone 3" fill className="object-contain" />
      </motion.div>

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto relative z-10"
      >
       <motion.h1
  className=" text-xl sm:text-4xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}

  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  AI-Powered Drone Solutions
</motion.h1>



        <p className="font-outfit text-base sm:text-lg md:text-xl text-black/80 font-bold dark:text-gray-300 mb-6 whitespace-pre-wrap" style={{ fontFamily: 'var(--font-body)' }}>
          {typedText}
        </p>

<a
  href="#cta"
  className="font-outfit inline-block bg-gradient-to-r from-blue-600 to-teal-400 dark:from-blue-500 dark:to-cyan-500 font-semibold text-white dark:text-black  px-6 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
  style={{ fontFamily: 'var(--font-body)' }}
>
  Get Started
</a>

      </motion.div>
    </section>
  );
}
