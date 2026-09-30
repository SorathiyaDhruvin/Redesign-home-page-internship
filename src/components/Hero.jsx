import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Smartphone, Cpu, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-brand-light">
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-200/40 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-red-200/30 blur-[100px]" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 mask-image:linear-gradient(to_bottom,white,transparent)" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md text-brand-navy text-xs font-bold tracking-widest uppercase mb-8 border border-white shadow-sm">
                <Sparkles className="w-3 h-3 text-brand-blue" />
                Cling Info Tech · Digital Solutions
              </span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-brand-navy leading-[1.1] mb-8 tracking-tight drop-shadow-sm">
              We turn ambitious ideas into <span className="text-gradient">powerful digital products.</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
              From web and mobile development to AI-powered solutions, we help businesses build, launch and scale digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-brand-red text-white font-bold hover:bg-red-600 transition-all hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-brand-navy font-bold border border-gray-200 hover:border-brand-blue hover:text-brand-blue transition-all shadow-sm hover:shadow-lg hover:bg-white"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          {/* Premium Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main glowing orb */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-red/20 rounded-[3rem] border border-white/50 shadow-2xl backdrop-blur-xl flex items-center justify-center rotate-3 transform transition-transform hover:rotate-6 duration-700">
                <div className="w-[85%] h-[85%] bg-white/40 rounded-[2rem] shadow-inner flex flex-col items-center justify-center glass-effect relative overflow-hidden">
                  
                  {/* Decorative background grid inside glass */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMjAiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMSIgZmlsbD0icmdiYSgwLDAsMCwwLjAzKSIvPjwvc3ZnPg==')] opacity-50" />
                  
                  {/* Central icon */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="w-28 h-28 bg-gradient-to-br from-brand-navy to-blue-900 rounded-3xl flex items-center justify-center shadow-2xl relative z-10 border border-white/20"
                  >
                    <Code2 className="w-14 h-14 text-white" />
                  </motion.div>

                  <div className="mt-8 text-center relative z-10">
                    <div className="text-xl font-bold text-brand-navy">Development Suite</div>
                    <div className="text-sm font-medium text-brand-blue mt-1">v2.0 Active</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute top-[10%] -left-[5%] glass-effect p-5 rounded-3xl shadow-2xl flex items-center gap-4 bg-white/90 border border-white z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-brand-blue flex items-center justify-center text-white shadow-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-navy">Mobile First</div>
                  <div className="flex gap-1 mt-1.5">
                    <div className="h-1.5 w-8 bg-brand-blue rounded-full"></div>
                    <div className="h-1.5 w-4 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute bottom-[10%] -right-[5%] glass-effect p-5 rounded-3xl shadow-2xl flex items-center gap-4 bg-white/90 border border-white z-20"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-red to-rose-500 flex items-center justify-center text-white shadow-lg">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-navy">AI Integration</div>
                  <div className="text-xs font-semibold text-brand-red mt-0.5">99.9% Accuracy</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
