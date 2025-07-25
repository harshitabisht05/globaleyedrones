'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Handle your submission logic here (e.g. send to backend)
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
    setError('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-4 text-gray-800 dark:text-white"
    >
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-neutral-900"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-neutral-900"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-neutral-900"
      />
      <button
        type="submit"
        className="bg-[#00b4d8] hover:bg-[#0077b6] text-white px-6 py-2 rounded shadow transition"
      >
        Send Message
      </button>
    </form>
  );
}
