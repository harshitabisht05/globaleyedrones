'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm font-body transition-colors duration-300" style={{ fontFamily: 'var(--font-body)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-2xl font-semibold text-[#0077b6] dark:text-white">GlobalEye Drones</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 ml-70 text-gray-800 dark:text-gray-200 text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#00b4d8] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Dark mode toggle and mobile menu button */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <button
              className="md:hidden text-gray-800 dark:text-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4 text-gray-800 dark:text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#00b4d8] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
