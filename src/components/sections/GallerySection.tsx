'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, X } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';
import gallery6 from '@/assets/gallery/gallery-6.jpg';
import gallery7 from '@/assets/gallery/gallery-7.jpg';

const GALLERY_IMAGES = [
  { id: 1, src: gallery1, alt: 'Bootcamp 2025 Python Session', span: 'col-span-2 md:col-span-2 row-span-2' },
  { id: 2, src: gallery2, alt: 'Machine Learning Class', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 3, src: gallery3, alt: 'Supervised Learning Lecture', span: 'col-span-1 md:col-span-1 row-span-1' },
  { id: 4, src: gallery4, alt: 'Closing Ceremony', span: 'col-span-2 md:col-span-2 row-span-1' },
  { id: 5, src: gallery5, alt: 'Group Photo with Certificates', span: 'col-span-2 md:col-span-2 row-span-2' },
  { id: 6, src: gallery6, alt: 'Awards Distribution', span: 'col-span-2 md:col-span-2 row-span-1' },
  { id: 7, src: gallery7, alt: 'Participants & Instructors', span: 'col-span-2 md:col-span-2 row-span-1' },
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<{src: string, alt: string} | null>(null);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden bg-[#0A0A12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <ImageIcon className="w-6 h-6 text-[#3B82F6]" />
            </div>
          </div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Moments from <span className="gradient-text-blue">Bootcamp 2025</span>
          </h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
            A glimpse into the energy, collaboration, and success of our previous cohort.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal 
              key={img.id} 
              delay={i * 0.1} 
              className={`${img.span} relative group rounded-xl overflow-hidden cursor-pointer`}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                sizes="(max-width: 768px) 100vw, 50vw"
                onClick={() => setSelectedImg({ src: img.src.src, alt: img.alt })}
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)' }}
              >
                <span className="text-white text-sm font-semibold">{img.alt}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg.src}
              alt={selectedImg.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 left-0 right-0 text-center text-white/80 font-medium">
              {selectedImg.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
