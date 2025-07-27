'use client';

import IndustriesSection from '../components/IndustriesSection';
import SolutionCard  from '../components/SolutionCard'; 
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
    <main className="min-h-screen py-16 px-4 bg-white dark:bg-black text-gray-800 dark:text-white">
      <h1 className="text-4xl font-heading text-center text-[#0077b6] mb-12">Our Solutions</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <SolutionCard key={index} {...item} />
        ))}
      </div>
      <IndustriesSection/>
      <Footer />
    </main>
  );
}
