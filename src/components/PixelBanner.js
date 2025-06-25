import React from 'react'

const PixelBanner = () => {
  const words = ['XR', '•', 'DINING', '•', 'GAMES', '•', 'UNITY', '•', 'CREATIVE', '•', 'TECH', '•', 'ART', '•', 'EXPERIMENT', '•']
  
  return (
    <div className="relative overflow-hidden bg-yellow-400 h-12">
      <div className="absolute flex pixel-scroll mt-2 md:mt-2">
        <div className="flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex">
              {words.map((word, index) => (
                <span
                  key={`${i}-${index}`}
                  className={`inline-block px-3 text-lg font-bold ${
                    word === '•' ? 'text-black/30' : 'text-black'
                  }`}
                  style={{ fontFamily: 'monospace' }}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PixelBanner