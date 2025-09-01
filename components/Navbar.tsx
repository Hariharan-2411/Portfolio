"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#1A1A1A]/90 backdrop-blur-lg shadow-md' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-[#00FF8C] font-mono text-xl font-semibold cursor-pointer hover:text-[#00FF8C]/80 transition-colors"
          >
            &gt;_hariharan.dev
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <div className="flex space-x-6 mr-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'hero' ? 'text-[#00FF8C]' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'about' ? 'text-[#00FF8C]' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'education' ? 'text-[#00FF8C]' : ''}`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'experience' ? 'text-[#00FF8C]' : ''}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'skills' ? 'text-[#00FF8C]' : ''}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'projects' ? 'text-[#00FF8C]' : ''}`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('certifications')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'certifications' ? 'text-[#00FF8C]' : ''}`}
            >
              Certifications
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'contact' ? 'text-[#00FF8C]' : ''}`}
            >
              Contact
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleMenu} 
            className={`text-white hover:text-[#00FF8C] focus:outline-none`}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#1A1A1A] border-gray-800 w-full border-t transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <button 
            onClick={() => scrollToSection('hero')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'hero' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'about' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'education' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'experience' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'skills' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'projects' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('certifications')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'certifications' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            Certifications
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`text-white hover:text-[#00FF8C] transition-colors duration-300 ${activeSection === 'contact' ? 'text-[#00FF8C]' : ''} text-left`}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
