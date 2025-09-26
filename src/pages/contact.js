import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useLanguage } from '../contexts/language-context'

const ContactPage = () => {
  const { currentLang } = useLanguage()
  
  const content = {
    EN: {
      title: "Get in Touch",
      subtitle: "Have something to feed us? We devour ideas for breakfast.",
      email: "Email",
      location: "Location",
      followUs: "Follow Us"
    },
    ZH: {
      title: "聯絡我們",
      subtitle: "有什麼點子想餵我們嗎？我們每天早餐吃的就是靈感。",
      email: "電子郵件",
      location: "位置",
      followUs: "關注我們"
    }
  }

  const t = content[currentLang]
  
  return (
    <Layout>
      <Seo 
        title={t.title} 
        description={`Contact E.A.T. Lab for XR dining experiences, Dinegital projects, and innovative art-technology collaborations. ${t.subtitle}`}
        keywords="E.A.T Lab contact, XR collaboration, Dinegital inquiry, VR AR projects, art technology partnership, Taiwan, Taipei"
        lang={currentLang === 'ZH' ? 'zh' : 'en'}
      />
      
      <section className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t.title}</h1>
          
          <div className="flex justify-center">
            <div className="max-w-xl w-full">
              <p className="text-xl text-gray-300 mb-20">
                {t.subtitle}
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.email}</h3>
                  <p className="text-gray-400">xreatlab@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.location}</h3>
                  <p className="text-gray-400">Taipei, Taiwan</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">{t.followUs}</h3>
                  <div className="flex space-x-4 justify-center">
                    <a 
                      href="https://www.instagram.com/dinegital/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Instagram
                    </a>
                    <a 
                      href="https://www.youtube.com/channel/UCYijTe2ounpW6kHcMG7sESw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Youtube
                    </a>
                    <a 
                      href="mailto:xreatlab@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      Gmail
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-20 text-sm text-gray-700 tracking-widest">Website by Ho-Ieng Tam | ducklexander42@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage