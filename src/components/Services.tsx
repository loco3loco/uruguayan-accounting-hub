
import { 
  Calculator, 
  BarChart3, 
  FileText, 
  Building2, 
  Users, 
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    icon: <Calculator className="h-8 w-8 text-springGreen" />,
    title: "Contabilidad general",
    description: "Llevamos tus libros contables con precisión y de acuerdo a la normativa vigente en Uruguay.",
  },
  {
    icon: <FileText className="h-8 w-8 text-springGreen" />,
    title: "Impuestos",
    description: "Asesoramiento y planificación fiscal estratégica para optimizar la carga tributaria de tu empresa.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-springGreen" />,
    title: "Análisis financiero",
    description: "Evaluación detallada de la situación económica y financiera para la toma de decisiones.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-springGreen" />,
    title: "Consultoría empresarial",
    description: "Asesoramiento integral para mejorar la eficiencia y rentabilidad de tu negocio.",
  },
  {
    icon: <Users className="h-8 w-8 text-springGreen" />,
    title: "Gestión de nómina",
    description: "Administración de salarios, beneficios y obligaciones laborales para tu equipo de trabajo.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-springGreen" />,
    title: "Outsourcing financiero",
    description: "Tercerización de la gestión financiera de tu empresa con profesionales especializados.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-antiFlash/50">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones contables y financieras adaptadas a las necesidades específicas de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="backdrop-blur-card rounded-xl p-5 md:p-6 transition-all duration-300 hover-card group"
            >
              <div className="mb-4 rounded-full bg-springGreen/10 p-3 w-fit">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-display font-semibold mb-2 md:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-4">
                {service.description}
              </p>
              <Link 
                to="/servicios" 
                className="inline-flex items-center text-sm font-medium text-springGreen group-hover:underline"
              >
                Más información 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 text-center">
          <Link
            to="/servicios"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
