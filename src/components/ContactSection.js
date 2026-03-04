import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Pune', 'Maharashtra', 'India'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210', '+91 87654 32109'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@aurexiumglobal.com'],
  },
  
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-forest font-body font-semibold text-sm tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We'd Love to <span className="text-forest">Hear From You</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                data-testid={`contact-card-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-forest/10 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center mx-auto mb-5">
                  <IconComp className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-sm font-body text-gray-500 leading-relaxed tracking-wide">
                    {line}
                  </p>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
