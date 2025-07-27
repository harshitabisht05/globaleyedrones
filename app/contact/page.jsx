import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import TeamSection from '../components/TeamSection'; 

export default function ContactPage() {
  return (
    <>
    <main className="py-20 text-black dark:text-white px-6 bg-gradient-to-br from-white via-blue-100 to-blue-300 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>
        <section className="py-16 px-4">
          <h1 className="text-4xl font-heading text-center mb-10 text-[#0077b6]">Contact Us</h1>
          <p className="text-center mb-8 text-lg" style={{ fontFamily: 'var(--font-body)' }}>We’d love to hear from you. Reach out via form or follow us below.</p>

          <ContactForm />
          <SocialLinks />
        </section>
      </main>

    </>
  );
}
