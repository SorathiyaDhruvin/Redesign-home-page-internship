import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, LayoutDashboard, BarChart3, Receipt, Wallet, Mail, PieChart } from 'lucide-react';

const products = [
  {
    name: 'Task Flow',
    category: 'Productivity',
    description: 'A comprehensive task management and workflow automation platform for modern teams.',
    color: 'from-blue-500 to-cyan-400',
    icon: LayoutDashboard,
  },
  {
    name: 'Cling Sales',
    category: 'CRM',
    description: 'Intelligent sales pipeline management with predictive analytics and reporting.',
    color: 'from-purple-500 to-indigo-500',
    icon: BarChart3,
  },
  {
    name: 'Cling Invoice',
    category: 'Finance',
    description: 'Streamlined billing and invoicing software for small to medium businesses.',
    color: 'from-emerald-500 to-teal-400',
    icon: Receipt,
  },
  {
    name: 'Cling Income',
    category: 'Finance',
    description: 'Revenue tracking and financial forecasting tool with real-time dashboard.',
    color: 'from-amber-500 to-orange-400',
    icon: Wallet,
  },
  {
    name: 'Cling Emails',
    category: 'Marketing',
    description: 'Email marketing automation with beautiful templates and high deliverability.',
    color: 'from-rose-500 to-pink-500',
    icon: Mail,
  },
  {
    name: 'ArvionPulse',
    category: 'Analytics',
    description: 'Advanced business intelligence and data visualization suite for enterprises.',
    color: 'from-red-600 to-rose-500',
    icon: PieChart,
  }
];

const FeaturedWork = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3 block">
              Featured Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight">
              Products built for scale.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center px-6 py-3 rounded-full bg-white text-brand-navy font-medium border border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm">
            View All Work
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Product Visual Mockup */}
              <div className={`h-56 w-full bg-gradient-to-br ${product.color} relative overflow-hidden flex items-center justify-center`}>
                {/* Abstract Glass UI Card */}
                <div className="absolute inset-0 bg-black/5" />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-3/4 h-3/4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl flex flex-col items-center justify-center text-white relative z-10 group-hover:bg-white/30 transition-colors"
                >
                  <product.icon className="w-12 h-12 mb-3 drop-shadow-md" />
                  <span className="font-bold tracking-wide drop-shadow-md">{product.name}</span>
                </motion.div>
                
                {/* Decorative circles */}
                <div className="w-40 h-40 rounded-full bg-white/10 absolute -top-10 -right-10 blur-2xl" />
                <div className="w-32 h-32 rounded-full bg-black/10 absolute -bottom-8 -left-8 blur-xl" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-xs font-bold tracking-wider uppercase text-brand-blue mb-3">
                  {product.category}
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                    Explore Product
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
