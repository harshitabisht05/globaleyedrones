'use client';

import CaseStudyCard from '../components/CaseStudyCard';

const caseStudies = [
  {
    id: 'flood-rescue-assam',
    title: 'Flood Rescue in Assam',
    industry: 'Disaster Management',
    summary: 'Deployed thermal drones to locate and rescue 120+ stranded civilians within 48 hours.',
    image: '/images/case-studies/flood-rescue.jpg',
  },
  {
    id: 'crop-health-punjab',
    title: 'Crop Health Monitoring in Punjab',
    industry: 'Agriculture',
    summary: 'Improved crop yield by 20% using NDVI drone analytics.',
    image: '/images/case-studies/crop-health.jpg',
  },
  {
    id: 'pipeline-monitoring-maharashtra',
    title: 'Pipeline Monitoring in Maharashtra',
    industry: 'Infrastructure',
    summary: 'Prevented a major oil leak by identifying cracks in 70 km of pipeline using thermal imaging.',
    image: '/images/case-studies/pipeline-monitoring.jpg',
  },
  {
    id: 'port-security-gujarat',
    title: 'Port Security in Gujarat',
    industry: 'Security & Surveillance',
    summary: 'Enhanced surveillance at a major port, reducing unauthorized access by 90%.',
    image: '/images/case-studies/port-security.jpg',
  },
  {
    id: 'emergency-medical-delivery',
    title: 'Emergency Medical Drone Delivery',
    industry: 'Healthcare',
    summary: 'Reduced medicine delivery time to remote villages by 75% using drone corridors.',
    image: '/images/case-studies/medical-delivery.jpg',
  },
];

export default function CaseStudiesPage() {
  return (
    <div
      className="min-h-screen px-6 md:px-20 py-16 transition-colors duration-500
      bg-gradient-to-br from-white via-blue-100 to-blue-300 
      dark:from-black dark:via-gray-900 dark:to-gray-800"
    >
      <h1
        className="text-4xl sm:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Real-World Impact with GlobalEye Drones
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
        Discover how our drone solutions are transforming industries—from agriculture to disaster relief—with measurable outcomes.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {caseStudies.map(cs => (
          <CaseStudyCard key={cs.id} {...cs} />
        ))}
      </div>
    </div>
  );
}
