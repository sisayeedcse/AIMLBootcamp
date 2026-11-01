'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: 'labs' | 'ceremony' | 'leadership';
  categoryLabel: string;
}

export const GALLERY_ITEMS: GalleryImageItem[] = [
  {
    id: 'closing-cohort',
    src: '/gallery/closing-ceremony-cohort.webp',
    alt: 'Bootcamp 2025 cohort graduation ceremony with Vice Chancellor and department faculty',
    title: 'Cohort Graduation & Certificate Ceremony',
    caption: 'Participants celebrate completing Bootcamp 2025 alongside Honorable Vice Chancellor Prof. S. M. Nazrul Qadir and department faculty.',
    category: 'ceremony',
    categoryLabel: 'Ceremony',
  },
  {
    id: 'session-3-teach',
    src: '/gallery/session-3-teaching.webp',
    alt: 'Instructor leading a technical session on Supervised Learning with whiteboard and live code',
    title: 'Supervised Learning Workshop',
    caption: 'Hands-on instruction breaking down machine learning algorithms, dataset feature engineering, and model evaluation.',
    category: 'labs',
    categoryLabel: 'Hands-on Labs',
  },
  {
    id: 'lab-crowd',
    src: '/gallery/lab-session-crowd.webp',
    alt: 'Students engaged in practical programming and model building at computer workstations',
    title: 'Interactive Lab Workstation Sessions',
    caption: 'Students working simultaneously through data exploration and algorithmic model implementations.',
    category: 'labs',
    categoryLabel: 'Hands-on Labs',
  },
  {
    id: 'session-5-appreciation',
    src: '/gallery/session-5-appreciation.webp',
    alt: 'Vice Chancellor Prof. S. M. Nazrul Qadir presenting crest of appreciation to guest trainer Sara Karim',
    title: 'Faculty & Speaker Appreciation',
    caption: 'Honorable Vice Chancellor Prof. S. M. Nazrul Qadir presents a crest of honor to session speaker Sara Karim (Faculty, AUW).',
    category: 'leadership',
    categoryLabel: 'Leadership',
  },
  {
    id: 'session-1-lab',
    src: '/gallery/session-1-lab.webp',
    alt: 'Session 1 Python lab setup with students on workstations',
    title: 'Python Lab Environment & Setup',
    caption: 'Students configuring development tools, Jupyter environments, and foundational Python packages.',
    category: 'labs',
    categoryLabel: 'Hands-on Labs',
  },
  {
    id: 'closing-stage',
    src: '/gallery/closing-ceremony-stage.webp',
    alt: 'Formal closing ceremony proceedings at Premier University',
    title: 'Closing Ceremony Address',
    caption: 'Formal closing address in the presence of university leadership, department heads, and guest speakers.',
    category: 'ceremony',
    categoryLabel: 'Ceremony',
  },
  {
    id: 'session-5-cohort',
    src: '/gallery/session-5-cohort.webp',
    alt: 'Session 5 participants and speaker group photograph',
    title: 'Practical Session 5 Cohort',
    caption: 'Cohort and organizers following completion of the advanced machine learning session.',
    category: 'ceremony',
    categoryLabel: 'Ceremony',
  },
  {
    id: 'session-1-appreciation',
    src: '/gallery/session-1-appreciation.webp',
    alt: 'Department faculty presenting token of appreciation to Session 1 instructor',
    title: 'Session 1 Recognition',
    caption: 'Department faculty presenting an official token of appreciation to session instructor Mohammed Saifuddin.',
    category: 'leadership',
    categoryLabel: 'Leadership',
  },
  {
    id: 'session-1-team',
    src: '/gallery/session-1-team.webp',
    alt: 'Student executive organizing committee at Premier University Academic Building 4',
    title: 'Executive Organizing Team',
    caption: 'IEEE Computer Society student leaders and volunteers managing operations and attendee support.',
    category: 'leadership',
    categoryLabel: 'Leadership',
  },
  {
    id: 'session-3-team',
    src: '/gallery/session-3-team.webp',
    alt: 'Session 3 instructor and student leads following technical workshop',
    title: 'Technical Session Team',
    caption: 'Session instructor and student coordinators following a practical machine learning workshop.',
    category: 'leadership',
    categoryLabel: 'Leadership',
  },
];

type CategoryFilter = 'all' | 'labs' | 'ceremony' | 'leadership';

export default function CohortGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="w-full">
      {/* Category filter tabs */}
      <div
        className="flex items-center gap-2 flex-wrap mb-8"
        role="tablist"
        aria-label="Filter gallery by category"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 text-xs font-medium rounded-pill transition-colors border ${
            activeCategory === 'all'
              ? 'bg-accent text-accent-ink border-accent font-semibold'
              : 'bg-surface text-muted border-line hover:text-text hover:border-line/80'
          }`}
        >
          All Moments ({GALLERY_ITEMS.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'labs'}
          onClick={() => setActiveCategory('labs')}
          className={`px-4 py-2 text-xs font-medium rounded-pill transition-colors border ${
            activeCategory === 'labs'
              ? 'bg-accent text-accent-ink border-accent font-semibold'
              : 'bg-surface text-muted border-line hover:text-text hover:border-line/80'
          }`}
        >
          Hands-on Labs (3)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'ceremony'}
          onClick={() => setActiveCategory('ceremony')}
          className={`px-4 py-2 text-xs font-medium rounded-pill transition-colors border ${
            activeCategory === 'ceremony'
              ? 'bg-accent text-accent-ink border-accent font-semibold'
              : 'bg-surface text-muted border-line hover:text-text hover:border-line/80'
          }`}
        >
          Ceremony & Cohort (3)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'leadership'}
          onClick={() => setActiveCategory('leadership')}
          className={`px-4 py-2 text-xs font-medium rounded-pill transition-colors border ${
            activeCategory === 'leadership'
              ? 'bg-accent text-accent-ink border-accent font-semibold'
              : 'bg-surface text-muted border-line hover:text-text hover:border-line/80'
          }`}
        >
          Leadership & Faculty (4)
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View full image: ${item.title}`}
            className="group cursor-pointer bg-surface border border-line rounded-card overflow-hidden transition-all duration-200 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/30">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm text-accent font-mono text-[11px] px-2.5 py-1 rounded-pill border border-line">
                {item.categoryLabel}
              </span>
            </div>
            <div className="p-4 border-t border-line">
              <h3 className="text-sm font-semibold text-text mb-1 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed line-clamp-2">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 bg-[#090A0F]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-surface border border-line rounded-card overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with category and close button */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-surface/70 backdrop-blur-sm">
              <span className="text-xs font-mono text-accent">
                {currentItem.categoryLabel} · {lightboxIndex! + 1} of {filteredItems.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="text-muted hover:text-text p-1 text-sm rounded-md transition-colors"
                aria-label="Close image viewer"
              >
                ✕ Close
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />

              {/* Prev / Next controls */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showPrev();
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-text px-3 py-2 rounded-full border border-line transition-colors text-sm"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      showNext();
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black text-text px-3 py-2 rounded-full border border-line transition-colors text-sm"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Caption & details */}
            <div className="p-5 border-t border-line bg-surface">
              <h2 className="text-base font-bold text-text mb-1">
                {currentItem.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
