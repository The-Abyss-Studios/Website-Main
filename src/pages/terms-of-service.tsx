import React from 'react';
import Image from 'next/image';

export default function TermsOfService() {
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
            Terms of Service Agreement
          </h1>
          <p className="text-white/60 text-lg">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>
        
        <div className="space-y-12 text-white/80">
          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">1. Agreement to Terms</h2>
            <p className="mb-4 leading-relaxed">
              1.1. By accessing or using Abyss Studios' ("Company," "we," "us," or "our") website, games, and services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access the Services.
            </p>
            <p className="mb-4 leading-relaxed">
              1.2. These Terms constitute a legally binding agreement between you and Abyss Studios. Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">2. Eligibility and Account Registration</h2>
            <p className="mb-4 leading-relaxed">
              2.1. To use our Services, you must be at least 13 years old. If you are under 18, you must have your parent or legal guardian's permission to use the Services.
            </p>
            <p className="mb-4 leading-relaxed">
              2.2. When creating an account, you must provide accurate and complete information. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
            </p>
            <p className="mb-4 leading-relaxed">
              2.3. We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or illegal activities.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">3. Intellectual Property Rights</h2>
            <p className="mb-4 leading-relaxed">
              3.1. All content, features, and functionality of our Services, including but not limited to games, graphics, text, software, audio, video, and design elements, are owned by Abyss Studios or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="mb-4 leading-relaxed">
              3.2. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services without our prior written consent.
            </p>
            <p className="mb-4 leading-relaxed">
              3.3. Any unauthorized use of our intellectual property may result in legal action and termination of your access to the Services.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">4. User Conduct and Prohibited Activities</h2>
            <p className="mb-4 leading-relaxed">
              4.1. You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Using the Services for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Hacking, cheating, or exploiting bugs in our games or services</li>
              <li>Harassing, threatening, or intimidating other users</li>
              <li>Impersonating any person or entity</li>
              <li>Distributing viruses, malware, or other harmful code</li>
              <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
            </ul>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">5. Virtual Items and In-Game Currency</h2>
            <p className="mb-4 leading-relaxed">
              5.1. Our Services may include virtual items and in-game currency that can be purchased or earned. These virtual items have no real-world value and are licensed, not sold, to you.
            </p>
            <p className="mb-4 leading-relaxed">
              5.2. We reserve the right to modify, suspend, or discontinue any virtual items or in-game currency at any time without notice or liability.
            </p>
            <p className="mb-4 leading-relaxed">
              5.3. All purchases of virtual items are final and non-refundable, except as required by applicable law.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">6. Limitation of Liability and Disclaimer</h2>
            <p className="mb-4 leading-relaxed">
              6.1. To the maximum extent permitted by law, Abyss Studios shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="mb-4 leading-relaxed">
              6.2. Our Services are provided "as is" and "as available" without any warranties of any kind, either express or implied.
            </p>
            <p className="mb-4 leading-relaxed">
              6.3. We do not guarantee that our Services will be uninterrupted, secure, or error-free.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">7. Indemnification</h2>
            <p className="mb-4 leading-relaxed">
              7.1. You agree to defend, indemnify, and hold harmless Abyss Studios and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Services.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">8. Governing Law and Dispute Resolution</h2>
            <p className="mb-4 leading-relaxed">
              8.1. These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
            </p>
            <p className="mb-4 leading-relaxed">
              8.2. Any dispute arising from or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of [Arbitration Authority].
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">9. Changes to Terms</h2>
            <p className="mb-4 leading-relaxed">
              9.1. We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Effective Date."
            </p>
            <p className="mb-4 leading-relaxed">
              9.2. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="bg-white/5 rounded-lg p-8 border border-[#DC143C]/10">
            <h2 className="text-2xl font-semibold mb-4 text-[#DC143C]">10. Contact Information</h2>
            <p className="mb-4 leading-relaxed">
              For any questions regarding these Terms of Service, please contact us at:
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