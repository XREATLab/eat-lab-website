import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { useLanguage } from '../contexts/language-context'
import { LoadingContext } from '../components/layout'

import Layout from '../components/layout'
import Seo from '../components/seo'
import PixelBanner from '../components/pixelbanner'

import img01 from '../images/01.gif'
import img02 from '../images/02.gif'
import img03 from '../images/03.gif'
import img04 from '../images/04.gif'
import img05 from '../images/05.gif'
import img06 from '../images/06.gif'
import bigIconWaitMp4 from '../images/big-icon-wait.mp4'


const IndexPage = () => {
  const heroRef = useRef(null)
  const [modalImage, setModalImage] = useState(null)
  const { currentLang } = useLanguage()
  const isLoading = React.useContext(LoadingContext)
  const [showHero, setShowHero] = useState(false)
  const [showPage, setShowPage] = useState(false)
  const [videoKey, setVideoKey] = useState(0)

  const content = {
    EN: {
      subtitle: "Where Experiment meets Art meets Technology.",
      exploreWork: "Explore Our Work",
      contactUs: "Contact Us",
      gallery: "Gallery",
      gallerySubtitle: "Images of our latest experiments and creations",
      philosophy: "Our Philosophy",
      experiment: {
        title: "Experiment",
        description: "We test bold ideas with XR and AI to discover new ways to experience everyday life."
      },
      art: {
        title: "Art", 
        description: "We turn digital culture into immersive stories that move and inspire people."
      },
      technology: {
        title: "Technology",
        description: "Using tools like Unity and Meta XR, we bring these ideas to life in vivid, interactive spaces."
      }
    },
    ZH: {
      subtitle: "當實驗、藝術與科技相遇。",
      exploreWork: "探索我們的作品",
      contactUs: "聯絡我們",
      gallery: "作品畫廊",
      gallerySubtitle: "我們近期的實驗與創作的精彩影像",
      philosophy: "我們的理念",
      experiment: {
        title: "實驗",
        description: "我們透過 XR 與 AI 大膽試驗，探索日常體驗的全新可能。"
      },
      art: {
        title: "藝術", 
        description: "我們將數位文化轉化為沉浸式故事，激發共鳴與靈感。"
      },
      technology: {
        title: "科技",
        description: "運用 Unity 與 Meta XR 等工具，將創意實現於鮮活的互動空間中。"
      }
    }
  }

  const t = content[currentLang]

  const indexLoadingDuration = 7000 // 首頁 loading 時間（毫秒）

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 5
      const y = (clientY / height - 0.5) * 5

      heroRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      // loading 結束後才開始動畫
      const timer = setTimeout(() => setShowHero(true), 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading) {
      // loading 結束後才開始主內容淡入動畫
      const timer = setTimeout(() => setShowPage(true), 50)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  // 每10秒強制重播mp4（改變key）
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setVideoKey(k => k + 1)
      }, 10000)
      return () => clearInterval(interval)
    }
  }, [isLoading])

    const projects = [
    {
      id: 1,
      title: { EN: 'XR Experience in DaVinci Kitchen', ZH: '達文西廚房 XR 沉浸體驗' },
      category: { EN: 'Virtual Reality', ZH: '虛擬實境' },
      year: '2024',
      image: img01
    },
    {
      id: 2,
      title: { EN: 'Interactive Dining Experience', ZH: '互動式用餐體驗' },
      category: { EN: 'Mixed Reality + Dining', ZH: '混合實境＋用餐' },
      year: '2024',
      image: img02
    },
    {
      id: 3,
      title: { EN: 'Immersive experience even in BGM', ZH: 'BGM也可以有沉浸式體驗' },
      category: { EN: 'AI + Music + VR', ZH: 'AI＋音樂＋VR' },
      year: '2024',
      image: img03
    },
    {
      id: 4,
      title: { EN: 'Custom character to serve your food', ZH: '專屬自定義角色為你上菜' },
      category: { EN: 'Game + Custom Service', ZH: '遊戲＋客製服務' },
      year: '2024',
      image: img04
    },
    {
      id: 5,
      title: { EN: 'Even play with your restaurant roof', ZH: '連餐廳的天花板都能玩' },
      category: { EN: 'Spatial anchor + Multiplayer', ZH: '空間定位＋多人互動' },
      year: '2024',
      image: img05
    },
    {
      id: 6,
      title: { EN: 'Future of anime cafe', ZH: '動漫咖啡廳的未來' },
      category: { EN: 'Vtuber + AI', ZH: 'Vtuber＋AI' },
      year: '2024',
      image: img06
    }
  ]

  return (
    <Layout loadingDuration={indexLoadingDuration}>
      <Seo title="Home" />
      <div className={`transition-opacity duration-700 ${showPage ? 'opacity-100' : 'opacity-0'} bg-black`}>
        {/* Hero Section */}
        <section className="min-h-[600px] flex items-center justify-center bg-black relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-5"></div>

          {/* Animated Glow Backgrounds */}
          <div className="absolute inset-0 pointer-events-none md:hidden">
            <div className="absolute left-1/2 top-[18%] -translate-x-1/2 w-80 h-80 bg-yellow-400/15 rounded-full blur-[90px] animate-pulse z-10"></div>
          </div>
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="px-0 py-24 relative z-10 w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 w-full">
              {/* Hero Text */}
              <div className="max-w-xl mx-auto text-center lg:text-left w-full px-2" ref={heroRef} style={{ transition: 'transform 0.1s ease-out' }}>
                {!isLoading && (
                  <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none transition-opacity duration-700 ease-out ${showPage ? 'opacity-100' : 'opacity-0'}`}>
                    <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      E.A.T.
                    </span>
                    <span className="block text-yellow-400 neon-yellow mt-2">Lab</span>
                  </h1>
                )}
                <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-12">
                  {t.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start items-center w-full">
                  <Link
                    to="/work"
                    className="group inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">{t.exploreWork}</span>
                    <svg
                      className="w-5 h-5 ml-2 relative z-10 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105"
                  >
                    {t.contactUs}
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              {!isLoading && (
                <div className={`hidden md:block w-[320px] lg:w-[600px] h-auto shrink-0 transition-opacity duration-700 ${showPage ? 'opacity-100' : 'opacity-0'}`}>
                  <video
                    key={videoKey}
                    src={bigIconWaitMp4}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pixel Banner */}
        <PixelBanner />

        {/* Projects Grid */}
        <section className="py-12 md:py-20 bg-black">
          <div className="container mx-auto px-2 md:px-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 md:mb-12 gap-2 md:gap-0 text-center md:text-left">
              <div className="w-full">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{t.gallery}</h2>
                <p className="text-gray-400 text-base md:text-lg">{t.gallerySubtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 justify-items-center">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden bg-gray-900 aspect-[4/3] cursor-pointer w-full max-w-md mx-auto"
                  onClick={() => setModalImage(project.image)}
                >
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${project.image})` }}></div>
                  <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end bg-gradient-to-t from-black via-black/50 to-transparent">
                    <p className="text-sm text-gray-400 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {project.category[currentLang]} • {project.year}
                    </p>
                    <h3 className="text-2xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {project.title[currentLang]}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <img
              src={modalImage}
              alt="Enlarged Project"
              className="w-full h-full max-w-[60vw] max-h-[60vh] object-contain shadow-2xl"
            />
          </div>
        )}


        {/* Philosophy Section with Cards */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{t.philosophy}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="group bg-gray-900 p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-4xl">🔬</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{t.experiment.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {t.experiment.description}
                </p>
              </div>
              <div className="group bg-gray-900 p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-4xl">🎨</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{t.art.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {t.art.description}
                </p>
              </div>
              <div className="group bg-gray-900 p-8 border border-gray-800 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 text-4xl">💻</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">{t.technology.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {t.technology.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage