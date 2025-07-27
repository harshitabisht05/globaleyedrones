'use client';

import { motion } from 'framer-motion';

export default function MissionSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-teal-100 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Mission & Vision
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            className="bg-white/60 dark:bg-gray-800/60 p-6 rounded-xl shadow-lg backdrop-blur-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-teal-400 mb-2">Mission</h3>
            <p className="text-gray-700 dark:text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
              Our mission is to empower industries with cutting-edge AI-powered drone technologies
              that solve real-world problems. We strive to enable smarter decision-making,
              optimize operations, and enhance safety in critical sectors.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/60 dark:bg-gray-800/60 p-6 rounded-xl shadow-lg backdrop-blur-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-teal-400 mb-2">Vision</h3>
            <p className="text-gray-700 dark:text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
              We envision a world where intelligent drones are integral to sustainable development—
              revolutionizing agriculture, boosting environmental protection, advancing logistics,
              and strengthening global security through autonomous innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
