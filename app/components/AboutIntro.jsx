'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutIntro() {
  return (
    <section
      className="relative py-24 px-4 sm:px-8 text-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-teal-100 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"
      id="about"
    >

      {/* Main Content */}
       <motion.h1
  className=" text-xl sm:text-4xl md:text-6xl mb-4 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent"style={{ fontFamily: 'var(--font-heading)' }}

  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  About Us
</motion.h1>

      <motion.p
        className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-outfit relative z-10"
        style={{ fontFamily: 'var(--font-body)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We build intelligent drones powered by AI for agriculture, surveillance, delivery, and environmental monitoring.
      </motion.p>
    </section>
  );
}
