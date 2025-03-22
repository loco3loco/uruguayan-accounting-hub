
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
        { name: "Política de privacidad", href: "#" },
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Blog", href: "#" },
        { name: "Guías", href: "#" },
        { name: "Calculadoras", href: "#" },
        { name: "Legislación", href: "#" },
        { name: "Noticias", href: "#" },
      ]
    }
  ];

  return (
    <footer className="border-t pt-16 pb-10 backdrop-blur-sm bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="mb-6 inline-block">
              <span className="font-display text-2xl font-bold tracking-tight">
                <span className="text-primary">Contax</span>Uruguay
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Estudio contable especializado en brindar soluciones integrales a empresas y profesionales,
              con un enfoque personalizado y de excelencia.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-accent flex items-center justify-center transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-display font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
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
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Contax Uruguay. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos y condiciones
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
