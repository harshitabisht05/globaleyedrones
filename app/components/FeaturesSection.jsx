'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🧑‍🌾',
    label: 'Agriculture',
    desc: `Monitor crop health with multispectral imaging, detect pests early, and automate spraying to increase yield while reducing costs.`,
  },
  {
    icon: '🏭',
    label: 'Industrial Security',
    desc: `Ensure facility safety with autonomous perimeter surveillance, thermal imaging for intruder detection, and 24/7 aerial monitoring.`,
  },
  {
    icon: '🚚',
    label: 'Logistics',
    desc: `Speed up last-mile delivery using drone fleets. Optimize routes with AI and overcome terrain challenges in real-time.`,
  },
  {
    icon: '🌉',
    label: 'Infrastructure',
    desc: `Inspect bridges, towers, and pipelines without human risk. Capture high-resolution visuals and detect structural issues instantly.`,
  },
  {
    icon: '🌊',
    label: 'Disaster Relief',
    desc: `Support rescue operations with aerial mapping of affected areas, victim localization via thermal sensors, and aid delivery.`,
  },
  {
    icon: '🌍',
    label: 'Environment',
    desc: `Track wildlife movements, monitor deforestation, detect pollution, and support conservation efforts with high-precision imagery.`,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-100 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-500">
      <h2 className="font-quicksand text-4xl sm:text-5xl text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-600 dark:from-cyan-300 dark:to-blue-400" style={{ fontFamily: 'var(--font-heading)' }}>
        Smart Drone Solutions
      </h2>

      <div className="flex flex-col gap-24 px-6 sm:px-10 max-w-7xl mx-auto">
        {features.map((item, i) => {
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center justify-between gap-12 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon & Heading */}
              <div className="flex-1 text-center md:text-left">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className=" text-3xl font-semibold text-blue-800 dark:text-cyan-400 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.label}
                </h3>
              </div>

              {/* Description Box */}
              <div className="flex-1">
                <div className="bg-white/70 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center md:text-left" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
