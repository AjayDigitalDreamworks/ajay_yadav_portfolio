// src/components/Footer.jsx
import React from 'react'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} <strong>Ajay Yadav</strong>. All rights reserved.
        </p>
        <div className="flex gap-5 text-lg">
          <a
            href="https://www.linkedin.com/in/ajayrisingstar/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:autenicweb@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>
          {/* Optional GitHub */}
          {/* <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
