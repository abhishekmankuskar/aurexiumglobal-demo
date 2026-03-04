import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { Separator } from '../components/ui/separator';

const LOGO_URL = '/logo-transparent.png';

const footerLinks = {
  Products: [
    { label: 'Organic Fertilizer', href: '/products' },
    { label: 'Free-Range Eggs', href: '/products' },
    { label: 'Aromatic Flowers', href: '/products' },
    { label: 'Premium Dairy', href: '/products' },
    { label: 'View All', href: '/products' },
  ],
  Company: [
    { label: 'About Us', href: '/#about' },
    
  
  ],
  Support: [
    { label: 'Contact Us', href: '/#contact' },
    { label: 'Shipping Info', href: '/#contact' },
    { label: 'FAQ', href: '/#features' },
    { label: 'Returns', href: '/#contact' },
  ],
};

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = (href) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer data-testid="footer" className="relative overflow-hidden">
      {/* Soil texture background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1562722902-d33533894eea?w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-soil-dark/92" />
      </div>

      {/* Wave separator */}
      <div className="absolute top-0 left-0 right-0 z-10 -translate-y-[1px]">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,0 L0,0 Z"
            fill="#f5f5f0"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <img
                  src={LOGO_URL}
                  alt="Aurexium Global Logo"
                  className="logo-img w-12 h-12 object-contain brightness-0 invert"
                />
                <span className="font-heading font-bold text-white text-2xl tracking-tight">
                  Aurexium Global
                </span>
              </motion.div>
              <p className="text-sm font-body text-white/50 leading-relaxed max-w-sm mb-6 tracking-wide">
                Premium organic agriculture products for global markets. Nurturing the earth,
                growing a healthier tomorrow through sustainable trade.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-white/40 text-sm font-body">
                  <MapPin className="w-4 h-4 text-neon/60" />
                  Pune, Maharashtra, India
                </div>
                <div className="flex items-center gap-3 text-white/40 text-sm font-body">
                  <Phone className="w-4 h-4 text-neon/60" />
                 +91 7057721155
                </div>
                <div className="flex items-center gap-3 text-white/40 text-sm font-body">
                  <Mail className="w-4 h-4 text-neon/60" />
                  info@aurexiumglobal.com
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links], colIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIndex * 0.1 }}
              >
                <h4 className="font-heading font-bold text-white text-base mb-5">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => handleClick(link.href)}
                        className="text-sm font-body text-white/40 hover:text-neon transition-colors duration-300 tracking-wide"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <Separator className="bg-white/10 mb-8" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-body text-white/30 tracking-wide">
              &copy; {new Date().getFullYear()} Aurexium Global. All rights reserved. Organic & Sustainable.
            </p>
            <button
              data-testid="scroll-to-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-xs font-body text-white/30 hover:text-neon transition-colors duration-300 group"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative soil grain at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-soil via-forest to-soil opacity-50" />
    </footer>
  );
}
