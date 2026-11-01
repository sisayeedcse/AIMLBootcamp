import type { Metadata } from 'next';
import Link from 'next/link';
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
