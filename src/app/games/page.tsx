'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Background from '@/components/background';
import TechBackground from '@/components/TechBackground';
import GameModal from '@/components/GameModal';

const games = [
  {
    name: "God Of War Lite",
    image: "/images/gow.png",
    brief: "A short 2D demake of GOW",
    genre: "Platformer,RPG",
    alt: "https://the-abyss-games.itch.io/god-of-war-lite",
    version: "1.0.0",
    systemRequirements: {
      minimum: [
        "OS: Windows 7 or later",
        "Processor: Intel Core i3 or equivalent",
        "Memory: 4 GB RAM",
        "Graphics: DirectX 11 compatible GPU",
        "Storage: 500 MB available space"
      ],
      recommended: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or equivalent",
        "Memory: 8 GB RAM",
        "Graphics: DirectX 12 compatible GPU",
        "Storage: 1 GB available space"
      ]
    },
    downloadLinks: {
      itch: "https://the-abyss-games.itch.io/god-of-war-lite"
    },
    credits: {
      developers: ["Suryanshu Mittal"],
      artists: ["Suryanshu Mittal"],
      designers: ["Suryanshu Mittal"],
      writers: ["Suryanshu Mittal"],
      specialThanks: ["God of War Team", "Sony Interactive Entertainment, Thomas Brush"]
    }
  },
  {
    name: "Mansion of Chaos",
    image: "/images/moc.png",
    brief: "An Immersive First-Person Explorer",
    genre: "Exploration,Sombre,Jam",
    alt: "https://the-abyss-games.itch.io/mansion-of-chaos",
    version: "1.0.0",
    systemRequirements: {
      minimum: [
        "OS: Windows 10",
        "Processor: Intel Core i3 or equivalent",
        "Memory: 4 GB RAM",
        "Graphics: DirectX 11 compatible GPU",
        "Storage: 1 GB available space"
      ],
      recommended: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or equivalent",
        "Memory: 8 GB RAM",
        "Graphics: DirectX 12 compatible GPU",
        "Storage: 2 GB available space"
      ]
    },
    downloadLinks: {
      itch: "https://the-abyss-games.itch.io/mansion-of-chaos"
    },
    credits: {
      developers: ["Suryanshu Mittal", "Daksh Kaushik"],
      artists: ["Daksh Kaushik"],
      designers: ["Suryanshu Mittal"],
      writers: ["What is a writer?"],
      specialThanks: ["Brackeys Game Jam Community"]
    }
  },
  {
    name: "Pesky Labrinths",
    image: "/images/pl.png",
    brief: "A Short Dungeon Explorer Demo",
    genre: "Arcade,Jam",
    alt: "https://the-abyss-games.itch.io/the-pesky-labyrinths",
    version: "1.0.0",
    systemRequirements: {
      minimum: [
        "OS: Windows 7 or later",
        "Processor: Intel Core i3 or equivalent",
        "Memory: 2 GB RAM",
        "Graphics: DirectX 11 compatible GPU",
        "Storage: 500 MB available space"
      ],
      recommended: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or equivalent",
        "Memory: 4 GB RAM",
        "Graphics: DirectX 12 compatible GPU",
        "Storage: 1 GB available space"
      ]
    },
    downloadLinks: {
      itch: "https://the-abyss-games.itch.io/the-pesky-labyrinths"
    },
    credits: {
      developers: ["Suryanshu Mittal"],
      artists: ["Suryanshu Mittal"],
      designers: ["Suryanshu Mittal"],
      writers: ["Suryanshu Mittal"],
      specialThanks: ["Brackeys Game Jam Community"]
    }
  },
  {
    name: "Seek a Little",
    image: "/images/sal.png",
    brief: "Survive the Onslaught...and never blink!",
    genre: "Exploration,Thriller,Jam",
    alt: "https://the-abyss-games.itch.io/seek-a-little",
    version: "1.0.0",
    systemRequirements: {
      minimum: [
        "OS: Windows 7 or later",
        "Processor: Intel Core i3 or equivalent",
        "Memory: 4 GB RAM",
        "Graphics: DirectX 11 compatible GPU",
        "Storage: 1 GB available space"
      ],
      recommended: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or equivalent",
        "Memory: 8 GB RAM",
        "Graphics: DirectX 12 compatible GPU",
        "Storage: 2 GB available space"
      ]
    },
    downloadLinks: {
      itch: "https://the-abyss-games.itch.io/seek-a-little"
    },
    credits: {
      developers: ["Suryanshu Mittal"],
      artists: ["Suryanshu Mittal"],
      designers: ["Suryanshu Mittal", "Daksh Kaushik"],
      writers: ["Suryanshu Mittal"],
      specialThanks: ["Daksh Kaushik, Brackeys Game Jam Community"]
    }
  },
  {
    name: "Under Beast",
    image: "/images/ub.png",
    brief: "Explore a Dark world overrun by...Influencers?",
    genre: "Platformer,RPG",
    alt: "https://the-abyss-games.itch.io/under-beast",
    version: "1.0.0",
    systemRequirements: {
      minimum: [
        "OS: Windows 7 or later",
        "Processor: Intel Core i3 or equivalent",
        "Memory: 4 GB RAM",
        "Graphics: DirectX 11 compatible GPU",
        "Storage: 1 GB available space"
      ],
      recommended: [
        "OS: Windows 10",
        "Processor: Intel Core i5 or equivalent",
        "Memory: 8 GB RAM",
        "Graphics: DirectX 12 compatible GPU",
        "Storage: 2 GB available space"
      ]
    },
    downloadLinks: {
      itch: "https://the-abyss-games.itch.io/under-beast"
    },
    credits: {
      developers: ["Suryanshu Mittal"],
      artists: ["Suryanshu Mittal"],
      designers: ["Suryanshu Mittal"],
      writers: ["Suryanshu Mittal"],
      specialThanks: ["Thomas Brush, X (Twitter) community"]
    }
  },
  {
    name: "Coming Soon",
    image: "/images/soon.jpeg",
    brief: "",
    genre: "Coming Soon",
    alt: "https://the-abyss-games.itch.io/"
  }
];

const categories = ["All", "Platformer", "RPG", "Exploration", "Arcade", "Thriller", "Jam"];

export default function GamesLibrary() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState<typeof games[0] | null>(null);

  const filteredGames = games.filter(game => {
    const matchesCategory = selectedCategory === "All" || game.genre.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.brief.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative min-h-screen">
      <TechBackground />
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center px-4">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
            Game Library
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto">
            Explore our collection of immersive gaming experiences
          </p>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search games..."
              className="flex-1 px-4 py-2 rounded-lg bg-black/40 backdrop-blur-md text-white border border-[#DC143C]/20 focus:border-[#DC143C]/40 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#DC143C] text-white"
                      : "bg-black/40 backdrop-blur-md text-white/80 hover:bg-[#DC143C]/20 border border-[#DC143C]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-500">
                  <div 
                    className="block cursor-pointer"
                    onClick={() => setSelectedGame(game)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                      <Image 
                        src={game.image} 
                        alt={game.name} 
                        layout="fill" 
                        objectFit="cover" 
                        className="transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/0 via-transparent to-[#DC143C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-6 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC143C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent group-hover:from-[#B01030] group-hover:to-[#DC143C] transition-all duration-500">
                        {game.name}
                      </h3>
                      <p className="text-white/70 mb-3 group-hover:text-white/90 transition-colors duration-300">
                        {game.brief}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {game.genre.split(',').map((genre, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-sm bg-[#DC143C]/10 text-[#DC143C] rounded-full border border-[#DC143C]/20 group-hover:bg-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-300"
                          >
                            {genre.trim()}
                          </span>
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#DC143C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-white/80">No games found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Game Modal */}
      {selectedGame && (
        <GameModal
          isOpen={!!selectedGame}
          onClose={() => setSelectedGame(null)}
          game={selectedGame}
        />
      )}

      <Footer />
    </main>
  );
} 