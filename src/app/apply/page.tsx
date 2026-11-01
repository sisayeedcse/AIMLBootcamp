import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EVENT from '@/config/event';

export const metadata: Metadata = {
  title: 'Apply',
  description:
    'Submit your eligibility application for the IEEE CS AI/ML Bootcamp 2026. Submitting the form does not guarantee a seat.',
};

export default function ApplyPage() {
  const deadlineText = EVENT.applicationDeadline || 'To be announced';

  return (
    <>
      <Navbar />

      <main id="main-content" className="w-full py-16">
        <div className="wrap">
          {/* Header */}
          <div className="max-w-[720px] mb-12">
            <span className="status-chip mb-4">Application</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4">
              Apply for {EVENT.name}
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              We welcome applications from motivated undergraduate students interested in AI and machine learning. To maintain high mentorship quality and interactive lab sessions, seats are limited.
            </p>
          </div>

          {/* 4-step flow */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold mb-4">How you get a seat</h2>
            <p className="text-muted mb-8 max-w-[65ch]">
              Seats are limited, so we review every application together once the application window closes.
            </p>

            <ol className="steps-list p-0 m-0">
              <li className="step-card">
                <span className="step-in">In [1]</span>
                <h3>Apply</h3>
                <p>Fill in the short eligibility form. It takes about 10 minutes.</p>
              </li>
              <li className="step-card">
                <span className="step-in">In [2]</span>
                <h3>Review</h3>
                <p>We review your programming basics, career thinking and goals.</p>
              </li>
              <li className="step-card">
                <span className="step-in">In [3]</span>
                <h3>Invitation</h3>
                <p>Selected applicants receive an invitation with dates and fee details.</p>
              </li>
              <li className="step-card">
                <span className="step-in">In [4]</span>
                <h3>Confirm</h3>
                <p>Accept your invitation to confirm your seat.</p>
              </li>
            </ol>
          </div>

          {/* Cohort Banner Card */}
          <div className="bg-surface border border-line rounded-card overflow-hidden mb-12">
            <div className="relative aspect-[16/9] sm:aspect-[2.4/1] w-full">
              <Image
                src="/gallery/closing-ceremony-cohort.webp"
                alt="Bootcamp 2025 cohort graduation ceremony at Premier University"
                fill
                sizes="(max-width: 1024px) 100vw, 1120px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/95 via-[#090A0F]/40 to-transparent flex items-end p-5 sm:p-6">
                <div>
                  <span className="text-[11px] font-mono text-accent bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-pill border border-line">
                    Cohort 2025 Graduation
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-text mt-2">
                    Join an active, supportive community of engineering students and faculty mentors.
                  </p>
                  <p className="text-xs text-muted mt-1 hidden sm:block">
                    Participants celebrating program completion with Vice Chancellor Prof. S. M. Nazrul Qadir and department faculty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notice Card */}
          <div className="bg-surface border border-line rounded-card p-6 mb-12 space-y-3">
            <p className="text-text font-semibold text-base">
              Submitting the form does not guarantee a seat. We review all applications together once the application window closes. Selected applicants will be contacted by email.
            </p>
            <p className="text-muted text-sm">
              <span className="text-text font-medium">Application deadline:</span> {deadlineText}
            </p>
            <p className="text-muted text-xs">
              Your answers are used only to review your application and contact you about this bootcamp.
            </p>
          </div>

          {/* Mobile Apply (< 768px): Button and note only */}
          <div className="block md:hidden my-8">
            <a
              href={EVENT.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full text-center py-4 text-base"
            >
              Open the application form ↗
            </a>
            <p className="text-muted text-xs text-center mt-3">
              It takes about 10 minutes and needs a Google sign-in.
            </p>
          </div>

          {/* Desktop Apply (>= 768px): Embed iframe */}
          <div className="hidden md:block my-8">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-muted">
                Sign in with Google and tick the email box at the top to continue.
              </p>
              <a
                href={EVENT.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline"
              >
                Open the form in a new tab ↗
              </a>
            </div>

            <div className="bg-white border border-line rounded-card overflow-hidden">
              <iframe
                src={EVENT.applyUrl}
                title="IEEE CS AI/ML Bootcamp 2026 Application Form"
                loading="lazy"
                width="100%"
                className="w-full border-0 block"
                style={{ minHeight: '1500px' }}
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
