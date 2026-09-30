import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code, Database, TrendingUp, Cpu, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom, responsive, and high-performance web applications built with modern frameworks.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that engage users on any device.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to solve your unique business challenges.',
  },
  {
    icon: Database,
    title: 'ERP & Business Solutions',
    description: 'Integrated enterprise resource planning to streamline operations and workflows.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your audience and increase conversions.',
  },
  {
    icon: Cpu,
    title: 'AI / ML Solutions',
    description: 'Intelligent automation and predictive modeling to give your business an edge.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-brand-light relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight"
          >
            Technology that moves your business forward.
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/[0.03] to-brand-red/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-50/50 text-brand-blue flex items-center justify-center mb-8 group-hover:-translate-y-2 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <a href="#" className="inline-flex items-center text-sm font-bold tracking-wide text-brand-navy group-hover:text-brand-red transition-colors uppercase">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
