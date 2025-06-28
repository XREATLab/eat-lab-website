import React, { useRef, useEffect } from 'react'

import playerThin from '../images/player_thin.png'
import playerLitfat from '../images/player_litfat.png'
import playerFat from '../images/player_fat.png'
import food1 from '../images/food1.png'
import food2 from '../images/food2.png'
import food3 from '../images/food3.png'
import food4 from '../images/food4.png'

const playerImgs = [playerThin, playerLitfat, playerFat]
const foodImgs = [food1, food2, food3, food4]

const PLAYER_SIZE = 56 * 2.5 // 原本56，放大2.5倍
const FOOD_SIZE = 40 * 2.5   // 原本40，放大2.5倍

function randomFood(width, height) {
  return {
    x: Math.random() * (width - FOOD_SIZE - 40) + FOOD_SIZE/2 + 20,
    y: Math.random() * (height - FOOD_SIZE - 40) + FOOD_SIZE/2 + 20,
    img: foodImgs[Math.floor(Math.random() * foodImgs.length)],
    eaten: false,
    id: Math.random() + '' + Date.now(),
  }
}

function spawnParticles(x, y, color = null, count = 18, size = 3, speed = 3) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push({
      x, y,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      life: 18 + Math.random() * 10,
      color: color || `hsl(${Math.random()*360},90%,70%)`,
      size,
    })
  }
  return arr
}

function createStars(width, height, count = 120) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.2 + 0.5,
    alpha: Math.random() * 0.5 + 0.5,
    speed: Math.random() * 0.2 + 0.05,
  }))
}

// 載入所有圖片，回傳 { playerImgs: [...Image], foodImgs: [...Image] }
function usePreloadImages() {
  const [loaded, setLoaded] = React.useState(false)
  const loadedImgs = useRef({ player: [], food: [] })
  useEffect(() => {
    let loadedCount = 0
    const total = playerImgs.length + foodImgs.length
    playerImgs.forEach((src, i) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        loadedImgs.current.player[i] = img
        loadedCount++
        if (loadedCount === total) setLoaded(true)
      }
    })
    foodImgs.forEach((src, i) => {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        loadedImgs.current.food[i] = img
        loadedCount++
        if (loadedCount === total) setLoaded(true)
      }
    })
  }, [])
  return loaded ? loadedImgs.current : null
}

const Loading = ({ title = 'E.A.T. Lab', subtitle = 'Loading...', fadeOut = false, foodToNextStage = [2, 4] }) => {
  const canvasRef = useRef(null)
  const reqRef = useRef()
  const playerState = useRef({ x: 0, y: 0, vx: 0, vy: 0, size: 48, fat: 0 })
  const foods = useRef([])
  const particles = useRef([])
  const mouse = useRef({ x: 0, y: 0 })
  const stars = useRef([])
  const size = useRef({ width: 800, height: 600 })
  const images = usePreloadImages()
  const foodEaten = useRef(0)

  // Resize canvas to full window
  useEffect(() => {
    function handleResize() {
      size.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
      if (canvasRef.current) {
        canvasRef.current.width = size.current.width
        canvasRef.current.height = size.current.height
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 初始化 player, food, stars
  useEffect(() => {
    playerState.current.x = window.innerWidth / 2
    playerState.current.y = window.innerHeight / 2
    mouse.current.x = playerState.current.x
    mouse.current.y = playerState.current.y
    foods.current = [randomFood(window.innerWidth, window.innerHeight), randomFood(window.innerWidth, window.innerHeight), randomFood(window.innerWidth, window.innerHeight)]
    stars.current = createStars(window.innerWidth, window.innerHeight, 120)
  }, [])

  // 滑鼠移動控制
  useEffect(() => {
    const onMouseMove = e => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      mouse.current.x = (e.clientX - rect.left) * (canvasRef.current.width / rect.width)
      mouse.current.y = (e.clientY - rect.top) * (canvasRef.current.height / rect.height)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  useEffect(() => {
    if (!images) return
    let running = true
    function draw() {
      if (!canvasRef.current) return
      const width = size.current.width
      const height = size.current.height
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return
      ctx.imageSmoothingEnabled = false
      ctx.clearRect(0, 0, width, height)
      if (fadeOut) {
        ctx.globalAlpha = 0
        return
      }
      // 星空背景
      ctx.fillStyle = '#090c18'
      ctx.fillRect(0, 0, width, height)
      stars.current.forEach(star => {
        ctx.globalAlpha = star.alpha
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
        ctx.fillStyle = '#fff'
        ctx.fill()
        ctx.globalAlpha = 1
      })
      // 食物
      foods.current.forEach(f => {
        if (!f.eaten) {
          const idx = foodImgs.indexOf(f.img)
          if (images.food[idx]) ctx.drawImage(images.food[idx], f.x-FOOD_SIZE/2, f.y-FOOD_SIZE/2, FOOD_SIZE, FOOD_SIZE)
        }
      })
      // 粒子
      particles.current.forEach(p => {
        ctx.fillStyle = p.color
        ctx.fillRect(p.x, p.y, p.size || 3, p.size || 3)
      })
      // 玩家
      const p = playerState.current
      const img = images.player[p.fat]
      if (img) {
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const v = Math.sqrt(dx*dx + dy*dy)
        let angle = 0
        if (v > 1) {
          angle = Math.max(Math.min(-dx * 0.04, 0.38), -0.38)
        }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(angle)
        ctx.drawImage(img, -PLAYER_SIZE/2, -PLAYER_SIZE/2, PLAYER_SIZE, PLAYER_SIZE)
        ctx.restore()
      }
      // 標題
      ctx.font = 'bold 40px monospace'
      ctx.fillStyle = '#fff'
      ctx.textAlign = 'center'
      ctx.shadowColor = '#000'
      ctx.shadowBlur = 8
      ctx.fillText(title, width/2, 100)
      ctx.shadowBlur = 0
      ctx.font = '20px monospace'
      ctx.fillStyle = '#ff0'
      ctx.fillText(subtitle, width/2, height-40)
    }
    function update() {
      if (fadeOut) return // 淡出時停止玩家移動
      const width = size.current.width
      const height = size.current.height
      // 玩家移動
      const p = playerState.current
      if (p.lastX === undefined) p.lastX = p.x
      if (p.lastY === undefined) p.lastY = p.y
      const prevX = p.x
      const prevY = p.y
      p.x += (mouse.current.x - p.x) * 0.13
      p.y += (mouse.current.y - p.y) * 0.13
      // 噴射粒子（根據移動方向）
      const dx = p.x - prevX
      const dy = p.y - prevY
      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        const angle = Math.atan2(dy, dx) + Math.PI
        const px = p.x - Math.cos(angle) * PLAYER_SIZE * 0.38
        const py = p.y - Math.sin(angle) * PLAYER_SIZE * 0.38
        particles.current.push(...spawnParticles(px, py, '#fff', 2, 4, 2.5))
      }
      p.lastX = p.x
      p.lastY = p.y
      // 食物碰撞
      foods.current.forEach(f => {
        if (!f.eaten && Math.hypot(f.x-p.x, f.y-p.y) < (PLAYER_SIZE+FOOD_SIZE)/4) {
          f.eaten = true
          foodEaten.current++
          // 根據 foodToNextStage 控制 player 變身
          if (foodEaten.current >= foodToNextStage[0] && p.fat === 0) p.fat = 1
          if (foodEaten.current >= foodToNextStage[0] + foodToNextStage[1] && p.fat === 1) p.fat = 2
          particles.current.push(...spawnParticles(f.x, f.y))
        }
      })
      // 粒子動畫
      particles.current.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.life--
      })
      particles.current = particles.current.filter(p => p.life > 0)
      // 食物 respawn
      if (foods.current.filter(f=>!f.eaten).length < 2) {
        foods.current.push(randomFood(width, height))
      }
      // 星空移動
      stars.current.forEach(star => {
        star.x += star.speed
        if (star.x > width) star.x = 0
      })
    }
    function loop() {
      if (!running) return
      update()
      draw()
      reqRef.current = requestAnimationFrame(loop)
    }
    loop()
    return () => {
      running = false
      cancelAnimationFrame(reqRef.current)
    }
  }, [images, fadeOut, foodToNextStage])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{
          width: '100vw',
          height: '100vh',
          display: fadeOut ? 'none' : 'block',
          imageRendering: 'pixelated',
          background: '#090c18',
        }}
      />
    </div>
  )
}

export default Loading 