"use client";
import AboutIntro from "../components/AboutIntro";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import InnovationSection from "../components/InnovationSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
          <AboutIntro />
          <MissionSection />
          <TeamSection />
          <InnovationSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
