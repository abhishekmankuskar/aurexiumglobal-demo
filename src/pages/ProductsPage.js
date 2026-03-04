import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { domains } from '../data/products';
import { Badge } from '../components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '../components/ui/dialog';
import { Separator } from '../components/ui/separator';
import { ArrowLeft, Check, Sparkles, ChevronRight, Sprout, Flame, Milk, Flower2, Egg } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  Sprout,
  Flame,
  Milk,
  Flower2,
  Egg,
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeDomain, setActiveDomain] = useState(null);
  const navigate = useNavigate();

  const scrollToContact = () => {
    setSelectedProduct(null);
    setTimeout(() => {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }, 200);
  };

  return (
    <main data-testid="products-page" className="min-h-screen bg-cream">
      {/* Products Hero with Video Background */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
            data-testid="products-hero-video"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/shipping-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-forest/65 to-cream" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            data-testid="products-back-button"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/70 hover:text-white font-body text-sm mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-xs font-body tracking-widest uppercase mb-4">
              <Sparkles className="w-3 h-3" />
              Our Product Range
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Product Categories
            </h1>
            <p className="text-base md:text-lg text-white/70 font-body mt-4 max-w-2xl tracking-wide">
              Explore our diverse range of organic agriculture products across five core domains.
              Each category features premium offerings for domestic and international markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Domain Categories */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          {domains.map((domain, domainIndex) => {
            const IconComp = iconMap[domain.icon] || Sprout;
            const isActive = activeDomain === domain.id;

            return (
              <motion.div
                key={domain.id}
                data-testid={`domain-section-${domain.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: domainIndex * 0.05 }}
                className="mb-16 last:mb-0"
              >
                {/* Domain Header */}
                <button
                  data-testid={`domain-toggle-${domain.id}`}
                  onClick={() => setActiveDomain(isActive ? null : domain.id)}
                  className="w-full group"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:border-forest/15 hover:shadow-xl transition-all duration-500">
                    {/* Domain Image */}
                    <div className="relative w-full md:w-48 h-40 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={domain.image}
                        alt={domain.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-forest/30 group-hover:bg-forest/20 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComp className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Domain Info */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <Badge className="bg-forest/10 text-forest border-0 text-xs font-body tracking-wide hover:bg-forest/10">
                          {domain.products.length} Products
                        </Badge>
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-forest transition-colors mb-2">
                        {domain.name}
                      </h2>
                      <p className="text-xs font-body text-forest font-semibold tracking-widest uppercase mb-2">
                        {domain.tagline}
                      </p>
                      <p className="text-sm font-body text-gray-500 leading-relaxed tracking-wide line-clamp-2">
                        {domain.description}
                      </p>
                    </div>

                    {/* Toggle indicator */}
                    <div className="flex-shrink-0 hidden md:flex">
                      <div className={`w-10 h-10 rounded-full border-2 border-forest/20 flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-forest border-forest rotate-90' : 'group-hover:border-forest/40'}`}>
                        <ChevronRight className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-forest/40 group-hover:text-forest'}`} />
                      </div>
                    </div>
                  </div>
                </button>

                {/* Products Grid (Expandable) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-2">
                        {domain.products.map((product, productIndex) => (
                          <motion.div
                            key={product.id}
                            data-testid={`product-card-${product.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: productIndex * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            onClick={() => setSelectedProduct({ ...product, domainName: domain.name })}
                            className="group/card cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-forest/15 transition-all duration-500"
                          >
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/card:opacity-100 translate-y-4 group-hover/card:translate-y-0 transition-all duration-500">
                                <span className="text-white text-xs font-body tracking-widest uppercase">
                                  Click for details
                                </span>
                              </div>
                            </div>
                            <div className="p-5">
                              <h3 className="font-heading text-lg font-bold text-gray-900 group-hover/card:text-forest transition-colors mb-2">
                                {product.name}
                              </h3>
                              <p className="text-sm font-body text-gray-500 leading-relaxed line-clamp-2 tracking-wide mb-4">
                                {product.description}
                              </p>
                              <button
                                data-testid={`product-know-more-${product.id}`}
                                className="text-sm font-body font-semibold text-forest flex items-center gap-1 group-hover/card:gap-2 transition-all"
                              >
                                Know More
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Product Detail Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        {selectedProduct && (
          <DialogContent
            data-testid="product-detail-dialog"
            className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-0 border-0 shadow-2xl"
          >
            <div className="relative h-56 md:h-64 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge className="bg-neon/90 text-forest border-0 text-xs font-body font-bold tracking-wide mb-2">
                  {selectedProduct.domainName}
                </Badge>
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl md:text-3xl font-bold text-white">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-white/70 text-sm font-body tracking-wide">
                    Premium quality for domestic &amp; export markets
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-sm font-body text-gray-600 leading-relaxed mb-6 tracking-wide">
                {selectedProduct.description}
              </p>

              <Separator className="my-6" />

              <h4 className="font-heading text-base font-bold text-gray-900 mb-4">
                Product Highlights
              </h4>
              <ul className="space-y-3 mb-6">
                {selectedProduct.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-forest" />
                    </div>
                    <span className="text-sm font-body text-gray-600 tracking-wide">{detail}</span>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <h4 className="font-heading text-base font-bold text-gray-900 mb-3">
                Why Choose This Product?
              </h4>
              <p className="text-sm font-body text-gray-600 leading-relaxed tracking-wide">
                {selectedProduct.benefits}
              </p>

              <div className="mt-8 flex gap-3">
                <button
                  data-testid="dialog-know-more-button"
                  onClick={scrollToContact}
                  className="flex-1 bg-forest text-white font-body font-semibold py-3 rounded-full hover:bg-forest-dark transition-all duration-300 text-sm tracking-wide"
                >
                  Know More &mdash; Contact Us
                </button>
                <button
                  data-testid="dialog-close-button"
                  onClick={() => setSelectedProduct(null)}
                  className="px-6 py-3 border border-gray-200 text-gray-600 font-body font-medium rounded-full hover:bg-gray-50 transition-all duration-300 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}
