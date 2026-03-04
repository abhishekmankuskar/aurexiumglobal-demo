import { motion } from 'framer-motion';
import { Globe, Ship, Plane, FileCheck, ArrowRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';

const services = [
  {
    icon: Ship,
    title: 'Sea Freight Export',
    description: 'Bulk shipments across continents with temperature-controlled containers for dairy and perishable goods.',
  },
  {
    icon: Plane,
    title: 'Air Freight Express',
    description: 'Rapid delivery of fresh flowers, eggs, and premium products to international markets within 48 hours.',
  },
  {
    icon: FileCheck,
    title: 'Compliance & Documentation',
    description: 'Full export documentation, phytosanitary certificates, and compliance with international trade regulations.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description: 'Established trade networks across 15+ countries with reliable logistics partners and warehousing facilities.',
  },
];

const regions = [
  'Middle East', 'Southeast Asia', 'Europe', 'North America', 'Africa', 'Australia'
];

export default function ImportExportSection() {
  return (
    <section
      id="import-export"
      data-testid="import-export-section"
      className="py-24 md:py-32 relative overflow-hidden bg-white"
    >
      {/* Decorative world map background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cellipse cx='500' cy='250' rx='450' ry='200' fill='none' stroke='%231a472a' stroke-width='1'/%3E%3Cellipse cx='500' cy='250' rx='300' ry='200' fill='none' stroke='%231a472a' stroke-width='0.5'/%3E%3Cellipse cx='500' cy='250' rx='150' ry='200' fill='none' stroke='%231a472a' stroke-width='0.5'/%3E%3Cline x1='50' y1='250' x2='950' y2='250' stroke='%231a472a' stroke-width='0.5'/%3E%3Cline x1='500' y1='50' x2='500' y2='450' stroke='%231a472a' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-forest font-body font-semibold text-sm tracking-widest uppercase mb-4">
              Global Trade
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Import & Export
              <br />
              <span className="text-forest">Across Borders</span>
            </h2>
            <p className="text-base text-gray-600 font-body leading-relaxed tracking-wide mb-8">
              Aurexium Global bridges local agriculture with international markets. We handle
              end-to-end export logistics — from farm-gate quality control to customs clearance
              and last-mile delivery in destination countries.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {regions.map((region) => (
                <Badge
                  key={region}
                  className="bg-forest/5 text-forest border border-forest/10 text-xs font-body tracking-wide hover:bg-forest/10 transition-colors cursor-default"
                >
                  {region}
                </Badge>
              ))}
            </div>
            <button
              data-testid="import-export-contact-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-forest text-white font-body font-semibold px-7 py-3.5 rounded-full hover:bg-forest-dark transition-all duration-300 shadow-lg hover:shadow-forest/20 hover:-translate-y-1 text-sm tracking-wide group"
            >
              Inquire About Trade
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Image + Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="Global shipping and export"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-5 -left-3 md:left-8 bg-white rounded-xl shadow-xl p-5 border border-forest/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold text-forest">15+</div>
                  <div className="text-xs font-body text-gray-500 tracking-wide">Countries Served</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                data-testid={`trade-service-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-cream/60 p-7 rounded-2xl border border-transparent hover:border-forest/10 hover:bg-white hover:shadow-lg transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mb-5 group-hover:bg-forest group-hover:scale-110 transition-all duration-500">
                  <IconComp className="w-5 h-5 text-forest group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-base font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm font-body text-gray-500 leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
