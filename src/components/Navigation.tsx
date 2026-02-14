import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-calm ${
        isScrolled
          ? 'bg-white/[0.14] backdrop-blur-[28px] shadow-[0_4px_24px_rgba(31,61,43,0.12)] py-3.5 px-6 md:px-12'
          : 'bg-white/[0.08] backdrop-blur-[16px] border-b border-white/15 py-5 px-6 md:px-12'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <img 
            src="/favicon-32x32.png" 
            alt="Thanda Kapda Logo" 
            className="w-7 h-7 object-contain invert transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(191,64%,85%)]"
          />
          <span className="font-display text-lg font-semibold text-white tracking-wide">
            THANDA KAPDA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm uppercase tracking-[1.5px] transition-all duration-300 ${
                isActive(link.to)
                  ? 'text-white opacity-100 [text-shadow:0_0_12px_hsl(191,64%,85%)]'
                  : 'text-white/90 hover:text-white hover:opacity-100 hover:scale-[1.03] hover:[text-shadow:0_0_8px_hsl(191,64%,85%)]'
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="block h-0.5 mt-1 rounded-full bg-pine shadow-[0_0_8px_hsl(150,32%,18%)]" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-0 z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-400 ease-calm ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/[0.12] backdrop-blur-[24px] border-t border-white/10 py-6 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-base uppercase tracking-[1.5px] py-3 transition-all duration-300 ${
                  isActive(link.to)
                    ? 'text-white [text-shadow:0_0_12px_hsl(191,64%,85%)]'
                    : 'text-white/90'
                }`}
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
