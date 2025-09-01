"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Try to send via API first
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error('API failed');
      }
    } catch (error) {
      // Fallback to mailto
      const subject = formData.subject || `Portfolio Contact from ${formData.name}`;
      const body = `Hello Hariharan,

I hope this email finds you well. I'm reaching out through your portfolio website.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || "General Inquiry"}

Message:
${formData.message}

Best regards,
${formData.name}

---
This message was sent from your portfolio contact form.`;

      const mailtoLink = `mailto:hariharan02411@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        alert("Your email client should now be open with a pre-filled message. Please send the email to complete your contact request.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 500);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "438-922-8037",
      href: "tel:438-922-8037"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hariharan02411@gmail.com",
      href: "mailto:hariharan02411@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/hariharan-duraisingh",
      href: "https://linkedin.com/in/hariharan-duraisingh"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Hariharan-2411",
      href: "https://github.com/Hariharan-2411"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
            <span className="text-[#00FF8C]">#</span> Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#00FF8C] mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together on your next project
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-[#00FF8C]/30 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
                <span className="ml-4 text-sm text-gray-400 font-mono">contact.sh</span>
              </div>
              
              <div className="font-mono text-sm mb-6">
                <p className="mb-2">
                  <span className="text-[#00FF8C]">$</span> 
                  <span className="text-white ml-2">./get_contact_info.sh</span>
                </p>
                <p className="text-gray-400 mb-4">Retrieving contact details...</p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-[#00FF8C]/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#00FF8C]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#00FF8C]/20 transition-colors duration-300">
                      <span className="text-[#00FF8C]">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-mono text-sm font-semibold text-[#00FF8C] mb-1">
                        {item.label}
                      </h4>
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-300 hover:text-[#00FF8C] transition-colors duration-300 text-sm break-all"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-6 pt-6 border-t border-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#00FF8C] mr-3" />
                  <div>
                    <p className="text-gray-300 font-mono text-sm">Available Worldwide</p>
                    <p className="text-gray-500 text-xs">Remote & On-site Opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800 p-8 rounded-lg border border-[#00FF8C]/30 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#00FF8C]"></div>
                <span className="ml-4 text-sm text-gray-400 font-mono">send_message.sh</span>
              </div>
              
              <div className="font-mono text-sm mb-6">
                <p className="mb-2">
                  <span className="text-[#00FF8C]">$</span> 
                  <span className="text-white ml-2">./compose_message.sh</span>
                </p>
                <p className="text-gray-400 mb-4">Initializing secure communication protocol...</p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[#00FF8C] mb-2 font-mono text-sm">
                      <User className="w-4 h-4 inline mr-2" />
                      NAME *
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 focus:border-[#00FF8C] focus:outline-none text-white font-mono text-sm transition-colors duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#00FF8C] mb-2 font-mono text-sm">
                      <Mail className="w-4 h-4 inline mr-2" />
                      EMAIL *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 focus:border-[#00FF8C] focus:outline-none text-white font-mono text-sm transition-colors duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[#00FF8C] mb-2 font-mono text-sm">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    SUBJECT
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 focus:border-[#00FF8C] focus:outline-none text-white font-mono text-sm transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#00FF8C] mb-2 font-mono text-sm">
                    MESSAGE *
                  </label>
                  <textarea 
                    id="message"
                    rows={6} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 focus:border-[#00FF8C] focus:outline-none text-white font-mono text-sm resize-none transition-colors duration-300"
                    placeholder="Tell me about your project or inquiry..."
                    required
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-[#00FF8C] text-gray-900 font-mono font-bold py-4 px-6 rounded-lg hover:bg-[#00FF8C]/90 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      SEND MESSAGE
                    </>
                  )}
                </motion.button>
              </form>
              
              <div className="mt-6 font-mono text-sm">
                <p>
                  <span className="text-[#00FF8C]">$</span> 
                  <span className="text-white ml-2">_</span>
                  <span className="animate-pulse text-[#00FF8C]">|</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
