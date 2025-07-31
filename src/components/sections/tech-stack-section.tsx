'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Cloud, Cpu, Globe } from 'lucide-react';
import { FadeText } from '../ui/fade-text';
import { SpotlightCard } from '../ui/spotlight-card';

const techCategories = [
  {
    category: 'Frontend Development',
    icon: Globe,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    category: 'Backend Development',
    icon: Code,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    technologies: ['Express.js', 'Node.js', 'REST APIs', 'WhatsApp.js', 'JavaScript']
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    technologies: ['Kotlin', 'Android Studio', 'Flutter', 'Material Design', 'Java']
  },
  {
    category: 'Database & Cloud',
    icon: Database,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    technologies: ['PostgreSQL', 'Firebase', 'Cloud Computing', 'Database Design']
  },
  {
    category: 'IoT & Hardware',
    icon: Cpu,
    color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    technologies: ['RFID Sensors', 'Ultrasonic Sensors', 'IoT Prototyping', 'Arduino', 'ESP32']
  },
  {
    category: 'Tools & Others',
    icon: Cloud,
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
    technologies: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman', 'Firebase Hosting']
  }
];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeText>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Stack
            </h2>
          </FadeText>
          <FadeText delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I use to bring ideas to life. From frontend frameworks 
              to IoT sensors, I work with diverse technologies to create comprehensive solutions.
            </p>
          </FadeText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-6 h-full">
                <div className="text-center mb-6">
                  <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                    <category.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (index * 0.1) + (techIndex * 0.05) 
                      }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center"
                    >
                      <span className="inline-block bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}