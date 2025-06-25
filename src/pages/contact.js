import React, { useState } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <Layout>
      <Seo title="Contact" />
      
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Get in Touch</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
            <div>
              <p className="text-xl text-gray-300 mb-8">
                Have a project in mind? Let's create something extraordinary together.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Email</h3>
                  <p className="text-gray-400">hello@eatlab.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Location</h3>
                  <p className="text-gray-400">Taipei, Taiwan</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Twitter
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-4 px-6 hover:bg-yellow-300 transition-all transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage