import { Mail, Phone, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="text-center mt-12 space-y-4 text-gray-800 dark:text-white">
      <p className="flex items-center justify-center gap-2">
        <Mail size={18} /> contact@globaleye.ai
      </p>
      <p className="flex items-center justify-center gap-2">
        <Phone size={18} /> +91 98765 43210
      </p>

      <div className="flex justify-center gap-6 mt-4 text-[#00b4d8]">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} />
        </a>
      </div>
    </div>
  );
}
