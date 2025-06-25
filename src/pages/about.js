import React from 'react'
import Layout from '../components/Layout.js'
import Seo from '../components/Seo.js'

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">About E.A.T Lab</h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                E.A.T Lab is a creative technology studio that exists at the intersection of 
                experimentation, art, and technology. Founded in Taipei, we create immersive 
                experiences that challenge conventional thinking.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Mission</h2>
                  <p className="text-gray-300">
                    To push the boundaries of digital experiences through innovative research,
                    artistic vision, and cutting-edge technology.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Vision</h2>
                  <p className="text-gray-300">
                    A world where technology and art seamlessly blend to create meaningful,
                    transformative experiences.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg my-12">
                <h3 className="text-2xl font-bold mb-6">What We Do</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">•</span>
                    <span>XR Experiences: Virtual and Augmented Reality applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">•</span>
                    <span>Interactive Dining: Merging culinary arts with technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">•</span>
                    <span>Digital Art: Generative and interactive installations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-3">•</span>
                    <span>Game Development: Experimental gameplay experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage