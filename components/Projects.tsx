"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Shield, 
  Code, 
  Database, 
  ExternalLink, 
  Github, 
  Calendar,
  ChevronDown,
  ChevronUp,
  Terminal,
  Bug,
  Lock,
  Brain,
  Activity
} from 'lucide-react';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projectsData = [
    {
      title: "Vulnerability Assessment on Libreplan",
      description: "Comprehensive security assessment of LibrePlan v1.6.0, identifying and fixing critical vulnerabilities including XSS, weak session controls, and authentication issues.",
      technologies: ["Burp Suite", "OWASP ZAP", "SonarQube", "Java", "HTML Escaping", "BCrypt"],
      timeline: "Jan 2025 – Apr 2025",
      category: "Security Assessment",
      icon: "Shield",
      achievements: [
        "Discovered missing CSP headers and outdated jQuery vulnerabilities",
        "Demonstrated stored XSS and session-hijacking via PoC exploits",
        "Implemented HTML escaping and reflection-based input sanitizer",
        "Contributed 4 merged pull requests to LibrePlan repository"
      ],
      status: "completed",
      githubUrl: "https://github.com/Hariharan-2411/Vulnerability-Assessment-on-Libreplan"
    },
    {
      title: "Honeypot System",
      description: "Modular honeypot system designed to capture and analyze attack patterns from SSH and HTTP protocols in real-time.",
      technologies: ["Python", "Flask", "Paramiko", "SSH", "HTTP", "Log Analysis"],
      timeline: "Mar 2024 – Jun 2024",
      category: "Security Research",
      icon: "Terminal",
      achievements: [
        "Built custom SSH shell emulator with real-time attack logging",
        "Created WordPress-like HTTP login trap for credential harvesting",
        "Implemented rotating log files for efficient data management",
        "Captured detailed authentication attempts and command usage patterns"
      ],
      status: "completed",
      githubUrl: "https://github.com/Hariharan-2411/Honeypot"
    },
    {
      title: "Lung Cancer Detection via DNA Methylation",
      description: "Machine learning pipeline using ensemble methods to classify and predict lung cancer from gene expression data with interpretable AI techniques.",
      technologies: ["GCForest", "RIPPER", "Python", "Scikit-learn", "Jupyter", "Bioinformatics"],
      timeline: "Aug 2022 – Jun 2023",
      category: "Machine Learning",
      icon: "Brain",
      achievements: [
        "Built ML pipeline using GEO datasets for cancer classification",
        "Implemented GCForest for high-performance ensemble learning",
        "Developed RIPPER-based rule extraction for interpretable results",
        "Designed complete Jupyter workflows for data preprocessing and analysis"
      ],
      status: "completed",
      githubUrl: "https://github.com/Hariharan-2411/LUNG-CANCER-DETECTION-USING-DNA-METHYLATION-SAMPLES-WITH-ENSEMBLE-APPROACH"
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-green-500" };
    
    switch (iconName) {
      case "Shield":
        return <Shield {...iconProps} />;
      case "Terminal":
        return <Terminal {...iconProps} />;
      case "Brain":
        return <Brain {...iconProps} />;
      case "Bug":
        return <Bug {...iconProps} />;
      case "Lock":
        return <Lock {...iconProps} />;
      case "Activity":
        return <Activity {...iconProps} />;
      default:
        return <Code {...iconProps} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Security Assessment":
        return "bg-red-500/10 text-red-400 border-red-500/30";
      case "Security Research":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "Machine Learning":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      default:
        return "bg-green-500/10 text-green-500 border-green-500/30";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/30">
            Completed
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
            In Progress
          </span>
        );
      default:
        return null;
    }
  };

  // Show first 2 projects initially
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 2);
  const remainingCount = projectsData.length - 2;

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-700 dark:text-white">
            <span className="text-green-500">#</span> Projects
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions and research projects in cybersecurity and machine learning
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          key={showAll ? 'all-projects' : 'limited-projects'}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          {displayedProjects.map((project, index) => (
            <motion.div 
              key={`${showAll ? 'all' : 'limited'}-${index}`}
              className="bg-card dark:bg-gray-800 rounded-lg shadow-lg border border-border hover:border-green-500 hover:shadow-xl transition-all duration-300 group overflow-hidden hover-lift"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-border bg-muted dark:bg-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                      {getIcon(project.icon)}
                    </div>
                    <div>
                      <h3 className="font-mono text-xl font-bold text-foreground mb-2 group-hover:text-green-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono">{project.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(project.status)}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-lg border border-green-500/30 hover:bg-green-500 hover:text-white transition-all duration-300 font-mono text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-interactive="true"
                    >
                      <Github className="w-4 h-4" />
                      View
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-mono text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-green-500" />
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-muted dark:bg-gray-600 text-foreground rounded-md text-sm font-mono border border-border hover:border-green-500 transition-all duration-200 cursor-default"
                        data-interactive="true"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-mono text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-green-500 font-mono">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {remainingCount > 0 && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 bg-card dark:bg-gray-700 text-foreground rounded-lg border border-border hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 font-mono hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-interactive="true"
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

        {/* Projects Summary Stats */}
      </div>
    </section>
  );
}
