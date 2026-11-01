'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface PressArticle {
  id: string;
  publication: string;
  publicationType: string;
  dateBadge: string;
  headlineBengali: string;
  headlineEnglish: string;
  summary: string;
  imageSrc: string;
  alt: string;
}

const PRESS_ARTICLES: PressArticle[] = [
  {
    id: 'dainik-azadi',
    publication: 'Dainik Azadi',
    publicationType: 'Daily Newspaper · Chattogram',
    dateBadge: 'Bootcamp 2025 Coverage',
    headlineBengali: 'প্রিমিয়ার ভার্সিটিতে বুট ক্যাম্পের সমাপনী অনুষ্ঠান',
    headlineEnglish: 'Premier University Concludes AI & Machine Learning Bootcamp',
    summary:
      'Reported on the closing ceremony attended by Honorable Vice Chancellor Prof. S. M. Nazrul Qadir and CSE Department Chairman Syed Minhaj Hossain, emphasizing the importance of student research and practical AI training.',
    imageSrc: '/press/press-azadi.webp',
    alt: 'Dainik Azadi newspaper clipping covering the Premier University AI/ML Bootcamp closing ceremony',
  },
  {
    id: 'dainik-purbodesh',
    publication: 'Dainik Purbodesh',
    publicationType: 'Daily Newspaper · Regional',
    dateBadge: 'Bootcamp 2025 Coverage',
    headlineBengali: 'প্রিমিয়ার ইউনিভার্সিটিতে বুট ক্যাম্পের সমাপনী',
    headlineEnglish: 'Hands-on Machine Learning Bootcamp Concludes at Premier University',
    summary:
      'Featured the participant graduation, certificate distribution, and remarks on how practical dataset exposure equips undergraduate engineers for national and global technological leadership.',
    imageSrc: '/press/press-purbodesh.webp',
    alt: 'Dainik Purbodesh newspaper article on the IEEE CS Premier University Student Branch Chapter bootcamp',
  },
  {
    id: 'press-feature',
    publication: 'Regional Media Coverage',
    publicationType: 'Press Release & Feature',
    dateBadge: 'Bootcamp 2025 Coverage',
    headlineBengali: "শেষ হলো 'মেশিন লার্নিং ও আর্টিফিশিয়াল ইন্টেলিজেন্স' শীর্ষক বুট ক্যাম্প",
    headlineEnglish: 'Premier University Completes AI & Machine Learning Training Program',
    summary:
      'Detailed overview of the program syllabus, guest trainer Sara Karim (Faculty, Asian University for Women), and participant evaluations on machine learning model building and deployment.',
    imageSrc: '/press/press-feature-closing.webp',
    alt: 'Press coverage summary detailing the IEEE Computer Society bootcamp outcomes',
  },
];

export default function PressSection() {
  const [selectedArticle, setSelectedArticle] = useState<PressArticle | null>(null);

  const closeViewer = useCallback(() => {
    setSelectedArticle(null);
  }, []);

  useEffect(() => {
    if (!selectedArticle) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeViewer();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedArticle, closeViewer]);

  return (
    <section id="press" aria-labelledby="press-heading" className="border-t border-line">
      <div className="wrap">
        <div className="max-w-[720px] mb-10">
          <span className="status-chip mb-3">Academic & Media Recognition</span>
          <h2 id="press-heading" className="text-2xl sm:text-3xl font-bold my-3">
            Featured in national and regional press
          </h2>
          <p className="text-muted text-base leading-relaxed">
            The previous bootcamp cohort received official recognition from university leadership and coverage in leading daily publications, highlighting its academic rigor and practical community impact.
          </p>
        </div>

        {/* 3 Press Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRESS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-surface border border-line rounded-card overflow-hidden flex flex-col justify-between transition-colors hover:border-accent/40"
            >
              <div>
                {/* Image Clipping Preview Container */}
                <div
                  onClick={() => setSelectedArticle(article)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedArticle(article);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View full newspaper clipping: ${article.publication}`}
                  className="group relative aspect-[4/3] w-full overflow-hidden bg-black/40 cursor-pointer border-b border-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Image
                    src={article.imageSrc}
                    alt={article.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/90 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-medium text-text bg-surface/90 backdrop-blur-sm px-2.5 py-1 rounded-pill border border-line group-hover:border-accent/50 transition-colors">
                      🔍 Click to read scan
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-muted mb-2 font-mono">
                    <span className="text-accent">{article.publication}</span>
                    <span>{article.dateBadge}</span>
                  </div>
                  <h3 className="text-base font-semibold text-text mb-1">
                    {article.headlineEnglish}
                  </h3>
                  <p className="text-xs font-mono text-muted/80 mb-3 italic">
                    &ldquo;{article.headlineBengali}&rdquo;
                  </p>
                  <p className="text-xs text-muted leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-line/40 mt-4">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="w-full text-center text-xs font-medium text-accent hover:underline py-2"
                >
                  Inspect publication clipping →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Scan Viewer */}
        {selectedArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedArticle.publication}
            className="fixed inset-0 z-50 bg-[#090A0F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={closeViewer}
          >
            <div
              className="relative max-w-2xl w-full max-h-[90vh] bg-surface border border-line rounded-card overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-surface/80 backdrop-blur-sm shrink-0">
                <div>
                  <h2 className="text-sm font-bold text-text">
                    {selectedArticle.publication}
                  </h2>
                  <p className="text-xs text-muted">{selectedArticle.headlineEnglish}</p>
                </div>
                <button
                  type="button"
                  onClick={closeViewer}
                  className="text-muted hover:text-text p-1 text-sm rounded-md transition-colors"
                  aria-label="Close newspaper viewer"
                >
                  ✕ Close
                </button>
              </div>

              {/* Scrollable Scan Image Container */}
              <div className="overflow-y-auto p-4 flex justify-center bg-black/80">
                <div className="relative w-full max-w-[550px] aspect-[800/1500] min-h-[500px]">
                  <Image
                    src={selectedArticle.imageSrc}
                    alt={selectedArticle.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Footer info */}
              <div className="px-5 py-3 border-t border-line bg-surface text-xs text-muted flex justify-between items-center shrink-0">
                <span>{selectedArticle.publicationType}</span>
                <span className="text-accent">Official IEEE CS PUSBC Archives</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
