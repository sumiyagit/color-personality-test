import { useEffect, useRef } from 'react'

export default function Confetti({ colors = [], duration = 3000 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const confettiColors = colors.length > 0
      ? colors
      : ['#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444']

    const pieces = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: 6 + Math.random() * 6,
      h: 4 + Math.random() * 4,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      speedX: (Math.random() - 0.5) * 3,
      speedY: 2 + Math.random() * 4,
      opacity: 1,
    }))

    let animId
    const startTime = Date.now()

    function animate() {
      const elapsed = Date.now() - startTime
      if (elapsed > duration) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const fadeProgress = Math.max(0, (elapsed - duration * 0.6) / (duration * 0.4))

      pieces.forEach(p => {
        p.y += p.speedY
        p.x += p.speedX
        p.rotation += p.rotationSpeed
        p.speedY += 0.05 // gravity
        p.speedX *= 0.99 // air resistance
        p.opacity = 1 - fadeProgress

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
      })

      animId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animId)
  }, [colors, duration])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}
