import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhyJoinSection from '@/components/sections/WhyJoinSection';
import LearningJourneySection from '@/components/sections/LearningJourneySection';
import CurriculumSection from '@/components/sections/CurriculumSection';
import ScheduleSection from '@/components/sections/ScheduleSection';
import TechStackSection from '@/components/sections/TechStackSection';
import CapstoneSection from '@/components/sections/CapstoneSection';
import InnovationChallengeSection from '@/components/sections/InnovationChallengeSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import IEEESection from '@/components/sections/IEEESection';
import RegistrationSection from '@/components/sections/RegistrationSection';
import FAQSection from '@/components/sections/FAQSection';
import OrganizersSection from '@/components/sections/OrganizersSection';
import GallerySection from '@/components/sections/GallerySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import LoadingScreen from '@/components/common/LoadingScreen';
import BackToTop from '@/components/common/BackToTop';
import CursorGlow from '@/components/effects/CursorGlow';
import ScrollProgress from '@/components/effects/ScrollProgress';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />

      <main className="flex min-h-screen flex-col w-full selection:bg-[#FFB000]/30 selection:text-white">
        <HeroSection />
        <AboutSection />
        <WhyJoinSection />
        <LearningJourneySection />
        <CurriculumSection />
        <ScheduleSection />
        <TechStackSection />
        <CapstoneSection />
        <InnovationChallengeSection />
        <BenefitsSection />
        <GallerySection />
        <RegistrationSection />
        <FAQSection />
        <OrganizersSection />
        <IEEESection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
