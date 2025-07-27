import React from 'react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import TeamSection from '../components/TeamSection'; 
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white">
        <section className="py-16 px-4">
          <h1 className="text-4xl font-heading text-center mb-10 text-[#0077b6]">Contact Us</h1>
          <p className="text-center mb-8 text-lg">We’d love to hear from you. Reach out via form or follow us below.</p>

          <ContactForm />
          <SocialLinks />
        </section>
      </main>

      <Footer />
    </>
  );
}
