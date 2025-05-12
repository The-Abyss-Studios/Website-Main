'use client';

import Image from "next/image";
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Background from "@/components/background";
import TechBackground from '@/components/TechBackground';
import Footer from '@/components/Footer';

export default function Home() {
  const handleNavClick = (sectionId: string) => {
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
    <main className="relative min-h-screen">
      <TechBackground />
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
            ABYSS STUDIOS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto">
            Crafting immersive gaming experiences that push the boundaries of entertainment
          </p>
          <button className="gaming-button">
          <Link href="#games" className="gaming-button">
            Explore Our Games
          </Link>
          </button>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#1a0000]/50 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#DC143C]/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="section-title">About Us</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mt-6">
              "The More you Stare into The Abyss the more it Stares Back"
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="card group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-md rounded-xl p-8 border border-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC143C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
                    Our Story
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Abyss Studios Private Limited, founded in 2022 by Mr. Suryanshu Mittal as an indie game studio (then known as Underworld Indie Games), began its full operations in 2024. Our journey started with a simple yet powerful vision: to create immersive gaming experiences that push the boundaries of entertainment.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#DC143C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                </div>
              </div>

              <div className="card group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-md rounded-xl p-8 border border-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC143C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
                    Our Mission
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    At Abyss Studios, we focus on bringing stories to life with an interactive and artistic touch. We employ cutting-edge technology like Unreal Engine along with industry-standard tools such as Autodesk Maya and ZBrush to transform the creative visions of talented writers into immersive gaming experiences.
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#DC143C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <Image 
                  src="/images/home.png" 
                  alt="Abyss Studios" 
                  layout="fill" 
                  objectFit="cover" 
                  className="transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/0 via-transparent to-[#DC143C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Games Section */}
      <section id="games" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {name: "God Of War Lite", image: "/images/gow.png", breif: "A short 2D demake of GOW", genre:"Platformer,RPG", alt:"https://the-abyss-games.itch.io/god-of-war-lite"},
              {name: "Mansion of Chaos", image: "/images/moc.png", breif: "An Immersive First-Person Explorer", genre:"Exploration,Sombre,Jam", alt:"https://the-abyss-games.itch.io/mansion-of-chaos"},
              {name: "Pesky Labrinths", image: "/images/pl.png", breif: "A Short Dungeon Explorer Demo", genre:"Arcade,Jam", alt: "https://the-abyss-games.itch.io/the-pesky-labyrinths"},
              {name:"Seek a Little", image:"/images/sal.png", breif:"Survive the Onslaught...and never blink!", genre:"Exploration,Thriller,Jam", alt:"https://the-abyss-games.itch.io/seek-a-little"},
              {name:"Under Beast", image:"/images/ub.png", breif:"Explore a Dark world overrun by...Influencers?", genre:"Platformer,RPG", alt:"https://the-abyss-games.itch.io/under-beast"},
              {name:"Coming Soon", image:"/images/soon.jpeg", breif:"", genre:"Coming Soon", alt:"https://the-abyss-games.itch.io/"}
            ].map((game, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-500">
                  <Link href={game.alt} className="block">
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
                        {game.breif}
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Suryanshu Mittal", image: "/images/surya.png", role: "Founder" },
              { name: "Daksh Kaushik", image: "/images/Daksh.jpg", role: "Director of Animation and 3D" },
              { name: "Rijul Paul", image: "/images/rijul.png", role: "Director of Production" },
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      layout="fill" 
                      objectFit="cover" 
                      className="transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/0 via-transparent to-[#DC143C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6 relative text-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DC143C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent group-hover:from-[#B01030] group-hover:to-[#DC143C] transition-all duration-500">
                      {member.name}
                    </h3>
                    <div className="flex justify-center">
                      <span className="px-4 py-1 text-sm bg-[#DC143C]/10 text-[#DC143C] rounded-full border border-[#DC143C]/20 group-hover:bg-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-300">
                        {member.role}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-[#DC143C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-32 px-4 bg-gradient-to-b from-black/50 to-[#1a0000]/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title mx-auto">Ready to Connect?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Whether you're interested in our games, want to collaborate, or just have a question,
            we'd love to hear from you. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="gaming-button text-lg px-12 py-4">
              Get in Touch
            </Link>
            <Link href="/careers" className="gaming-button text-lg px-12 py-4 bg-gradient-to-r from-[#B01030] to-[#8B0000] hover:from-[#8B0000] hover:to-[#600000]">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer handleNavClick={handleNavClick} />
    </main>
  );
}
