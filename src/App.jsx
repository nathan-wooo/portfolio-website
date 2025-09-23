import React from 'react';

const App = () => {

    // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Carbon Fiber Background Pattern */}
      <div 
        className="fixed inset-0 opacity-30"
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
      
      {/* Main gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
<nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700/50">
  <div className="max-w-6xl mx-auto px-4 py-4">
    <div className="flex justify-between items-center">
      {/* Navigation Links*/}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </div>
              
              {/* Resume Button */}
              <a 
                href="/resume.pdf" 
                download="Nathan_Wu_Resume.pdf"
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-gray-600/50"
              >
                Resume
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
              Nathan Wu
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Computer Science Student • Aspiring Software Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:nathanwu2005@gmail.com"
                className="border border-gray-600/50 bg-gray-800/30 hover:bg-gray-700/50 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact
              </a>
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

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto px-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6 pr-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hi I'm a third year Computer Science student at UBC. I like fitness and pokemon cards
                  </p>
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="flex justify-center pl-40">
                <div className="w-100 h-100 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl border border-gray-600/50 flex items-center justify-center shadow-2xl">
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-sm">Your Photo Here</p>
                    <p className="text-xs text-gray-500 mt-2">(320x320px)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;