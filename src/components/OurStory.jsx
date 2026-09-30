import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight"
          >
            Our Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We are a company with multifarious IT services like ERPS, Websites, App Development, Support, Innovations, Projects, Ideas. Innovations At Its best, is what we believe in. We understand not only customers well, but also the industry at large. We majorly focus to enhance skills and growth of individual. Our diverse team of professionals shares a passion for online education. We provide consistent and captivating learning experience across desktops, tablets and smartphone.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-blue-50/50 border border-blue-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-brand-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              At Cling, our goal is to deliver premier web design, development, and marketing solutions to our clients, fostering their profitable online growth while expanding our roster of satisfied clients. We are dedicated to enhancing various facets of our business, such as the quality of our work, customer service excellence, technology integration, dynamic innovation, and steadfast commitment, among other key aspects.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-red-50/50 border border-red-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-brand-red text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-500/30">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We recognize the significance of staying at the forefront in today's swiftly changing digital environment. That's why we consistently allocate resources to enhance our personnel, refine our processes, and embrace cutting-edge technologies. Our commitment is to deliver top-notch services to our clients. We take pride in our agility to respond to shifting market trends and evolving customer needs, establishing ourselves as a trustworthy ally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
