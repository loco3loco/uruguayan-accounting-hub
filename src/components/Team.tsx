
import { Linkedin, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const teamMembers = [
  {
    name: "Carolina Fernández",
    role: "Contadora Principal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    email: "carolina@contaxuruguay.com",
  },
  {
    name: "Martín Rodríguez",
    role: "Asesor Fiscal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    email: "martin@contaxuruguay.com",
  },
  {
    name: "Laura Méndez",
    role: "Consultoría Empresarial",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    email: "laura@contaxuruguay.com",
  },
  {
    name: "Diego Álvarez",
    role: "Análisis Financiero",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    email: "diego@contaxuruguay.com",
  },
];

const Team = () => {
  const isMobile = useIsMobile();
  const displayMembers = isMobile ? teamMembers.slice(0, 2) : teamMembers;

  return (
    <section id="equipo" className="section-padding bg-antiFlash/50">
      <div className="container mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">Nuestro Equipo</h2>
          <p className="section-subtitle">
            Profesionales altamente calificados con amplia experiencia en el sector contable y financiero.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {displayMembers.map((member, index) => (
            <div
              key={index}
              className="group backdrop-blur-card rounded-xl overflow-hidden transition-all duration-300 hover-card"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-springGreen/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                      aria-label={`Email de ${member.name}`}
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="font-display text-lg md:text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="mt-6 text-center">
            <Link
              to="/nosotros"
              className="inline-flex items-center text-sm font-medium text-springGreen"
            >
              Ver equipo completo
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default Team;
