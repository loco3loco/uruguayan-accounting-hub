
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-card py-2 shadow-sm' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            aria-label="Logo"
          >
            <span className="font-display text-lg md:text-xl font-bold tracking-tight">
              <span className="text-springGreen">Contax</span>Uruguay
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium button-transition hover:text-springGreen relative ${
                  isActive(link.path) 
                    ? 'text-springGreen after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-springGreen after:rounded-full' 
                    : 'text-foreground/80 hover:text-springGreen'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              to="/contacto"
              className="inline-flex h-10 items-center justify-center rounded-md bg-springGreen px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-springGreen/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Consultanos
            </Link>
          </div>

          {/* Mobile Menu Button - hidden when bottom nav is active */}
          {!isMobile ? (
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md text-foreground p-2 hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : null}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-card shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-4 py-4 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 text-lg font-medium button-transition ${
                isActive(link.path) ? 'text-springGreen' : 'text-foreground/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-springGreen px-6 text-base font-medium text-primary-foreground shadow-md transition-colors hover:bg-springGreen/90"
          >
            Consultanos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
