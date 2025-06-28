import React from 'react'

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  return (
    <div className="flex space-x-2 text-sm font-semibold">
      <button
        onClick={() => onLanguageChange('EN')}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === 'EN' 
            ? 'text-black bg-yellow-300' 
            : 'text-black/60 hover:text-black'
        }`}
      >
        EN
      </button>
      <span className="text-black/40">|</span>
      <button
        onClick={() => onLanguageChange('ZH')}
        className={`px-2 py-1 rounded transition-colors ${
          currentLang === 'ZH' 
            ? 'text-black bg-yellow-300' 
            : 'text-black/60 hover:text-black'
        }`}
      >
        ZH
      </button>
    </div>
  )
}

export default LanguageSwitcher 