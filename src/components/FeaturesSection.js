import { motion } from 'framer-motion';
import { Leaf, Truck, Shield, Sprout } from 'lucide-react';

const iconMap = {
  Leaf: Leaf,
  Truck: Truck,
  Shield: Shield,
  Sprout: Sprout,
};

const features = [
  {
    icon: 'Leaf',
    title: '100% Organic',
    description: 'Every product is certified organic, grown without synthetic chemicals or GMOs.',
  },
  {
    icon: 'Truck',
    title: 'Farm to Door',
    description: 'Direct delivery from our farms to your doorstep within 24 hours of harvest.',
  },
  {
    icon: 'Shield',
    title: 'Quality Assured',
    description: 'Rigorous testing and quality control at every stage of production.',
  },
  {
    icon: 'Sprout',
    title: 'Sustainable',
    description: 'Regenerative farming practices that heal the earth while feeding communities.',
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-forest font-body font-semibold text-sm tracking-widest uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            The Aurexium
            <span className="text-forest"> Difference</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComp = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                data-testid={`feature-card-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-cream/50 p-8 rounded-2xl border border-transparent hover:border-forest/15 hover:bg-white hover:shadow-xl hover:shadow-forest/5 transition-all duration-500 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center mb-6 group-hover:bg-forest group-hover:scale-110 transition-all duration-500">
                  <IconComp className="w-6 h-6 text-forest group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm font-body text-gray-500 leading-relaxed tracking-wide">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
