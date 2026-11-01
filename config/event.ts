export interface EventConfig {
  name: string;
  shortName: string;
  organizer: {
    name: string;
    chapter: string;
    university: string;
    location: string;
  };
  applyUrl: string;
  email: string;
  phone: string;
  address: string;
  dates: {
    start: string | null;
    end: string | null;
    display: string | null;
  } | null;
  fees: {
    ieeeMember: number | string | null;
    general: number | string | null;
  };
  seats: number | string | null;
  applicationDeadline: string | null;
  socials: {
    facebook: string;
    linkedin: string;
    youtube: string;
    instagram: string;
  };
  cohort2025: {
    participants: number;
    sessions: number;
    members: number;
  };
}

export const EVENT: EventConfig = {
  name: 'IEEE CS AI/ML Bootcamp 2026',
  shortName: 'Bootcamp 2026',
  organizer: {
    name: 'IEEE Computer Society Premier University Student Branch Chapter',
    chapter: 'IEEE CS PUSBC',
    university: 'Premier University',
    location: 'Chattogram, Bangladesh',
  },
  applyUrl: 'https://forms.gle/pKzK7a8EMf8Vpo2WA',
  email: 'ieeecspusbc@gmail.com',
  phone: '01644238788',
  address: 'Academic Building #4, Premier University, Chattogram',
  dates: null,
  fees: {
    ieeeMember: null,
    general: null,
  },
  seats: null,
  applicationDeadline: null,
  socials: {
    facebook: 'https://www.facebook.com/IEEECS.PUSBC/',
    linkedin: 'https://www.linkedin.com/company/ieee-cs-pusbc',
    youtube: 'https://www.youtube.com/@IEEECSPremierUniversitySBC',
    instagram: 'https://www.instagram.com/ieee_cs_premier_university/',
  },
  cohort2025: {
    participants: 65,
    sessions: 5,
    members: 40,
  },
};

export default EVENT;
