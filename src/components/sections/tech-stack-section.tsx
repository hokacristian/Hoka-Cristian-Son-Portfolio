'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Cloud, Cpu, Globe, Star } from 'lucide-react';
import { FadeText } from '../ui/fade-text';
import { SpotlightCard } from '../ui/spotlight-card';

interface TechCategory {
  id: string;
  category: string;
  icon: React.ElementType;
  color: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  technologies: Array<{
    name: string;
    proficiency: number;
    experience: string;
  }>;
  featured?: boolean;
}

const techCategories: TechCategory[] = [
  {
    id: 'backend-dev',
    category: 'Backend Development',
    icon: Code,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    level: 'Expert',
    featured: true,
    technologies: [
      { name: 'Node.js', proficiency: 95, experience: '2+ years' },
      { name: 'Express.js', proficiency: 90, experience: '2+ years' },
      { name: 'PostgreSQL', proficiency: 88, experience: '2+ years' },
      { name: 'Prisma ORM', proficiency: 85, experience: '1+ year' },
      { name: 'REST APIs', proficiency: 92, experience: '2+ years' },
      { name: 'JWT Authentication', proficiency: 87, experience: '2+ years' }
    ]
  },
  {
    id: 'frontend-dev',
    category: 'Frontend Development',
    icon: Globe,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    level: 'Advanced',
    featured: true,
    technologies: [
      { name: 'Next.js', proficiency: 85, experience: '1+ year' },
      { name: 'React', proficiency: 82, experience: '1+ year' },
      { name: 'TypeScript', proficiency: 80, experience: '1+ year' },
      { name: 'Tailwind CSS', proficiency: 88, experience: '1+ year' },
      { name: 'HTML5', proficiency: 90, experience: '3+ years' },
      { name: 'CSS3', proficiency: 85, experience: '3+ years' }
    ]
  },
  {
    id: 'mobile-dev',
    category: 'Mobile Development',
    icon: Smartphone,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    level: 'Expert',
    featured: true,
    technologies: [
      { name: 'Android (Kotlin)', proficiency: 92, experience: '2+ years' },
      { name: 'Flutter', proficiency: 85, experience: '1+ year' },
      { name: 'Android Studio', proficiency: 90, experience: '2+ years' },
      { name: 'Material Design', proficiency: 88, experience: '2+ years' },
      { name: 'Mobile Security', proficiency: 85, experience: '1+ year' }
    ]
  },
  {
    id: 'database-cloud',
    category: 'Database & Cloud',
    icon: Database,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    level: 'Advanced',
    technologies: [
      { name: 'PostgreSQL', proficiency: 88, experience: '2+ years' },
      { name: 'Supabase', proficiency: 82, experience: '1+ year' },
      { name: 'Firebase', proficiency: 85, experience: '2+ years' },
      { name: 'Database Security', proficiency: 87, experience: '1+ year' },
      { name: 'Cloud Computing', proficiency: 80, experience: '1+ year' }
    ]
  },
  {
    id: 'ai-security',
    category: 'AI & Security',
    icon: Cpu,
    color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    level: 'Advanced',
    featured: true,
    technologies: [
      { name: 'OpenAI GPT-4', proficiency: 83, experience: '1+ year' },
      { name: 'Machine Learning', proficiency: 78, experience: '1+ year' },
      { name: 'Backend Security', proficiency: 90, experience: '1+ year' },
      { name: 'Cybersecurity', proficiency: 85, experience: '1+ year' },
      { name: 'Authentication Systems', proficiency: 88, experience: '2+ years' }
    ]
  },
  {
    id: 'tools-integration',
    category: 'Tools & Integration',
    icon: Cloud,
    color: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
    level: 'Intermediate',
    technologies: [
      { name: 'WhatsApp API', proficiency: 85, experience: '1+ year' },
      { name: 'Google Maps API', proficiency: 82, experience: '1+ year' },
      { name: 'Git', proficiency: 90, experience: '3+ years' },
      { name: 'QR Code Generation', proficiency: 88, experience: '1+ year' },
      { name: 'IoT Sensors', proficiency: 75, experience: '2+ years' },
      { name: 'RFID', proficiency: 80, experience: '1+ year' }
    ]
  }
];

export function TechStackSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredCategories = techCategories.filter(category => category.featured);
  const displayedCategories = showAll ? techCategories : featuredCategories;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'Advanced':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'Intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
    }
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return 'bg-green-500';
    if (proficiency >= 80) return 'bg-blue-500';
    if (proficiency >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeText>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Stack & Expertise
            </h2>
          </FadeText>
          <FadeText delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade technologies I master to deliver robust, scalable solutions. 
              Specialized in backend security, full-stack development, and AI integration 
              for commercial applications. Click on any category to explore detailed proficiencies.
            </p>
          </FadeText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
              <SpotlightCard className="h-full hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex p-3 rounded-lg ${category.color}`}>
                      <category.icon size={32} />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {category.featured && (
                        <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star size={12} />
                          Featured
                        </div>
                      )}
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(category.level)}`}>
                        {category.level}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.category}
                  </h3>

                  {/* Technology Preview */}
                  <div className="space-y-3 mb-4">
                    {category.technologies.slice(0, 3).map((tech, techIndex) => (
                      <div key={tech.name} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.proficiency}%` }}
                              transition={{ duration: 1, delay: index * 0.1 + techIndex * 0.1 }}
                              viewport={{ once: true }}
                              className={`h-full ${getProficiencyColor(tech.proficiency)} rounded-full`}
                            />
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 w-8">
                            {tech.proficiency}%
                          </span>
                        </div>
                      </div>
                    ))}
                    {category.technologies.length > 3 && (
                      <div className="text-center pt-2">
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          +{category.technologies.length - 3} more technologies
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expanded View */}
                  {selectedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4"
                    >
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        All Technologies:
                      </h4>
                      <div className="space-y-2">
                        {category.technologies.slice(3).map((tech) => (
                          <div key={tech.name} className="flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {tech.name}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                {tech.experience}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${getProficiencyColor(tech.proficiency)} rounded-full`}
                                  style={{ width: `${tech.proficiency}%` }}
                                />
                              </div>
                              <span className="text-xs text-gray-500 dark:text-gray-400 w-8">
                                {tech.proficiency}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Click indicator */}
                  <div className="text-center mt-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {selectedCategory === category.id ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mb-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            {showAll ? 'Show Featured Only' : `See All Categories (${techCategories.length})`}
          </motion.button>
        </div>

        {/* Professional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-400">Professional Certifications</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Android Expert, Bangkit Graduate, CCNA
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Commercial Experience</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Full-stack development & security
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-400">Enterprise Projects</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                Delivered with 95% client satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}