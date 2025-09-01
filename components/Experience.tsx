"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Cyber Security Intern",
      company: "Cloudio Technologies",
      location: "Dubai, United Arab Emirates",
      duration: "Jul 2023 – Jun 2024",
      achievements: [
        "Developed a modular honeypot system (SSH & HTTP login traps) using Python, Flask, and Paramiko to monitor and log real-time unauthorized access attempts.",
        "Built a custom SIEM solution using MongoDB and Flask to analyze system audit logs, detect anomalies (e.g., suspicious commands, CPU spikes), and generate alerts.",
        "Hands-on experience with industry tools: Wireshark (packet analysis), Burp Suite (web vulnerability scanning), and Nmap (network reconnaissance)."
      ]
    },
    {
      title: "UI/UX Developer Intern",
      company: "CODA Technology Solution PVT LTD",
      location: "Chennai, India",
      duration: "Jul 2022 – Jul 2022",
      achievements: [
        "Developed and optimized prototypes, aligning design specifications with client requirements and increasing project delivery efficiency by 15%.",
        "Applied Power BI for data visualization and used Figma to create application prototypes.",
        "Communicated design strategies effectively with the development team, fostering collaboration and ensuring seamless implementation of design concepts."
      ]
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
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white">
            <span className="text-[#00FF8C]">#</span> Professional Experience
          </h2>
          <div className="w-24 h-1 bg-[#00FF8C] mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my cybersecurity journey across various organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#00FF8C] opacity-30"></div>

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Node */}
                <div className="relative z-10 w-16 h-16 bg-gray-800 dark:bg-gray-700 rounded-lg border border-[#00FF8C]/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-[#00FF8C] rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-[#00FF8C]/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="font-mono text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        <span className="text-[#00FF8C]">$</span> {exp.title}
                      </h3>
                      <p className="text-lg font-medium text-[#00FF8C] italic">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col lg:items-end mt-4 lg:mt-0 space-y-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed">
                          <span className="text-[#00FF8C] font-bold mr-3 mt-0.5">•</span>
                          <span className="text-sm lg:text-base">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
