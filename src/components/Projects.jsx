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
    link: '#'
  },
  {
    title: 'Shehri Lion – Movie Project',
    description: 'An intense 4-hour original script combining action, emotion, and international-level villains.',
    tech: ['Screenwriting', 'Concept Art', 'Direction'],
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
