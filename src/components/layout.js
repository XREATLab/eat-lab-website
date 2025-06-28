import React, { useState, useEffect, createContext } from 'react'
import Header from './header'
import PixelBanner from './pixelbanner'
import Footer from './footer'
import Loading from './loading'
import { useLanguage } from '../contexts/language-context'
import { useLocation } from '@reach/router'

export const LoadingContext = createContext(false)

const Layout = ({ children, loadingDuration = 5000 }) => {
  const { currentLang, changeLanguage } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // 只在首頁顯示 loading
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        setFadeOut(true)
        setTimeout(() => setIsLoading(false), 1500) // 1.5 秒淡出
      }, loadingDuration)
      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [loadingDuration, location.pathname])

  return (
    <LoadingContext.Provider value={isLoading}>
      <div className="relative min-h-screen bg-black text-white flex flex-col">
        {/* Loading 遮罩 */}
        {isLoading && (
          <div className={`fixed inset-0 z-[999] bg-black flex items-center justify-center transition-opacity duration-[1500ms] ease-in-out ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <Loading fadeOut={fadeOut} />
          </div>
        )}
        {/* 主內容，只有 loading 完全結束才顯示 */}
        {!isLoading && (
          <div className="opacity-100 pointer-events-auto transition-none">
            <Header currentLang={currentLang} onLanguageChange={changeLanguage} />
            <PixelBanner />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        )}
      </div>
    </LoadingContext.Provider>
  )
}

export default Layout
