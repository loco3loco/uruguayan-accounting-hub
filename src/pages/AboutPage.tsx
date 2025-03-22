
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Trophy, Star, Users, Clock, CheckCircle, BarChart3 } from 'lucide-react';
import AnimatedTransition from '@/components/AnimatedTransition';
import Team from '@/components/Team';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "+25",
      label: "Años de experiencia",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "+500",
      label: "Clientes satisfechos",
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      value: "+15",
      label: "Premios recibidos",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      value: "98%",
      label: "Índice de retención",
    },
  ];

  const values = [
    {
      title: "Excelencia",
      description: "Nos esforzamos constantemente por superar las expectativas y brindar servicios de la más alta calidad.",
    },
    {
      title: "Integridad",
      description: "Actuamos con honestidad y transparencia en todas nuestras interacciones profesionales.",
    },
    {
      title: "Compromiso",
      description: "Nos dedicamos plenamente a satisfacer las necesidades de nuestros clientes y lograr resultados sobresalientes.",
    },
    {
      title: "Innovación",
      description: "Buscamos constantemente nuevas formas de mejorar nuestros servicios y procesos para mantenernos a la vanguardia.",
    },
    {
      title: "Confidencialidad",
      description: "Protegemos la información de nuestros clientes con los más altos estándares de seguridad y privacidad.",
    },
    {
      title: "Personalización",
      description: "Adaptamos nuestros servicios a las necesidades específicas de cada cliente, reconociendo su singularidad.",
    },
  ];

  const testimonials = [
    {
      quote: "Desde que trabajamos con Contax Uruguay, nuestra gestión financiera ha mejorado significativamente. Su equipo profesional y dedicado ha sido fundamental para el crecimiento de nuestra empresa.",
      author: "María Fernández",
      position: "Directora Financiera, Empresa Nacional",
    },
    {
      quote: "El nivel de atención personalizada y el conocimiento técnico que ofrece Contax Uruguay es excepcional. Han sido un socio estratégico clave para optimizar nuestra estructura fiscal.",
      author: "Carlos Rodríguez",
      position: "CEO, Importadora Atlántico",
    },
    {
      quote: "Recomiendo ampliamente los servicios de Contax Uruguay. Su equipo ha demostrado un profundo conocimiento del mercado local y siempre están actualizados con las últimas regulaciones.",
      author: "Laura Martínez",
      position: "Gerente General, Retail Solutions",
    },
  ];

  return (
    <AnimatedTransition>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="section-padding bg-secondary/30">
            <div className="container mx-auto">
              <div className="max-w-3xl">
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
                  Sobre Nosotros
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Más de 25 años de experiencia en servicios contables
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                  Somos un estudio contable líder en Uruguay, comprometido con brindar soluciones integrales y personalizadas que impulsan el éxito financiero de nuestros clientes.
                </p>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="section-padding">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative">
                    <div className="backdrop-blur-card rounded-2xl overflow-hidden shadow-sm">
                      <div className="aspect-[4/3] bg-muted relative overflow-hidden rounded-xl">
                        <img 
                          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                          alt="Equipo de trabajo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 backdrop-blur-card rounded-xl p-4 md:p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <BarChart3 className="h-5 w-5 text-primary" />
                        </div>
                        <p className="font-medium">Crecimiento constante</p>
                      </div>
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-display font-bold">40%</span>
                        <span className="text-muted-foreground">en 5 años</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="font-display text-3xl font-bold tracking-tight">
                    Nuestra historia
                  </h2>
                  <p className="text-muted-foreground">
                    Fundada en 1995, Contax Uruguay nació con la visión de ofrecer servicios contables y financieros de excelencia para empresas y profesionales en todo el país.
                  </p>
                  <p className="text-muted-foreground">
                    A lo largo de más de dos décadas, hemos evolucionado constantemente, adaptándonos a los cambios del mercado y las regulaciones, siempre con el objetivo de proporcionar el mejor servicio a nuestros clientes.
                  </p>
                  <p className="text-muted-foreground">
                    Hoy somos reconocidos como uno de los estudios contables más prestigiosos de Uruguay, con un equipo de profesionales altamente calificados y especializados en diferentes áreas de la contabilidad y las finanzas.
                  </p>
                  <div className="flex flex-wrap gap-6 pt-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="backdrop-blur-card rounded-xl p-4 flex-1 min-w-[140px]">
                        <div className="rounded-full bg-primary/10 p-2 w-fit mb-3">
                          {stat.icon}
                        </div>
                        <div className="font-display text-3xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="section-padding bg-secondary/30">
            <div className="container mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="section-title">Nuestros valores</h2>
                <p className="section-subtitle">
                  Estos principios fundamentales guían nuestras acciones y definen nuestra cultura organizacional.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-card rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <Team />

          {/* Testimonials */}
          <section className="section-padding">
            <div className="container mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="section-title">Lo que dicen nuestros clientes</h2>
                <p className="section-subtitle">
                  Descubre por qué tantas empresas confían en nuestros servicios contables y financieros.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-card rounded-xl p-6 md:p-8 shadow-sm"
                  >
                    <div className="mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="inline-block h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
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
                  ¿Listo para impulsar tu negocio?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos financieros y contables.
                </p>
                <Link
                  to="/contacto"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contactar ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
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

export default AboutPage;
