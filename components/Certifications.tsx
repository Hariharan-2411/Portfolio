"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ShieldCheck, 
  Shield, 
  GraduationCap, 
  Award, 
  Globe, 
  BookOpen,
  Trophy,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const certificationsData = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      icon: "ShieldCheck",
      status: "completed"
    },
    {
      name: "CompTIA CySA+",
      issuer: "CompTIA",
      icon: "Shield",
      status: "in-progress"
    },
    {
      name: "SAL1",
      issuer: "Security Assessment Labs",
      icon: "Target",
      status: "in-progress"
    },
    {
      name: "ISC2 Candidate",
      issuer: "(ISC)² - International Information System Security Certification Consortium",
      icon: "Award",
      status: "completed"
    },
    {
      name: "Python Basics",
      issuer: "University of Michigan",
      icon: "GraduationCap",
      status: "completed"
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      icon: "Shield",
      status: "completed"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "CISCO",
      icon: "BookOpen",
      status: "completed"
    },
    {
      name: "The Complete Nmap Ethical Hacking Course",
      issuer: "Network Security Training",
      icon: "Globe",
      status: "completed"
    },
    {
      name: "Learn Ethical Hacking From Scratch 2024",
      issuer: "Ethical Hacking Academy",
      icon: "ShieldCheck",
      status: "completed"
    },
    {
      name: "Top 3% Globally on TryHackMe",
      issuer: "TryHackMe Cybersecurity Platform",
      icon: "Trophy",
      status: "achievement"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-[#00FF8C]" };
    
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck {...iconProps} />;
      case "Shield":
        return <Shield {...iconProps} />;
      case "GraduationCap":
        return <GraduationCap {...iconProps} />;
      case "Award":
        return <Award {...iconProps} />;
      case "Globe":
        return <Globe {...iconProps} />;
      case "BookOpen":
        return <BookOpen {...iconProps} />;
      case "Trophy":
        return <Trophy {...iconProps} />;
      case "Target":
        return <Target {...iconProps} />;
      default:
        return <Award {...iconProps} />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-progress":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
            In Progress
          </span>
        );
      case "achievement":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30">
            Achievement
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#00FF8C]/10 text-[#00FF8C] border border-[#00FF8C]/30">
            Completed
          </span>
        );
    }
  };

  // Show first 6 certificates initially (2 rows of 3)
  const displayedCertifications = showAll ? certificationsData : certificationsData.slice(0, 6);
  const remainingCount = certificationsData.length - 6;

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white">
            <span className="text-[#00FF8C]">#</span> Certifications & Accomplishments
          </h2>
          <div className="w-24 h-1 bg-[#00FF8C] mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional qualifications and specialized training in cybersecurity
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          key={showAll ? 'all-certifications' : 'limited-certifications'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {displayedCertifications.map((certification, index) => (
            <motion.div 
              key={`${showAll ? 'all' : 'limited'}-${index}`}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:border-[#00FF8C] hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#00FF8C]/10 rounded-lg flex items-center justify-center group-hover:bg-[#00FF8C]/20 transition-colors duration-300">
                  {getIcon(certification.icon)}
                </div>
                {getStatusBadge(certification.status)}
              </div>
              
              <h3 className="font-mono text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-[#00FF8C] transition-colors duration-300">
                {certification.name}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {certification.issuer}
              </p>
              
              {certification.status === "achievement" && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Elite Performance Recognition
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {certificationsData.length > 6 && (
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg border border-[#00FF8C]/30 hover:border-[#00FF8C] hover:bg-[#00FF8C]/10 transition-all duration-300 font-mono"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Load More ({remainingCount} more)
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* Summary Stats */}

      </div>
    </section>
  );
}
