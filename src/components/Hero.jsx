import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient">
      <div className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-primary-100 text-primary-700 font-semibold px-4 py-1.5 rounded-full text-sm mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
           Crafting Digital Solutions <br />
            <span className="text-primary-600">with Code and Curiosity.</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I’m a Computer Science Engineering student with a strong foundation in full-stack web development, 
            focused on building functional, user-friendly digital experiences. Currently expanding my skills while working toward
            a specialization in Cyber Security.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all group shadow-xl"
            >
              View My Work
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:border-primary-500 hover:text-primary-600 transition-all shadow-md"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 text-slate-400">
        <span className="text-sm font-medium uppercase tracking-widest">Scroll</span>
        <ArrowDown size={20} />
      </div>
    </header>
  );
};

export default Hero;
