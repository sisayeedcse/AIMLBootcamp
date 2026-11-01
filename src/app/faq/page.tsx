import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EVENT from '@/config/event';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Frequently asked questions about IEEE CS AI/ML Bootcamp 2026 eligibility, format, laptop requirements, fees, and certificates.',
};

const FAQ_ITEMS = [
  {
    question: 'Do I need to know AI or programming already?',
    answer:
      'No. It is beginner-friendly and starts with Python. The form asks about your basics only to plan support, not to turn beginners away.',
  },
  {
    question: 'Who can apply?',
    answer:
      'Undergraduate students interested in AI and machine learning. Applications are reviewed before invitations are sent.',
  },
  {
    question: 'How are applicants selected?',
    answer:
      'We review your programming basics, career thinking and goals together.',
  },
  {
    question: 'What do I need to bring?',
    answer: 'A laptop you can use in every session.',
  },
  {
    question: 'When does it start and what does it cost?',
    answer:
      'Dates and fees will be announced to invited applicants. There will be one fee for IEEE members and one for general students.',
  },
  {
    question: 'Will I get a certificate?',
    answer:
      'Certificates are planned for participants who complete the program. Details will be confirmed before the bootcamp starts.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="w-full py-16">
        <div className="wrap">
          {/* Header */}
          <div className="max-w-[700px] mb-12">
            <span className="status-chip mb-4">Questions & Answers</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Find clear answers to key questions about the program, selection, equipment and participation.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4 mb-14">
            {FAQ_ITEMS.map((item, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="bg-surface border border-line rounded-card p-5 transition-colors hover:border-accent/40"
              >
                <summary className="text-lg font-semibold cursor-pointer">
                  {item.question}
                </summary>
                <p className="text-muted text-base mt-3 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          {/* Institutional Leadership & Faculty Support Card */}
          <div className="bg-surface border border-line rounded-card overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto w-full min-h-[220px]">
                <Image
                  src="/gallery/closing-ceremony-stage.webp"
                  alt="Closing ceremony address at Premier University in the presence of university leadership"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <span className="text-[11px] font-mono text-accent mb-2">Academic & Faculty Leadership</span>
                <h2 className="text-xl font-bold text-text mb-2">
                  Academic backing & university endorsement
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  The bootcamp is organized by the {EVENT.organizer.name} with formal guidance from Premier University faculty leadership and the Department of Computer Science & Engineering.
                </p>
                <p className="text-xs text-muted/80 font-mono">
                  Venue: {EVENT.address}
                </p>
              </div>
            </div>
          </div>

          {/* Other questions note */}
          <div className="bg-surface border border-line rounded-card p-6 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">Other questions?</h2>
              <p className="text-muted text-sm">
                Feel free to email our organizing team directly.
              </p>
            </div>
            <a
              href={`mailto:${EVENT.email}`}
              className="btn btn-secondary text-sm !py-2.5 !px-5 whitespace-nowrap"
            >
              Email {EVENT.email}
            </a>
          </div>

          {/* Final CTA */}
          <div className="final-cta border-t border-line pt-12">
            <h2>Ready to build your first AI project?</h2>
            <p>Apply for your eligibility and we will get back to you by email.</p>
            <Link className="btn btn-primary" href="/apply">
              Apply for your eligibility
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
