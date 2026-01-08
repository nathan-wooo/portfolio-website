import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const projects = [
  {
    image: '/Jobtrackify.png',
    alt: 'Jobtrackify Screenshot',
    title: 'Jobtrackify',
    description:
      'Developed a modern job application tracker using Next.js and Tailwind CSS. Implemented complex client-side state management for drag-and-drop functionality and local data persistence.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'dnd-kit'],
    link: 'https://jobtrackifyyy.vercel.app/',
  },
  {
    image: '/Vancouver-Events-HUB.png',
    alt: 'Vancouver Events Hub Screenshot',
    title: 'Vancouver Events Hub',
    description:
      'Built a React web application to help users discover Vancouver local events by integrating real-time data from the Ticketmaster API.',
    technologies: ['React', 'JavaScript', 'CSS', 'Ticketmaster API'],
    link: 'https://github.com/nathan-wooo/vancouver-event-hub',
  },
  {
    image: '/Portfolio.png',
    alt: 'Personal Portfolio Screenshot',
    title: 'Personal Portfolio',
    description:
      'Designed a responsive personal portfolio website as a central hub to showcase projects and professional information.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    link: 'https://github.com/nathan-wooo/portfolio-website',
  },
  {
    image: '/Win-loss-tracker.png',
    alt: 'Win Loss Tracker Screenshot',
    title: 'Win/Loss Record Tracker',
    description:
      'Developed a desktop application with Swing GUI to track and visualize user outcomes for decision-making.',
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