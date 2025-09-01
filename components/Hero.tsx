"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDownCircle, ExternalLink, Github, Mail, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import useTypewriter from "@/hooks/useTypewriter";

const Hero = () => {
  const [showCursor, setShowCursor] = useState(true);
  
  const name = useTypewriter("HARIHARAN DURAISINGH", 100);
  const title = useTypewriter("Cyber Security analyst & Technology Enthusiast", 50, 1200);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0B] opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/90 to-[#0A0A0B]"></div>
      </div>

      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 md:w-64 sm:h-48 md:h-64 rounded-full bg-green-500/20 blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-60 md:w-80 sm:h-60 md:h-80 rounded-full bg-blue-500/20 blur-3xl z-0"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto text-center z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal Content */}
          <div className="order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-8 mx-auto p-2 border border-[#00FF8C] rounded-lg bg-[#1A1A1A] bg-opacity-70"
            >
              <p className="font-mono text-sm text-[#00FF8C]">// Cyber Security analyst</p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono text-white"
            >
              {name}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto mb-8"
            >
              <p className="text-lg md:text-xl font-light text-gray-300">
                <span className="terminal-text">{title}</span>
              </p>
            </motion.div>
            
            {/* Terminal Window */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="terminal-window bg-[#1A1A1A] bg-opacity-80 p-4 md:p-6 rounded-lg max-w-3xl mx-auto mb-8 text-left border border-[#00FF8C]/30 shadow-[0_0_15px_rgba(0,255,140,0.2)]"
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF3E3E] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
                <span className="ml-4 text-sm text-gray-400 font-mono">hariharan@developer:~</span>
              </div>
              <div className="font-mono text-sm md:text-base text-white">
                <p className="mb-2"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">./get_profile.sh</span></p>
                <p className="mb-1">Cyber Security analyst & Technology Enthusiast</p>
                <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> vulnerability assessment</p>
                <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> Security Protocols</p>
                <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> Endpoint Security</p>
                <p className="mb-1"><span className="text-[#00FF8C]">{'>'}</span> Threat Intelligence</p>
                <p className="mb-3"><span className="text-[#00FF8C]">{'>'}</span> Cloud Security</p>
                <p className="mb-1"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">echo $LOCATION</span></p>
                <p className="mb-3">Montreal, Canada</p>
                <p className="mb-1"><span className="text-[#00FF8C]">$</span> <span className="text-red-500">cat contact.txt</span></p>
                <p className="mb-1">E: hariharan.duraisingh@gmail.com</p>
                <p className="mb-1 flex items-center">
                  <span className="mr-2">LinkedIn:</span>
                  <a 
                    href="https://linkedin.com/in/hariharan-duraisingh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0066CC] hover:text-[#00FF8C] transition-colors duration-300"
                  >
                    linkedin.com/in/hariharan-duraisingh
                  </a>
                </p>
                <p className="mb-1 flex items-center">
                  <span className="mr-2">GitHub:</span>
                  <a 
                    href="https://github.com/Hariharan-2411" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#6e5494] hover:text-[#00FF8C] transition-colors duration-300"
                  >
                    github.com/Hariharan-2411
                  </a>
                </p>
                <p className="mb-1 mt-3">
                  <span className="text-[#00FF8C]">$</span> <span className="text-white">_</span>
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 animate-pulse text-[#00FF8C]`}>|</span>
                </p>
              </div>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-[#1A1A1A] border border-[#00FF8C] rounded-md hover:bg-[#00FF8C] hover:text-[#1A1A1A] transition-all duration-300 font-mono text-[#00FF8C] hover:shadow-[0_0_15px_rgba(0,255,140,0.4)]"
                variant="outline"
              >
                About Me
              </Button>
              <Button
                onClick={scrollToContact}
                className="px-8 py-3 border border-[#0066CC] rounded-md hover:bg-[#0066CC] transition-all duration-300 font-mono text-[#0066CC] hover:text-white hover:shadow-[0_0_15px_rgba(0,102,204,0.4)]"
                variant="outline"
              >
                Contact
              </Button>
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00FF8C]/20 via-[#0066CC]/20 to-[#00FF8C]/30 p-2 border-4 border-[#00FF8C]/30 shadow-[0_0_30px_rgba(0,255,140,0.3)]">
                <img
                  src="/assets/profile.png"
                  alt="Hariharan Duraisingh"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Additional background blur effects */}
      <div className="absolute -bottom-48 -right-48 w-96 h-96 rounded-full bg-[#00FF8C]/20 blur-3xl"></div>
      <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-[#0066CC]/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
