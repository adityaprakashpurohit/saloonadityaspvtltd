import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from './Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Stylists', path: '/stylists' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const navBackground = isHome && !isScrolled ? 'bg-transparent text-white' : 'bg-ivory/95 backdrop-blur-md border-b border-sand text-espresso shadow-sm';
  const logoColor = isHome && !isScrolled ? 'text-white' : 'text-espresso';

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBackground)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col justify-center">
            <span className={cn("font-serif text-3xl tracking-widest leading-none", logoColor)}>
              LUMIÈRE
            </span>
            <span className={cn("font-sans text-[10px] tracking-[0.3em] mt-1 uppercase opacity-80", logoColor)}>
              Salon & Beauty Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-rose",
                  isHome && !isScrolled ? "text-white/90" : "text-espresso/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking">
              <Button 
                variant={isHome && !isScrolled ? 'secondary' : 'primary'}
                className={cn(isHome && !isScrolled ? "bg-white text-espresso hover:bg-ivory" : "")}
              >
                BOOK APPOINTMENT
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn("h-6 w-6", logoColor)} />
            ) : (
              <Menu className={cn("h-6 w-6", logoColor)} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 bg-ivory z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out md:hidden",
        isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <nav className="flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-2xl font-serif text-espresso hover:text-rose"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <Link to="/booking" className="w-full">
              <Button className="w-full py-4 text-lg">
                BOOK APPOINTMENT
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
