import React, { useState } from 'react'
import { Link } from 'gatsby'
import LanguageSwitcher from './language-switcher'

const Header = ({ currentLang = 'EN', onLanguageChange }) => {
  const [hoverLetter, setHoverLetter] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const letters = [
    { key: 'E', short: 'E', full: 'Experiment' },
    { key: 'A', short: 'A', full: 'Art' },
    { key: 'T', short: 'T', full: 'Technology' }
  ]

  const navigation = {
    EN: {
      home: 'Home',
      about: 'About',
      work: 'Work',
      contact: 'Contact'
    },
    ZH: {
      home: '首頁',
      about: '關於',
      work: '作品',
      contact: '聯絡'
    }
  }

  const nav = navigation[currentLang]

  return (
    <header className="bg-yellow-400 text-black shadow-md z-50 relative font-mono pb-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center relative">
        <h1 className="text-3xl md:text-2xl font-extrabold tracking-tight pixel-text flex items-end gap-0 transition-all duration-700 ease-in-out w-full md:w-auto justify-start md:justify-start">
          <div className="flex items-end gap-2 ml-0 md:mx-0">
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
                {idx < letters.length - 0 && (
                  <span className="text-3xl md:text-5xl select-none">.</span>
                )}
              </span>
            ))}
            <span className="ml-8 text-3xl md:text-4xl">Lab</span>
          </div>
        </h1>
        <button
          className="absolute right-6 top-6 md:hidden flex flex-col justify-center items-center w-10 h-10 z-30"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Open menu"
        >
          <span className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-black rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="mt-6 md:mt-0 space-x-8 md:space-x-12 text-xl md:text-2xl font-semibold tracking-widest uppercase">
            <Link
              to="/"
              className="inline-block transition duration-300 ease-in-out hover:scale-110 hover:text-black/60 hover:font-bold"
            >
              {nav.home}
            </Link>
            <Link
              to="/about"
              className="inline-block transition duration-300 ease-in-out hover:scale-110 hover:text-black/60 hover:font-bold"
            >
              {nav.about}
            </Link>
            <Link
              to="/work"
              className="inline-block transition duration-300 ease-in-out hover:scale-110 hover:text-black/60 hover:font-bold"
            >
              {nav.work}
            </Link>
            <Link
              to="/contact"
              className="inline-block transition duration-300 ease-in-out hover:scale-110 hover:text-black/60 hover:font-bold"
            >
              {nav.contact}
            </Link>
          </nav>
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
        </div>
        {menuOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-20 animate-fade-in" onClick={() => setMenuOpen(false)}></div>
            <div className="fixed top-0 right-0 w-64 h-full bg-yellow-400 z-30 shadow-2xl flex flex-col p-8 animate-slide-in">
              <nav className="flex flex-col space-y-6 text-2xl font-bold mb-8 mt-8">
                <Link to="/" onClick={() => setMenuOpen(false)}>{nav.home}</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>{nav.about}</Link>
                <Link to="/work" onClick={() => setMenuOpen(false)}>{nav.work}</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>{nav.contact}</Link>
              </nav>
              <div className="mt-auto">
                <LanguageSwitcher currentLang={currentLang} onLanguageChange={lang => { setMenuOpen(false); onLanguageChange(lang); }} />
              </div>
            </div>
            <style>{`
              @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
              .animate-fade-in { animation: fade-in 0.2s; }
              @keyframes slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
              .animate-slide-in { animation: slide-in 0.25s cubic-bezier(.4,1.6,.6,1); }
            `}</style>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
