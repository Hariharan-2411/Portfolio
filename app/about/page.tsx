"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket, Users, Brain, Coffee, Film, Smartphone, Award, BookOpen, Wrench, ExternalLink, Github, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  console.log('About component rendered');

  const experiences = [
    {
      icon: Briefcase,
      title: "Software Developer", 
      subtitle: "Tech Experience",
      description: "Experienced in developing modern web applications using React, Next.js, and various other technologies. Passionate about creating user-friendly and efficient solutions."
    },
    {
      icon: Award,
      title: "Technical Skills", 
      subtitle: "Full Stack Development",
      description: "Proficient in frontend and backend development with expertise in JavaScript, TypeScript, Python, and modern frameworks."
    }
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "Computer Science Engineering",
      subtitle: "Bachelor's Degree", 
      description: "Strong foundation in computer science principles, algorithms, data structures, and software engineering practices.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      subtitle: "Professional Development", 
      description: "Constantly updating skills with latest technologies and industry best practices through various courses and certifications.",
    }
  ];

  const interests = [
    { icon: Brain, title: "AI & Technology", description: "Exploring artificial intelligence and machine learning applications" },
    { icon: Code, title: "Software Development", description: "Building innovative solutions and applications" },
    { icon: Rocket, title: "Innovation", description: "Creating cutting-edge technical solutions" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Get To Know More</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-gray-700 dark:text-white">
            About Me
          </h2>
          
          {/* Professional Introduction */}
          <div className="max-w-5xl mx-auto mb-12">
            <Card className="glass-effect border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Cyber Security analyst & Technology Enthusiast
                  </h3>
                  
                  <div className="grid md:grid-cols-1 gap-6 text-left">
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        I'm Hariharan Duraisingh, a passionate software developer with a strong background in 
                        <span className="font-medium text-blue-600 dark:text-blue-400"> Computer Science Engineering</span>. 
                        I have extensive experience in developing modern web applications and creating innovative technical solutions.
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        My professional journey focuses on full-stack development, utilizing technologies like React, Next.js, TypeScript, and Python. 
                        I'm passionate about creating user-friendly applications and staying up-to-date with the latest industry trends and best practices.
                        I enjoy tackling complex problems and turning ideas into functional, scalable solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          
        </motion.div>

        {/* Main Content Grid - Restructured Layout */}
        <div className="space-y-12 mb-12">
          {/* First Row: Educational Background (2 columns) */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Educational Background</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="transform transition-all duration-300"
                >
                  <Card className="glass-effect border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                          <edu.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {edu.title}
                            </h4>
                          </div>
                          <h5 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                            {edu.subtitle}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
