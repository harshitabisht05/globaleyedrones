'use client';

import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="relative py-24 px-6 text-center shadow-2xl overflow-hidden transition-colors duration-500
                 bg-gradient-to-br from-white via-blue-100 to-cyan-200 
                dark:from-black dark:via-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent dark:from-cyan-600"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-cyan-300 dark:to-blue-400"
  style={{ fontFamily: 'var(--font-heading)' }}
>
  Ready to elevate your operations with drones?
</motion.h2>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg max-w-2xl mx-auto mb-10 text-gray-700 dark:text-gray-300"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Book a free demo or connect with our team to explore how GlobalEye Drones can optimize your operations with aerial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button
            className="bg-gradient-to-r from-blue-600 to-teal-400 dark:from-blue-500 dark:to-cyan-500
                      hover:from-blue-700 hover:to-teal-500
                      text-white dark:text-black font-semibold
                      px-6 py-3 rounded-full text-base
                      flex items-center gap-2
                      shadow-md hover:shadow-lg
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Calendar className="w-4 h-4" /> Book a Demo
          </button>

          <button
            className="bg-transparent border border-blue-700 text-blue-700
                      dark:border-gray-300 dark:text-gray-200
                      hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-100
                      dark:hover:from-cyan-900 dark:hover:to-blue-900
                      hover:text-blue-800 dark:hover:text-white
                      px-6 py-3 rounded-full text-base
                      font-medium flex items-center gap-2
                      shadow-md hover:shadow-lg
                      transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Mail className="w-4 h-4" /> Contact Us
          </button>

        </motion.div>
      </div>
    </section>
  );
}
