
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const benefits = [
    "Asesoramiento personalizado con profesionales altamente cualificados",
    "Más de 25 años de experiencia en el mercado uruguayo",
    "Soluciones diseñadas específicamente para tu sector",
    "Acceso a tecnología avanzada para gestión contable",
    "Actualizaciones constantes sobre cambios en la normativa fiscal",
  ];

  return (
    <section id="nosotros" className="section-padding relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-celadon/30 rounded-full transform translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-airBlue/20 rounded-full transform -translate-x-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="backdrop-blur-card rounded-2xl overflow-hidden">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                    alt="Equipo trabajando"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 backdrop-blur-card rounded-xl p-3 md:p-6 shadow-lg max-w-[200px] md:max-w-xs">
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-jungleGreen/20 flex items-center justify-center">
                    <span className="h-4 w-4 md:h-5 md:w-5 rounded-full bg-jungleGreen" />
                  </div>
                  <p className="text-sm md:text-base font-medium">Clientes satisfechos</p>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-2xl md:text-3xl font-display font-bold">98%</span>
                  <span className="text-sm md:text-base text-muted-foreground">de retención</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-springGreen/10 text-springGreen">
              Sobre Nosotros
            </span>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Excelencia contable con enfoque personalizado
            </h2>
            
            <p className="text-muted-foreground text-base md:text-lg">
              Somos un estudio contable con más de 25 años de experiencia en el mercado uruguayo, 
              brindando soluciones integrales en materia contable, tributaria y financiera.
            </p>
            
            <ul className="space-y-2 md:space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-springGreen mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-2">
              <Link
                to="/nosotros"
                className="inline-flex h-10 md:h-12 items-center justify-center rounded-md bg-springGreen px-5 md:px-6 text-sm md:text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-springGreen/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
