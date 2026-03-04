import { motion } from 'framer-motion';
import { Separator } from '../components/ui/separator';

export default function AboutSection() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-cream relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a472a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1661962773421-6b97ceec1f0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2xvYmFsJTIwdHJhZGV8ZW58MHx8MHx8fDA%3D"
                alt="Organic farming at GrowNatural"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-xl shadow-xl p-5 border border-forest/10"
            >
              <div className="text-3xl font-heading font-bold text-forest">12+</div>
              <div className="text-sm font-body text-gray-500 tracking-wide">Years of Trust</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-forest font-body font-semibold text-sm tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Rooted in Nature,
              <br />
              <span className="text-forest">Driven by Purpose</span>
            </h2>

            <Separator className="w-16 h-1 bg-forest rounded-full mb-6" />

            <p className="text-base text-gray-600 font-body leading-relaxed mb-6 tracking-wide">
              Aurexium Global was born from a simple belief: the earth provides everything we
              need when we treat it with respect. Founded by farmers and trade visionaries who saw the
              potential of organic agriculture on the global stage, we set out to bridge local farms
              with international markets.
            </p>
            <p className="text-base text-gray-600 font-body leading-relaxed mb-8 tracking-wide">
              Today, we partner with over 500 farmers across the region, exporting
              premium organic products to 15+ countries. From our
              nutrient-rich fertilizers to farm-fresh dairy, every product tells the story
              of sustainable agriculture meeting global trade.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '500+', label: 'Partner Farmers' },
                { num: '100%', label: 'Organic Certified' },
                { num: '7', label: 'Product Lines' },
                { num: '15+', label: 'Export Countries' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-forest/20 pl-4"
                >
                  <div className="text-2xl font-heading font-bold text-forest">{item.num}</div>
                  <div className="text-sm font-body text-gray-500 tracking-wide">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
