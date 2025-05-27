// src/components/Roadmap.jsx
import React from 'react'

const phases = [
  {
    title: 'Phase 1: Full-Stack Web + UI Design',
    duration: '1.5 Months',
    content: 'Master HTML, CSS, JavaScript, ReactJS, and UI/UX design with tools like Figma and Tailwind CSS.'
  },
  {
    title: 'Phase 2: AI/ML with Python',
    duration: '1.5 Months',
    content: 'Learn Python, AI models, machine learning, neural networks, and start building smart bots.'
  },
  {
    title: 'Phase 3: Creative & Business Tools',
    duration: 'Ongoing',
    content: 'Explore VFX, video editing, music production, SEO, marketing, and cybersecurity tools.'
  }
]

const Roadmap = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">My Power Roadmap 🚀</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{phase.duration}</p>
              <p className="text-gray-700">{phase.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
