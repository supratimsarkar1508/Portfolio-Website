import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../IMG-20250521-WA0012.jpg';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-600 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              About Me
            </h2>

            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              A passionate Full-Stack Developer and CSE student based in Chennai, India 📍
            </h3>

            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              As a junior full-stack developer and CSE student, I have hands-on experience
              with HTML, CSS, JavaScript, React, Tailwind, and Node.js, and I enjoy designing
              responsive websites with a focus on usability and performance.
            </p>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              I enjoy building interactive interfaces with clean and optimized code while
              learning and applying modern development tools and techniques. I work well in
              team environments and like collaborating with others to create effective web
              applications.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 text-2xl mb-1">1+</h4>
                <p className="text-slate-500">
                  Years of Web Development Practice
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-2xl mb-1">5+</h4>
                <p className="text-slate-500">
                  Projects Built (personal + academic)
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
