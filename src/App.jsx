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

          </div>
              
              {/* Resume Button */}
              <a 
                href="/resume.pdf" 
                download="Nathan_Wu_Resume.pdf"
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 border border-gray-600/50"
              >
                Résumé
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

        {/* About */}
        <section id="about" className="py-66 px-6">
          <div className="max-w-6xl mx-auto px-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 pr-6">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                Hey there! I’m Nathan, a third-year Computer Science student at UBC working toward my BSc in CS. 
                I focus on software development and enjoy building tools that are practical and usable. 
                One of my biggest goals is to create a product that reaches and helps people all around the world. 
                Outside of coding and school, you’ll usually find me at the gym, exploring new food spots, or adding to my growing Pokémon card collection.
                  </p>
                </div>
              </div>

              <div className="flex justify-end pl-6">
                <div className="w-110 h-110 rounded-2xl border border-gray-600/50 shadow-2xl overflow-hidden">
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

        {/* Projects Section */}
<section id="projects" className="py-30 px-4 pb-48">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
      Personal Projects
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src="/Vancouver-Events-HUB.png" 
            alt="Vancouver Events Hub Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Vancouver Events Hub</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Built a React web application to help users discover Vancouver local events by integrating real-time data from the Ticketmaster API.
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">React</span>
            <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">JavaScript</span>
            <span className="px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-xs text-pink-300">CSS</span>
            <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-300">Ticketmaster API</span>
          </div>
          
          {/* Project Link */}
          <div className="mt-auto">
            <a 
              href="https://github.com/nathan-wooo/vancouver-event-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>

      {/* Personal Portfolio */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
        <div className="h-48 overflow-hidden">
          <img 
            src="/Portfolio.png" 
            alt="Personal Portfolio Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Personal Portfolio</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Designed a responsive personal portfolio website as a central hub to showcase projects and professional information.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">React</span>
            <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">JavaScript</span>
            <span className="px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-xs text-cyan-300">Tailwind CSS</span>
          </div>
          
          <div className="mt-auto">
            <a 
              href="https://github.com/nathan-wooo/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>

      {/* Win/Loss Tracker */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
        <div className="h-48 overflow-hidden">
          <img 
            src="/Win-loss-tracker.png" 
            alt="Win Loss Tracker Screenshot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">Win/Loss Record Tracker</h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            Developed a desktop application with Swing GUI to track and visualize user outcomes for decision-making.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-orange-600/20 border border-orange-500/30 rounded-full text-xs text-orange-300">Java</span>
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">Swing</span>
            <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">JSON</span>
            <span className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-xs text-red-300">JUnit</span>
          </div>
          <a 
            href="https://github.com/nathan-wooo/win-loss-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            View Project →
          </a>
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