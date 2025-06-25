import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Layout from '../components/Layout.js'
import Seo from '../components/Seo.js'
import PixelBanner from '../components/PixelBanner'
import { Link } from 'gatsby'

import img01 from '../images/01.gif'
import img02 from '../images/02.gif'
import img03 from '../images/03.gif'
import img04 from '../images/04.gif'
import img05 from '../images/05.gif'
import img06 from '../images/06.gif'


const IndexPage = () => {
  const heroRef = useRef(null)
  const [modalImage, setModalImage] = useState(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 5
      const y = (clientY / height - 0.5) * 5

      heroRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

    const projects = [
    { id: 1, title: 'XR Museum Experience', category: 'Virtual Reality', year: '2024', image: img01 },
    { id: 2, title: '食飽未 Dinegital', category: 'Interactive Dining', year: '2024', image: img02 },
    { id: 3, title: 'Generative Landscapes', category: 'AI Art', year: '2023', image: img03 },
    { id: 4, title: 'Unity Playground', category: 'Game Development', year: '2023', image: img04 },
    { id: 5, title: 'Blockchain Gallery', category: 'Web3', year: '2023', image: img05 },
    { id: 6, title: 'Motion Theater', category: 'Interactive Media', year: '2023', image: img06 }
  ]

  return (
    <Layout>
      <Seo title="Home" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5"></div>

        {/* Animated Glow Backgrounds */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Text */}
            <div className="max-w-4xl" ref={heroRef} style={{ transition: 'transform 0.1s ease-out' }}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
                <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  E.A.T
                </span>
                <span className="block text-yellow-400 neon-yellow mt-2">Lab</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-12">
                Where <span className="text-yellow-400 font-semibold">Experiment</span> meets{' '}
                <span className="text-yellow-400 font-semibold">Art</span> meets{' '}
                <span className="text-yellow-400 font-semibold">Technology</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/work"
                  className="group inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">Explore Our Work</span>
                  <svg
                    className="w-5 h-5 ml-2 relative z-10 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block w-100 h-100 shrink-0 animate-bounce-slow">
              <img
                src="./big_icon.png"
                alt="Big Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pixel Banner */}
      <PixelBanner />

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h2>
              <p className="text-gray-400">Images of our latest experiments and creations</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden bg-gray-900 aspect-[4/3] cursor-pointer"
                onClick={() => setModalImage(project.image)}
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})`, filter: 'grayscale(100%)' }}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                  <p className="text-sm text-gray-400 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {project.category} • {project.year}
                  </p>
                  <h3 className="text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Enlarged Project"
            className="w-full h-full max-w-[60vw] max-h-[60vh] object-contain shadow-2xl"
          />
        </div>
      )}


      {/* Philosophy Section with Cards */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Philosophy</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group bg-gray-900 p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-full mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Experiment</h3>
              <p className="text-gray-400 leading-relaxed">
                Pushing boundaries through innovative research in XR, AI, and emerging technologies. We believe in taking risks to discover new possibilities.
              </p>
            </div>
            
            <div className="group bg-gray-900 p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-full mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Art</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating beautiful experiences that inspire and transform digital interactions into art. Every project is a canvas for creative expression.
              </p>
            </div>
            
            <div className="group bg-gray-900 p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/10 rounded-full mb-6 group-hover:bg-yellow-400/20 transition-colors">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                Leveraging cutting-edge tools including Unity, WebGL, and custom frameworks. Technology is our medium for bringing visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage