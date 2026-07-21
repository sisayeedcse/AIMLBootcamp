'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function SponsorsSection() {
  const sponsors = [
    { src: '/logos/IEEE Computer Society.png', alt: 'IEEE Computer Society', width: 220 },
    { src: '/logos/Premier University.jpeg', alt: 'Premier University', width: 120, rounded: true },
    { src: '/logos/IEEE Premier University Student Branch.png', alt: 'IEEE PU SB', width: 200 },
    { src: '/logos/IEEE Computer Society Premier University Student Branch Chapter.png', alt: 'IEEE CS PU SB Chapter', width: 220 },
  ];

  return (
    <section className="py-20 relative border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.05)', background: '#050508' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Organized In Collaboration With
          </p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 hover:opacity-100 transition-opacity duration-500">
          {sponsors.map((sponsor, i) => (
            <ScrollReveal key={sponsor.alt} delay={i * 0.1}>
              <div 
                className="relative flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: sponsor.width, height: 80 }}
              >
                <Image 
                  src={sponsor.src} 
                  alt={sponsor.alt} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-contain ${sponsor.rounded ? 'rounded-lg' : ''}`}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
