
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[100px] transform -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-accent/50 rounded-tr-[200px] transform translate-y-1/4 -translate-x-1/4" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 stagger-animation">
            <div className="animate-delayed-fade">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary">
                Contabilidad y Consultoría
              </span>
            </div>
            
            <h1 className="animate-delayed-fade text-balance font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Soluciones contables <span className="text-primary">para hacer crecer</span> tu negocio
            </h1>
            
            <p className="animate-delayed-fade text-balance text-xl text-muted-foreground max-w-md">
              Brindamos asesoramiento integral para empresas y profesionales, con un enfoque personalizado y de excelencia.
            </p>
            
            <div className="animate-delayed-fade flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/servicios"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Nuestros servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link
                to="/contacto"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Hablar con un asesor
              </Link>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last animate-scale-in">
            <div className="backdrop-blur-card rounded-2xl shadow-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30" />
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full flex items-center justify-center bg-primary/10">
                      <span className="font-display text-primary text-xl font-bold">C</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">Contax Uruguay</h3>
                      <p className="text-sm text-muted-foreground">Expertos en contabilidad</p>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <span className="text-sm font-medium">Asesoramiento fiscal</span>
                    <span className="text-sm text-primary font-medium">+30%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <span className="text-sm font-medium">Optimización tributaria</span>
                    <span className="text-sm text-primary font-medium">+25%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <span className="text-sm font-medium">Análisis financiero</span>
                    <span className="text-sm text-primary font-medium">+40%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Desde 1995</p>
                    <p className="font-medium">Confianza y experiencia</p>
                  </div>
                  <Link
                    to="/nosotros"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Conoce más <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/70 backdrop-blur-sm animate-pulse-subtle z-[-1]" />
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary/20 backdrop-blur-sm animate-pulse-subtle z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
