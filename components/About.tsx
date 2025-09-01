"use client";

import { motion } from "framer-motion";
import { User, Shield, Code2, Brain, Target, Award, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function About() {
  const personalInfo = [
    {
      label: "Location",
      value: "Montreal, Canada",
      icon: MapPin
    },
    {
      label: "Email", 
      value: "hariharan02411@gmail.com",
      icon: Mail
    },
    {
      label: "Phone",
      value: "438-922-8037", 
      icon: Phone
    }
  ];

  const expertise = [
    {
      title: "Cybersecurity Specialist",
      description: "Vulnerability assessment, penetration testing, and security research with focus on web application security.",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "Software Developer", 
      description: "Full-stack development with expertise in Python, JavaScript, and modern web technologies.",
      icon: Code2,
      color: "text-blue-500"
    },
    {
      title: "Research Enthusiast",
      description: "AI/ML research in healthcare applications, explainable AI, and medical data analysis.",
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "Problem Solver",
      description: "Strategic thinking and analytical approach to complex technical challenges.",
      icon: Target,
      color: "text-[#00FF8C]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white">
            <span className="text-[#00FF8C]">#</span> About Me
          </h2>
          <div className="w-24 h-1 bg-[#00FF8C] mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about cybersecurity, software development, and innovative technology solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info and Image */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image Placeholder */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64 bg-gradient-to-br from-[#00FF8C]/20 to-[#00FF8C]/5 rounded-lg border border-[#00FF8C]/30 flex items-center justify-center">
                <User className="w-32 h-32 text-[#00FF8C]/50" />
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-mono text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Contact Information
              </h3>
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 bg-[#00FF8C]/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-[#00FF8C]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    <p className="font-mono">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h3 className="font-mono text-2xl font-semibold text-gray-800 dark:text-white">
                Hello! I'm Hariharan Duraisingh
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate cybersecurity specialist and software developer with a strong foundation in 
                  computer science and a deep interest in protecting digital assets and building secure solutions.
                </p>
                
                <p>
                  My journey began with a Bachelor's in Computer Applications from Loyola College, Chennai, where I 
                  developed expertise in both theoretical concepts and practical applications. I've since expanded my 
                  skills through hands-on experience in vulnerability assessment, penetration testing, and secure 
                  software development.
                </p>
                
                <p>
                  What drives me is the intersection of technology and security - finding innovative ways to protect 
                  systems while building robust, user-friendly applications. I believe in continuous learning and 
                  staying ahead of emerging threats and technologies.
                </p>
                
                <p>
                  When I'm not analyzing security vulnerabilities or coding, I enjoy contributing to the cybersecurity 
                  community through research, sharing knowledge, and participating in ethical hacking platforms like 
                  TryHackMe where I rank in the top 3% globally.
                </p>
              </div>
            </div>

            {/* Achievement Highlight */}
            <div className="bg-gradient-to-r from-[#00FF8C]/10 to-transparent p-4 rounded-lg border border-[#00FF8C]/20">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-6 h-6 text-[#00FF8C]" />
                <span className="font-mono font-semibold text-gray-800 dark:text-white">
                  Featured Achievement
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Ranked in the <strong className="text-[#00FF8C]">Top 3% globally</strong> on TryHackMe 
                cybersecurity platform, demonstrating advanced penetration testing and security analysis skills.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Expertise Areas */}
        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            className="font-mono text-2xl font-semibold text-gray-800 dark:text-white text-center mb-12"
            variants={itemVariants}
          >
            Areas of Expertise
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((area, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#00FF8C]/50 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <area.icon className={`w-6 h-6 ${area.color}`} />
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-[#00FF8C] transition-colors duration-300">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always interested in new challenges and opportunities to collaborate on innovative projects. 
            Let's connect and explore how we can work together!
          </p>
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FF8C] text-black rounded-lg font-mono font-medium hover:bg-[#00FF8C]/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
