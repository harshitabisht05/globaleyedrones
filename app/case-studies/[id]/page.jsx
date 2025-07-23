import Image from 'next/image';
import Link from 'next/link';

const caseStudyDetails = {
  'flood-rescue-assam': {
    image: '/images/case-studies/flood-rescue.jpg',
    title: 'Flood Rescue in Assam',
    description: 'Deployed thermal drones to locate and rescue 120+ stranded civilians within 48 hours.',
    challenge: [
      'Severe floods isolated entire communities.',
      'Traditional rescue methods lacked aerial visibility.',
      'First responders had difficulty locating survivors in time.'
    ],
    solution:
      'Our rapid-deployment thermal drones were airborne within 2 hours of the first distress call. The drones scanned submerged areas, detecting body heat signatures in real-time. Teams used live GPS-coordinated maps to direct boats and helicopters efficiently, enabling faster rescues.',
    results: [
      'Located and helped rescue 120+ civilians within 48 hours.',
      'Response time reduced by 60% compared to previous floods.',
      'Enabled coordinated rescue between multiple agencies.'
    ],
    quote: '“Without GlobalEye’s drones, we wouldn’t have reached half the survivors in time.” – Disaster Response Leader',
  },

  'crop-health-punjab': {
    image: '/images/case-studies/crop-health.jpg',
    title: 'Crop Health Monitoring in Punjab',
    description: 'Improved crop yield by 20% using NDVI drone analytics.',
    challenge: [
      'Farmers lacked timely insight into crop stress.',
      'Manual inspections were limited and labor-intensive.',
      'Overuse of pesticides degraded soil quality.'
    ],
    solution:
      'AI-powered drones with NDVI cameras were deployed weekly across farms. These aerial surveys provided detailed vegetation health data, allowing farmers to act precisely where intervention was needed. They minimized chemical use and boosted productivity sustainably.',
    results: [
      '20% increase in crop yield.',
      'Pesticide use reduced by over 35%.',
      'Farmers saved 100+ work hours per season.'
    ],
    quote: '“GlobalEye turned guesswork into data-driven precision farming.” – Progressive Farmer',
  },

  'pipeline-monitoring-maharashtra': {
    image: '/images/case-studies/pipeline-monitoring.jpg',
    title: 'Pipeline Monitoring in Maharashtra',
    description: 'Prevented a major oil leak by identifying cracks in 70 km of pipeline using thermal imaging.',
    challenge: [
      'Manual inspection of long pipeline stretches was inefficient.',
      'Cracks and leaks were often discovered too late.',
      'There were recurring safety hazards for inspectors.'
    ],
    solution:
      'We implemented thermal imaging drones to scan the entire 70 km pipeline in just two days. The system flagged temperature anomalies, cracks, and stress points. Maintenance crews were dispatched to exact GPS coordinates, preventing a major spill before it happened.',
    results: [
      'Potential leak prevented across 70 km of pipeline.',
      'Inspection time reduced by 80%.',
      'Improved worker safety with zero on-site accidents.'
    ],
    quote: '“GlobalEye’s drones saved us millions in damages and downtime.” – OilCorp Safety Officer',
  },

  'port-security-gujarat': {
    image: '/images/case-studies/port-security.jpg',
    title: 'Port Security in Gujarat',
    description: 'Enhanced surveillance at a major port, reducing unauthorized access by 90%.',
    challenge: [
      'Large perimeter with blind spots made patrols inefficient.',
      'Frequent unauthorized intrusions disrupted operations.',
      'Lack of real-time aerial surveillance.'
    ],
    solution:
      'Our surveillance drones patrolled the port autonomously on predefined flight paths. They streamed live HD and infrared footage to the security HQ, while AI detected intrusions and raised instant alerts. Night vision enabled round-the-clock monitoring without fatigue.',
    results: [
      'Unauthorized access reduced by 90%.',
      'Security response time improved by 50%.',
      'Eliminated need for risky manual night patrols.'
    ],
    quote: '“We’ve never had such control over port security. It’s a game changer.” – Port Operations Manager',
  },

  'emergency-medical-delivery': {
    image: '/images/case-studies/medical-delivery.jpg',
    title: 'Emergency Medical Drone Delivery',
    description: 'Reduced medicine delivery time to remote villages by 75% using drone corridors.',
    challenge: [
      'Remote villages were hours away from hospitals.',
      'Monsoon seasons regularly disrupted roads.',
      'Delayed deliveries risked patient lives.'
    ],
    solution:
      'We built air corridors using automated drones that operated even in low-visibility conditions. Critical supplies like blood and vaccines were delivered directly to rural clinics in a fraction of the usual time. All flights were GPS-tracked and remotely monitored in real-time.',
    results: [
      '75% reduction in delivery times.',
      'Zero failed deliveries in over 100 missions.',
      'Improved survival rates during critical emergencies.'
    ],
    quote: '“GlobalEye’s drones became our fastest, most reliable medical lifeline.” – Rural Hospital Director',
  },
};


export default function CaseStudyPage({ params }) {
  const study = caseStudyDetails[params.id];
  if (!study) return notFound();

return (
 <div className="min-h-screen px-6 py-16 transition-colors duration-500 ease-in-out 
  bg-gradient-to-br 
  from-white via-blue-100 to-blue-300 
  dark:from-gray-900 dark:via-gray-950 dark:to-black"
>
      <div className="max-w-4xl mx-auto">

        {/* Image */}
        <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-xl mb-12 border border-blue-100 dark:border-cyan-900">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {study.title}
        </h1>

        {/* Short Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl" style={{ fontFamily: 'var(--font-body)' }}>
          Discover how GlobalEye’s drone technology empowered real-world missions and delivered measurable results.
        </p>

         {/* Challenge */}
          <div>
            <strong className="text-2xl font-semibold text-blue-700 dark:text-cyan-400 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Challenge:
            </strong>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              {study.challenge.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

        {/* Solution */}
        <h2 className="text-2xl font-semibold text-blue-700 dark:text-cyan-400 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Solution</h2>
        <p className="text-gray-800 dark:text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
          {study.solution}
        </p>

        {/* Results */}
          <div>
            <strong className="text-2xl font-semibold text-blue-700 dark:text-cyan-400 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Results:
            </strong>
            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mb-6" style={{ fontFamily: 'var(--font-body)' }}>
              {study.results.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

        {/* Quote */}
        <blockquote className="border-l-4 pl-4 italic text-blue-800 dark:text-cyan-400 border-blue-300 dark:border-cyan-600 mb-10">
          “{study.quote}”
        </blockquote>

        {/* CTA */}
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-400 dark:from-cyan-500 dark:to-blue-400 hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 rounded-full dark:text-black font-bold"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Talk to Our Team
        </button>

        {/* Back Link */}
        <div className="mt-6">
          <Link
            href="/case-studies"
            className="text-blue-700 dark:text-cyan-300 hover:underline transition-all duration-300"
          >
            ← Back to all case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
