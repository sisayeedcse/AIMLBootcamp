import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EVENT_CONFIG from '@/config/event';

export const metadata: Metadata = {
  title: 'Apply for Eligibility',
  description:
    'Submit your eligibility application for the IEEE CS AI/ML Bootcamp 2026. Submitting the form does not guarantee a seat.',
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      <main className="w-full py-16">
        <div className="wrap">
          {/* Header */}
          <div className="max-w-[760px] mb-12">
            <span className="status mb-4">{EVENT_CONFIG.application.statusBadge}</span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold my-4">
              Apply for {EVENT_CONFIG.name}
            </h1>
            <p className="text-[#a8a8a8] text-lg leading-relaxed">
              We welcome applications from motivated undergraduate students who want to build a genuine foundation in AI and machine learning. To ensure high mentor support and interactive lab experiences, cohort sizes are limited.
            </p>
          </div>

          {/* Process explanation */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">Application & Selection Process</h2>
            <p className="text-[#a8a8a8] mb-8 max-w-[65ch]">
              We evaluate applicants holistically based on interest, commitment, and career curiosity. Prior AI experience is not required.
            </p>

            <ol className="steps">
              <li>
                <h3>1. Submit Form</h3>
                <p>Fill out the eligibility application below (approx. 10 minutes).</p>
              </li>
              <li>
                <h3>2. Application Review</h3>
                <p>Our organizing committee reviews your application details and motivations.</p>
              </li>
              <li>
                <h3>3. Invitation Email</h3>
                <p>Selected applicants receive an invitation letter with schedule details.</p>
              </li>
              <li>
                <h3>4. Confirmation</h3>
                <p>Accept your invitation and complete onboarding to secure your seat.</p>
              </li>
            </ol>
          </div>

          {/* Important Notice */}
          <div className="border border-[#FF6A13]/40 bg-[#141414] rounded-lg p-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-[#FF6A13] font-semibold text-base mb-1">
                Notice: {EVENT_CONFIG.application.disclaimer}
              </p>
              <p className="text-[#a8a8a8] text-sm">
                Applications are reviewed on a rolling basis. All applicants will be notified by email once the selection committee completes its review.
              </p>
            </div>
            <a
              href={EVENT_CONFIG.application.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost whitespace-nowrap text-sm !py-2.5 !px-4"
            >
              Open in new tab ↗
            </a>
          </div>

          {/* Embedded Google Form Container */}
          <div className="border border-[#2b2b2b] bg-[#141414] rounded-lg overflow-hidden">
            <div className="border-b border-[#2b2b2b] px-6 py-4 flex items-center justify-between bg-black/40">
              <span className="font-mono text-sm text-[#a8a8a8]">Google Form · Eligibility Application</span>
              <a
                href={EVENT_CONFIG.application.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#FF6A13] hover:underline"
              >
                Having trouble viewing? Open full screen ↗
              </a>
            </div>

            <div className="relative w-full h-[950px] bg-white">
              <iframe
                src={EVENT_CONFIG.application.formUrl}
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                title="IEEE CS AI/ML Bootcamp 2026 Eligibility Application"
              >
                Loading application form…
              </iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
