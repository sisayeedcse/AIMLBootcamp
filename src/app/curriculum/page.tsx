import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EVENT_CONFIG from '@/config/event';

export const metadata: Metadata = {
  title: 'Full Curriculum Breakdown',
  description:
    'Explore the full 8-session syllabus for the IEEE CS AI/ML Bootcamp 2026. From Python programming foundations to deploying machine learning applications.',
};

interface SessionDetail {
  number: string;
  phase: string;
  mode: string;
  title: string;
  description: string;
  topics: string[];
  handsOn: string;
  tools: string[];
}

const SESSIONS: SessionDetail[] = [
  {
    number: 'Session 1',
    phase: 'Phase 1: Foundation',
    mode: 'Online',
    title: 'Introduction to Python',
    description:
      'Build a rock-solid foundation in Python programming tailored specifically for scientific computing and machine learning.',
    topics: [
      'Python syntax, environment setup, and interpreter basics',
      'Variables, primitive data types, type casting, and operators',
      'Conditional control structures (if, elif, else) and comparison logic',
      'Iteration patterns: while loops, for loops, and list comprehensions',
      'Function definition, arguments, return values, and variable scope',
    ],
    handsOn: 'Write interactive Python utility scripts and algorithmic problem solvers.',
    tools: ['Python 3', 'VS Code', 'Google Colab'],
  },
  {
    number: 'Session 2',
    phase: 'Phase 1: Foundation',
    mode: 'Online',
    title: 'Python for Data Handling',
    description:
      'Learn how industry professionals load, clean, transform, and manipulate datasets with NumPy and Pandas.',
    topics: [
      'NumPy arrays: indexing, slicing, vectorization, and broadcasting',
      'Pandas core structures: Series and DataFrames',
      'Importing and exporting datasets (CSV, Excel, JSON)',
      'Data cleaning: handling missing values, duplicates, and data type alignment',
      'Filtering, sorting, grouping (groupby), and summary aggregations',
    ],
    handsOn: 'Clean and inspect a messy real-world tabular dataset from scratch.',
    tools: ['NumPy', 'Pandas', 'Jupyter Notebook'],
  },
  {
    number: 'Session 3',
    phase: 'Phase 1: Foundation',
    mode: 'Online',
    title: 'Data Analysis & Visualization',
    description:
      'Discover patterns, correlations, and anomalies in complex data using exploratory data analysis and visual storytelling.',
    topics: [
      'Exploratory Data Analysis (EDA) framework and best practices',
      'Univariate, bivariate, and multivariate distribution inspection',
      'Data visualization principles using Matplotlib and Seaborn',
      'Histograms, scatter plots, box plots, heatmaps, and correlation matrices',
      'Feature relationships and preparing data pipelines for modeling',
    ],
    handsOn: 'Construct an end-to-end exploratory analysis notebook with publication-quality charts.',
    tools: ['Matplotlib', 'Seaborn', 'Pandas'],
  },
  {
    number: 'Session 4',
    phase: 'Phase 2: Practical',
    mode: 'In person',
    title: 'Introduction to AI and Machine Learning',
    description:
      'Transition from data analysis to predictive modeling, understanding core machine learning taxonomy and algorithms.',
    topics: [
      'The landscape of Artificial Intelligence, Machine Learning, and Deep Learning',
      'Supervised vs. Unsupervised vs. Reinforcement Learning',
      'Formulating real-world problems as classification or regression tasks',
      'The machine learning lifecycle: from raw data to evaluation',
      'Linear Regression and baseline model intuition',
    ],
    handsOn: 'Train and interpret your first predictive regression model using Scikit-learn.',
    tools: ['Scikit-learn', 'Jupyter Notebook'],
  },
  {
    number: 'Session 5',
    phase: 'Phase 2: Practical',
    mode: 'In person',
    title: 'Machine Learning Fundamentals & Preprocessing',
    description:
      'Master data transformation pipelines, train/test splitting, and feature preparation for production models.',
    topics: [
      'Train, validation, and test split methodologies',
      'Feature scaling: StandardScaler vs. MinMaxScaler',
      'Categorical encoding: One-Hot Encoding and Label Encoding',
      'Preventing data leakage and overfitting',
      'Building Scikit-learn Pipeline objects for reproducible workflows',
    ],
    handsOn: 'Build an automated preprocessing pipeline that feeds clean data directly into estimators.',
    tools: ['Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    number: 'Session 6',
    phase: 'Phase 2: Practical',
    mode: 'In person',
    title: 'Practical ML Project & Evaluation',
    description:
      'Implement leading classification algorithms, benchmark performance, and rigorously evaluate model metrics.',
    topics: [
      'Classification algorithms: Logistic Regression, Decision Trees, and Random Forests',
      'Ensemble learning intuition and bagging principles',
      'Evaluation metrics: Confusion Matrix, Precision, Recall, F1-Score, and ROC-AUC',
      'Cross-validation strategies and hyperparameter tuning with GridSearchCV',
      'Selecting the best performing model based on business objectives',
    ],
    handsOn: 'Train and compare multiple models on a chosen challenge dataset to identify the optimal predictor.',
    tools: ['Scikit-learn', 'Joblib'],
  },
  {
    number: 'Session 7',
    phase: 'Phase 2: Practical',
    mode: 'In person',
    title: 'Model Deployment & Interactive Web Apps',
    description:
      'Package your trained model into a production artifact and deploy an interactive user-facing web app with Streamlit.',
    topics: [
      'Model serialization and persistence using Joblib',
      'Writing web interfaces with Streamlit: inputs, sliders, select boxes, charts',
      'Connecting front-end inputs to model prediction pipelines',
      'Version control with Git and publishing projects to GitHub',
      'Hosting and deploying web applications online for public demonstration',
    ],
    handsOn: 'Create a live, functional web application where anyone can test your ML model with their own inputs.',
    tools: ['Streamlit', 'Git', 'GitHub', 'Python'],
  },
  {
    number: 'Session 8',
    phase: 'Phase 2: Practical',
    mode: 'In person',
    title: 'Final Project Showcase & Certificate Distribution',
    description:
      'Present your live deployed application to mentors, celebrate cohort achievements, and receive your official certificate.',
    topics: [
      'Live team presentations and demonstrations of deployed ML applications',
      'Technical reviews and feedback from mentors and IEEE leaders',
      'Discussion on next steps: advanced topics, open-source contribution, and career paths',
      'Certificate distribution ceremony and cohort group photo',
    ],
    handsOn: 'Live demonstration and defense of your working machine learning project.',
    tools: ['Live Applications', 'GitHub Repositories'],
  },
];

export default function CurriculumPage() {
  return (
    <>
      <Navbar />

      <main className="w-full py-16">
        <div className="wrap">
          {/* Header */}
          <div className="max-w-[760px] mb-12">
            <span className="status mb-4">Comprehensive Syllabus</span>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold my-4">
              Curriculum: 8 Sessions, Two Phases
            </h1>
            <p className="text-[#a8a8a8] text-lg leading-relaxed">
              Designed from the ground up for beginners. You start with Python programming foundations online, then transition to intensive in-person sessions where you build, test, and deploy a real machine learning application.
            </p>
          </div>

          {/* Phase summaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="card">
              <span className="font-mono text-sm text-[#f9a318] font-medium">PHASE 1</span>
              <h2 className="text-xl font-bold mt-2 mb-2">Foundation Phase</h2>
              <p className="text-[#a8a8a8] text-sm mb-4">
                Online · 3 Sessions · Focus on programming, scientific libraries, and exploratory data analysis.
              </p>
              <div className="text-xs font-mono text-[#a8a8a8] bg-black p-3 rounded border border-[#2b2b2b]">
                Tools: Python 3, NumPy, Pandas, Matplotlib, Seaborn
              </div>
            </div>

            <div className="card">
              <span className="font-mono text-sm text-[#f9a318] font-medium">PHASE 2</span>
              <h2 className="text-xl font-bold mt-2 mb-2">Practical Phase</h2>
              <p className="text-[#a8a8a8] text-sm mb-4">
                In person at Premier University · 5 Sessions · Focus on ML modeling, feature engineering, and app deployment.
              </p>
              <div className="text-xs font-mono text-[#a8a8a8] bg-black p-3 rounded border border-[#2b2b2b]">
                Tools: Scikit-learn, Joblib, Streamlit, Git, GitHub
              </div>
            </div>
          </div>

          {/* Sessions Detailed List */}
          <div className="space-y-8 mb-16">
            <h2 className="text-2xl font-bold">Session by Session Breakdown</h2>

            {SESSIONS.map((sess) => (
              <div
                key={sess.number}
                className="border border-[#2b2b2b] bg-[#141414] rounded-lg p-6 md:p-8 hover:border-[#f9a318]/50 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-[#f9a318]">
                      {sess.number}
                    </span>
                    <span className="text-xs text-[#a8a8a8] border border-[#2b2b2b] px-2.5 py-0.5 rounded">
                      {sess.phase}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#f9a318] bg-[#f9a318]/10 px-3 py-1 rounded-full border border-[#f9a318]/20">
                    {sess.mode}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                  {sess.title}
                </h3>
                <p className="text-[#a8a8a8] text-base mb-6 max-w-[70ch]">
                  {sess.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 border-t border-[#2b2b2b]">
                  <div className="lg:col-span-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#a8a8a8] mb-3">
                      Topics Covered
                    </h4>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {sess.topics.map((topic, i) => (
                        <li key={i} className="text-sm text-[#e8e8e8] flex items-start gap-2">
                          <span className="text-[#f9a318] mt-0.5">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#a8a8a8] mb-3">
                      Hands-on Lab
                    </h4>
                    <p className="text-sm text-[#e8e8e8] bg-black p-3.5 rounded border border-[#2b2b2b] mb-4">
                      {sess.handsOn}
                    </p>

                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#a8a8a8] mb-2">
                      Tools & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {sess.tools.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-[#a8a8a8] bg-[#1a1a1a] px-2.5 py-1 rounded border border-[#2b2b2b]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA at Bottom */}
          <div className="final border-t border-[#2b2b2b] pt-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to begin your journey?</h2>
            <p className="text-[#a8a8a8] mb-6">
              Applications are reviewed for commitment and interest. No prior machine learning background is required.
            </p>
            <Link className="btn primary" href="/apply">
              Apply for your eligibility
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
