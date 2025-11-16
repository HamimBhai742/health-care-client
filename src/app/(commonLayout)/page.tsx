import Hero from '@/components/modules/Hero';
import Services from '@/components/modules/Services';
import Stats from '@/components/modules/Stats';
import TopRatedDoctor from '@/components/modules/TopRatedDoctor';
import AIFeatures from '@/components/shared/AIFeatures/AIFeatures';
import AISymptomChecker from '@/components/shared/AISymptomChecker/AISymptomChecker';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* AI Features Section */}
      <AIFeatures />

      {/* AI Symptom Checker */}
      <AISymptomChecker />

      {/* Services Section */}
      <Services />

      {/* Top Rated Doctor Section */}
      <TopRatedDoctor />
    </main>
  );
}
