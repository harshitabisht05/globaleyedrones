'use client';

import { Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h3 className="text-xl font-semibold text-white">GlobalEye Drones</h3>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Empowering industries through AI-driven aerial intelligence.
          </p>
        </div>

        <div className="flex space-x-4">
          <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} GlobalEye Drones. All rights reserved.
      </div>
    </footer>
  );
}
