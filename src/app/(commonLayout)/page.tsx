import Hero from '@/components/modules/Hero';
import Services from '@/components/modules/Services';
import Stats from '@/components/modules/Stats';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <Services />
    </main>
  );
}
