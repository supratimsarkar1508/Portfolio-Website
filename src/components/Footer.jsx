import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Section */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold text-primary-600 tracking-tight"
            >
              Supratim<span className="text-slate-900">Sarkar</span>
            </a>
            <p className="mt-2 text-slate-500 text-sm max-w-xs">
              Creating digital experiences that are both functional and secure.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/supratimsarkar1508"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-all"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/supratim-sarkar-390b66395/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://www.instagram.com/supratim_s/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-all"
            >
              <Instagram size={20} />
            </a>

            <a
              href="mailto:supratimsarkar1508@gmail.com"
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary-600 hover:text-white transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {currentYear} Supratim Sarkar. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;