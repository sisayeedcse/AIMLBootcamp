'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { EVENT } from '@/lib/constants';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function ContactSection() {
  const contactMethods = [
    {
      icon: FacebookIcon,
      label: 'Facebook Page',
      value: 'IEEECS.PUSBC',
      href: EVENT.contact.facebook,
      color: '#FFB000',
      bg: 'rgba(255, 176, 0, 0.1)'
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: EVENT.contact.email,
      href: `mailto:${EVENT.contact.email}`,
      color: '#FFB000',
      bg: 'rgba(255, 176, 0, 0.1)'
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: EVENT.contact.phone,
      href: `tel:${EVENT.contact.phone.replace(/[^0-9+]/g, '')}`,
      color: '#FFB000',
      bg: 'rgba(255, 176, 0, 0.1)'
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#0A0A12]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Contact Us</div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Get In <span className="gradient-text-blue">Touch</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Have questions about the bootcamp or registration? Reach out to us through any of the channels below.
          </p>
        </ScrollReveal>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-8 rounded-3xl glass-card hover:-translate-y-2 transition-all duration-300 group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110" 
                  style={{ background: method.bg, border: `1px solid ${method.color}30` }}
                >
                  <method.icon className="w-8 h-8" style={{ color: method.color }} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{method.label}</h3>
                <div className="mt-2 btn-ieee px-6 py-2.5 text-sm md:text-base font-bold inline-flex items-center justify-center rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {method.value}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Map */}
        <ScrollReveal delay={0.4}>
          <div className="w-full h-[350px] rounded-3xl overflow-hidden glass-card relative group p-2">
            <div className="absolute top-6 left-6 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFB000] mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm">Venue</p>
                  <p className="text-xs text-white/60 mt-1">{EVENT.venue.building}, {EVENT.venue.name}</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
            <iframe
              src={EVENT.venue.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-0 rounded-2xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
