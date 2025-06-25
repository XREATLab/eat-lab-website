import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">E.A.T Lab</h3>
            <p className="text-gray-400 text-sm">
              Experimenting at the intersection of art and technology.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Projects</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => console.log('Navigate to XR')}
                  className="hover:text-white transition-colors text-left"
                >
                  XR Experiences
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Navigate to Dining')}
                  className="hover:text-white transition-colors text-left"
                >
                  Interactive Dining
                </button>
              </li>
              <li>
                <button 
                  onClick={() => console.log('Navigate to Art')}
                  className="hover:text-white transition-colors text-left"
                >
                  Digital Art
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-400">
              hello@eatlab.com<br />
              Taipei, Taiwan
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-sm text-gray-500">
          © 2025 E.A.T Lab. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer