import React from 'react'
import { useLanguage } from '../contexts/language-context'

const Footer = () => {
  const { currentLang } = useLanguage()

  const content = {
    EN: {
      tagline: "E.A.T. = Experimental × Art × Technology",
      projects: "Projects",
      connect: "Connect",
      contact: "Contact",
      comingSoon: "Coming Soon",
      copyright: "© 2025 E.A.T Lab. All rights reserved."
    },
    ZH: {
      tagline: "E.A.T. = 實驗 × 藝術 × 科技",
      projects: "項目",
      connect: "連結",
      contact: "聯絡",
      comingSoon: "即將推出",
      copyright: "© 2025 E.A.T Lab. 版權所有。"
    }
  }

  const t = content[currentLang]

  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">E.A.T. Lab</h3>
            <p className="text-gray-400 text-sm">
              {t.tagline}
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold mb-3">{t.projects}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t.comingSoon}</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold mb-3">{t.connect}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.instagram.com/dinegital/" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com/channel/UCYijTe2ounpW6kHcMG7sESw" className="hover:text-white transition-colors">Youtube</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">{t.contact}</h4>
            <p className="text-sm text-gray-400">
              xreatlab@gmail.com<br />
              Taipei, Taiwan
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-sm text-gray-500">
          {t.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer 