'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Award } from 'lucide-react';
import { FadeText } from '../ui/fade-text';
import { SpotlightCard } from '../ui/spotlight-card';

interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  highlights: string[];
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'BeWise - Food Recommendation App',
    year: '2025',
    description: 'Intelligent food and beverage recommendation mobile application using Flutter framework integrated with machine learning algorithms.',
    technologies: ['Flutter', 'Machine Learning', 'Dart', 'Firebase', 'Barcode Scanner'],
    highlights: [
      'Personalized recommendation system based on user preferences',
      'Barcode scanning functionality for product identification',
      'Subscription-based payment gateway integration',
      'ML models for analyzing nutritional data and user behavior'
    ],
    featured: true
  },
  {
    title: 'Office Inventory Management System',
    year: '2025',
    description: 'Comprehensive web-based inventory management system for office equipment tracking with automatic QR code generation.',
    technologies: ['Express.js', 'PostgreSQL', 'Next.js', 'QR Code', 'TypeScript'],
    highlights: [
      'Automatic QR code generation for asset identification',
      'Real-time inventory tracking and management',
      'Role-based access control system',
      'Comprehensive reporting and analytics'
    ],
    links: {
      demo: '#'
    }
  },
  {
    title: 'WhatsApp Broadcasting Bot',
    year: '2024',
    description: 'Automated WhatsApp bot system for agent communication and mass broadcasting integrated with business workflows.',
    technologies: ['Express.js', 'WhatsApp.js', 'Node.js', 'JavaScript', 'APIs'],
    highlights: [
      'Mass broadcasting capabilities for business communication',
      'Automated message scheduling and delivery',
      'Integration with existing business workflows',
      'Customer engagement automation'
    ],
    featured: true
  },
  {
    title: 'KidLink - Child Communication App',
    year: '2024',
    description: 'Mobile application with AI-powered content filtering for safe child communication developed during Bangkit Academy.',
    technologies: ['Kotlin', 'Android Studio', 'REST APIs', 'AI/ML', 'Material Design'],
    highlights: [
      'AI-powered content filtering for child safety',
      'Real-time messaging with context-aware moderation',
      'Parental control features and monitoring',
      'Secure and encrypted communication'
    ],
    links: {
      demo: '#'
    },
    featured: true
  },
  {
    title: 'PROBOX Smart Storage System',
    year: '2023',
    description: 'IoT-based secure storage solution with RFID access control and web dashboard for monitoring access history.',
    technologies: ['IoT Sensors', 'RFID', 'Web Development', 'Arduino', 'Firebase'],
    highlights: [
      'RFID-based access control system',
      'Real-time monitoring and logging',
      'Web dashboard for system management',
      'Secure item storage with access history'
    ],
    links: {
      website: 'https://probox-web.web.app/'
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeText>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
          </FadeText>
          <FadeText delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work spanning mobile applications, web development, 
              IoT systems, and automation solutions. Each project represents a unique 
              challenge and innovative solution.
            </p>
          </FadeText>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className={`p-8 ${project.featured ? 'border-2 border-blue-200 dark:border-blue-800' : ''}`}>
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                          <Award size={16} />
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={16} className="text-gray-500" />
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.links && (
                      <div className="flex gap-4">
                        {project.links.demo && (
                          <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </motion.a>
                        )}
                        {project.links.website && (
                          <motion.a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            <ExternalLink size={18} />
                            View Project
                          </motion.a>
                        )}
                        {project.links.github && (
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            <Github size={18} />
                            Source Code
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Project Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">Featured Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2024</div>
              <div className="text-gray-600 dark:text-gray-400">Bangkit Graduate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}