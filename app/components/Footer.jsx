import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Logo & Vision */}
        <div>
          <h2 className="text-xl font-bold mb-2">🌐 GlobalEye Drones</h2>
          <p className="text-sm text-gray-400">Empowering industries with AI-powered drone intelligence.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/fleet" className="hover:text-white transition">Fleet</a></li>
            <li><a href="/solutions" className="hover:text-white transition">Solutions</a></li>
            <li><a href="/case-studies" className="hover:text-white transition">Case Studies</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="https://linkedin.com" target="_blank" className="hover:text-white"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs mt-10">
        © 2025 GlobalEye Drones. All rights reserved.
      </div>
    </footer>
  );
}
