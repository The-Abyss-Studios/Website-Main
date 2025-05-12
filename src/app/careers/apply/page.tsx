'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechBackground from '@/components/TechBackground';

interface ApplicationForm {
  position: string;
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  experience: string;
  message: string;
  resume: File | null;
}

function ApplicationForm() {
  const searchParams = useSearchParams();
  const position = searchParams?.get('position') || '';

  const [formData, setFormData] = useState<ApplicationForm>({
    position,
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: '',
    message: '',
    resume: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch('/api/sendApplication', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Application submitted successfully! We\'ll review your application and get back to you soon.'
        });
        setFormData({
          position,
          name: '',
          email: '',
          phone: '',
          portfolio: '',
          experience: '',
          message: '',
          resume: null
        });
      } else {
        throw new Error(data.message || 'Failed to submit application');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit application'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
          Apply for {position}
        </h1>
        <p className="text-xl text-white/80">
          Join our team and help us create extraordinary gaming experiences
        </p>
      </div>

      <div className="card">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DC143C]/20 to-transparent rounded-xl blur-xl"></div>
        <div className="relative bg-black/40 backdrop-blur-md rounded-xl p-8 border border-[#DC143C]/20">
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                : 'bg-red-500/20 border border-red-500/50 text-red-300'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white/80 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-[#DC143C]/20 rounded-lg focus:outline-none focus:border-[#DC143C] text-white placeholder-white/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white/80 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-[#DC143C]/20 rounded-lg focus:outline-none focus:border-[#DC143C] text-white placeholder-white/50"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white/80 mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-[#DC143C]/20 rounded-lg focus:outline-none focus:border-[#DC143C] text-white placeholder-white/50"
                placeholder="+91 1234567890"
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-white/80 mb-2">Portfolio/Website</label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/60 border border-[#DC143C]/20 rounded-lg focus:outline-none focus:border-[#DC143C] text-white placeholder-white/50"
                placeholder="https://your-portfolio.com"
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-white/80 mb-2">Years of Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/60 border border-[#DC143C]/20 rounded-lg focus:outline-none focus:border-[#DC143C] text-white placeholder-white/50"
                placeholder="e.g., 5 years"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white/80 mb-2">Cover Letter</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/60 border border-[#DC143C]/20 rounded-lg focus:outline-none focus:border-[#DC143C] text-white placeholder-white/50 resize-none"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-white/80 mb-2">Resume/CV</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 bg-black/60 border border-[#DC143C]/20 rounded-lg focus:outline-none focus:border-[#DC143C] text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#DC143C]/10 file:text-[#DC143C] hover:file:bg-[#DC143C]/20"
              />
              <p className="mt-2 text-sm text-white/60">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative group w-full px-8 py-4 bg-gradient-to-r from-[#DC143C] to-[#B01030] text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C]/0 via-white/20 to-[#DC143C]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-2 text-lg font-bold">
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Apply() {
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
      
      {/* Application Form Section */}
      <section className="py-20 px-4">
        <Suspense fallback={
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-[#DC143C]/20 rounded-lg mb-6"></div>
              <div className="h-4 bg-[#DC143C]/20 rounded-lg mb-4"></div>
              <div className="h-4 bg-[#DC143C]/20 rounded-lg w-3/4 mx-auto"></div>
            </div>
          </div>
        }>
          <ApplicationForm />
        </Suspense>
      </section>

      <Footer handleNavClick={handleNavClick} />
    </main>
  );
} 