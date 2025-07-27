"use client";
import AboutIntro from "../components/AboutIntro";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import InnovationSection from "../components/InnovationSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <main   className="items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-white via-blue-100 to-blue-300 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">

        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24" style={{ fontFamily: 'var(--font-heading)' }}>
          <AboutIntro />
          <MissionSection />
          <TeamSection />
          <InnovationSection />
        </div>
      </main>
    </>
  );
}
