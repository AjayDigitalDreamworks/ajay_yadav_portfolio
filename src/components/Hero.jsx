// src/components/Hero.jsx
import React from 'react'
import profileImg from '../assets/ajay-profile.png' // Use your real image here

const Hero = () => {
  return (
    <section id="home" className="pt-24 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="container mx-auto px-6 py-5 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Hello, I'm <span className="text-blue-600">Ajay Yadav</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A passionate Full-Stack Developer and Creative Digital Artist, building fast, scalable, and smart apps.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Ajay Yadav"
            className="w-80 h-80 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
