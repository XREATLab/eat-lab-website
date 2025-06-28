// gatsby-browser.js
import './src/styles/global.css'
import React from 'react'
import { LanguageProvider } from './src/contexts/language-context'

export const wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>
}