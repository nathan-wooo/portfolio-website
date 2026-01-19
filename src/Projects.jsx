import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    image: '/LeetSpeak.png',
    alt: 'LeetSpeak Screenshot',
    title: 'LeetSpeak',
    description:
      'A modern Gemini API powered coding practice platform that helps developers prepare for technical interviews by practicing articulating their thought process out loud and recieving real time conversational feedback.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'ElevenLabs API', 'Monaco Editor'],
    link: 'https://leetspeak.tech/',
  },
  {
    image: '/Jobtrackify.png',
    alt: 'Jobtrackify Screenshot',
    title: 'Jobtrackify',
    description:
      'A modern job application tracker that helps users organize and manage their job search. Features intuitive drag-and-drop functionality to track application statuses, with all data stored locally for privacy and offline access.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'dnd-kit'],
    link: 'https://jobtrackifyyy.vercel.app/',
  },
  {
    image: '/Vancouver-Events-HUB.png',
    alt: 'Vancouver Events Hub Screenshot',
    title: 'Vancouver Events Hub',
    description:
      'A web application that helps users discover and explore local events in Vancouver. Integrates with the Ticketmaster API to provide real-time event listings, making it easy to find concerts, sports, and entertainment happening in the city.',
    technologies: ['React', 'JavaScript', 'CSS', 'Ticketmaster API'],
    link: 'https://github.com/nathan-wooo/vancouver-event-hub',
  },
  {
    image: '/Portfolio.png',
    alt: 'Personal Portfolio Screenshot',
    title: 'Personal Portfolio',
    description:
      'A responsive portfolio website showcasing my projects and professional background. Built with modern web technologies to provide a clean, accessible experience across all devices.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://github.com/nathan-wooo/portfolio-website',
  },
  {
    image: '/Win-loss-tracker.png',
    alt: 'Win Loss Tracker Screenshot',
    title: 'Win/Loss Record Tracker',
    description:
      'A desktop application designed to help users track and analyze decision outcomes. Features a Swing-based GUI for easy data entry and visualization, with persistent storage for long-term tracking.',
    technologies: ['Java', 'Swing', 'JSON', 'JUnit'],
    link: 'https://github.com/nathan-wooo/win-loss-tracker',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-30 px-4 pb-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Personal Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;