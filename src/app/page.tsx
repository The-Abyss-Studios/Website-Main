import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-[#1a0000] text-white">
      <AnimatedBackground />
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
            Explore Our Games
          </button>
        </div>
      </section>

      {/* Featured Games Section */}
      <section id="games" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((game) => (
              <div key={game} className="card group">
                <div className="aspect-video rounded-lg mb-4 overflow-hidden gradient-overlay">
                  <div className="w-full h-full bg-gradient-to-br from-[#DC143C]/20 via-[#B01030]/10 to-black/40" />
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
                  Game Title {game}
                </h3>
                <p className="text-white/70">
                  Experience the next level of gaming with our latest masterpiece.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black/50 to-[#1a0000]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-white/80 mb-6">
                At Abyss Studios, we're passionate about creating extraordinary gaming experiences
                that captivate and inspire. Our team of talented developers and artists work
                together to push the boundaries of what's possible in gaming.
              </p>
              <p className="text-lg text-white/80">
                Founded with a vision to revolutionize the gaming industry, we combine cutting-edge
                technology with creative storytelling to deliver unforgettable adventures.
              </p>
            </div>
            <div className="card">
              <div className="aspect-square rounded-lg overflow-hidden gradient-overlay">
                <div className="w-full h-full bg-gradient-to-br from-[#DC143C]/20 via-[#B01030]/10 to-black/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="card text-center">
                <div className="aspect-square rounded-full mb-4 overflow-hidden gradient-overlay">
                  <div className="w-full h-full bg-gradient-to-br from-[#DC143C]/20 via-[#B01030]/10 to-black/40" />
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
                  Team Member {member}
                </h3>
                <p className="text-white/70">Role</p>
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#DC143C]/20 bg-gradient-to-b from-black to-[#1a0000]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Abyss Studios. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
