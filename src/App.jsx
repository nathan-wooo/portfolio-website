import React, { useState } from 'react';
import Projects from './Projects.jsx';

const App = () => {

  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nathanwu2005@gmail.com");
    setShowCopyNotification(true);
    setTimeout(() => {
      setShowCopyNotification(false);
    }, 1500);
  };

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div 
        className="fixed inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
            linear-gradient(-45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000),
            linear-gradient(45deg, transparent 3px, #111 3px, #111 78px, transparent 78px),
            linear-gradient(-45deg, transparent 3px, #111 3px, #111 78px, transparent 78px)
          `,
          backgroundSize: '20px 20px, 20px 20px, 80px 80px, 80px 80px',
          backgroundPosition: '0 0, 10px 10px, 0 0, 40px 40px'
        }}
      />
   
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90" />
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700/50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Projects
              </button>
            </div>

            {/* Resume Button */}
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-gray-600/50"
            >
              Résumé
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Nathan Wu
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Computer Science Student • Software Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative">
              {/* "Contact" button */}
              <button 
                onClick={handleCopyEmail}
                className="border border-gray-600/50 bg-gray-800/30 hover:bg-gray-700/50 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-white active:scale-95"
              >
                Contact
              </button>

              {/* "Copied" notification */}
              {showCopyNotification && (
                <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-gray-900/90 border border-green-400/40 text-green-300 px-4 py-2 rounded-full shadow-xl text-xs sm:text-sm font-medium backdrop-blur-md animate-bounce">
                  Email copied to clipboard
                </div>
              )}
              <a 
                href="https://github.com/nathan-wooo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600/50 bg-gray-800/30 hover:bg-gray-700/50 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/nathanwu05"
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-600/50 bg-gray-800/30 hover:bg-gray-700/50 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="pt-16 pb-24 md:pb-32 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:pr-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-center">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hey there! I'm Nathan, a third-year Computer Science student at UBC working toward my BSc in CS. 
                    I focus on software development and enjoy building tools that are practical and usable. 
                    One of my biggest goals is to create a product that reaches and helps people all around the world. 
                    Outside of coding and school, you'll usually find me at the gym, exploring new food spots, or spending time with friends & family.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end mt-8 md:mt-0 md:pl-6">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border border-gray-600/50 shadow-2xl overflow-hidden">
                  <img 
                    src="/selfie.png" 
                    alt="Nathan Wu" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <Projects />


      </div>
    </div>

    
  );
};

export default App;