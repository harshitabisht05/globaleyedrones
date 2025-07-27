import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white pt-12 pb-6 px-6 mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Vision */}
        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            🌐 GlobalEye Drones
          </h2>
          <p
            className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Empowering industries with AI-powered drone intelligence to shape a smarter, safer, and more efficient future.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Quick Links
          </h3>
          <ul
            className="space-y-1 text-sm text-gray-600 dark:text-gray-400"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Fleet", path: "/fleet" },
              { label: "Solutions", path: "/solutions" },
              { label: "Case Studies", path: "/case-studies" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  className="hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Connect with Us
          </h3>
          <div className="flex gap-5 text-2xl text-gray-600 dark:text-gray-400">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-black dark:hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="text-center text-gray-500 dark:text-gray-400 text-xs mt-10 border-t border-gray-200 dark:border-gray-800 pt-4"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        © 2025 GlobalEye Drones. All rights reserved.
        <br />
        <span className="text-[10px] text-gray-400 dark:text-gray-500">
          Internship Project by Sentienta Quality AI (Harshita, Paridhi, Ojaswee)
        </span>
      </div>
    </footer>
  );
}
