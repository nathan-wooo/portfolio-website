import React from 'react';

const techColorMap = {
  'Next.js': 'gray',
  'TypeScript': 'blue',
  'Tailwind CSS': 'cyan',
  'dnd-kit': 'purple',
  'React': 'blue',
  'JavaScript': 'yellow',
  'CSS': 'pink',
  'Ticketmaster API': 'green',
  'Java': 'orange',
  'Swing': 'purple',
  'JSON': 'blue',
  'JUnit': 'red',
};

const colorClasses = {
  gray: 'bg-gray-600/20 border-gray-500/30 text-gray-200',
  blue: 'bg-blue-600/20 border-blue-500/30 text-blue-300',
  cyan: 'bg-cyan-600/20 border-cyan-500/30 text-cyan-300',
  purple: 'bg-purple-600/20 border-purple-500/30 text-purple-300',
  yellow: 'bg-yellow-600/20 border-yellow-500/30 text-yellow-300',
  pink: 'bg-pink-600/20 border-pink-500/30 text-pink-300',
  green: 'bg-green-600/20 border-green-500/30 text-green-300',
  orange: 'bg-orange-600/20 border-orange-500/30 text-orange-300',
  red: 'bg-red-600/20 border-red-500/30 text-red-300',
};

const ProjectCard = ({ project }) => {
  const { image, alt, title, description, technologies, link } = project;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <div className="h-24 mb-4">
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-6">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 mb-2">
          {technologies.map((tech, index) => {
            const colorKey = techColorMap[tech] || 'gray';
            const classes = colorClasses[colorKey];

            return (
              <span
                key={index}
                className={`px-3 py-1 border rounded-full text-xs ${classes}`}
              >
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      <div className="pb-6 px-6 mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;


