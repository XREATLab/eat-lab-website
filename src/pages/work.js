import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const images = [
  { src: '../images/01.gif', alt: 'Project 1', label: 'Project 01' },
  { src: '../images/02.gif', alt: 'Project 2', label: 'Project 02' },
  { src: '../images/03.gif', alt: 'Project 3', label: 'Project 03' }
]

const WorkPage = () => {
  return (
    <Layout>
      <Seo title="Gallery" />
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Feature Work.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
