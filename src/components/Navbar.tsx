'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['about', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-black/30 backdrop-blur-xl border-b border-[#DC143C]/20 shadow-lg shadow-[#DC143C]/5'
        : 'bg-black/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C]/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Link href="/" className="relative block transition-transform duration-300 hover:scale-105">
              <Image src="/images/ABYSS.png" alt="ABYSS" width={75} height={55} className="drop-shadow-[0_0_8px_rgba(220,20,60,0.3)]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/games"
                className="relative px-4 py-2 text-white/80 hover:text-[#DC143C] transition-all duration-300
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:bg-gradient-to-r after:from-[#DC143C] after:to-[#B01030]
                  after:transform after:scale-x-0 after:origin-right
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100 hover:after:origin-left
                  hover:translate-y-[-2px]"
              >
                Games
              </Link>
              {[
                { id: 'about', label: 'About' },
                { id: 'team', label: 'Team' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-white/80 hover:text-[#DC143C] transition-all duration-300
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                    after:bg-gradient-to-r after:from-[#DC143C] after:to-[#B01030]
                    after:transform after:scale-x-0 after:origin-right
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100 hover:after:origin-left
                    hover:translate-y-[-2px]
                    ${activeSection === item.id ? 'text-[#DC143C] after:scale-x-100' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#DC143C] focus:outline-none transition-colors duration-300
                after:absolute after:inset-0 after:bg-[#DC143C]/10 after:rounded-md after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-300`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/40 backdrop-blur-xl border-t border-[#DC143C]/20`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/games"
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#DC143C] hover:bg-[#DC143C]/10 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Games
          </Link>
          {[
            { id: 'about', label: 'About' },
            { id: 'team', label: 'Team' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                ${activeSection === item.id 
                  ? 'text-[#DC143C] bg-[#DC143C]/10' 
                  : 'text-white hover:text-[#DC143C] hover:bg-[#DC143C]/10'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
