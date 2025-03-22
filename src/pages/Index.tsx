
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatedTransition>
  );
};

export default Index;
