import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  game: {
    name: string;
    image: string;
    brief: string;
    genre: string;
    alt: string;
    systemRequirements?: {
      minimum: string[];
      recommended: string[];
    };
    version?: string;
    downloadLinks?: {
      epic?: string;
      steam?: string;
      itch?: string;
    };
    credits?: {
      developers?: string[];
      artists?: string[];
      designers?: string[];
      writers?: string[];
      specialThanks?: string[];
    };
  };
}

export default function GameModal({ isOpen, onClose, game }: GameModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = '';
      }, 300);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!isVisible && !isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl mx-4 h-[90vh] bg-black/90 border border-[#DC143C]/20 rounded-xl overflow-hidden transform transition-transform duration-300 ${
          isOpen ? 'scale-100' : 'scale-95'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-[#DC143C] transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Game Image - Fixed Header */}
        <div className="relative h-64 md:h-96">
          <Image
            src={game.image}
            alt={game.name}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(90vh-16rem)] md:h-[calc(90vh-24rem)] overflow-y-auto custom-scrollbar">
          <div className="p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
              {game.name}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {game.genre.split(',').map((genre, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-[#DC143C]/10 text-[#DC143C] rounded-full border border-[#DC143C]/20"
                >
                  {genre.trim()}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-white/80 mb-8 text-lg">{game.brief}</p>

            {/* System Requirements */}
            {game.systemRequirements && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-white">System Requirements</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[#DC143C] mb-2">Minimum</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      {game.systemRequirements.minimum.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[#DC143C] mb-2">Recommended</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      {game.systemRequirements.recommended.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Version */}
            {game.version && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">Current Version</h3>
                <p className="text-white/70">{game.version}</p>
              </div>
            )}

            {/* Download Buttons */}
            {game.downloadLinks && (
              <div className="flex flex-wrap gap-4 mb-8">
                {game.downloadLinks.epic && (
                  <a
                    href={game.downloadLinks.epic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    Epic Games
                  </a>
                )}
                {game.downloadLinks.steam && (
                  <a
                    href={game.downloadLinks.steam}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#171a21] hover:bg-[#2a2f3a] text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772z" />
                    </svg>
                    Steam
                  </a>
                )}
                {game.downloadLinks.itch && (
                  <a
                    href={game.downloadLinks.itch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#FA5C5C] hover:bg-[#FF6B6B] text-white rounded-lg transition-colors duration-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    itch.io
                  </a>
                )}
              </div>
            )}

            {/* Credits Section */}
            {game.credits && (
              <div className="border-t border-[#DC143C]/20 pt-8">
                <h3 className="text-xl font-bold mb-6 text-white">Credits</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {game.credits.developers && (
                    <div>
                      <h4 className="text-[#DC143C] mb-2">Development</h4>
                      <ul className="list-disc list-inside text-white/70 space-y-1">
                        {game.credits.developers.map((dev, i) => (
                          <li key={i}>{dev}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {game.credits.artists && (
                    <div>
                      <h4 className="text-[#DC143C] mb-2">Art</h4>
                      <ul className="list-disc list-inside text-white/70 space-y-1">
                        {game.credits.artists.map((artist, i) => (
                          <li key={i}>{artist}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {game.credits.designers && (
                    <div>
                      <h4 className="text-[#DC143C] mb-2">Design</h4>
                      <ul className="list-disc list-inside text-white/70 space-y-1">
                        {game.credits.designers.map((designer, i) => (
                          <li key={i}>{designer}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {game.credits.writers && (
                    <div>
                      <h4 className="text-[#DC143C] mb-2">Writing</h4>
                      <ul className="list-disc list-inside text-white/70 space-y-1">
                        {game.credits.writers.map((writer, i) => (
                          <li key={i}>{writer}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {game.credits.specialThanks && (
                  <div className="mt-6">
                    <h4 className="text-[#DC143C] mb-2">Special Thanks</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1">
                      {game.credits.specialThanks.map((thanks, i) => (
                        <li key={i}>{thanks}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 