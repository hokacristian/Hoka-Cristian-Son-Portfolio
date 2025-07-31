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
    details: 'Specializing in Cloud and Software Engineering, Mobile Development, and IoT'
  },
  {
    icon: Award,
    title: 'Bangkit Academy 2024',
    description: 'Distinction Graduate - Mobile Developer Cohort',
    details: 'Intensive program focusing on mobile app development with Kotlin and Android Studio'
  },
  {
    icon: Code,
    title: 'Technical Expertise',
    description: 'Full-stack development with modern technologies',
    details: 'Express.js, PostgreSQL, Next.js, Android development with Kotlin and Flutter'
  },
  {
    icon: Users,
    title: 'Leadership Experience',
    description: 'General Chairperson of Student Council (MPK) 2019-2020',
    details: 'Led student initiatives and managed organizational activities at SMK Telkom Jakarta'
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
              I&apos;m a passionate Telecommunication Engineering student with a strong background in 
              IoT development, mobile applications, and web technologies. I love creating innovative 
              solutions that solve real-world problems.
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
              My journey in technology began during my time at SMK Telkom Jakarta, where I specialized 
              in Access Network Engineering and learned the fundamentals of network systems and fiber 
              optic installation. This foundation sparked my interest in creating connected solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Currently pursuing my Bachelor&apos;s degree in Telecommunication Engineering at Telkom University, 
              I&apos;ve expanded my expertise into cloud computing, software engineering, and IoT systems. 
              My academic journey has been complemented by hands-on experience through various projects 
              and intensive training programs.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The highlight of my academic career was graduating with distinction from Bangkit Academy 2024, 
              where I honed my mobile development skills and collaborated with talented peers on innovative 
              projects. This experience has prepared me to tackle complex challenges in the tech industry 
              and contribute meaningfully to cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}