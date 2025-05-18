import React from 'react';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-black to-black/95 border-b border-[#DC143C]/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#DC143C]/20 to-transparent rounded-lg blur-xl"></div>
              <Image src="/images/ABYSS.png" alt="ABYSS" width={100} height={75} className="relative drop-shadow-[0_0_8px_rgba(220,20,60,0.3)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#DC143C] to-[#B01030] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
        
        <div className="space-y-12 text-white/80">
          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">1. Introduction</h2>
            <p className="mb-4 leading-relaxed">
              1.1. Abyss Studios ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, games, and services (collectively, the "Services").
            </p>
            <p className="mb-4 leading-relaxed">
              1.2. Please read this Privacy Policy carefully. By using our Services, you consent to the practices described in this policy.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">2. Information We Collect</h2>
            <p className="mb-4 leading-relaxed">
              2.1. Personal Information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Payment information (processed securely through our payment processors)</li>
              <li>Profile information (avatar, preferences, game statistics)</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              2.2. Automatically Collected Information:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (game progress, preferences, interaction with other users)</li>
              <li>Log data (access times, pages viewed, features used)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">3. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">
              3.1. We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide, maintain, and improve our Services</li>
              <li>To process transactions and manage your account</li>
              <li>To communicate with you about updates, security alerts, and support</li>
              <li>To personalize your experience and provide relevant content</li>
              <li>To analyze usage patterns and optimize our Services</li>
              <li>To detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">4. Information Sharing and Disclosure</h2>
            <p className="mb-4 leading-relaxed">
              4.1. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Service providers who assist in operating our Services</li>
              <li>Business partners with your consent</li>
              <li>Law enforcement when required by law</li>
              <li>Other users in accordance with your privacy settings</li>
            </ul>
            <p className="mb-4 leading-relaxed">
              4.2. We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">5. Data Security</h2>
            <p className="mb-4 leading-relaxed">
              5.1. We implement appropriate technical and organizational measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication procedures</li>
              <li>Secure data storage and transmission</li>
            </ul>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">6. Your Rights and Choices</h2>
            <p className="mb-4 leading-relaxed">
              6.1. You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">7. Children's Privacy</h2>
            <p className="mb-4 leading-relaxed">
              7.1. Our Services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">8. International Data Transfers</h2>
            <p className="mb-4 leading-relaxed">
              8.1. Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">9. Changes to This Policy</h2>
            <p className="mb-4 leading-relaxed">
              9.1. We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date."
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">10. Contact Us</h2>
            <p className="mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4 leading-relaxed">
              Abyss Studios Private Limited<br />
              Email: [Your Contact Email]<br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 