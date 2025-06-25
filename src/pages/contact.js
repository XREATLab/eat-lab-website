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
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Get in Touch</h1>
          
          <div className="flex justify-center">
            <div className="max-w-xl w-full">
              <p className="text-xl text-gray-300 mb-20">
              Have something to feed us? We devour ideas for breakfast.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Email</h3>
                  <p className="text-gray-400">xreatlab@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Location</h3>
                  <p className="text-gray-400">Taipei, Taiwan</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Follow Us</h3>
                  <div className="flex space-x-4 justify-center">
                    <a 
                      href="https://www.instagram.com/dinegital/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.youtube.com/channel/UCYijTe2ounpW6kHcMG7sESw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Youtube
                    </a>
                    <a 
                      href="mailto:xreatlab@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Gmail
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage