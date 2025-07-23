'use client';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle'; // ✅ Import it

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* ✅ Dark mode toggle button on all pages */}
          <DarkModeToggle />
        </div>
    </nav>
  );
}