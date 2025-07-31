'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { FadeText } from '../ui/fade-text';
import { Typewriter } from '../ui/typewriter';
import { GradientBackground } from '../ui/gradient-background';

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/hokacristian',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hokacsa',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:hokacristian@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <GradientBackground variant="blue" className="absolute inset-0" />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <FadeText delay={0.2} className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hoka Cristian Son
            </h1>
          </FadeText>

          <FadeText delay={0.4} className="mb-8">
            <div className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 min-h-[2.5rem]">
              <Typewriter 
                text="Telecommunication Engineering Student & IoT Developer"
                delay={1000}
                speed={80}
              />
            </div>
          </FadeText>

          <FadeText delay={0.8} className="mb-8">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative solutions in cloud computing, software engineering, 
              and IoT systems. Distinction Graduate of Bangkit Academy 2024 with expertise in 
              full-stack development and mobile applications.
            </p>
          </FadeText>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg hover:shadow-xl"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </motion.button>
            
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent hover:bg-white/10 dark:hover:bg-gray-800/30 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-lg font-semibold transition-all"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}