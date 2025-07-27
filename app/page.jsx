// Home.jsx
'use client';

import HeroSection from './components/HeroSection';
import About from './components/AboutIntro';
import FeaturesSection from './components/FeaturesSection';
import IndustriesSection from './components/IndustriesSection';
import MissionSection from './components/MissionSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      {/* <About /> */}
      <FeaturesSection />
      <IndustriesSection />
      {/* <MissionSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}
