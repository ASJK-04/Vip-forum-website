import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Team', path: '/team' },
  { name: 'Events', path: '/events' },
  { name: 'Our Focus', path: '/focus' },
  { name: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E2761] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="inline-block bg-white rounded-xl p-2">
                <img
                  src="/Vip_Forum_logo_new.png"
                  alt="VIP Forum"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              A vibrant platform connecting teachers, engineers, doctors, lawyers, and professionals across Visakhapatnam. We celebrate strong values, foster powerful networks, and guide the next generation toward a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CADCFC] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Visakhapatnam, Andhra Pradesh, India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#CADCFC] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@vipforum.org</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#CADCFC] hover:text-[#1E2761] transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#CADCFC] hover:text-[#1E2761] transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#CADCFC] hover:text-[#1E2761] transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            2024 Visakha Intellectuals & Professionals Forum. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
