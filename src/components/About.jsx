// src/components/About.jsx
import React from 'react'
import aboutImg from '../assets/about-ajay.jpg' // Your about image (different from profile)

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="Ajay Yadav Working"
            className="w-100 rounded-2xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I’m <strong>Ajay Yadav</strong>, a self-taught full-stack web developer and creative artist.
            I’ve been building websites and mobile apps since 2016, combining code with design to create
            smart, beautiful, and user-friendly digital products.
          </p>
          <p className="text-gray-600">
            I specialize in <span className="font-medium text-blue-600">React, Node.js, PHP, Flutter</span>,
            and also love working on UI/UX, video editing, and logo design. I’m currently pursuing BCA and working
            on projects like SkillTok and Shehri Lion while mastering AI, VFX, and cybersecurity.
          </p>

          <div className="mt-6">
            <a
              href="#skills"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              See My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
