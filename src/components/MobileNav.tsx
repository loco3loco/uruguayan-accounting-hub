
import { Home, Briefcase, Users, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="md:hidden mobile-nav-bottom">
      <Link 
        to="/" 
        className={`mobile-nav-item ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <Home className="mobile-nav-icon" />
        <span className="text-xs">Inicio</span>
      </Link>
      
      <Link 
        to="/servicios" 
        className={`mobile-nav-item ${isActive('/servicios') ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <Briefcase className="mobile-nav-icon" />
        <span className="text-xs">Servicios</span>
      </Link>
      
      <Link 
        to="/nosotros" 
        className={`mobile-nav-item ${isActive('/nosotros') ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <Users className="mobile-nav-icon" />
        <span className="text-xs">Nosotros</span>
      </Link>
      
      <Link 
        to="/contacto" 
        className={`mobile-nav-item ${isActive('/contacto') ? 'text-primary' : 'text-muted-foreground'}`}
      >
        <Mail className="mobile-nav-icon" />
        <span className="text-xs">Contacto</span>
      </Link>
    </div>
  );
};

export default MobileNav;
