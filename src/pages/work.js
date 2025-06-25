import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import img01 from '../images/prj_01.png'
import img02 from '../images/prj_02.png'
import img03 from '../images/prj_03.png'

const projects = [
  {
    year: '2024',
    title: '🌐 The Secret of The World (2024)',
    subtitle: '"Discover the Hidden Layers of Reality."',
    desc: 'The Secret of The World is an award-winning VR project created by Yan-Jun Lin and Min-Feng Jiang from E.A.T. Lab. It invites players into a mysterious virtual factory where digital worlds are imagined, built, and abandoned. Through seamless portals, users explore surreal spaces—from cozy living rooms and oversized toy sets to neon-lit media tunnels, bubblegum machines, and floating sushi galaxies.',
    image: img01
  },
  {
    year: '2025',
    title: '🍽️ Dinegital (2025)',
    subtitle: '"Bring Memes to the Table!"',
    desc: "Right now, we've made a fun 7-minute XR dining experience, mixing internet memes, emojis, and real food. You interact with meme characters, ring virtual bells, and playfully explore how digital culture meets your dining table.",
    image: img02
  },
  {
    year: '2026',
    title: '🍽️ Dinegital 2.0 (Coming 2026)',
    subtitle: '"Dining Turns into an Adventure!"',
    desc: "Next year, we're taking it even further. This new, longer version will feature original stories, AI-powered characters, and multiplayer interactions. You'll walk freely, trigger events by serving digital dishes, and chat with virtual waiters—turning every meal into an immersive story",
    image: img03
  }
]

const WorkPage = () => {
  return (
    <Layout>
      <Seo title="Gallery" />
      <section className="px-6 py-12 max-w-7xl w-full mx-auto">
        <h2 className="text-4xl font-bold mb-16">Feature Work.</h2>
        <div className="relative border-l-4 border-yellow-400 pl-8">
          {projects.map((project, idx) => (
            <div key={idx} className="mb-12 flex items-start gap-8 relative">
              <div className="absolute -left-6 top-2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black"></div>
              <div className="w-24 flex-shrink-0 text-yellow-400 font-bold text-lg pt-2">{project.year}</div>
              <div className="w-full bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8 items-start">
                <img src={project.image} alt={project.title} className="w-80 h-56 object-cover rounded-md border border-gray-800 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="text-gray-500 mb-2 text-base">{project.subtitle}</div>
                  <p className="text-gray-400">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
