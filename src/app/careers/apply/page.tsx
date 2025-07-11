'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechBackground from '@/components/TechBackground';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const jobPositions: JobPosition[] = [
  {
    title: "Senior Game Developer",
    department: "Development",
    location: "Delhi, IN",
    type: "Full-time, Currently Closed",
    description: "Join our core development team to create immersive gaming experiences using Unreal Engine. You'll be working on cutting-edge game mechanics and pushing the boundaries of interactive entertainment.",
    requirements: [
      "5+ years of experience in game development",
      "Strong proficiency in C++ and Unreal Engine",
      "Experience with multiplayer game development",
      "Strong understanding of game design principles",
      "Excellent problem-solving skills"
    ],
    responsibilities: [
      "Design and implement core game systems",
      "Optimize game performance and memory usage",
      "Collaborate with artists and designers",
      "Mentor junior developers",
      "Participate in code reviews and technical discussions"
    ]
  },
  {
    title: "3D Environment Artist",
    department: "Art",
    location: "Delhi, IN",
    type: "Full-time, Currently Closed",
    description: "Create stunning and immersive game environments that bring our worlds to life. You'll be working with our art team to develop unique and memorable game spaces.",
    requirements: [
      "3+ years of experience in 3D environment art",
      "Proficiency in Maya, ZBrush, and Substance Painter",
      "Strong understanding of PBR workflows",
      "Experience with Unreal Engine",
      "Portfolio demonstrating environment art skills"
    ],
    responsibilities: [
      "Create high-quality 3D environments",
      "Optimize assets for real-time rendering",
      "Work with the art director to maintain visual consistency",
      "Collaborate with level designers",
      "Implement environment lighting and effects"
    ]
  },
  {
    title: "Game Designer",
    department: "Design",
    location: "Delhi, IN",
    type: "Full-time, Currently Closed",
    description: "Shape the future of our games by designing engaging gameplay mechanics and memorable player experiences. You'll be working closely with our development and art teams to bring your designs to life.",
    requirements: [
      "3+ years of experience in game design",
      "Strong understanding of game mechanics and systems",
      "Experience with game design documentation",
      "Knowledge of current gaming trends",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Design and document game mechanics",
      "Create and balance gameplay systems",
      "Work with the team to implement designs",
      "Playtest and iterate on game features",
      "Contribute to the overall game vision"
    ]
  }
];

const CONTACT_EMAIL = "contactus@abyssstudios.site";

export default function Apply() {
  const [selectedJob, setSelectedJob] = React.useState<JobPosition | null>(null);

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
    <main className="min-h-screen bg-gradient-to-b from-black via-black to-[#1a0000] text-white">
      <TechBackground />
      <Navbar />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-12">Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job Listings */}
            <div className="space-y-6">
              {jobPositions.map((job, index) => (
                <div
                  key={index}
                  className={`card group cursor-pointer ${selectedJob === job ? 'ring-2 ring-[#DC143C]' : ''}`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-md rounded-xl p-6 border border-[#DC143C]/20 group-hover:border-[#DC143C]/40 transition-all duration-500">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="px-3 py-1 text-sm bg-[#DC143C]/10 text-[#DC143C] rounded-full border border-[#DC143C]/20">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 text-sm bg-[#DC143C]/10 text-[#DC143C] rounded-full border border-[#DC143C]/20">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 text-sm bg-[#DC143C]/10 text-[#DC143C] rounded-full border border-[#DC143C]/20">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-white/80">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Job Details */}
            <div className="lg:sticky lg:top-24">
              {selectedJob ? (
                <div className="card">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-md rounded-xl p-8 border border-[#DC143C]/20">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
                      {selectedJob.title}
                    </h3>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Requirements</h4>
                        <ul className="space-y-2">
                          {selectedJob.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-[#DC143C] mr-2">•</span>
                              <span className="text-white/80">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Responsibilities</h4>
                        <ul className="space-y-2">
                          {selectedJob.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-[#DC143C] mr-2">•</span>
                              <span className="text-white/80">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=Application for ${encodeURIComponent(selectedJob.title)}`}
                        className="relative group w-full block px-8 py-4 mt-8 bg-gradient-to-r from-[#DC143C] to-[#B01030] text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,20,60,0.5)] text-center"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C]/0 via-white/20 to-[#DC143C]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <span className="relative flex items-center justify-center gap-2 text-lg font-bold">
                          Apply Now
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl"></div>
                  <div className="relative bg-black/40 backdrop-blur-md rounded-xl p-8 border border-[#DC143C]/20 text-center">
                    <p className="text-white/80">
                      Select a position to view details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer handleNavClick={handleNavClick} />
    </main>
  );
} 