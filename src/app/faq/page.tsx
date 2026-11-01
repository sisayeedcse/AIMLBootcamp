import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EVENT_CONFIG from '@/config/event';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to all your questions regarding IEEE CS AI/ML Bootcamp 2026 eligibility, format, laptop requirements, fees, and certificates.',
};

interface FAQGroup {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

const FAQ_DATA: FAQGroup[] = [
  {
    category: 'Eligibility & Applications',
    items: [
      {
        question: 'Do I need to know AI or programming already?',
        answer:
          'No. The bootcamp is beginner-friendly and starts from the ground up with Python basics. The eligibility form asks about your programming background only to help mentors plan tailored support, not to turn beginners away.',
      },
      {
        question: 'Who is eligible to apply?',
        answer:
          'Undergraduate students from Premier University and other recognized institutions who are eager to learn machine learning, write code, and build a project are welcome to apply.',
      },
      {
        question: 'How are applications evaluated?',
        answer:
          'Seats are limited to maintain a high mentor-to-student ratio. Our committee reviews each application based on genuine curiosity, learning goals, and commitment to attend all sessions.',
      },
      {
        question: 'Does submitting the form guarantee a seat?',
        answer:
          'No. Submitting the form does not guarantee a seat. Once reviews are complete, eligible applicants will receive an official invitation email with onboarding instructions.',
      },
    ],
  },
  {
    category: 'Format & Schedule',
    items: [
      {
        question: 'What is the structure of the bootcamp?',
        answer:
          'The bootcamp is divided into two phases across 8 sessions: Phase 1 is a 3-session Online Foundation covering Python, data manipulation with NumPy/Pandas, and exploratory data analysis. Phase 2 consists of 5 In-Person Practical sessions held at Premier University, focusing on machine learning algorithms, Scikit-learn pipelines, model evaluation, Streamlit deployment, and the final project showcase.',
      },
      {
        question: 'When will dates be announced?',
        answer:
          'Dates are currently To Be Announced (TBA) and will be communicated directly to invited applicants via email.',
      },
      {
        question: 'Where will the in-person sessions take place?',
        answer:
          'In-person practical sessions will be conducted at Premier University, Academic Building #4, Chattogram.',
      },
    ],
  },
  {
    category: 'Requirements & Equipment',
    items: [
      {
        question: 'What do I need to bring to the sessions?',
        answer:
          'A working laptop with its charger. You will need internet connectivity (or mobile hotspot) and the ability to install Python 3.10+, VS Code, and Git. For the online phase, a webcam and microphone are recommended.',
      },
      {
        question: 'What if my laptop does not have a dedicated GPU?',
        answer:
          'You do not need a GPU. The core curriculum uses Scikit-learn and standard CPU computing. For any computationally demanding tasks, we will use free cloud environments like Google Colab.',
      },
    ],
  },
  {
    category: 'Fees & Registration',
    items: [
      {
        question: 'What is the registration fee?',
        answer:
          'Fees will be announced soon. There will be two tiers: a discounted fee for IEEE and IEEE Computer Society members, and a general fee for other eligible students. Details and payment instructions will be sent with your invitation.',
      },
      {
        question: 'When do I pay the fee?',
        answer:
          'You only pay the fee after your application has been reviewed and you receive an official invitation to join the cohort.',
      },
    ],
  },
  {
    category: 'Outcomes & Certificates',
    items: [
      {
        question: 'What will I build by the end of the bootcamp?',
        answer:
          'You will develop an end-to-end machine learning project: from dataset cleaning and model training to building an interactive Streamlit web application published live on GitHub.',
      },
      {
        question: 'Will I receive an official certificate?',
        answer:
          'Yes. Participants who attend the required sessions and complete their deployed project will receive an official certificate from the IEEE Computer Society Premier University Student Branch Chapter.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main className="w-full py-16">
        <div className="wrap">
          {/* Header */}
          <div className="max-w-[760px] mb-12">
            <span className="status mb-4">Frequently Asked Questions</span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold my-4">
              Everything You Need to Know
            </h1>
            <p className="text-[#a8a8a8] text-lg leading-relaxed">
              Have questions about eligibility, prerequisites, equipment, or the learning process? We have compiled detailed answers below.
            </p>
          </div>

          {/* Grouped FAQs */}
          <div className="space-y-12 mb-16">
            {FAQ_DATA.map((group) => (
              <div key={group.category} className="border-t border-[#2b2b2b] pt-8">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-white font-display">
                  {group.category}
                </h2>

                <div className="space-y-2">
                  {group.items.map((item, idx) => (
                    <details key={idx} className="group">
                      <summary>{item.question}</summary>
                      <p className="text-[#a8a8a8] text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact help card */}
          <div className="border border-[#2b2b2b] bg-[#141414] rounded-lg p-8 text-center max-w-[720px] mx-auto">
            <h3 className="text-xl font-bold mb-2 text-white">Still have questions?</h3>
            <p className="text-[#a8a8a8] text-sm mb-6 max-w-[48ch] mx-auto">
              Feel free to reach out to our organizing team directly. We are happy to clarify any questions before you apply.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${EVENT_CONFIG.organizer.email}`}
                className="btn ghost text-sm !py-2.5 !px-5"
              >
                Email {EVENT_CONFIG.organizer.email}
              </a>
              <Link className="btn primary text-sm !py-2.5 !px-5" href="/apply">
                Apply for eligibility
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
