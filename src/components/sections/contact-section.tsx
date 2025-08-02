'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import { FadeText } from '../ui/fade-text';
import { SpotlightCard } from '../ui/spotlight-card';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hokacristian@gmail.com',
    href: 'mailto:hokacristian@gmail.com',
    color: 'text-red-500'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 851-7305-2969',
    href: 'tel:+6285173052969',
    color: 'text-green-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Tangerang, Indonesia',
    href: '#',
    color: 'text-blue-500'
  }
];

const socialLinks = [
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
  }
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const turnstileRef = useRef<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setStatus({
        type: 'error',
        message: 'Please complete the CAPTCHA verification.'
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I&apos;ll get back to you within 24-48 hours.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset Turnstile
        setTurnstileToken('');
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };

  const resetStatus = () => {
    setStatus({ type: 'idle', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FadeText>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
          </FadeText>
          <FadeText delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss enterprise solutions, software development projects, or partnership opportunities 
              with Code Mercenaries Software House. Let&apos;s build something amazing together!
            </p>
          </FadeText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg ${info.color}`}>
                        <info.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.label}
                        </h4>
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${link.color} transition-colors shadow-lg hover:shadow-xl`}
                    aria-label={link.name}
                  >
                    <link.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              
              {/* Status Messages */}
              {status.type !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                    status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                      : status.type === 'error'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                  }`}
                >
                  {status.type === 'loading' && <Loader2 size={20} className="animate-spin" />}
                  {status.type === 'success' && <CheckCircle size={20} />}
                  {status.type === 'error' && <AlertCircle size={20} />}
                  <span className="text-sm">{status.message}</span>
                  {status.type !== 'loading' && (
                    <button
                      onClick={resetStatus}
                      className="ml-auto text-current hover:opacity-70 transition-opacity"
                    >
                      ×
                    </button>
                  )}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                {/* Cloudflare Turnstile CAPTCHA */}
                <div className="flex justify-center">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAABn0POjthdf2Tnku'}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken('')}
                    onExpire={() => setTurnstileToken('')}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status.type === 'loading' || !turnstileToken}
                  whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {status.type === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </SpotlightCard>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Or you can directly email me at{' '}
                <a
                  href="mailto:hokacristian@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  hokacristian@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Code Mercenaries Software House is ready to deliver your next enterprise solution. 
              From inventory management systems to AI-powered applications, we turn complex challenges 
              into innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:hokacristian@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                Email Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Hoka_Cristian_Son_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Send size={20} />
                Download CV
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}