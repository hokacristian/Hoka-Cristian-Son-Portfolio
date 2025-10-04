'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Users } from 'lucide-react';
import { FadeText } from '../ui/fade-text';
import { SpotlightCard } from '../ui/spotlight-card';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Telecommunication Engineering at Telkom University (GPA: 3.40/4.00)',
    details: 'Specializing in Cloud and Software Engineering, Mobile Development (Android), Internet of Things. Capstone Project: BeWise - ML-Powered Nutrition Analysis Application'
  },
  {
    icon: Award,
    title: 'Bangkit Academy 2024',
    description: 'Distinction Graduate (Top 10%) - Mobile Developer Cohort',
    details: 'Selected into Top 50 teams for Capstone Project. Built "KidLink" - secure chat application for children safety'
  },
  {
    icon: Code,
    title: 'Full-Stack Development Excellence',
    description: 'Code Mercenaries Software House - Lead Full-Stack Developer',
    details: 'Spearheaded development of 30+ commercial projects serving diverse clients with agile team collaboration. Consistently delivered high-quality, scalable solutions achieving 95%+ client satisfaction through superior code quality and on-time delivery'
  },
  {
    icon: Users,
    title: 'Backend Security Specialist',
    description: 'Digistar Class 2024 - Mentee Hacker Backend',
    details: 'Intensive backend security and cybersecurity training. Specialized in database security, authentication systems, and secure API development'
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeText>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
          </FadeText>
          <FadeText delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Accomplished Full-Stack Developer with 4+ years of proven expertise delivering 30+ successful web, mobile,
              and IoT projects for diverse clients. Specialized in architecting secure, scalable systems with a strong focus
              on backend security, database design, and enterprise-grade solutions that drive measurable business impact.
            </p>
          </FadeText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="p-6 h-full">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My Journey
          </h3>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With 4+ years of comprehensive full-stack development experience, I have successfully delivered 30+ web, mobile,
              and IoT projects for diverse clients across multiple industries. My technical journey centers on building secure,
              scalable systems from backend to frontend, with particular expertise in Node.js, PostgreSQL, and modern web frameworks.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              As a Telecommunication Engineering graduate from Telkom University (GPA: 3.40/4.00), I&apos;ve developed deep
              expertise in cloud computing, software architecture, and IoT systems. My academic excellence was recognized through
              distinction graduation from Bangkit Academy 2024, where I ranked in the top 10% and was selected into the top 50
              teams for the capstone project, demonstrating exceptional technical capabilities and innovative problem-solving skills.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My professional development includes specialized training in backend security through Digistar Class 2024, where I
              mastered database security, authentication systems, and secure API development. Collaborating with agile teams,
              I consistently deliver complex projects efficiently while maintaining rigorous code quality standards and achieving
              95%+ client satisfaction rates through on-time delivery and exceptional technical execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}