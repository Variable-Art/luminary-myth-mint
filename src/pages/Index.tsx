
import React from 'react';
import MythNavbar from '@/components/MythNavbar';
import HeroSection from '@/components/HeroSection';
import PopularFragments from '@/components/PopularFragments';
import MythMetrics from '@/components/MythMetrics';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MythNavbar />
      <main className="flex-grow">
        <HeroSection />
        <PopularFragments />
        <MythMetrics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
