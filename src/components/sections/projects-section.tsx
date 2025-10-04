'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award, Eye } from 'lucide-react';
import { FadeText } from '../ui/fade-text';
import { SpotlightCard } from '../ui/spotlight-card';

interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
  links?: {
    demo?: string;
    github?: string;
    website?: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 'inventory-system',
    title: 'Office Inventory Management System',
    year: '2025',
    category: 'Enterprise Software',
    description: 'Complete inventory management system with QR code generation, implementing multi-stage approval workflow reducing manual processes by 70%.',
    technologies: ['Node.js', 'PostgreSQL', 'Prisma ORM', 'QR Code', 'JWT'],
    highlights: [
      'Developed complete inventory management system with QR code generation',
      'Implemented multi-stage approval workflow reducing manual processes by 70%',
      'Built role-based authentication system with JWT for 100+ users',
      'Real-time inventory tracking and comprehensive reporting'
    ],
    featured: true
  },
  {
    id: 'smartbin-system',
    title: 'SmartBin Monitoring System',
    year: '2025',
    category: 'IoT & Mobile',
    description: 'IoT-enabled waste monitoring Android app with real-time tracking and Google Maps integration across 20+ locations.',
    technologies: ['Android (Kotlin)', 'Firebase', 'Google Maps API', 'IoT Sensors'],
    highlights: [
      'Created IoT-enabled waste monitoring Android app with real-time tracking',
      'Integrated Google Maps for geographical bin monitoring across 20+ locations',
      'Developed 3-category waste classification system with 95% accuracy',
      'Real-time notifications and status updates'
    ],
    featured: true
  },
  {
    id: 'lms-system',
    title: 'Learning Management System',
    year: '2025',
    category: 'Education Platform',
    description: 'Comprehensive LMS supporting 3 user roles with automated assignment workflow handling 500+ submissions monthly.',
    technologies: ['Node.js', 'PostgreSQL', 'Supabase', 'Express.js'],
    highlights: [
      'Built comprehensive LMS supporting 3 user roles (Admin, Teacher, Student)',
      'Implemented assignment workflow handling 500+ submissions monthly',
      'Created automated notification system reducing late submissions by 60%',
      'Role-based access control and progress tracking'
    ],
    featured: true
  },
  {
    id: 'profile-matching',
    title: 'Profile Matching (Decision Support System)',
    year: '2025',
    category: 'HR Technology',
    description: 'Intelligent candidate evaluation system using weighted criteria with automated ranking, reducing HR screening time by 40%.',
    technologies: ['Node.js', 'PostgreSQL', 'Express.js', 'Algorithm Design'],
    highlights: [
      'Developed intelligent candidate evaluation system using weighted criteria',
      'Built dynamic calculation engine for automated ranking',
      'Reduced HR screening time by 40% through automated scoring',
      'Multi-criteria decision analysis implementation'
    ],
  },
  {
    id: 'ministry-management',
    title: 'Ministry Management Pro',
    year: '2025',
    category: 'AI & Automation',
    description: 'Church activity management system with AI-powered validation and WhatsApp notifications for real-time updates.',
    technologies: ['Node.js', 'PostgreSQL', 'OpenAI GPT-4', 'WhatsApp API'],
    highlights: [
      'Created church activity management system with AI-powered validation',
      'Integrated WhatsApp notifications for real-time updates',
      'Implemented multi-stage approval workflow for 50+ ministry forms monthly',
      'AI-assisted form validation and processing'
    ],
  },
  {
    id: 'bewise-app',
    title: 'BeWise - ML-Powered Nutrition Analysis',
    year: '2025',
    category: 'Mobile & AI',
    description: 'Capstone project: Android application with real-time barcode scanning and ML-powered product recommendations.',
    technologies: ['Android', 'Machine Learning', 'Barcode Scanner', 'TensorFlow'],
    highlights: [
      'Created Android application with real-time barcode scanning',
      'Implemented ML-powered product recommendations',
      'Nutrition analysis and dietary suggestions',
      'University capstone project achievement'
    ],
  },
  {
    id: 'kidlink-app',
    title: 'KidLink - Secure Chat Application',
    year: '2024',
    category: 'Mobile & Security',
    description: 'Bangkit Academy capstone project: secure chat application for children safety with AI-powered content filtering.',
    technologies: ['Kotlin', 'Android Studio', 'AI/ML', 'Security'],
    highlights: [
      'Built secure chat application for children safety',
      'AI-powered content filtering and moderation',
      'Selected into Top 50 teams for Capstone Project',
      'Bangkit Academy 2024 distinction project'
    ],
    featured: true
  },
  {
    id: 'probox-iot',
    title: 'PROBOX IoT RFID Access Control',
    year: '2023-2024',
    category: 'IoT & Hardware',
    description: 'IoT-based secure storage solution with RFID access control developed during research assistant role.',
    technologies: ['IoT Sensors', 'RFID', 'Arduino', 'Firebase', 'Web Development'],
    highlights: [
      'RFID-based access control system for secure storage',
      'Real-time monitoring and access logging',
      'Web dashboard for system management',
      'Academic research project collaboration'
    ],
    links: {
      website: 'https://probox-web.web.app/'
    }
  }
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter(project => project.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  const handleCardClick = () => {
    window.open('https://medium.com/@hokacristian', '_blank');
  };

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
              A comprehensive showcase of 10+ successful projects delivered through Code Mercenaries Software House, 
              ranging from enterprise inventory management systems to IoT monitoring platforms. Click on any project 
              to read detailed case studies on my Medium blog.
            </p>
          </FadeText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={handleCardClick}
            >
              <SpotlightCard className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-black/70 dark:bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                    {project.featured && (
                      <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Award size={12} />
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="line-clamp-1">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Project Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      <Eye size={16} />
                      <span>Read Case Study</span>
                    </div>
                    {project.links?.website && (
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            {showAll ? 'Show Less' : `See All Projects (${projects.length})`}
          </motion.button>
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
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">40+</div>
              <div className="text-gray-600 dark:text-gray-400">Commercial Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">70%</div>
              <div className="text-gray-600 dark:text-gray-400">Process Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">Top 10%</div>
              <div className="text-gray-600 dark:text-gray-400">Bangkit Graduate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}