import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('EN')

  const changeLanguage = (lang) => {
    setCurrentLang(lang)
  }

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 