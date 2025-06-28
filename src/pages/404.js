import React from "react"
import Loading from "../components/loading"
import { Link } from "gatsby"
import { useLanguage } from '../contexts/language-context'

const NotFoundPage = () => {
  const { currentLang } = useLanguage()

  const content = {
    EN: {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.",
      backToHome: "Back to Home"
    },
    ZH: {
      title: "頁面未找到",
      description: "您要找的頁面不存在。它可能已被移動、刪除，或者您輸入了錯誤的網址。",
      backToHome: "返回首頁"
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative">
      <Loading title="404" subtitle="But you can still play minigame!" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4 animate-pulse drop-shadow-lg">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{t.title}</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto drop-shadow-lg">{t.description}</p>
        <Link 
          to="/"
          className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-colors rounded-lg drop-shadow-lg"
        >
          {t.backToHome}
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage