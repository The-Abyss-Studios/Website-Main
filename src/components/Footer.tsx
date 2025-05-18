'use client';

import Image from 'next/image';

interface FooterProps {
  handleNavClick?: (sectionId: string) => void;
}

export default function Footer({ handleNavClick }: FooterProps) {
  return (
    <footer className="relative py-12 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#DC143C]/5 to-black/0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#DC143C]/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C]/20 to-transparent rounded-lg blur-xl"></div>
              <Image src="/images/ABYSS.png" alt="ABYSS" width={100} height={75} className="relative drop-shadow-[0_0_8px_rgba(220,20,60,0.3)]" />
            </div>
            <p className="text-white/60 text-sm">
              Crafting immersive gaming experiences that push the boundaries of entertainment
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              {['Games', 'About', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick?.(item.toLowerCase())}
                  className="text-white/60 hover:text-[#DC143C] transition-colors duration-300 text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {[
                { name: 'Twitter', icon: "/images/x.svg" , link: "https://x.com/theabyssstudios"},
                { name: 'Instagram', icon: "/images/instagram.svg" , link: "https://www.instagram.com/abyssstudios_._"},
                { name: 'LinkedIn', icon: "/images/linkedin.svg" , link: "https://www.linkedin.com/company/the-abyss-studios"}
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#DC143C]/10 text-[#DC143C] hover:bg-[#DC143C]/20 transition-all duration-300 border border-[#DC143C]/20 hover:border-[#DC143C]/40"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#DC143C]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Abyss Studios Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-white/60 hover:text-[#DC143C] transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-white/60 hover:text-[#DC143C] transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 