import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Leaf, Sprout } from 'lucide-react';

export default function HeroSection() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: `url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)`,
            backgroundImage: `url(https://images.unsplash.com/photo-1641176716788-d4816a66dc6d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-soil-dark/70 via-forest/50 to-cream" />
      </motion.div>

      {/* Floating decorative elements */}
      {/* <div className="absolute top-20 left-10 opacity-20 animate-float hidden lg:block">
        <Leaf className="w-16 h-16 text-neon" />
      </div>
      <div className="absolute bottom-40 right-16 opacity-15 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <Sprout className="w-20 h-20 text-white" />
      </div> */}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white/90 px-5 py-2 rounded-full text-sm font-body tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            From Farm to Future
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
        >
          Nurturing Earth,
          <br />
          <span className="text-gray">Growing Tomorrow</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-white/80 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
        >
          Aurexium Global delivers premium organic agriculture products to
          international markets. Pure ingredients, honest farming, real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            data-testid="hero-explore-button"
            onClick={() => navigate('/products')}
            className="bg-white/10 backdrop-blur-md border border-white/25 text-white font-body font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-sm tracking-wide"
          >
            Explore Products
          </button>
          <button
            data-testid="hero-learn-button"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-md border border-white/25 text-white font-body font-medium px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-sm tracking-wide"
          >
            Our Story
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-white/50 text-xs font-body tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
