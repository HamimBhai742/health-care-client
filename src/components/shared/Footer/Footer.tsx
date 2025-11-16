
'use client';

import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                HealthCare
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Providing exceptional healthcare services with cutting-edge technology and compassionate care for better health outcomes.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Services', 'Doctors', 'Appointments', 'Health Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Our Services</h4>
            <ul className="space-y-2">
              {['Emergency Care', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Radiology'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-300 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-slate-300 text-sm">
                  123 Healthcare Ave<br />
                  Medical District, City 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 shrink-0" />
                <p className="text-slate-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                <p className="text-slate-300 text-sm">info@healthcare.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Stay Updated</h4>
              <p className="text-slate-300 text-sm">Subscribe to our newsletter for health tips and updates</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent flex-1 lg:w-64"
              />
              <button className="px-6 py-2 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; 2024 HealthCare. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;