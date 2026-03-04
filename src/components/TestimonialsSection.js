import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

export default function TestimonialsSection() {
  return (
    <section
      data-testid="testimonials-section"
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
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Trusted by <span className="text-forest">Farmers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              data-testid={`testimonial-card-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-forest/10 transition-all duration-500 relative"
            >
              <Quote className="w-8 h-8 text-forest/10 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-600 font-body text-sm leading-relaxed mb-6 tracking-wide">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                  <span className="text-sm font-body font-bold text-forest">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-body font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs font-body text-gray-400 tracking-wide">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
