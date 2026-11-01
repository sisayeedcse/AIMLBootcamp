/**
 * IEEE CS AI/ML Bootcamp 2026 - Event Configuration
 * Single source of truth for all dates, fees, and seat counts.
 * Update values here to propagate across the entire site.
 */

export interface EventConfig {
  name: string;
  shortName: string;
  year: string;
  organizer: {
    fullName: string;
    chapterName: string;
    university: string;
    location: string;
    email: string;
    address: string;
    copyright: string;
  };
  application: {
    formUrl: string;
    statusBadge: string;
    disclaimer: string;
  };
  dates: {
    overall: string;
    phase1: string;
    phase2: string;
    scheduleNote: string;
  };
  fees: {
    ieeeMembers: string;
    generalStudents: string;
    note: string;
  };
  seats: {
    total: string;
    status: string;
  };
  cohort2025: {
    participants: number;
    sessions: number;
    members: number;
  };
}

export const EVENT_CONFIG: EventConfig = {
  name: 'IEEE CS AI/ML Bootcamp 2026',
  shortName: 'Bootcamp 2026',
  year: '2026',
  organizer: {
    fullName: 'IEEE Computer Society Premier University Student Branch Chapter',
    chapterName: 'IEEE CS PUSBC',
    university: 'Premier University',
    location: 'Chattogram, Bangladesh',
    email: 'ieeecspusbc@gmail.com',
    address: 'Academic Building #4, Premier University, Chattogram',
    copyright: '© 2026 IEEE Computer Society Premier University Student Branch Chapter',
  },
  application: {
    formUrl: 'https://forms.gle/pKzK7a8EMf8Vpo2WA',
    statusBadge: 'Invite-only. Eligibility applications are open.',
    disclaimer: 'Submitting the form does not guarantee a seat.',
  },
  dates: {
    overall: 'TBA',
    phase1: 'TBA (Online, 3 sessions)',
    phase2: 'TBA (In person, 5 sessions)',
    scheduleNote: 'Dates coming soon · Announced to invited applicants',
  },
  fees: {
    ieeeMembers: 'To be announced',
    generalStudents: 'To be announced',
    note: 'We will announce the fee to invited applicants. There are two categories: IEEE members and General students.',
  },
  seats: {
    total: 'TBA',
    status: 'Limited — review-based eligibility',
  },
  cohort2025: {
    participants: 65,
    sessions: 5,
    members: 40,
  },
};

export default EVENT_CONFIG;
