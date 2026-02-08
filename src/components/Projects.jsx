import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects.js';

const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Recent Projects</h3>
            <p className="text-slate-600 text-lg">Each project is a unique piece of development built with precision and passion.</p>
          </div>
          <a href="#" className="hidden md:block text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            View All Projects &rarr;
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all h-fit"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.githubUrl} className="bg-white p-3 rounded-full text-slate-900 hover:bg-primary-600 hover:text-white transition-all shadow-xl hover:-translate-y-1">
                    <Github size={20} />
                  </a>
                  <a href={project.liveUrl} className="bg-white p-3 rounded-full text-slate-900 hover:bg-primary-600 hover:text-white transition-all shadow-xl hover:-translate-y-1">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">{project.title}</h4>
                <p className="text-slate-600 mb-0 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-primary-600 font-semibold">View All Projects &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
