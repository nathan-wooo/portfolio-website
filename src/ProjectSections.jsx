import React from 'react';

const ProjectSections = () => {
  return (
    <section id="projects" className="py-30 px-4 pb-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Personal Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Jobtrackify */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <img
                src="/Jobtrackify.png"
                alt="Jobtrackify Screenshot"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Jobtrackify</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Developed a modern job application tracker using Next.js and Tailwind CSS. Implemented complex client-side state management for drag-and-drop functionality and local data persistence.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-600/20 border border-gray-500/30 rounded-full text-xs text-gray-200">Next.js</span>
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">TypeScript</span>
                <span className="px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-xs text-cyan-300">Tailwind CSS</span>
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">dnd-kit</span>
              </div>
            </div>
            <div className="pb-6 px-6 mt-auto">
              <a
                href="https://jobtrackifyyy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Vancouver Events Hub */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <img
                src="/Vancouver-Events-HUB.png"
                alt="Vancouver Events Hub Screenshot"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Vancouver Events Hub</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Built a React web application to help users discover Vancouver local events by integrating real-time data from the Ticketmaster API.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">React</span>
                <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-xs text-yellow-300">JavaScript</span>
                <span className="px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded-full text-xs text-pink-300">CSS</span>
                <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-xs text-green-300">Ticketmaster API</span>
              </div>
            </div>
            <div className="pb-6 px-6 mt-auto">
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
            </div>
            <div className="pb-6 px-6 mt-auto">
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
            </div>
            <div className="pb-6 px-6 mt-auto">
              <a
                href="https://github.com/nathan-wooo/win-loss-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSections;


