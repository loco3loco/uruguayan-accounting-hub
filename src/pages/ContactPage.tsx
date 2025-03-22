
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import AnimatedTransition from '@/components/AnimatedTransition';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <section className="section-padding bg-secondary/30">
            <div className="container mx-auto">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                  Contacto
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Estamos aquí para ayudarte
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Ponte en contacto con nuestro equipo para resolver todas tus dudas y recibir asesoramiento personalizado.
                </p>
              </div>
            </div>
          </section>
          
          <Contact />
          
          <section className="section-padding bg-secondary/30">
            <div className="container mx-auto">
              <div className="backdrop-blur-card rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                      Preguntas frecuentes
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Encuentra respuestas a las consultas más comunes sobre nuestros servicios.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">¿Cuáles son los horarios de atención?</h3>
                      <p className="text-muted-foreground">Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 horas.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">¿Ofrecen consultas iniciales gratuitas?</h3>
                      <p className="text-muted-foreground">Sí, ofrecemos una primera consulta sin costo para evaluar tus necesidades y presentarte nuestras soluciones.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">¿Trabajan con empresas de todos los tamaños?</h3>
                      <p className="text-muted-foreground">Efectivamente, adaptamos nuestros servicios a empresas de todos los tamaños, desde emprendedores hasta grandes corporaciones.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </AnimatedTransition>
  );
};

export default ContactPage;
