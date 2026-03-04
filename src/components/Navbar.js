import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const LOGO_URL = '/logo-transparent.png';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/products' },
  { label: 'Features', href: '/#features' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = useCallback((href) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const sectionId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate, location.pathname]);

  return (
    <>
      <motion.nav
        data-testid="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-50 md:w-auto transition-all duration-500 rounded-full px-3 md:px-8 py-2 md:py-3 flex items-center justify-between md:justify-start gap-1 md:gap-6 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-forest/5 border border-forest/10'
            : 'bg-white/60 backdrop-blur-lg border border-white/40'
        }`}
      >
        <button
          data-testid="nav-logo"
          onClick={() => handleNavClick('/#home')}
          className="flex items-center gap-1.5 md:gap-2 md:mr-4 group flex-shrink-0"
        >
          <img
            src={LOGO_URL}
            alt="Aurexium Global Logo"
            className="logo-img w-9 h-9 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
          />
          <span className="font-heading font-bold text-forest text-sm sm:text-base md:text-xl tracking-tight whitespace-nowrap">
            Aurexium Global
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              onClick={() => handleNavClick(link.href)}
              className="relative px-4 py-2 text-sm font-body font-medium text-gray-700 hover:text-forest transition-colors duration-300 rounded-full hover:bg-forest/5 tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full hover:bg-forest/10 transition-colors flex-shrink-0"
        >
          {mobileOpen ? <X className="w-5 h-5 text-forest" /> : <Menu className="w-5 h-5 text-forest" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[4.5rem] left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-forest/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-base font-body font-medium text-gray-700 hover:text-forest hover:bg-forest/5 rounded-xl transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
