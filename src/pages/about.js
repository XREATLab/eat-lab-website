import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useLanguage } from '../contexts/language-context'
import member1 from '../images/member_1.png'
import member2 from '../images/member_2.png'
import member3 from '../images/member_3.png'
import member4 from '../images/member_4.png'
import studioImage from '../images/studio_image.png'
import bigIcon from '../images/big-icon.png'

const AboutPage = () => {
  const { currentLang } = useLanguage()
  
  const content = {
    EN: {
      title: "About E.A.T. Lab",
      subtitle: "Where Experiment meets Art meets Technology",
      intro: "E.A.T. Lab is a creative team from the Department of New Media Art at Taipei National University of the Arts. We specialize in combining artistic thinking with cutting-edge technologies to carry out interdisciplinary projects and experimental creations.",
      mission: "Research & Practice",
      missionText: "Our work spans (but is not limited to): artificial intelligence, human-computer interaction design, virtual reality (VR), augmented reality (AR), mixed reality (MR), wearable devices, sound art, 3D modeling, and visual design.",
      vision: "Our Vision", 
      visionText: "We aim to explore the expressive potential of new media art in culture, sensory perception, and spatial experience—offering experimental yet practical tech-art encounters through creativity and execution.",
      members: "Our Team",
      "members": "Our Team",
      "member1": {
        "name": "Yen-Chun Lin",
        "role": "Team Lead",
        "bio": "/* Concept development, tech R&D, sound and interaction programming */"
      },
      "member2": {
        "name": "Min-Feng Jiang",
        "role": "Art Director",
        "bio": "/* Creative direction, narrative structure, 3D modeling, and character animation */"
      },
      "member3": {
        "name": "Shih-Min Hu",
        "role": "Technical Director",
        "bio": "/* Technical testing and interactive system integration */"
      },
      "member4": {
        "name": "Ho-Ieng Tam",
        "role": "Technical Artist",
        "bio": "/* Tech R&D, web visual design, and system architecture */"
      }
    },
    ZH: {
      title: "關於 未來餐藝所",
      subtitle: "當實驗、藝術與科技相遇",
      intro: "E.A.T. Lab｜未來餐藝所 為來自國立臺北藝術大學新媒體藝術學系大學部的創意團隊，擅長以專業的藝術思維結合前沿科技進行跨域創作與實驗。",
      mission: "研究與實作範疇",
      missionText: "涵蓋（但不限於）：人工智慧、人機互動設計、虛擬實境（VR）、擴增實境（AR）、混合實境（MR）、穿戴裝置、聲音藝術、3D立體建模與視覺設計等領域。",
      vision: "我們的願景",
      visionText: "團隊致力於探索新媒體藝術於文化、感官與空間中的表現可能，並以具創造力與執行力的方式，提出具實驗性與可實踐性的科技藝術體驗。",
      members: "我們的團隊",
      member1: {
        name: "林彥均",
        role: "團隊領導人",
        bio: "/* 概念發想、技術研發、聲音與互動程式設計 */"
      },
      member2: {
        name: "江敏豐",
        role: "美術總監", 
        bio: "/* 創意發想、敘事架構、3D建模與角色動畫 */"
      },
      member3: {
        name: "胡詩敏",
        role: "技術總監",
        bio: "/* 技術測試、互動系統整合 */"
      },
      member4: {
        name: "譚可瑩",
        role: "技術美術",
        bio: "/* 技術研發、網頁視覺設計與系統架構 */"
      }
    }
  }

  const t = content[currentLang]

  return (
    <Layout>
      <Seo title="About" />
      
      <section className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">{t.title}</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{t.subtitle}</p>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
            
          </div>
            {/* 手機顯示studio image */}
            <div className="block md:hidden flex items-center justify-center mb-8">
              <img src={bigIcon} alt="Studio" className="max-w-xs w-full h-auto object-contain mx-auto" />
            </div>
          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center mb-28">
            <div>
              <p className="text-xl text-gray-300 mb-8" style={{lineHeight: '1.75'}}>
                {t.intro}
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">{t.mission}</h3>
                  <p className="text-gray-300" style={{lineHeight: '1.75'}}>{t.missionText}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">{t.vision}</h3>
                  <p className="text-gray-300" style={{lineHeight: '1.75'}}>{t.visionText}</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img src={bigIcon} alt="Studio" className="max-w-xs md:max-w-lg w-full h-auto object-contain drop-shadow-xl rounded-2xl" />
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-16">{t.members}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Member 1 */}
              <div className="flex flex-col items-center gap-6 p-8 bg-gray-900/80 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                  <img src={member1} alt="Member 1" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-1">{t.member1.name}</h3>
                  <p className="text-yellow-300 font-semibold mb-3 text-lg md:text-xl">{t.member1.role}</p>
                  <p className="text-gray-300 text-base md:text-lg" style={{lineHeight: '1.75'}}>{t.member1.bio}</p>
                </div>
              </div>
              {/* Member 2 */}
              <div className="flex flex-col items-center gap-6 p-8 bg-gray-900/80 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                  <img src={member2} alt="Member 2" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-1">{t.member2.name}</h3>
                  <p className="text-yellow-300 font-semibold mb-3 text-lg md:text-xl">{t.member2.role}</p>
                  <p className="text-gray-300 text-base md:text-lg" style={{lineHeight: '1.75'}}>{t.member2.bio}</p>
                </div>
              </div>
              {/* Member 3 */}
              <div className="flex flex-col items-center gap-6 p-8 bg-gray-900/80 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                  <img src={member3} alt="Member 3" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-1">{t.member3.name}</h3>
                  <p className="text-yellow-300 font-semibold mb-3 text-lg md:text-xl">{t.member3.role}</p>
                  <p className="text-gray-300 text-base md:text-lg" style={{lineHeight: '1.75'}}>{t.member3.bio}</p>
                </div>
              </div>
              {/* Member 4 */}
              <div className="flex flex-col items-center gap-6 p-8 bg-gray-900/80 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
                <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden mb-4">
                  <img src={member4} alt="Member 4" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-1">{t.member4.name}</h3>
                  <p className="text-yellow-300 font-semibold mb-3 text-lg md:text-xl">{t.member4.role}</p>
                  <p className="text-gray-300 text-base md:text-lg" style={{lineHeight: '1.75'}}>{t.member4.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage