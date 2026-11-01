import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Curriculum',
  description:
    'Comprehensive syllabus for IEEE CS AI/ML Bootcamp 2026. 8 sessions across two phases, taking you from Python foundations to a deployed machine learning application.',
};

const PHASE_1_SESSIONS = [
  {
    tag: 'Session 1',
    title: 'Introduction to Python',
    topics: [
      'Python fundamentals',
      'Variables and data types',
      'Conditional statements and loops',
      'Functions and programming exercises',
    ],
  },
  {
    tag: 'Session 2',
    title: 'Python for data handling',
    topics: [
      'Data structures',
      'NumPy',
      'Pandas',
      'File handling',
      'Data manipulation',
    ],
  },
  {
    tag: 'Session 3',
    title: 'Data analysis and visualization',
    topics: [
      'Data cleaning',
      'Exploratory data analysis',
      'Data visualization',
      'Dataset preparation',
    ],
  },
];

const PHASE_2_SESSIONS = [
  {
    tag: 'Session 4',
    title: 'Introduction to AI and ML',
    topics: [
      'AI, ML and deep learning',
      'Supervised and unsupervised learning',
      'Classification and regression',
      'Real-world applications',
    ],
  },
  {
    tag: 'Session 5',
    title: 'Machine learning fundamentals',
    topics: [
      'Data preprocessing',
      'Training and testing datasets',
      'Feature selection',
      'Scikit-learn',
      'Model training',
    ],
  },
  {
    tag: 'Session 6',
    title: 'Practical machine learning project',
    topics: [
      'Problem identification',
      'Dataset selection',
      'Model development',
      'Evaluation and performance analysis',
    ],
  },
  {
    tag: 'Session 7',
    title: 'Model deployment and application development',
    topics: [
      'Model saving',
      'Streamlit',
      'Application development',
      'GitHub',
      'Deployment fundamentals',
    ],
  },
  {
    tag: 'Session 8',
    title: 'Final project showcase',
    topics: [
      'Project presentation',
      'Live demonstrations',
      'Technical evaluation',
      'Mentorship and feedback',
    ],
  },
];

export default function CurriculumPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="w-full py-16">
        <div className="wrap">
          {/* Header */}
          <div className="max-w-[700px] mb-12">
            <span className="status-chip mb-4">Curriculum</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4">
              Eight sessions, two phases
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Every session is hands-on. You begin with core Python foundations online, then move into in-person practical sessions to develop, evaluate and deploy a real machine learning application.
            </p>
          </div>

          {/* Phase 1 */}
          <div className="mb-14">
            <div className="border-b border-line pb-4 mb-6">
              <h2 className="text-2xl font-bold">Phase 1: Foundation</h2>
              <p className="text-muted text-sm">Online · 3 sessions</p>
            </div>

            <div className="space-y-4">
              {PHASE_1_SESSIONS.map((sess, idx) => (
                <details
                  key={sess.tag}
                  open={idx === 0}
                  className="bg-surface border border-line rounded-card p-5 transition-colors hover:border-accent/40"
                >
                  <summary className="text-lg font-semibold cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent">{sess.tag}</span>
                      <span>{sess.title}</span>
                    </span>
                  </summary>

                  <div className="mt-4 pt-4 border-t border-line">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-muted mb-3">
                      Topics covered
                    </h3>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {sess.topics.map((t) => (
                        <li key={t} className="text-sm text-text flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mb-14">
            <div className="border-b border-line pb-4 mb-6">
              <h2 className="text-2xl font-bold">Phase 2: Practical</h2>
              <p className="text-muted text-sm">In person · 5 sessions</p>
            </div>

            <div className="space-y-4">
              {PHASE_2_SESSIONS.map((sess) => (
                <details
                  key={sess.tag}
                  className="bg-surface border border-line rounded-card p-5 transition-colors hover:border-accent/40"
                >
                  <summary className="text-lg font-semibold cursor-pointer">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent">{sess.tag}</span>
                      <span>{sess.title}</span>
                    </span>
                  </summary>

                  <div className="mt-4 pt-4 border-t border-line">
                    <h3 className="text-xs uppercase font-mono tracking-wider text-muted mb-3">
                      Topics covered
                    </h3>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {sess.topics.map((t) => (
                        <li key={t} className="text-sm text-text flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Hands-on Lab Environment Visuals */}
          <div className="mb-14 bg-surface border border-line rounded-card p-6 sm:p-8">
            <div className="max-w-[650px] mb-6">
              <span className="status-chip mb-3">Lab Environment</span>
              <h2 className="text-xl sm:text-2xl font-bold my-2">
                Grounding theory in direct laboratory practice
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Every session is structured around active execution. Participants work with real datasets, write code in live environments, and receive immediate faculty and mentor guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface/50 border border-line rounded-card overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/gallery/session-3-teaching.webp"
                    alt="Instructor explaining machine learning algorithms during a lab session"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 border-t border-line">
                  <h3 className="text-sm font-semibold text-text mb-1">
                    Whiteboard & Code Walkthroughs
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Deconstructing complex supervised and unsupervised learning algorithms before writing implementation code.
                  </p>
                </div>
              </div>

              <div className="bg-surface/50 border border-line rounded-card overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/gallery/session-1-lab.webp"
                    alt="Students on computer lab workstations at Premier University"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 border-t border-line">
                  <h3 className="text-sm font-semibold text-text mb-1">
                    Workstation Lab Sessions
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Configuring Jupyter notebooks, importing scientific libraries, and debugging real machine learning pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-muted text-sm mb-12">
            Format, venue and dates are confirmed in your invitation.
          </p>

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
