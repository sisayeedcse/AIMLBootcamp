import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroNotebookCell from '@/components/sections/HeroNotebookCell';
import EVENT_CONFIG from '@/config/event';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full">
        {/* HERO SECTION */}
        <header className="hero" id="top">
          <div className="wrap">
            <div className="grid">
              <div>
                <span className="status">{EVENT_CONFIG.application.statusBadge}</span>
                <h1 className="text-white">Learn AI. Understand machine learning. Build something real.</h1>
                <p>
                  A hands-on, beginner-friendly bootcamp by the {EVENT_CONFIG.organizer.fullName}. You start with Python and finish with a deployed machine learning application.
                </p>
                <div className="cta">
                  <Link className="btn primary" href="/apply">
                    Apply for your eligibility
                  </Link>
                  <a className="btn ghost" href="#curriculum">
                    See the curriculum
                  </a>
                </div>
              </div>

              <HeroNotebookCell />
            </div>

            <div className="facts">
              <div>
                <strong>8 sessions</strong>
                <span>Two phases</span>
              </div>
              <div>
                <strong>6 weeks</strong>
                <span>One session a week</span>
              </div>
              <div>
                <strong>No experience needed</strong>
                <span>Beginners welcome</span>
              </div>
              <div>
                <strong>Dates coming soon</strong>
                <span>Announced to invited applicants</span>
              </div>
            </div>
          </div>
        </header>

        {/* JOURNEY SECTION */}
        <section id="journey">
          <div className="wrap">
            <h2>Five steps from first line of code to live app</h2>
            <p className="lead">
              Every session is hands-on. You write code, work with datasets, and finish with a project you can show.
            </p>
            <ol className="steps">
              <li>
                <h3>Python</h3>
                <p>Variables, loops, functions, and your first programs.</p>
              </li>
              <li>
                <h3>Data</h3>
                <p>NumPy, Pandas, cleaning, and visualization.</p>
              </li>
              <li>
                <h3>Machine learning</h3>
                <p>Supervised and unsupervised learning with Scikit-learn.</p>
              </li>
              <li>
                <h3>Model development</h3>
                <p>Train a model, test it, and read its results.</p>
              </li>
              <li>
                <h3>Deployment</h3>
                <p>Turn your model into an app with Streamlit and GitHub.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* SELECTION SECTION */}
        <section id="selection">
          <div className="wrap">
            <h2>How you get a seat</h2>
            <p className="lead">
              Seats are limited, so we review every application. We look at commitment and goals, not just experience.
            </p>
            <ol className="steps">
              <li>
                <h3>Apply</h3>
                <p>Fill in the short eligibility form. It takes about 10 minutes.</p>
              </li>
              <li>
                <h3>Review</h3>
                <p>Our team reviews your programming basics, career thinking, and goals.</p>
              </li>
              <li>
                <h3>Invitation</h3>
                <p>Eligible applicants receive an invitation by email.</p>
              </li>
              <li>
                <h3>Confirm</h3>
                <p>Accept your invitation to confirm your seat.</p>
              </li>
            </ol>
            <p className="mt-7 text-[#a8a8a8] text-[15px]">
              {EVENT_CONFIG.application.disclaimer}
            </p>
          </div>
        </section>

        {/* CURRICULUM SECTION */}
        <section id="curriculum">
          <div className="wrap">
            <h2>Eight sessions, two phases</h2>
            <p className="lead">
              Phase 1 builds your foundation. Phase 2 puts it to work on real machine learning problems.
            </p>

            <div className="phase">
              <h3>
                Phase 1: Foundation <small>Online, 3 sessions</small>
              </h3>
              <div className="sess">
                <article>
                  <span className="n">Session 1</span>
                  <h3>Introduction to Python</h3>
                  <p>Variables, data types, conditions, loops, functions.</p>
                </article>
                <article>
                  <span className="n">Session 2</span>
                  <h3>Python for data handling</h3>
                  <p>Data structures, NumPy, Pandas, file handling.</p>
                </article>
                <article>
                  <span className="n">Session 3</span>
                  <h3>Data analysis and visualization</h3>
                  <p>Cleaning, exploratory analysis, charts, dataset preparation.</p>
                </article>
              </div>
            </div>

            <div className="phase">
              <h3>
                Phase 2: Practical <small>In person, 5 sessions</small>
              </h3>
              <div className="sess">
                <article>
                  <span className="n">Session 4</span>
                  <h3>Introduction to AI and ML</h3>
                  <p>Supervised and unsupervised learning, classification, regression.</p>
                </article>
                <article>
                  <span className="n">Session 5</span>
                  <h3>Machine learning fundamentals</h3>
                  <p>Preprocessing, train and test sets, features, Scikit-learn.</p>
                </article>
                <article>
                  <span className="n">Session 6</span>
                  <h3>Practical ML project</h3>
                  <p>Choose a problem, build a model, evaluate it.</p>
                </article>
                <article>
                  <span className="n">Session 7</span>
                  <h3>Deployment</h3>
                  <p>Save your model, build a Streamlit app, publish on GitHub.</p>
                </article>
                <article>
                  <span className="n">Session 8</span>
                  <h3>Final project showcase</h3>
                  <p>Live demos, feedback, and certificate distribution.</p>
                </article>
              </div>
            </div>

            <p className="text-[#a8a8a8] text-[15px] mb-6">
              Tools: Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Jupyter Notebook, Git, GitHub, Streamlit.
            </p>

            <div>
              <Link className="btn ghost text-sm !py-2.5 !px-5" href="/curriculum">
                View detailed session breakdown & syllabus →
              </Link>
            </div>
          </div>
        </section>

        {/* WHERE WE STARTED (2025) */}
        <section id="past">
          <div className="wrap">
            <h2>Where we started: Bootcamp 2025</h2>
            <p className="lead">
              Our first AI/ML bootcamp introduced the fundamentals to undergraduate students. The 2026 program goes deeper and ends with a deployed project.
            </p>
            <div className="nums">
              <div>
                <strong>{EVENT_CONFIG.cohort2025.participants}</strong>
                <span>Participants</span>
              </div>
              <div>
                <strong>{EVENT_CONFIG.cohort2025.sessions}</strong>
                <span>Technical sessions</span>
              </div>
              <div>
                <strong>{EVENT_CONFIG.cohort2025.members}</strong>
                <span>IEEE CS members</span>
              </div>
            </div>

            <div className="photos">
              <div className="photo-card">
                <Image
                  src="/gallery/gallery-1.webp"
                  alt="Bootcamp 2025 session"
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="photo-caption">Photo 1: Bootcamp 2025 session</div>
              </div>
              <div className="photo-card">
                <Image
                  src="/gallery/gallery-2.webp"
                  alt="Hands-on class"
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="photo-caption">Photo 2: Hands-on class</div>
              </div>
              <div className="photo-card">
                <Image
                  src="/gallery/gallery-3.webp"
                  alt="Certificate ceremony"
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="photo-caption">Photo 3: Certificate ceremony</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEES SECTION */}
        <section id="fees">
          <div className="wrap">
            <h2>Fees will be announced soon</h2>
            <p className="lead">
              We will announce the fee to invited applicants. There are two categories.
            </p>
            <div className="two">
              <div className="card">
                <h3>IEEE members</h3>
                <div className="tba">{EVENT_CONFIG.fees.ieeeMembers}</div>
                <p className="text-[#a8a8a8]">For IEEE and IEEE Computer Society members.</p>
              </div>
              <div className="card">
                <h3>General students</h3>
                <div className="tba">{EVENT_CONFIG.fees.generalStudents}</div>
                <p className="text-[#a8a8a8]">For all other eligible students.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ORGANIZERS SECTION */}
        <section id="organizers">
          <div className="wrap">
            <h2>Organized by</h2>
            <p className="lead">
              Organized by IEEE Computer Society Premier University Student Branch Chapter, in collaboration with IEEE Premier University Student Branch and Premier University.
            </p>
            <div className="logos">
              <div className="logo-card" title="IEEE Computer Society">
                <Image
                  src="/logos/ieee-cs.png"
                  alt="IEEE Computer Society"
                  width={240}
                  height={60}
                  className="max-h-[50px] w-auto object-contain"
                />
              </div>
              <div className="logo-card" title="IEEE">
                <Image
                  src="/logos/ieee.png"
                  alt="IEEE"
                  width={140}
                  height={60}
                  className="max-h-[46px] w-auto object-contain"
                />
              </div>
              <div className="logo-card" title="Premier University">
                <Image
                  src="/logos/premier-university.png"
                  alt="Premier University"
                  width={240}
                  height={60}
                  className="max-h-[50px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq">
          <div className="wrap">
            <h2>Questions</h2>
            <p className="lead">Can’t find your answer? Email {EVENT_CONFIG.organizer.email}.</p>
            
            <details>
              <summary>Do I need to know AI or programming already?</summary>
              <p>
                No. The bootcamp is beginner-friendly and starts with Python. The form asks about your basics only to plan support, not to turn beginners away.
              </p>
            </details>

            <details>
              <summary>Who can apply?</summary>
              <p>
                Undergraduate students interested in AI and machine learning. The application is reviewed before invitations are sent.
              </p>
            </details>

            <details>
              <summary>What do I need to bring?</summary>
              <p>
                A laptop you can use in every session.
              </p>
            </details>

            <details>
              <summary>When does it start, and what does it cost?</summary>
              <p>
                Dates and fees will be announced to invited applicants. There will be one fee for IEEE members and one for general students.
              </p>
            </details>

            <details>
              <summary>Will I get a certificate?</summary>
              <p>
                Certificates are planned for participants who complete the program. The exact details will be confirmed before the bootcamp starts.
              </p>
            </details>

            <div className="mt-8">
              <Link className="btn ghost text-sm !py-2.5 !px-5" href="/faq">
                View all frequently asked questions →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="final">
          <div className="wrap">
            <h2>Ready to build your first AI project?</h2>
            <p>Apply for your eligibility and we will get back to you by email.</p>
            <Link className="btn primary" href="/apply">
              Apply for your eligibility
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
