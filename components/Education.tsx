"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Users } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "Master's in Information Systems Security",
      institution: "Concordia University",
      location: "Montreal, Quebec",
      duration: "Sep 2024 – May 2026",
      status: "In Progress"
    },
    {
      degree: "Bachelor's in Information Technology",
      institution: "Coimbatore Institute of Technology",
      location: "Coimbatore, India",
      duration: "Nov 2020 – May 2024",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white">
            <span className="text-[#00FF8C]">#</span> Education & Learning
          </h2>
          <div className="w-24 h-1 bg-[#00FF8C] mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey in computer science and cybersecurity
          </p>
        </motion.div>

        {/* Academic Qualifications */}
        <motion.div 
          className="space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-[#00FF8C] to-transparent opacity-30"></div>
              )}
              
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-[#00FF8C]/50 transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#00FF8C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00FF8C]/20 transition-colors duration-300">
                      <GraduationCap className="w-6 h-6 text-[#00FF8C]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="font-mono text-xl font-semibold text-gray-800 dark:text-white group-hover:text-[#00FF8C] transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-medium text-[#00FF8C] mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end mt-2 lg:mt-0">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          {edu.location}
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800'
                          : 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-r from-[#00FF8C]/5 to-transparent p-8 rounded-lg border border-[#00FF8C]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Users className="w-12 h-12 text-[#00FF8C] mx-auto mb-4" />
          <h3 className="font-mono text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Continuous Learning Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building a strong academic foundation in Information Systems Security and Information Technology, 
            combined with practical experience and industry certifications to excel in cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
