'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Agriculture',
    icon: '🌾',
    challenges: 'Unpredictable pests, inefficient monitoring, water misuse.',
    solution: 'Real-time crop analysis, multispectral imaging, smart irrigation mapping.',
  },
  {
    title: 'Security',
    icon: '🔐',
    challenges: 'Large areas, slow response to intrusions, limited visibility.',
    solution: '24/7 aerial surveillance, AI-based anomaly detection, thermal tracking.',
  },
  {
    title: 'Logistics',
    icon: '📦',
    challenges: 'Last-mile delivery, hard-to-reach areas, manual tracking.',
    solution: 'Autonomous delivery drones with GPS and optimized routes.',
  },
  {
    title: 'Disaster Response',
    icon: '🚨',
    challenges: 'Blocked access routes, lack of situational awareness.',
    solution: 'Live video feeds, heat maps, victim detection with thermal imaging.',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
      <h2
  className="text-4xl sm:text-5xl leading-tight text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-cyan-300 dark:to-blue-400"
  style={{ fontFamily: 'var(--font-heading)' }}
>
  Industry Applications
</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {industry.icon}
              </div>
              <h3
  className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-cyan-300 dark:to-blue-400 group-hover:from-blue-800 group-hover:to-cyan-500 dark:group-hover:from-cyan-200 dark:group-hover:to-blue-300 transition-all duration-300"
  style={{ fontFamily: 'var(--font-heading)' }}
>
  {industry.title}
</h3>

              <p className="text-gray-700 dark:text-gray-300 mb-1" style={{ fontFamily: 'var(--font-body)' }}>
  <strong>Challenges:</strong>{' '}
  {industry.challenges}
</p>

              <p className="text-gray-700 dark:text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
                <strong >GlobalEye Solution:</strong> {' '}
  {industry.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
