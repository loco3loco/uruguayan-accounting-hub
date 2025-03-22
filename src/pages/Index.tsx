
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import About from '@/components/About';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';
import MobileNav from '@/components/MobileNav';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="pb-safe">
          <Services />
          <About />
          <Team />
          <Contact />
        </main>
        <Footer />
        <MobileNav />
      </div>
    </AnimatedTransition>
  );
};

export default Index;
