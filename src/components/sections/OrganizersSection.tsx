import Image from 'next/image';
import ScrollReveal from '@/components/common/ScrollReveal';
import ieeeCsLogo from '@/assets/logos/ieee-cs.png';
import ieeePuSbLogo from '@/assets/logos/ieee-pu-sb.png';
import premierUniversityLogo from '@/assets/logos/premier-university.png';
import chapterLogo from '@/assets/logos/ieee-cs-pu-sb-chapter.png';

export default function OrganizersSection() {
  return (
    <section className="py-20 relative z-10 w-full overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FFB000]/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00629B]/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">Organized In Collaboration With</span>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {[
            { src: ieeeCsLogo, alt: 'IEEE Computer Society' },
            { src: premierUniversityLogo, alt: 'Premier University' },
            { src: ieeePuSbLogo, alt: 'IEEE PU Student Branch' },
            { src: chapterLogo, alt: 'IEEE CS PU SB Chapter' },
          ].map((logo, i) => (
            <ScrollReveal key={logo.alt} delay={i * 0.1}>
              <div className="bg-white/95 rounded-2xl p-4 md:p-6 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg w-32 h-24 md:w-40 md:h-28 border border-white/20 backdrop-blur-md">
                <div className="relative w-full h-full">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain mix-blend-multiply" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
