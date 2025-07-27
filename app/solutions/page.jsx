'use client';

import { motion } from 'framer-motion';
import IndustriesSection from '../components/IndustriesSection';
import SolutionCard from '../components/SolutionCard';
import Footer from '../components/Footer';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Crop Monitoring',
      image: '/images/case-studies/crop-health.jpg',
      challenge: 'Farmers struggle to detect crop diseases, irrigation issues, and pest outbreaks early.',
      solution: 'Our drones provide real-time multispectral imaging and AI insights for precision agriculture.',
    },
    {
      title: 'Disaster Response',
      image: '/images/case-studies/flood-rescue.jpg',
      challenge: 'Natural disasters block rescue teams and obscure affected zones.',
      solution: 'Drones deliver live aerial views, locate survivors, and drop emergency supplies safely.',
    },
    {
      title: 'Medical Delivery',
      image: '/images/case-studies/medical-delivery.jpg',
      challenge: 'Remote and inaccessible areas delay urgent medical aid delivery.',
      solution: 'GlobalEye drones ensure fast and safe delivery of medicines, blood units, and vaccines.',
    },
    {
      title: 'Infrastructure Inspection',
      image: '/images/case-studies/pipeline-monitoring.jpg',
      challenge: 'Manual inspection of bridges, pipelines, and towers is risky and time-consuming.',
      solution: 'Our drones use HD and thermal cameras to perform close inspections and detect faults.',
    },
    {
      title: 'Port & Border Security',
      image: '/images/case-studies/port-security.jpg',
      challenge: 'Large zones are difficult to monitor, leading to security lapses and intrusions.',
      solution: 'AI-powered patrol drones monitor perimeters, detect threats, and trigger alerts in real time.',
    },
  ];

  return (
    <main className="py-20 text-black dark:text-white px-6 bg-gradient-to-br from-white via-blue-100 to-blue-300 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] dark:text-blue-300 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          Our Solutions
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
          From smart farming to critical infrastructure and emergency response, our AI-powered drones are transforming industries.
        </p>
      </motion.div>

      <section className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SolutionCard {...item} />
          </motion.div>
        ))}
      </section>

      <IndustriesSection />
    </main>
  );
}
