
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Servicios",
      links: [
        { name: "Contabilidad general", href: "/servicios" },
        { name: "Impuestos", href: "/servicios" },
        { name: "Análisis financiero", href: "/servicios" },
        { name: "Consultoría empresarial", href: "/servicios" },
        { name: "Gestión de nómina", href: "/servicios" },
      ]
    },
    {
      title: "Compañía",
      links: [
        { name: "Sobre nosotros", href: "/nosotros" },
        { name: "Nuestro equipo", href: "/nosotros" },
        { name: "Testimonios", href: "/nosotros" },
        { name: "Preguntas frecuentes", href: "/nosotros" },
        { name: "Política de privacidad", href: "/privacidad" },
      ]
    }
  ];

  return (
    <footer className="border-t pt-12 pb-8 md:pt-16 backdrop-blur-sm bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-5 inline-block">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-primary">Contax</span>Uruguay
              </span>
            </Link>
            <p className="text-muted-foreground mb-5 max-w-md">
              Estudio contable especializado en brindar soluciones integrales a empresas y profesionales,
              con un enfoque personalizado y de excelencia.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-display font-semibold text-lg mb-3">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t mt-10 pt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-3 md:mb-0">
            © {currentYear} Contax Uruguay. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link to="/terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos y condiciones
            </Link>
            <Link to="/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
