import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
  const [hoverLetter, setHoverLetter] = useState(null)

  const letters = [
    { key: 'E', short: 'E', full: 'Experiment' },
    { key: 'A', short: 'A', full: 'Art' },
    { key: 'T', short: 'T', full: 'Technology' }
  ]

  return (
    <header className="bg-yellow-400 text-black shadow-md z-50 relative font-mono pb-4">
    <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl md:text-2xl font-extrabold tracking-tight pixel-text flex items-end gap-0 transition-all duration-700 ease-in-out">
          <div className="flex items-end gap-2">
            {letters.map(({ key, short, full }, idx) => (
              <span
                key={key}
                className="relative group w-fit h-auto flex flex-row items-end justify-start overflow-visible cursor-pointer"
                onMouseEnter={() => setHoverLetter(key)}
                onMouseLeave={() => setHoverLetter(null)}
              >
                <span className="relative inline-block">
                  <span className={`text-3xl md:text-4xl text-left transition duration-300 ease-in-out inline-block ${
                    hoverLetter === key ? 'scale-[1.15]' : 'scale-100'
                  }`}>
                    {short}
                  </span>
                  <span
                    className={`absolute top-full left-0 text-sm md:text-base mt-1 transition-all duration-500 ease-in-out transform origin-top whitespace-nowrap text-left w-full ${
                      hoverLetter === key
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    {full}
                  </span>
                </span>
                {idx < letters.length - 1 && (
                  <span className="text-3xl md:text-5xl select-none">.</span>
                )}
              </span>
            ))}
            <span className="ml-8 text-3xl md:text-4xl">Lab</span>
          </div>
        </h1>
        <nav className="mt-6 md:mt-0 space-x-8 md:space-x-12 text-xl md:text-2xl font-semibold tracking-widest uppercase">
          <Link
            to="/"
            className="inline-block transition duration-300 ease-in-out hover:scale-110 hover:text-black/60 hover:font-bold"
          >
            Home
          </Link>
          <Link
            to="/work"
            className="inline-block transition duration-300 ease-in-out hover:scale-110 hover:text-black/60 hover:font-bold"
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="inline-block transition duration-300 ease-in-out hover:scale-110 hover:text-black/60 hover:font-bold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
