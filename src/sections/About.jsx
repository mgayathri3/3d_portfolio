import React, { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure animations work when directly navigating to section
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) {
      observer.observe(section);
    }

    return () => {
      clearTimeout(timer);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
<section id="about" className="relative bg-black w-full text-white overflow-visible pt-12 px-5 md:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full max-w-5xl">
          {/* Introduction Label */}
          <div className={`transform transition-all duration-1000 ease-out mt-20 mb-4 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-base md:text-xl text-gray-400 uppercase tracking-[0.2em] font-light">
              Introduction
            </p>
          </div>
          {/* Main Heading with Enhanced Animation and Shadow Effects */}
          <div className={`transform transition-all duration-1500 delay-300 ease-out ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-16 opacity-0 scale-95'
          }`}>
            <div className="relative">
              {/* Background Shadow Effect */}
              <div className="absolute inset-0 animate-pulse">
                <h1 className="text-5xl md:text-7xl font-bold text-purple-900/20 blur-sm">
                  About me.
                </h1>
              </div>
              {/* Main Text with Mild Smoky Effect */}
              <h1 className="relative text-5xl md:text-7xl font-bold mb-8 text-white leading-tight tracking-tight">
                <span className="inline-block transform transition-all duration-1000 hover:scale-105 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-shadow-smoke">
                  About me.
                </span>
              </h1>
            </div>
          </div>

          {/* Description with Staggered Animation */}
          <div className={`max-w-4xl transform transition-all duration-1600 delay-600 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light space-y-4">
              <p>
                "Hello! I'm Gayathri, a passionate full-stack developer and problem-solver with hands-on experience in building real-world applications. I'm currently pursuing my Bachelor of Technology at Velammal Engineering College with a CGPA of 8.3. I have worked across diverse projects—from content translation apps with FastAPI backends to Twilio-powered notification systems and responsive React-based frontends. My technical toolkit includes SQL, JavaScript, TailwindCSS, React, Node.js, Next.js, Express.js, and MongoDB, along with experience in API integration and automation workflows."
                 I'm also expanding my expertise in Machine Learning, Deep Learning, AI, and OpenCV, aiming to create smarter and more efficient solutions.
              </p>
            </div>
          </div>

          {/* Social Links with Animation */}
          <div className={`flex items-center space-x-6 mb-12 transform transition-all duration-1800 delay-800 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}>
            <a 
              href="mailto:gayathri.m352004@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-2xl transform hover:scale-110 hover:rotate-12"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://github.com/mgayathri3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-2xl transform hover:scale-110 hover:rotate-12"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/gayathrim352004/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-2xl transform hover:scale-110 hover:rotate-12"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://instagram.com/gayathri.m_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-2xl transform hover:scale-110 hover:rotate-12"
            >
              <FaInstagram />
            </a>
          </div>
          {/* Resume Button with Animation */}
          <div className={`transform transition-opacity duration-700 delay-700 ease-in-out -mt-6 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-28 opacity-0 scale-95'
          }`}>
            <a 
              href="\images\Gayathri_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;