import type {
  NavItem,
  TimelineStage,
  CurriculumPhase,
  ScheduleDay,
  TechItem,
  Award,
  RegistrationTier,
  FAQItem,
  Testimonial,
  BenefitCard,
  FeatureCard,
} from '@/types';

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Projects', href: '#capstone' },
  { label: 'Registration', href: '#registration' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

// ─────────────────────────────────────────────
// EVENT INFO
// ─────────────────────────────────────────────
export const EVENT = {
  title: 'IEEE AI/ML Bootcamp 2.0',
  subtitle: 'From Fundamentals to Real-World Applications',
  tagline: 'Learn • Build • Deploy',
  organizer: 'IEEE Computer Society Premier University Student Branch Chapter',
  venue: {
    name: 'Premier University',
    building: 'Academic Building #4',
    street: 'Hazari Lane, Kotowali',
    city: 'Chattogram',
    country: 'Bangladesh',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8!2d91.8325!3d22.3598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a0c9876543%3A0x1234567890abcdef!2sPremier%20University%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1690000000000!5m2!1sen!2sbd',
  },
  dates: {
    online: {
      label: 'Online Python Foundation',
      start: 'August 25, 2026',
      end: 'August 27, 2026',
      range: 'August 25–27, 2026',
    },
    offline: {
      label: 'Offline AI/ML Bootcamp',
      start: 'September 3, 2026',
      end: 'October 1, 2026',
      range: 'September 3 - October 1, 2026',
    },
  },
  registration: {
    deadline: '2026-08-20T23:59:59+06:00',
    totalSeats: 100,
    seatsLeft: 68,
  },
  contact: {
    email: 'ieeecspusbc@gmail.com',
    phone: '01644238788',
    facebook: 'https://www.facebook.com/IEEECS.PUSBC/',
    linkedin: 'https://www.linkedin.com/company/ieee-cs-pusbc',
    youtube: 'https://www.youtube.com/@IEEECSPremierUniversitySBC',
    instagram: 'https://www.instagram.com/ieee_cs_premier_university/',
    website: 'https://ieeepusb.org/cs',
  },
};

// ─────────────────────────────────────────────
// BOOTCAMP 2025 STATISTICS
// ─────────────────────────────────────────────
export const STATS_2025 = [
  { value: 65, suffix: '+', label: 'Participants' },
  { value: 5, suffix: '', label: 'Sessions' },
  { value: 40, suffix: '+', label: 'IEEE CS Members' },
  { value: 98, suffix: '%', label: 'Positive Feedback' },
];

export const HERO_STATS = [
  { value: 10, suffix: ' Days', label: 'Bootcamp Duration' },
  { value: 100, suffix: '+', label: 'Expected Participants' },
  { value: 5, suffix: '', label: 'Learning Stages' },
  { value: 100, suffix: '%', label: 'Hands-On Learning' },
];

// ─────────────────────────────────────────────
// WHY JOIN – FEATURE CARDS
// ─────────────────────────────────────────────
export const FEATURE_CARDS: FeatureCard[] = [
  {
    icon: 'Brain',
    title: 'Hands-On AI/ML Training',
    description:
      'Build and train real machine learning models from scratch using Python and industry-standard libraries on real-world datasets.',
  },
  {
    icon: 'Code2',
    title: 'Python for Data Science',
    description:
      'Master Python programming with a focus on data manipulation, visualization, and preparation for machine learning workflows.',
  },
  {
    icon: 'Database',
    title: 'Real-World Datasets',
    description:
      'Work with authentic datasets from domains like healthcare, finance, and NLP — going far beyond toy examples.',
  },
  {
    icon: 'Rocket',
    title: 'Capstone Project',
    description:
      'Build a complete, portfolio-ready AI application — from data ingestion and model training to a deployed web interface.',
  },
  {
    icon: 'Users',
    title: 'Expert Mentorship',
    description:
      'Learn directly from experienced IEEE members, university faculty, and industry practitioners who guide your journey.',
  },
  {
    icon: 'Network',
    title: 'IEEE Networking',
    description:
      'Connect with a global professional community, attend exclusive IEEE events, and expand your professional network.',
  },
  {
    icon: 'Award',
    title: 'IEEE Certificate',
    description:
      'Earn an officially recognized IEEE Computer Society certificate that validates your AI/ML skills to future employers.',
  },
  {
    icon: 'TrendingUp',
    title: 'Career Development',
    description:
      'Get career guidance, resume reviews, and insights into AI career paths from seasoned professionals.',
  },
];

// ─────────────────────────────────────────────
// LEARNING JOURNEY TIMELINE
// ─────────────────────────────────────────────
export const LEARNING_STAGES: TimelineStage[] = [
  {
    stage: 1,
    title: 'Python Foundations',
    description:
      'Master the programming language of AI. From syntax to data structures, build the solid foundation every AI engineer needs.',
    topics: ['Python Syntax & OOP', 'NumPy & Pandas', 'File Handling', 'Virtual Environments'],
    icon: 'Code2',
    color: '#FFB000',
  },
  {
    stage: 2,
    title: 'Data Analysis & Visualization',
    description:
      'Explore and understand data like a data scientist. Clean messy datasets, uncover patterns, and tell stories with visualizations.',
    topics: ['EDA Techniques', 'Matplotlib & Seaborn', 'Statistical Analysis', 'Data Cleaning'],
    icon: 'BarChart2',
    color: '#3B82F6',
  },
  {
    stage: 3,
    title: 'Machine Learning Core',
    description:
      'Implement supervised and unsupervised learning algorithms. Understand how models learn from data and make predictions.',
    topics: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Feature Engineering',
      'Scikit-learn',
    ],
    icon: 'Brain',
    color: '#8B5CF6',
  },
  {
    stage: 4,
    title: 'Model Evaluation & Optimization',
    description:
      'Learn to measure model performance rigorously. Apply cross-validation, tune hyperparameters, and combat overfitting.',
    topics: [
      'Evaluation Metrics',
      'Cross-Validation',
      'Hyperparameter Tuning',
      'Bias-Variance Tradeoff',
    ],
    icon: 'Settings',
    color: '#10B981',
  },
  {
    stage: 5,
    title: 'Deployment & Project Showcase',
    description:
      'Take your models from notebooks to production. Build interactive web apps and present your projects to a panel of judges.',
    topics: ['Streamlit Web Apps', 'Model Serialization', 'GitHub Deployment', 'Presentation Skills'],
    icon: 'Rocket',
    color: '#F59E0B',
  },
];

// ─────────────────────────────────────────────
// CURRICULUM
// ─────────────────────────────────────────────
export const CURRICULUM: CurriculumPhase[] = [
  {
    phase: 'Phase 1 – Online Python Foundation',
    type: 'online',
    dates: 'August 25–27, 2026 (3 Days, Online)',
    modules: [
      {
        title: 'Python Essentials',
        duration: 'Day 1 – August 25',
        topics: [
          'Introduction to Python programming language',
          'Variables, data types, and operators',
          'Control flow: conditionals and loops',
          'Functions, modules, and packages',
          'Object-Oriented Programming (OOP) fundamentals',
          'Introduction to virtual environments and pip',
          'Hands-on coding exercises and mini-challenges',
        ],
        description:
          'Build a rock-solid Python foundation with exercises designed for complete beginners.',
      },
      {
        title: 'Python for Data Science',
        duration: 'Day 2 – August 26',
        topics: [
          'NumPy: arrays, broadcasting, and linear algebra basics',
          'Pandas: DataFrames, Series, and data wrangling',
          'Reading and writing CSV, Excel, and JSON files',
          'Data cleaning: handling missing values and outliers',
          'Introduction to Matplotlib and Seaborn for visualization',
          'Exploratory Data Analysis (EDA) workflow',
          'Lab: Analyze a real-world dataset end-to-end',
        ],
        description:
          'Learn the essential Python data science stack used by professionals in every AI project.',
      },
      {
        title: 'Python Project Preparation',
        duration: 'Day 3 – August 27',
        topics: [
          'Introduction to Git and GitHub for version control',
          'Setting up Google Colab and VS Code for AI development',
          'Introduction to machine learning concepts and terminology',
          'Overview of Scikit-learn and the ML workflow',
          'Mini-project: End-to-end data pipeline using Pandas and Matplotlib',
          'Team formation for Capstone Project',
          'Q&A and preparation for the offline Bootcamp',
        ],
        description:
          'Bridge the gap between Python programming and machine learning with a hands-on mini-project.',
      },
    ],
  },
  {
    phase: 'Phase 2 – Offline AI/ML Bootcamp',
    type: 'offline',
    dates: 'Thursdays, Sept 3 - Oct 1, 2026 (5 Weeks, Offline at Premier University)',
    modules: [
      {
        title: 'Introduction to Artificial Intelligence & ML',
        duration: 'Day 1 – September 3',
        topics: [
          'History and landscape of Artificial Intelligence',
          'Types of ML: supervised, unsupervised, reinforcement learning',
          'The end-to-end ML pipeline',
          'Setting up the local ML development environment',
          'Lab: Your first Scikit-learn model – Linear Regression',
          'Overfitting, underfitting, and the bias-variance tradeoff',
          'Keynote: The AI Revolution and Career Opportunities in Bangladesh',
        ],
        description:
          'Gain a strong conceptual foundation in AI and build your first machine learning model.',
      },
      {
        title: 'Feature Engineering & Data Preprocessing',
        duration: 'Day 2 - September 10',
        topics: [
          'Feature selection techniques: filter, wrapper, and embedded methods',
          'Encoding categorical variables: Label, One-Hot, Target Encoding',
          'Feature scaling: Normalization vs. Standardization',
          'Handling imbalanced datasets: SMOTE and class weighting',
          'Feature extraction and dimensionality reduction (PCA)',
          'Lab: Preprocess a healthcare dataset for ML modeling',
          'Case study: Feature engineering in industry AI projects',
        ],
        description:
          'Master the art of preparing raw data into high-quality features that power accurate models.',
      },
      {
        title: 'Classification & Regression Algorithms',
        duration: 'Day 3 - September 17',
        topics: [
          'Logistic Regression and Decision Trees',
          'Random Forest and Ensemble Methods (Bagging, Boosting)',
          'Support Vector Machines (SVM)',
          'K-Nearest Neighbors (KNN) and Naive Bayes',
          'Regression algorithms: Ridge, Lasso, ElasticNet',
          'Lab: Build a multi-model comparison pipeline',
          'Introduction to Capstone Project requirements and judging criteria',
        ],
        description:
          'Implement and compare the most widely used ML algorithms with hands-on laboratory sessions.',
      },
      {
        title: 'Model Evaluation, Tuning & Deployment',
        duration: 'Day 4 - September 24',
        topics: [
          'Evaluation metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC',
          'Cross-validation strategies and the confusion matrix',
          'Hyperparameter tuning: GridSearchCV and RandomizedSearchCV',
          'Model persistence with Joblib and Pickle',
          'Introduction to Streamlit for ML model deployment',
          'Lab: Deploy a trained model as an interactive web application',
          'AI Innovation Challenge: Team presentation preparation',
        ],
        description:
          'Learn how to rigorously evaluate, tune, and deploy your ML models to production.',
      },
      {
        title: 'Capstone Demo Day & Project Showcase',
        duration: 'Day 5 - October 1',
        topics: [
          'Final team project presentations to a panel of judges',
          'Live demonstration of deployed AI applications',
          'Peer review and audience voting (People\'s Choice Award)',
          'Awards ceremony: Best AI Project, Best Innovation, Best Deployment',
          'IEEE membership benefits and future opportunities session',
          'Networking session with speakers and industry mentors',
          'Certificate distribution and official closing ceremony',
        ],
        description:
          'Showcase your work, celebrate achievements, and receive your official IEEE certificate.',
      },
    ],
  },
];

// ─────────────────────────────────────────────
// SCHEDULE (5-DAY OFFLINE + 3-DAY ONLINE)
// ─────────────────────────────────────────────
export const SCHEDULE: ScheduleDay[] = [
  {
    day: 1,
    date: 'August 25, 2026',
    type: 'online',
    title: 'Python Essentials',
    sessions: [
      { time: '20:00 - 20:30', topic: 'Opening & Orientation', instructor: 'Bootcamp Team', type: 'keynote', outcome: 'Understand Bootcamp structure' },
      { time: '20:30 - 21:30', topic: 'Python Syntax, Variables & Control Flow', instructor: 'TBA', type: 'lecture', outcome: 'Write basic Python programs' },
      { time: '21:30 - 22:15', topic: 'Functions, OOP & Modules', instructor: 'TBA', type: 'lab', outcome: 'Build modular Python code' },
      { time: '22:15 - 22:45', topic: 'Lab: Coding Challenges', instructor: 'TBA', type: 'lab', outcome: 'Solve real Python problems' },
      { time: '22:45 - 23:00', topic: 'Q&A & Wrap-up', instructor: 'Bootcamp Team', type: 'keynote', outcome: 'Address doubts and review' },
    ],
  },
  {
    day: 2,
    date: 'August 26, 2026',
    type: 'online',
    title: 'Python for Data Science',
    sessions: [
      { time: '20:00 - 21:00', topic: 'NumPy & Pandas Deep Dive', instructor: 'TBA', type: 'lecture', outcome: 'Manipulate arrays and DataFrames' },
      { time: '21:00 - 22:00', topic: 'Data Visualization with Matplotlib & Seaborn', instructor: 'TBA', type: 'lecture', outcome: 'Create insightful charts' },
      { time: '22:00 - 22:45', topic: 'Lab: Exploratory Data Analysis (EDA)', instructor: 'TBA', type: 'lab', outcome: 'Complete EDA on a real dataset' },
      { time: '22:45 - 23:00', topic: 'Dataset Analysis Q&A', instructor: 'TBA', type: 'keynote', outcome: 'Reinforce EDA skills' },
    ],
  },
  {
    day: 3,
    date: 'August 27, 2026',
    type: 'online',
    title: 'Project Prep & ML Intro',
    sessions: [
      { time: '20:00 - 20:45', topic: 'Git, GitHub & Development Tools', instructor: 'TBA', type: 'lecture', outcome: 'Version control a project' },
      { time: '20:45 - 21:30', topic: 'ML Concepts & Scikit-learn Overview', instructor: 'TBA', type: 'lecture', outcome: 'Understand the ML workflow' },
      { time: '21:30 - 22:30', topic: 'Mini-Project: End-to-End Data Pipeline', instructor: 'TBA', type: 'project', outcome: 'Build a complete pipeline' },
      { time: '22:30 - 23:00', topic: 'Team Formation & Offline Briefing', instructor: 'Bootcamp Team', type: 'keynote', outcome: 'Form capstone teams' },
    ],
  },
  {
    day: 4,
    date: 'September 3, 2026',
    type: 'offline',
    title: 'AI Foundations',
    sessions: [
      { time: '10:00 - 10:45', topic: 'Intro to ML & Mathematics Refresher', instructor: 'TBA', type: 'lecture', outcome: 'Grasp linear algebra basics' },
      { time: '10:45 - 11:45', topic: 'Linear Regression & Optimization', instructor: 'TBA', type: 'lecture', outcome: 'Train your first ML model' },
      { time: '11:45 - 12:30', topic: 'Bias-Variance Tradeoff & Regularization', instructor: 'TBA', type: 'lecture', outcome: 'Diagnose model problems' },
      { time: '12:30 - 13:00', topic: 'Keynote: AI Careers in Bangladesh', instructor: 'Guest Speaker', type: 'keynote', outcome: 'Explore career paths' },
    ],
  },
  {
    day: 5,
    date: 'September 10, 2026',
    type: 'offline',
    title: 'Feature Engineering',
    sessions: [
      { time: '10:00 - 11:00', topic: 'Feature Selection & Encoding Techniques', instructor: 'TBA', type: 'lecture', outcome: 'Apply feature engineering' },
      { time: '11:00 - 12:00', topic: 'Scaling, PCA & Imbalanced Data', instructor: 'TBA', type: 'lecture', outcome: 'Preprocess diverse datasets' },
      { time: '12:00 - 13:00', topic: 'Lab: Preprocess a Healthcare Dataset', instructor: 'TBA', type: 'lab', outcome: 'Build a production-ready pipeline' },
    ],
  },
  {
    day: 6,
    date: 'September 17, 2026',
    type: 'offline',
    title: 'ML Algorithms Deep Dive',
    sessions: [
      { time: '10:00 - 11:00', topic: 'Classification Algorithms (Logistic Reg, SVM, KNN)', instructor: 'TBA', type: 'lecture', outcome: 'Implement classifiers' },
      { time: '11:00 - 12:00', topic: 'Ensemble Methods: Random Forest & Gradient Boosting', instructor: 'TBA', type: 'lecture', outcome: 'Use ensemble models' },
      { time: '12:00 - 13:00', topic: 'Lab: Multi-Model Comparison Pipeline', instructor: 'TBA', type: 'lab', outcome: 'Compare model performance' },
    ],
  },
  {
    day: 7,
    date: 'September 24, 2026',
    type: 'offline',
    title: 'Evaluation & Deployment',
    sessions: [
      { time: '10:00 - 11:00', topic: 'Evaluation Metrics & Cross-Validation', instructor: 'TBA', type: 'lecture', outcome: 'Evaluate models correctly' },
      { time: '11:00 - 11:45', topic: 'Hyperparameter Tuning & Model Persistence', instructor: 'TBA', type: 'lecture', outcome: 'Optimize and save models' },
      { time: '11:45 - 13:00', topic: 'Lab: Deploy ML Model with Streamlit', instructor: 'TBA', type: 'lab', outcome: 'Ship a live ML web app' },
    ],
  },
  {
    day: 8,
    date: 'October 1, 2026',
    type: 'offline',
    title: 'Capstone Demo Day 🎉',
    sessions: [
      { time: '10:00 - 10:30', topic: 'Final Project Preparation', instructor: 'Bootcamp Team', type: 'project', outcome: 'Polish project for demo' },
      { time: '10:30 - 12:00', topic: 'Capstone Project Presentations', instructor: 'Panel of Judges', type: 'keynote', outcome: 'Present AI application to judges' },
      { time: '12:00 - 12:30', topic: 'Awards Ceremony & Networking', instructor: 'Organizing Team', type: 'keynote', outcome: 'Celebrate achievements' },
      { time: '12:30 - 13:00', topic: 'Closing Ceremony & Certificates', instructor: 'IEEE Leaders', type: 'keynote', outcome: 'Certificate distribution' },
    ],
  },
];

// ─────────────────────────────────────────────
// TECHNOLOGY STACK
// ─────────────────────────────────────────────
export const TECH_STACK: TechItem[] = [
  { name: 'Python', category: 'Language', color: '#3776AB', description: 'The primary language of AI, data science, and machine learning.' },
  { name: 'NumPy', category: 'Data', color: '#013243', description: 'Fundamental array computing library for scientific computation.' },
  { name: 'Pandas', category: 'Data', color: '#150458', description: 'Powerful data manipulation and analysis library for structured data.' },
  { name: 'Matplotlib', category: 'Visualization', color: '#11557C', description: 'Comprehensive library for creating static and interactive visualizations.' },
  { name: 'Seaborn', category: 'Visualization', color: '#4C72B0', description: 'Statistical data visualization built on top of Matplotlib.' },
  { name: 'Scikit-learn', category: 'ML', color: '#F7931E', description: 'Industry-standard machine learning library with rich algorithm support.' },
  { name: 'Streamlit', category: 'Deployment', color: '#FF4B4B', description: 'Rapidly build and deploy interactive ML applications in pure Python.' },
  { name: 'Joblib', category: 'ML', color: '#2C7BB6', description: 'Efficient model serialization and parallel computation for large datasets.' },
  { name: 'Git', category: 'Tools', color: '#F05032', description: 'Industry-standard version control system for collaborative development.' },
  { name: 'GitHub', category: 'Tools', color: '#181717', description: 'Cloud-based platform for version control, CI/CD, and project showcasing.' },
  { name: 'VS Code', category: 'Tools', color: '#007ACC', description: 'Professional code editor with powerful AI and Python extensions.' },
  { name: 'Google Colab', category: 'Tools', color: '#F9AB00', description: 'Free cloud GPU/TPU environment for running ML notebooks online.' },
];

// ─────────────────────────────────────────────
// AI INNOVATION CHALLENGE AWARDS
// ─────────────────────────────────────────────
export const AWARDS: Award[] = [
  { title: 'Best AI Project', icon: 'Trophy', description: 'Awarded to the team building the most technically impressive and complete AI application.' },
  { title: 'Best Innovation', icon: 'Lightbulb', description: 'Recognizes the most creative and original use of AI to solve a real-world problem.' },
  { title: 'Best Deployment', icon: 'Rocket', description: 'Awarded to the team with the most polished and production-ready deployed application.' },
  { title: "People's Choice", icon: 'Heart', description: 'Voted by all participants and audience members for their favorite project presentation.' },
];

// ─────────────────────────────────────────────
// REGISTRATION TIERS
// ─────────────────────────────────────────────
export const REGISTRATION_TIERS: RegistrationTier[] = [
  {
    id: 'general',
    title: 'General Student',
    subtitle: 'Open to all undergraduate students',
    price: 400,
    currency: 'BDT',
    features: [
      '10-day comprehensive bootcamp',
      'Python Foundation (Online, 3 days)',
      'AI/ML Bootcamp (Offline, 5 days)',
      'Capstone project development',
      'Official participation certificate',
      'Access to all course materials',
      'Networking opportunities',
      'Demo Day participation',
    ],
  },
  {
    id: 'ieee-sb',
    title: 'IEEE Student Member',
    subtitle: 'IEEE Premier University Student Branch Members',
    price: 300,
    currency: 'BDT',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Everything in General Student',
      'IEEE Student Branch discount (BDT 100 off)',
      'Priority seating at sessions',
      'IEEE networking events access',
      'LinkedIn profile optimization workshop',
      'IEEE membership recognition',
      'Direct mentorship opportunities',
      'Alumni community access',
    ],
  },
  {
    id: 'ieee-cs',
    title: 'IEEE CS Member',
    subtitle: 'IEEE Computer Society Members',
    price: 250,
    currency: 'BDT',
    badge: 'Best Value',
    features: [
      'Everything in IEEE Student Member',
      'IEEE CS Member exclusive discount (BDT 150 off)',
      'IEEE CS branding on certificate',
      'Featured in IEEE CS showcase',
      'Advanced resource library access',
      'Priority judge panel consideration',
      'IEEE CS leadership opportunities',
      'Post-bootcamp mentorship program',
    ],
  },
];

// ─────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────
export const FAQS: FAQItem[] = [
  {
    question: 'Who can participate in IEEE AI/ML Bootcamp 2.0?',
    answer:
      'The bootcamp is open to all undergraduate students, regardless of their technical background. We especially welcome beginners who are curious about AI and Machine Learning. IEEE Student Branch Members and IEEE Computer Society Members receive discounted registration fees.',
    category: 'Eligibility',
  },
  {
    question: 'Do I need prior programming experience to join?',
    answer:
      'No prior programming experience is required. The bootcamp begins with a 3-day Online Python Foundation session specifically designed for complete beginners. By the end of Phase 1, you will have sufficient Python skills to fully participate in the AI/ML training.',
    category: 'Prerequisites',
  },
  {
    question: 'What is the format of the bootcamp?',
    answer:
      'The bootcamp consists of two phases. Phase 1 is a 3-day Online Python Foundation (August 25-27, 2026) conducted via video conferencing. Phase 2 is a 5-week Offline AI/ML Bootcamp (Thursdays, September 3 - October 1, 2026) held in-person at Premier University, Academic Building #4, Chattogram.',
    category: 'Format',
  },
  {
    question: 'What laptop/computer specifications do I need?',
    answer:
      'You need a laptop with at least 4GB of RAM (8GB recommended), a working internet connection, and the ability to install Python 3.10+, VS Code, and Git. We will also use Google Colab for cloud-based GPU computing, so a modern web browser is essential. A webcam and microphone are required for the online phase.',
    category: 'Requirements',
  },
  {
    question: 'What will I be able to build by the end of the bootcamp?',
    answer:
      'By the end of the bootcamp, you will have built and deployed a complete, real-world AI application — a portfolio-ready project that you can showcase to employers. You will be able to train ML models, evaluate their performance, and deploy them as interactive web apps using Streamlit, all hosted on GitHub.',
    category: 'Outcomes',
  },
  {
    question: 'How does the Capstone Project work?',
    answer:
      'Capstone teams are formed on Day 3 of the Online Phase. Teams of 2–4 students choose a real-world problem domain and build an end-to-end ML solution over the following days. On Demo Day (October 1), teams present their live, deployed applications to a panel of judges who evaluate technical excellence, innovation, and deployment quality.',
    category: 'Capstone',
  },
  {
    question: 'What is the AI Innovation Challenge?',
    answer:
      'The AI Innovation Challenge is a competitive component held alongside the Capstone Project. Teams are judged on four criteria: Best AI Project (technical excellence), Best Innovation (creativity), Best Deployment (production readiness), and People\'s Choice (audience vote). Winners receive special recognition and awards at the closing ceremony.',
    category: 'Challenge',
  },
  {
    question: 'What kind of certificate will I receive?',
    answer:
      'All participants who complete the bootcamp will receive an official certificate issued by the IEEE Computer Society Premier University Student Branch Chapter. IEEE Computer Society Members will receive an IEEE CS-branded certificate. Certificates are digitally verifiable and can be added to your LinkedIn profile.',
    category: 'Certificate',
  },
  {
    question: 'What is the registration fee and how do I pay?',
    answer:
      'The registration fee is BDT 400 for General Students, BDT 300 for IEEE Student Branch Members, and BDT 250 for IEEE Computer Society Members. Payment details and instructions will be provided upon registration. All fees are non-refundable but transferable to another eligible participant.',
    category: 'Registration',
  },
  {
    question: 'Is the registration fee refundable?',
    answer:
      'Registration fees are non-refundable. However, if you are unable to attend, you may transfer your registration to another eligible student before the registration deadline. Please contact the organizing team at ieeecspusbc@gmail.com to arrange a transfer.',
    category: 'Registration',
  },
  {
    question: 'How many seats are available?',
    answer:
      'The bootcamp has a limited capacity of 100 participants to ensure high-quality learning and mentorship. Seats are allocated on a first-come, first-served basis. We encourage early registration to secure your place.',
    category: 'Registration',
  },
  {
    question: 'Will meals be provided during the offline sessions?',
    answer:
      'Refreshments and light snacks will be provided during break times. The venue has a canteen where participants can purchase lunch. Please inform us in advance if you have any dietary restrictions.',
    category: 'Logistics',
  },
  {
    question: 'What happens if I miss a session?',
    answer:
      'All sessions will be recorded (where possible) and shared with registered participants. However, active participation, especially in lab sessions and the Capstone Project, is essential for learning and for receiving the completion certificate.',
    category: 'Logistics',
  },
  {
    question: 'How do I become an IEEE Student Member?',
    answer:
      'You can join IEEE as a student member at a heavily discounted annual fee. Visit ieee.org/membership or contact our IEEE Premier University Student Branch for guidance. Joining IEEE gives you access to thousands of technical publications, networking events, and career development resources.',
    category: 'IEEE',
  },
  {
    question: 'What is the IEEE Computer Society and why should I join?',
    answer:
      'The IEEE Computer Society (CS) is the world\'s largest technical professional organization dedicated to computing. Membership provides access to cutting-edge research, industry certifications, scholarships, competitions, and a global community of 60,000+ computing professionals — giving you a significant advantage in your AI/ML career.',
    category: 'IEEE',
  },
  {
    question: 'Will there be networking opportunities with industry professionals?',
    answer:
      'Yes! The bootcamp includes dedicated networking sessions with guest speakers from the AI and tech industry. Demo Day (October 1) brings together participants, mentors, faculty, and IEEE leaders, creating an excellent environment to build professional connections.',
    category: 'Networking',
  },
  {
    question: 'Can students from universities other than Premier University register?',
    answer:
      'Yes, the bootcamp is open to undergraduate students from all universities in Bangladesh. However, the offline sessions are held at Premier University, Chattogram, so external participants must arrange their own travel and accommodation.',
    category: 'Eligibility',
  },
  {
    question: 'How can I contact the organizing team?',
    answer:
      'You can reach us via email at ieeecspusbc@gmail.com, or through our official Facebook page. We are also available for in-person inquiries at the IEEE CS Premier University Student Branch office at Premier University. We typically respond within 24 hours.',
    category: 'Contact',
  },
];

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Nazia Sultana Plabon',
    role: 'B.Sc. in EEE',
    institution: 'Premier University',
    quote:
      'As an EEE student, I was initially nervous about diving into AI and Machine Learning. However, the structured curriculum and hands-on Python labs made the transition incredibly smooth. The capstone project helped me bridge the gap between hardware and intelligent software systems.',
    rating: 5,
    batch: 'Alumni IEEE CS PUSBC',
  },
  {
    name: 'Mohammad Mohiuddin',
    role: 'B.Sc. in CSE',
    institution: 'Premier University',
    quote:
      'The IEEE AI/ML Bootcamp was a turning point in my academic journey. We went from understanding basic concepts to deploying real machine learning models in just a few weeks. The instructors were deeply knowledgeable and guided us through the toughest algorithms with ease.',
    rating: 5,
    batch: 'Alumni IEEE CS PUSBC',
  },
  {
    name: 'Dhruba Dey',
    role: 'B.Sc. in CSE',
    institution: 'Premier University',
    quote:
      'The hands-on approach and the collaborative environment were unmatched. Not only did I sharpen my deep learning skills, but the IEEE networking sessions also connected me with industry professionals and gave me a clear vision for my future tech career.',
    rating: 5,
    batch: 'Alumni IEEE CS PUSBC',
  },
  {
    name: 'Mohammad Azmayen',
    role: 'B.Sc. in CSE',
    institution: 'Premier University',
    quote:
      'This bootcamp went beyond standard tutorials. The Innovation Challenge pushed us to solve complex problems and build a complete AI application from scratch. It was an intense, highly rewarding experience that gave me an incredible project for my GitHub portfolio.',
    rating: 5,
    batch: 'Alumni IEEE CS PUSBC',
  },
];

// ─────────────────────────────────────────────
// BENEFITS
// ─────────────────────────────────────────────
export const BENEFITS: BenefitCard[] = [
  { icon: 'Award', title: 'IEEE Certificate', description: 'Earn a professionally recognized IEEE Computer Society certificate to validate your AI/ML skills globally.', color: '#FFB000' },
  { icon: 'Users', title: 'IEEE Community', description: 'Join a worldwide network of 400,000+ IEEE members and connect with the brightest minds in computing.', color: '#3B82F6' },
  { icon: 'Network', title: 'Professional Networking', description: 'Meet industry experts, researchers, and future colleagues at sessions and networking events throughout the bootcamp.', color: '#8B5CF6' },
  { icon: 'Laptop', title: 'Hands-On Experience', description: 'Spend 70% of your time in lab sessions working on real datasets and building actual machine learning models.', color: '#10B981' },
  { icon: 'Briefcase', title: 'Industry-Ready Skills', description: 'Learn the exact tools and workflows used by AI engineers at top companies — directly applicable to your career.', color: '#F59E0B' },
  { icon: 'Star', title: 'Leadership & Growth', description: 'Develop teamwork, communication, and presentation skills through collaborative projects and Demo Day.', color: '#EC4899' },
  { icon: 'TrendingUp', title: 'Career Development', description: 'Receive career guidance, resume tips, and job search strategies tailored to the AI/ML job market.', color: '#06B6D4' },
  { icon: 'BookOpen', title: 'Portfolio Project', description: 'Graduate with a deployed, live AI application on GitHub that you can showcase to employers and graduate schools.', color: '#84CC16' },
];
