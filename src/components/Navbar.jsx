// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home') // for underline

  const scrollTo = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setActive(id)
      setMenuOpen(false)
    }
  }

  // Optional: Auto-set active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          Ajay<span className="text-gray-800">Yadav</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`relative transition duration-300 hover:text-blue-600 py-2 px-1 
                ${active === item ? 'text-blue-700 font-bold' : ''}
              `}
              style={{ cursor: 'pointer' }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}

              {/* underline */}
              {active === item && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-3 text-gray-800 font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`block w-full text-left py-2 px-2 rounded transition duration-300 ${
                active === item
                  ? 'bg-blue-100 text-blue-700 font-semibold'
                  : 'hover:bg-gray-100'
              }`}
              style={{ cursor: 'pointer' }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
