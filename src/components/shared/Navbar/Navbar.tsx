'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Heart,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Stethoscope,
  Calendar,
  Users,
  ArrowRight
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      dropdown: [
        { href: '/services/cardiology', label: 'Cardiology', icon: Heart },
        { href: '/services/neurology', label: 'Neurology', icon: Stethoscope },
        { href: '/services/pediatrics', label: 'Pediatrics', icon: Users },
        { href: '/services/emergency', label: 'Emergency Care', icon: Phone }
      ]
    },
    { href: '/doctors', label: 'Doctors' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Bar with Animation */}
      <div className="bg-linear-to-r from-blue-600 via-blue-700 to-teal-500 text-white py-2 px-4 hidden md:block overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Emergency: +880-123-456789</span>
            </div>
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
              <Clock className="w-4 h-4" />
              <span>24/7 Available</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <MapPin className="w-4 h-4" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100 py-2'
          : 'bg-white/90 backdrop-blur-sm py-0'
      }`}>
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Enhanced Animation */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-teal-500 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse scale-110"></div>
                <Heart className="w-10 h-10 text-blue-600 group-hover:text-teal-500 transition-all duration-500 relative z-10 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 animate-ping"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent group-hover:from-teal-500 group-hover:to-blue-600 transition-all duration-500">
                  PHealth Care
                </span>
                <span className="text-xs text-gray-500 -mt-1">Your Health Partner</span>
              </div>
            </Link>

            {/* Desktop Navigation with Mega Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group py-2"
                  >
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-teal-500 group-hover:w-full transition-all duration-500"></span>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.label
                        ? 'opacity-100 visible transform translate-y-0'
                        : 'opacity-0 invisible transform -translate-y-4'
                    }`}>
                      <div className="p-4">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            href={dropItem.href}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-linear-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-300 group"
                          >
                            <dropItem.icon className="w-5 h-5 text-blue-600 group-hover:text-teal-500 transition-colors duration-300" />
                            <span className="text-gray-700 group-hover:text-gray-900 font-medium">{dropItem.label}</span>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                href="/appointment"
                className="relative bg-linear-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-6 h-6 text-gray-700 group-hover:text-red-500 transition-colors duration-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Enhanced Animation */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isOpen
            ? 'max-h-screen opacity-100 transform translate-y-0'
            : 'max-h-0 opacity-0 transform -translate-y-4 overflow-hidden'
        }`}>
          <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <div key={item.href} className={`transform transition-all duration-500 ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-4 text-gray-700 hover:text-blue-600 hover:bg-linear-to-r hover:from-blue-50 hover:to-teal-50 rounded-xl font-medium transition-all duration-300 group"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          href={dropItem.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                        >
                          <dropItem.icon className="w-4 h-4" />
                          <span>{dropItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className={`transform transition-all duration-500 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`} style={{ transitionDelay: '500ms' }}>
                <Link
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full bg-linear-to-r from-blue-600 to-teal-500 text-white px-6 py-4 rounded-xl font-medium hover:shadow-xl transition-all duration-300 mt-6"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-20' : 'h-16'}`}></div>
    </>
  );
};

export default Navbar;
