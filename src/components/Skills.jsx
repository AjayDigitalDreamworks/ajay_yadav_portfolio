// src/components/Skills.jsx
import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaFigma, FaWordpress, FaTools } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiMysql, SiAdobephotoshop, SiFirebase } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend & UI',
    icon: <FaReact className="text-blue-500 text-2xl" />,
    skills: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Figma']
  },
  {
    title: 'Backend & Database',
    icon: <FaNodeJs className="text-green-600 text-2xl" />,
    skills: ['Node.js', 'PHP OOP', 'MySQL', 'MongoDB', 'Firebase']
  },
  {
    title: 'AI / Python / Cyber',
    icon: <FaPython className="text-yellow-500 text-2xl" />,
    skills: ['Python', 'AI/ML', 'Neural Networks', 'Cybersecurity']
  },
  {
    title: 'Creative & Tools',
    icon: <FaTools className="text-gray-700 text-2xl" />,
    skills: ['Photoshop', 'Video Editing', 'Logo Design', 'WordPress']
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">My Skillset</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                {cat.icon}
                <h3 className="text-xl font-semibold text-gray-700">{cat.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {cat.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
