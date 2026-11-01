import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroNotebookCell from '@/components/sections/HeroNotebookCell';
import LearningCurveLine from '@/components/sections/LearningCurveLine';
import CohortGallery from '@/components/sections/CohortGallery';
import PressSection from '@/components/sections/PressSection';
import EVENT from '@/config/event';

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="w-full">
        {/* HERO SECTION */}
        <header className="hero-section" id="top">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <span className="status-chip">Invite-only. Eligibility applications are open.</span>
                <h1>Learn AI. Understand machine learning. Build something real.</h1>
                <p className="hero-lead">
                  A hands-on, beginner-friendly bootcamp by the {EVENT.organizer.name}. You start with Python and finish with a deployed machine learning application.
                </p>
                <div className="flex gap-3.5 flex-wrap">
                  <Link className="btn btn-primary" href="/apply">
                    Apply for your eligibility
                  </Link>
                  <Link className="btn btn-secondary" href="/curriculum">
                    See the curriculum
                  </Link>
                </div>
              </div>

              <div>
                <HeroNotebookCell />
              </div>
            </div>

            {/* Facts row */}
            <div className="facts-row">
              <div className="facts-item">
                <span className="facts-value">8 sessions</span>
                <span className="facts-caption">Two phases</span>
              </div>
              <div className="facts-item">
                <span className="facts-value">6 weeks</span>
                <span className="facts-caption">One session a week</span>
              </div>
              <div className="facts-item">
                <span className="facts-value">Beginner-friendly</span>
                <span className="facts-caption">No AI experience needed</span>
              </div>
              <div className="facts-item">
                <span className="facts-value">Dates coming soon</span>
                <span className="facts-caption">Shared with invited applicants</span>
              </div>
            </div>
          </div>
        </header>

        {/* JOURNEY SECTION */}
        <section id="journey" aria-labelledby="journey-heading">
          <div className="wrap">
            <h2 id="journey-heading">Five steps from first line of code to live app</h2>
            <p className="lead">
              Every session is hands-on. You write code, work with datasets, and finish with a project you can show.
            </p>

            <LearningCurveLine />

            <ol className="steps-list p-0 m-0">
              <li className="step-card">
                <span className="step-in">In [1]</span>
                <h3>Python</h3>
                <p>Variables, loops, functions, first programs.</p>
              </li>
              <li className="step-card">
                <span className="step-in">In [2]</span>
                <h3>Data</h3>
                <p>NumPy, Pandas, cleaning, visualization.</p>
              </li>
              <li className="step-card">
                <span className="step-in">In [3]</span>
                <h3>Machine learning</h3>
                <p>Supervised and unsupervised learning with Scikit-learn.</p>
              </li>
              <li className="step-card">
                <span className="step-in">In [4]</span>
                <h3>Model development</h3>
                <p>Train, test and read results.</p>
              </li>
              <li className="step-card">
                <span className="step-in">In [5]</span>
                <h3>Deployment</h3>
                <p>Turn your model into an app with Streamlit and GitHub.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* SELECTION SECTION */}
        <section id="selection" aria-labelledby="selection-heading">
          <div className="wrap">
            <h2 id="selection-heading">How you get a seat</h2>
            <p className="lead">
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

            <p className="mt-8 text-muted text-[15px]">
              Submitting the form does not guarantee a seat.
            </p>
          </div>
        </section>

        {/* CURRICULUM SNAPSHOT SECTION */}
        <section id="curriculum" aria-labelledby="curriculum-heading">
          <div className="wrap">
            <h2 id="curriculum-heading">Eight sessions, two phases</h2>
            <p className="lead">
              Phase 1 builds your foundation online. Phase 2 puts it to work on real machine learning problems in person.
            </p>

            <div className="curriculum-phase">
              <div className="phase-heading">
                <h3 className="text-xl">Phase 1: Foundation</h3>
                <span className="phase-meta">Online, 3 sessions</span>
              </div>
              <div className="session-grid">
                <article className="session-card">
                  <span className="session-tag">Session 1</span>
                  <h3>Introduction to Python</h3>
                  <p>Variables, data types, conditions, loops, functions.</p>
                </article>
                <article className="session-card">
                  <span className="session-tag">Session 2</span>
                  <h3>Python for data handling</h3>
                  <p>Data structures, NumPy, Pandas, file handling.</p>
                </article>
                <article className="session-card">
                  <span className="session-tag">Session 3</span>
                  <h3>Data analysis and visualization</h3>
                  <p>Cleaning, exploratory analysis, charts, dataset preparation.</p>
                </article>
              </div>
            </div>

            <div className="curriculum-phase">
              <div className="phase-heading">
                <h3 className="text-xl">Phase 2: Practical</h3>
                <span className="phase-meta">In person, 5 sessions</span>
              </div>
              <div className="session-grid">
                <article className="session-card">
                  <span className="session-tag">Session 4</span>
                  <h3>Introduction to AI and ML</h3>
                  <p>Supervised and unsupervised learning, classification, regression.</p>
                </article>
                <article className="session-card">
                  <span className="session-tag">Session 5</span>
                  <h3>Machine learning fundamentals</h3>
                  <p>Preprocessing, train and test sets, features, Scikit-learn.</p>
                </article>
                <article className="session-card">
                  <span className="session-tag">Session 6</span>
                  <h3>Practical ML project</h3>
                  <p>Choose a problem, build a model, evaluate it.</p>
                </article>
                <article className="session-card">
                  <span className="session-tag">Session 7</span>
                  <h3>Deployment</h3>
                  <p>Save your model, build a Streamlit app, publish on GitHub.</p>
                </article>
                <article className="session-card">
                  <span className="session-tag">Session 8</span>
                  <h3>Final project showcase</h3>
                  <p>Live demos, feedback, and certificate distribution.</p>
                </article>
              </div>
            </div>

            <p className="text-muted text-[15px] mb-6">
              Tools: Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Jupyter Notebook, Git, GitHub, Streamlit.
            </p>

            <div>
              <Link className="btn btn-secondary text-sm !py-2.5 !px-5" href="/curriculum">
                See the full syllabus →
              </Link>
            </div>
          </div>
        </section>

        {/* WHERE WE STARTED: BOOTCAMP 2025 */}
        <section id="past" aria-labelledby="past-heading">
          <div className="wrap">
            <h2 id="past-heading">Where we started: Bootcamp 2025</h2>
            <p className="lead">
              Our first AI/ML bootcamp introduced the fundamentals to undergraduate students. The 2026 program goes deeper and ends with a deployed project.
            </p>

            <div className="stats-numbers mb-10">
              <div className="stats-number-item">
                <strong>{EVENT.cohort2025.participants}</strong>
                <span>Participants</span>
              </div>
              <div className="stats-number-item">
                <strong>{EVENT.cohort2025.sessions}</strong>
                <span>Technical sessions</span>
              </div>
              <div className="stats-number-item">
                <strong>{EVENT.cohort2025.members}</strong>
                <span>IEEE CS members</span>
              </div>
            </div>

            <CohortGallery />
          </div>
        </section>

        {/* ACADEMIC & MEDIA RECOGNITION */}
        <PressSection />

        {/* FEES SECTION */}
        <section id="fees" aria-labelledby="fees-heading">
          <div className="wrap">
            <h2 id="fees-heading">Fees will be announced soon</h2>
            <p className="lead">
              We will share the fee with invited applicants.
            </p>

            <div className="fees-grid">
              <div className="fee-card">
                <h3>IEEE members</h3>
                <div className="fee-tba">To be announced</div>
                <p className="text-muted text-sm">For IEEE and IEEE Computer Society members.</p>
              </div>
              <div className="fee-card">
                <h3>General students</h3>
                <div className="fee-tba">To be announced</div>
                <p className="text-muted text-sm">For all other eligible students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ORGANIZED BY - SINGLE WHITE PANEL */}
        <section id="organizers" aria-labelledby="organizers-heading">
          <div className="wrap">
            <h2 id="organizers-heading">Organized by</h2>
            <p className="lead">
              Organized by {EVENT.organizer.name}, in collaboration with the IEEE Premier University Student Branch and Premier University.
            </p>

            <div className="organizer-panel">
              <div className="logo-wrap" title="IEEE Computer Society Premier University Student Branch Chapter">
                <Image
                  src="/logos/ieee-cs-pusbc.png"
                  alt="IEEE Computer Society Premier University Student Branch Chapter"
                  className="logo-img"
                  width={240}
                  height={56}
                />
              </div>

              <div className="panel-divider" aria-hidden="true" />

              <div className="logo-wrap" title="IEEE Premier University Student Branch">
                <Image
                  src="/logos/ieee-pusb.png"
                  alt="IEEE Premier University Student Branch"
                  className="logo-img"
                  width={240}
                  height={56}
                />
              </div>

              <div className="panel-divider" aria-hidden="true" />

              <div className="logo-wrap" title="Premier University">
                <Image
                  src="/logos/premier-university.png"
                  alt="Premier University"
                  className="logo-img"
                  width={240}
                  height={56}
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" aria-labelledby="faq-heading">
          <div className="wrap">
            <h2 id="faq-heading">Questions</h2>
            <p className="lead">
              Can’t find your answer? Email{' '}
              <a href={`mailto:${EVENT.email}`} className="text-accent hover:underline">
                {EVENT.email}
              </a>
              .
            </p>

            <details>
              <summary>Do I need to know AI or programming already?</summary>
              <p>
                No. It is beginner-friendly and starts with Python. The form asks about your basics only to plan support, not to turn beginners away.
              </p>
            </details>

            <details>
              <summary>Who can apply?</summary>
              <p>
                Undergraduate students interested in AI and machine learning. Applications are reviewed before invitations are sent.
              </p>
            </details>

            <details>
              <summary>How are applicants selected?</summary>
              <p>
                We review your programming basics, career thinking and goals together.
              </p>
            </details>

            <details>
              <summary>What do I need to bring?</summary>
              <p>
                A laptop you can use in every session.
              </p>
            </details>

            <details>
              <summary>When does it start and what does it cost?</summary>
              <p>
                Dates and fees will be announced to invited applicants. There will be one fee for IEEE members and one for general students.
              </p>
            </details>

            <details>
              <summary>Will I get a certificate?</summary>
              <p>
                Certificates are planned for participants who complete the program. Details will be confirmed before the bootcamp starts.
              </p>
            </details>

            <div className="mt-8">
              <Link className="btn btn-secondary text-sm !py-2.5 !px-5" href="/faq">
                All questions →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta" aria-labelledby="final-heading">
          <div className="wrap">
            <h2 id="final-heading">Ready to build your first AI project?</h2>
            <p>Apply for your eligibility and we will get back to you by email.</p>
            <Link className="btn btn-primary" href="/apply">
              Apply for your eligibility
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
