'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Phone } from 'lucide-react';
import { FadeText } from './fade-text';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:hokacristian@gmail.com',
    icon: Mail,
    color: 'hover:text-red-500'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hokacsa',
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/hokacristian',
    icon: Github,
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
];

export function Footer() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Hoka Cristian Son-resume.pdf';
    link.download = 'Hoka_Cristian_Son_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column - Name & Title */}
          <div className="text-center md:text-left">
            <FadeText>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Hoka Cristian Son
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Telecommunication Engineering Student
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                IoT & Mobile Development Specialist
              </p>
            </FadeText>
          </div>

          {/* Center Column - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-600 dark:text-gray-400 ${link.color} transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800`}
                aria-label={link.name}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Right Column - Download Resume */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © 2025 Hoka Cristian Son.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}