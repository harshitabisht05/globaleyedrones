// Write about the team members and their roles
'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Harshita',
    role: 'Frontend Developer Intern',
    image: '/images/Team/harshita.jpg', // optional: if added
  },
  {
    name: 'Paridhi',
    role: 'Frontend Developer Intern',
    image: '/images/Team/paridhi.jpg',
  },
  {
    name: 'Ojaswee',
    role: 'Frontend Developer Intern',
    image: '/images/Team/ojaswee.jpg',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white dark:bg-black text-center px-4">
      <h2
        className="text-4xl font-semibold mb-12"
        style={{ fontFamily: 'var(--font-heading)', color: '#0077b6' }}
      >
        Meet Our Frontend Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-[#00b4d8]"
              />
            )}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white" >{member.name}</h3>
            <p className="text-sm text-[#00b4d8] dark:text-[#00b4d8]"style={{ fontFamily: 'var(--font-body)' }}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
