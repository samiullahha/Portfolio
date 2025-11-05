"use client";
import React, { useState } from 'react'
import { BsEnvelope, BsPhone, BsLinkedin, BsGeoAlt } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1000)
  }

  return (
    <div id="contact" className="pt-16 pb-16 px-4">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
        Get In <span className="text-cyan-300">Touch</span>
      </h1>
      <p className="text-center text-gray-400 text-sm md:text-base mb-12 max-w-2xl mx-auto">
        Let's discuss your project and bring your ideas to life
      </p>
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h2>
            <div className="space-y-4 sm:space-y-5">
              <a 
                href="mailto:su1946275@gmail.com?subject=Contact%20from%20Portfolio"
                className="flex items-center group bg-gray-800/50 hover:bg-gray-800/70 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                aria-label="Send email to su1946275@gmail.com"
              >
                <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-cyan-400/30 transition-colors">
                  <BsEnvelope className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">su1946275@gmail.com</span>
              </a>
              <a 
                href="tel:+923174574580" 
                className="flex items-center group bg-gray-800/50 hover:bg-gray-800/70 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-cyan-400/30 transition-colors">
                  <BsPhone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">+92 317 4574580</span>
              </a>
              <div className="flex items-center group bg-gray-800/50 hover:bg-gray-800/70 p-4 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <div className="w-10 h-10 bg-cyan-400/20 rounded-full flex items-center justify-center mr-4">
                  <BsGeoAlt className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-gray-300">Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center space-x-4 mt-6 pt-4">
                <a 
                  href="https://www.linkedin.com/in/sami-ulllah/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                  title="LinkedIn"
                >
                  <BsLinkedin className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/mesamiullah03/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                  title="Instagram"
                >
                  <FaInstagram className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://x.com/su1946275" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group"
                  title="X (Twitter)"
                >
                  <FaXTwitter className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="mailto:su1946275@gmail.com?subject=Contact%20from%20Portfolio"
                  className="w-12 h-12 bg-gray-800/50 hover:bg-cyan-400 rounded-full flex items-center justify-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110 group cursor-pointer"
                  title="Email"
                  aria-label="Send email to su1946275@gmail.com"
                >
                  <BsEnvelope className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors pointer-events-none" />
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900/40 p-6 rounded-lg border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800/70 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-gray-800 transition-colors resize-none"
              />
            </div>
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-600/50 border border-green-500 rounded-lg text-white text-sm">
                Thank you for your message! I will get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-600/50 border border-red-500 rounded-lg text-white text-sm">
                Failed to send message. Please try again later.
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-900 hover:to-blue-800 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

