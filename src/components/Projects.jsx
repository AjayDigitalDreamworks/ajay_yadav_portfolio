// src/components/Projects.jsx
import React from 'react'

const projects = [
  {
    title: 'SkillTok – 60s Skill Challenge',
    description: 'A social app where users upload short 60-second videos to share and learn practical skills.',
    tech: ['React', 'Firebase', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Ajay Digital Dreamworks',
    description: 'A service platform showcasing my freelance web, video, and branding work.',
    tech: ['WordPress', 'SEO', 'Design'],
    link: 'https://ajaydigitaldreamwork.42web.io/'
  },
  {
    title: 'Shehri Lion – Movie Project',
    description: 'An intense 4-hour original script combining action, emotion, and international-level villains.',
    tech: ['Screenwriting', 'Concept Art', 'Direction'],
    link: '#'
  },
  {
    title: 'Netflix Clone - Frontend Design',
    description: 'A movie streaming website. That provide various types of movies to watch online from anywhere.',
    tech: ['HTML', 'CSS', 'JS'],
    link: '#'
  },
  {
    title: 'Ishq FM - Story reading APP',
    description: 'An app that provide you various types of stories to read and lesten online from anywhere.',
    tech: ['REACT NATIVE', 'FIREBASE'],
    link: '#'
  },
  {
    title: 'Crane Website - Cranetech Noida',
    description: 'An industrial website of a sole propriter. The company offers cranes & lifts etc.',
    tech: ['PHP', 'HTML', 'CSS', 'JS', 'Bootstrap'],
    link: 'https://www.cranetechnoida.in/'
  },
  {
    title: 'Steno typing Website - AshokaSteno with admin panel',
    description: 'A website where you can improve your typing skill. Give test and buy some courses.',
    tech: ['HTML', 'CSS', 'JS', 'PHP', 'Bootstrap', 'JQuery', 'MYSQL'],
    link: '#'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
