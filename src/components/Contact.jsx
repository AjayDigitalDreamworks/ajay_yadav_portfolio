// src/components/Contact.jsx
import React, { useState } from 'react'
// import { database, ref, push } from '../firebase'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill out all fields.' })
      return
    }

    try {
      await push(ref(database, 'messages'), form)
      setForm({ name: '', email: '', message: '' })
      setStatus({ type: 'success', msg: 'Message sent successfully!' })
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong.' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Let's Connect</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && (
            <div
              className={`text-sm text-center py-2 rounded ${
                status.type === 'success' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {status.msg}
            </div>
          )}
        </form>

        <div className="mt-8 text-center text-gray-600">
          📧 <a href="mailto:autenicweb@gmail.com" className="text-blue-600 hover:underline">autenicweb@gmail.com</a><br />
          📞 <a href="tel:+917217814964" className="text-blue-600 hover:underline">+91 7217814964</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
