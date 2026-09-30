import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    num: '01',
    title: 'Product Thinking',
    description: 'We do not just write code. We focus on business goals, user experience, and long-term viability to ensure your product succeeds.'
  },
  {
    num: '02',
    title: 'Modern Technology',
    description: 'Leveraging the latest scalable, secure, and performant technologies to build future-proof solutions.'
  },
  {
    num: '03',
    title: 'End-to-End Delivery',
    description: 'From ideation and design to development, testing, and deployment, we handle every step of the lifecycle.'
  },
  {
    num: '04',
    title: 'Long-Term Partnership',
    description: 'We act as an extension of your team, providing ongoing support, maintenance, and continuous improvement.'
  }
];

const WhyCling = () => {
  return (
    <section id="about" className="py-32 bg-brand-navy text-white relative overflow-hidden">
      {/* Premium Background visual elements */}
      <div className="absolute top-0 right-0 w-[80%] h-full bg-gradient-to-bl from-brand-blue/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-red/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgLjVoNDBNLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 max-w-xl"
          >
            <span className="text-brand-red font-bold tracking-widest uppercase text-xs mb-6 block">
              Why Cling Info Tech
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tight">
              From idea to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400">impact.</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 font-medium">
              We combine engineering excellence with design thinking to deliver digital solutions that drive measurable business results. We don't just build software; we build solutions that matter.
            </p>
            
            <ul className="space-y-4">
              {['Award-winning UI/UX', 'Agile Methodologies', 'Dedicated Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              >
                {/* Large background number */}
                <div className="text-8xl font-black text-white/5 absolute -top-4 -right-4 group-hover:scale-110 transition-transform duration-500 pointer-events-none select-none">
                  {feature.num}
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center font-bold text-xl mb-6 border border-brand-blue/30 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    {feature.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyCling;
