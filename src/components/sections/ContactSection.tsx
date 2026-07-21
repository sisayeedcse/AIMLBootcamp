'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import { EVENT } from '@/lib/constants';

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-[#0A0A12]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <div className="section-label mx-auto mb-6">Contact Us</div>
          <h2 className="font-display font-bold text-4xl text-white mb-4">
            Get In <span className="gradient-text-blue">Touch</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Have questions about the bootcamp or registration? Our team is here to help.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info & Map */}
          <ScrollReveal direction="left" className="space-y-8">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Venue', value: `${EVENT.venue.building}, ${EVENT.venue.name}`, subValue: `${EVENT.venue.street}, ${EVENT.venue.city}` },
                { icon: Mail, label: 'Email', value: EVENT.contact.email, isLink: true, href: `mailto:${EVENT.contact.email}` },
                { icon: Phone, label: 'Phone', value: EVENT.contact.phone },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    <item.icon className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.label}</p>
                    {item.isLink ? (
                      <a href={item.href} className="text-base text-white hover:text-[#3B82F6] transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base text-white font-medium">{item.value}</p>
                    )}
                    {item.subValue && <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.subValue}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div className="w-full h-[250px] rounded-2xl overflow-hidden glass-card relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10" />
              <iframe
                src={EVENT.venue.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} // Dark mode filter trick
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-0"
              />
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form className="glass-card p-8 rounded-2xl" onSubmit={(e) => { e.preventDefault(); alert("Form submission simulated."); }}>
              <h3 className="font-display text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Email</label>
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Your message..." 
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-lg font-bold flex items-center justify-center gap-2 bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
