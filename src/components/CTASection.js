import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section
      data-testid="cta-section"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80)`,
            }}
          />
          <div className="absolute inset-0 bg-forest/80" />

          {/* Glowing accent */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon/10 blur-[100px]" />

          <div className="relative z-10 py-20 md:py-28 px-6 md:px-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            >
              Ready to Grow
              <span className="text-neon"> Naturally?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-white/70 font-body max-w-xl mx-auto mb-10 tracking-wide"
            >
              Join hundreds of farmers and international buyers who've partnered with us.
              Explore our range of premium organic agriculture products today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                data-testid="cta-explore-button"
                onClick={() => {
                  navigate('/products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-forest font-body font-semibold px-8 py-4 rounded-full hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-white/20 hover:-translate-y-1 text-sm tracking-wide group"
              >
                Browse Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                data-testid="cta-contact-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/25 text-white font-body font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-sm tracking-wide"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
