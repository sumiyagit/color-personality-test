import { useRef, useEffect, useState } from 'react'

export default function ColorDrape({ imageSrc, color, landmarks, size = 'md' }) {
  const canvasRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  const sizes = {
    sm: { w: 120, h: 150 },
    md: { w: 160, h: 200 },
    lg: { w: 220, h: 275 },
  }

  const { w, h } = sizes[size] || sizes.md

  useEffect(() => {
    if (!imageSrc || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const img = new Image()

    img.onload = () => {
      canvas.width = w
      canvas.height = h

      // Draw the selfie
      const scale = Math.max(w / img.width, h / img.height)
      const sw = img.width * scale
      const sh = img.height * scale
      const sx = (w - sw) / 2
      const sy = (h - sh) / 2
      ctx.drawImage(img, sx, sy, sw, sh)

      // Calculate drape area — below the chin, covering chest area
      let drapeTop = h * 0.55
      let drapeLeft = 0
      let drapeWidth = w
      let drapeHeight = h - drapeTop

      if (landmarks && landmarks.jaw) {
        // Use jaw landmarks to position the drape more accurately
        const jawPoints = landmarks.jaw
        const imgScaleX = w / img.width
        const imgScaleY = h / img.height
        const chinY = Math.max(...jawPoints.map(p => p.y * imgScaleY + sy))
        drapeTop = Math.min(chinY - 5, h * 0.65)
        drapeHeight = h - drapeTop
      }

      // Create soft drape overlay
      const gradient = ctx.createLinearGradient(0, drapeTop, 0, drapeTop + drapeHeight)
      gradient.addColorStop(0, hexToRgba(color, 0))
      gradient.addColorStop(0.15, hexToRgba(color, 0.6))
      gradient.addColorStop(0.3, hexToRgba(color, 0.8))
      gradient.addColorStop(1, hexToRgba(color, 0.85))

      // Draw drape with curved top edge
      ctx.beginPath()
      ctx.moveTo(drapeLeft, drapeTop + drapeHeight * 0.2)
      ctx.quadraticCurveTo(w * 0.25, drapeTop - 5, w * 0.5, drapeTop)
      ctx.quadraticCurveTo(w * 0.75, drapeTop - 5, drapeLeft + drapeWidth, drapeTop + drapeHeight * 0.2)
      ctx.lineTo(drapeLeft + drapeWidth, drapeTop + drapeHeight)
      ctx.lineTo(drapeLeft, drapeTop + drapeHeight)
      ctx.closePath()

      ctx.fillStyle = gradient
      ctx.fill()

      // Add subtle fabric-like highlight
      const highlight = ctx.createLinearGradient(w * 0.3, drapeTop, w * 0.7, drapeTop + drapeHeight * 0.5)
      highlight.addColorStop(0, 'rgba(255,255,255,0)')
      highlight.addColorStop(0.3, 'rgba(255,255,255,0.08)')
      highlight.addColorStop(0.5, 'rgba(255,255,255,0.12)')
      highlight.addColorStop(0.7, 'rgba(255,255,255,0.05)')
      highlight.addColorStop(1, 'rgba(255,255,255,0)')

      ctx.fillStyle = highlight
      ctx.fill()

      setLoaded(true)
    }

    img.src = imageSrc
  }, [imageSrc, color, landmarks, w, h])

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg" style={{ width: w, height: h }}>
      <canvas
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-white/5 animate-pulse rounded-2xl" />
      )}
    </div>
  )
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
