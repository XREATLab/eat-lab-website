import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useLanguage } from '../contexts/language-context'
import img01 from '../images/prj_01.png'
import img02 from '../images/prj_02.png'
import img03 from '../images/prj_03.png'

const projects = [
  {
    year: '2024',
    title: '🌐 The Secret of The World (2024)',
    subtitle: '"Discover the Hidden Layers of Reality."',
    desc: 'The Secret of The World is an award-winning VR project created by Yen-Chun Lin and Min-Feng Jiang from E.A.T. Lab. It invites players into a mysterious virtual factory where digital worlds are imagined, built, and abandoned. Through seamless portals, users explore surreal spaces—from cozy living rooms and oversized toy sets to neon-lit media tunnels, bubblegum machines, and floating sushi galaxies.',
    image: img01
  },
  {
    year: '2025',
    title: '🍽️ Dinegital (2025)',
    subtitle: '"Bring Memes to the Table!"',
    desc: "Right now, we've made a fun 7-minute XR dining experience, mixing internet memes, emojis, and real food. You interact with meme characters, ring virtual bells, and playfully explore how digital culture meets your dining table.",
    image: img02
  },
  {
    year: '2026',
    title: '🍽️ Dinegital 2.0 (Coming 2026)',
    subtitle: '"Dining Turns into an Adventure!"',
    desc: "Next year, we're taking it even further. This new, longer version will feature original stories, AI-powered characters, and multiplayer interactions. You'll walk freely, trigger events by serving digital dishes, and chat with virtual waiters—turning every meal into an immersive story",
    image: img03
  }
]

const WorkPage = () => {
  const { currentLang } = useLanguage()

  const content = {
    EN: {
      title: "Feature Work.",
      projects: projects
    },
    ZH: {
      title: "精選作品",
      projects: [
        {
          year: '2024',
          title: '🌐 世界工廠 (2024)',
          subtitle: '"探索現實的隱藏層面。"',
          desc: '《世界工廠》一部屢獲殊榮的 VR 作品，由 E.A.T. Lab 的林彥均與江敏豐創作。觀眾將進入一座神秘的虛擬工廠，見證數位世界的構想、建構與被遺棄。透過無縫的傳送門，你將遊歷超現實空間──從溫馨的客廳、巨大的玩具場景、霓虹媒體隧道，到泡泡糖機器與漂浮壽司宇宙，展開一段層層堆疊的虛擬旅程。',
          image: img01
        },
        {
          year: '2025',
          title: '🍽️ Dinegital (2025)',
          subtitle: '"將迷因帶到餐桌！"',
          desc: "目前，我們製作了一個有趣的 7 分鐘 XR 用餐體驗，混合了網路迷因、表情符號和真實食物。您與迷因角色互動，敲響虛擬鈴鐺，並俏皮地探索數位文化如何與您的餐桌相遇。",
          image: img02
        },
        {
          year: '2026',
          title: '🍽️Dinegital 2.0 (2026 年推出)',
          subtitle: '"讓用餐變成一場冒險！"',
          desc: "明年，我們將更進一步。這個新的、更長的版本將包含原創故事、AI 驅動的角色和多人互動。您將自由行走，通過提供數位菜餚觸發事件，並與虛擬服務員聊天——將每頓飯變成沉浸式故事。",
          image: img03
        }
      ]
    }
  }

  const t = content[currentLang]

  return (
    <Layout>
      <Seo title="Gallery" />
      <section className="px-6 py-12 max-w-7xl w-full mx-auto min-h-screen pb-32 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-16 text-center md:text-left">{t.title}</h2>
        <div className="relative md:border-l-4 border-yellow-400 md:pl-8">
          {t.projects.map((project, idx) => (
            <div key={idx} className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 relative text-center md:text-left">
              {/* timeline dot & year */}
              <div className="flex flex-col items-center md:block md:relative md:w-24 md:flex-shrink-0">
                <div className="w-4 h-4 bg-yellow-400 rounded-full border-4 border-black mb-2 md:mb-0 md:absolute md:-left-6 md:top-2"></div>
                <div className="text-yellow-400 font-bold text-lg pt-2 md:pt-0 md:text-left">{project.year}</div>
              </div>
              {/* 卡片 */}
              <div className="w-full max-w-md md:max-w-5xl bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start mx-auto md:mx-0 md:auto">
                <img src={project.image} alt={project.title} className="w-64 h-40 md:w-80 md:h-auto object-contain rounded-md border border-gray-800 flex-shrink-0 mx-auto md:mx-0" />
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="text-gray-500 mb-2 text-base">{project.subtitle}</div>
                  <div className="text-gray-400 leading-loose whitespace-pre-line">{project.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
