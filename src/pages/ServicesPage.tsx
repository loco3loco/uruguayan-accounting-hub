
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Calculator, BarChart3, FileText, Building2, Users, DollarSign } from 'lucide-react';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Calculator className="h-12 w-12 text-primary" />,
      title: "Contabilidad general",
      description: "Mantenemos tus registros contables actualizados y precisos, garantizando el cumplimiento de todas las normativas vigentes en Uruguay. Nuestro servicio incluye la preparación de estados financieros, conciliaciones bancarias y gestión de libros contables.",
      features: [
        "Preparación de estados financieros",
        "Conciliaciones bancarias",
        "Libros contables",
        "Registro de operaciones",
        "Auditorías internas"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Impuestos",
      description: "Ofrecemos asesoramiento y planificación fiscal estratégica para optimizar la carga tributaria de tu empresa, asegurando el cumplimiento de todas las obligaciones fiscales y aprovechando los beneficios disponibles según la legislación vigente.",
      features: [
        "Declaraciones de impuestos",
        "Planificación fiscal",
        "Gestión de IVA",
        "IRAE e IRPF",
        "Representación ante DGI"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Análisis financiero",
      description: "Realizamos evaluaciones detalladas de la situación económica y financiera de tu empresa para facilitar la toma de decisiones estratégicas. Analizamos indicadores clave, proyecciones financieras y oportunidades de mejora.",
      features: [
        "Indicadores financieros",
        "Flujo de caja",
        "Análisis de rentabilidad",
        "Proyecciones financieras",
        "Evaluación de inversiones"
      ]
    },
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Consultoría empresarial",
      description: "Brindamos asesoramiento integral para mejorar la eficiencia y rentabilidad de tu negocio. Identificamos áreas de mejora, optimizamos procesos y desarrollamos estrategias para el crecimiento sostenible de tu empresa.",
      features: [
        "Diagnóstico empresarial",
        "Optimización de procesos",
        "Reestructuración organizacional",
        "Planes de negocio",
        "Gestión de costos"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Gestión de nómina",
      description: "Administramos todos los aspectos relacionados con salarios, beneficios y obligaciones laborales para tu equipo de trabajo, garantizando el cumplimiento de la normativa laboral y simplificando la gestión de recursos humanos.",
      features: [
        "Cálculo de salarios",
        "Liquidación de BPS",
        "Gestión de licencias",
        "Contratos laborales",
        "Finiquitos y desvinculaciones"
      ]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Outsourcing financiero",
      description: "Ofrecemos servicios de tercerización de la gestión financiera de tu empresa con profesionales especializados, permitiéndote concentrarte en tu negocio mientras nosotros nos encargamos de la administración financiera.",
      features: [
        "Tesorería y pagos",
        "Gestión de cobranzas",
        "Control presupuestario",
        "Reportes financieros",
        "Relaciones con bancos"
      ]
    }
  ];

  return (
    <AnimatedTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-secondary/30">
            <div className="container mx-auto">
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                  Nuestros Servicios
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Soluciones contables integrales para tu empresa
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl">
                  Ofrecemos un amplio portafolio de servicios contables y financieros diseñados para satisfacer las necesidades específicas de tu negocio.
                </p>
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="section-padding">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-16">
                {services.map((service, index) => (
                  <div key={index} className="backdrop-blur-card rounded-xl overflow-hidden shadow-sm">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="p-8 md:p-10 flex flex-col h-full justify-center">
                        <div className="mb-6 rounded-full bg-primary/10 p-4 w-fit">
                          {service.icon}
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <Link
                            to="/contacto"
                            className="inline-flex items-center text-primary font-medium hover:underline"
                          >
                            Consultar por este servicio <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="bg-accent/50 p-8 md:p-10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-4 mx-auto h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                            {service.icon}
                          </div>
                          <h3 className="font-display text-xl font-semibold mb-2">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Soluciones adaptadas a tu negocio
                          </p>
                          <Link
                            to="/contacto"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          >
                            Solicitar información
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding bg-secondary/30">
            <div className="container mx-auto">
              <div className="backdrop-blur-card rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  ¿Necesitas un servicio personalizado?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contáctanos para discutir tus necesidades específicas y diseñar una solución a medida para tu empresa.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contactar ahora
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </AnimatedTransition>
  );
};

export default ServicesPage;
