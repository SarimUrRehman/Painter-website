import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-[#1C1C1E] border-b ${
        scrolled ? 'border-white/10 shadow-xl bg-[#1C1C1E]/95 backdrop-blur-md py-3' : 'border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#hero"
            aria-label="Florida Bay Painting LLC Home"
            className="focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] rounded-xl transition"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a
              href="#services"
              className="text-gray-200 hover:text-[#1BB5C8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] rounded px-1.5 py-1"
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              className="text-gray-200 hover:text-[#1BB5C8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] rounded px-1.5 py-1"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-[#1BB5C8] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1BB5C8] rounded px-1.5 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Action on Right: Red "Call Now" button visible on both mobile and desktop */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:+18137195188"
              className="inline-flex items-center gap-2 bg-[#D62828] hover:bg-[#B51E1E] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Call Florida Bay Painting LLC at +1 813 719 5188"
            >
              <Phone className="w-4 h-4 fill-white/20 animate-pulse" />
              <span className="hidden sm:inline">Call</span>
              <span className="font-bold tracking-tight">+1 (813) 719-5188</span>
            </a>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-[#1BB5C8]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1C1C1E] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl transition animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={closeMenu}
              className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-[#1BB5C8] py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <span>Services</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#why-choose-us"
              onClick={closeMenu}
              className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-[#1BB5C8] py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-between text-base font-medium text-gray-200 hover:text-[#1BB5C8] py-2 px-3 rounded-lg hover:bg-white/5"
            >
              <span>Contact & Free Quote</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </a>

            <div className="pt-3 border-t border-white/10 mt-2">
              <p className="text-xs text-[#F2B705] font-medium mb-2">
                "Give us a call and we will be glad to help."
              </p>
              <a
                href="tel:+18137195188"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-[#D62828] text-white font-bold py-3 rounded-lg shadow"
              >
                <Phone className="w-4 h-4" />
                Call +1 (813) 719-5188
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
