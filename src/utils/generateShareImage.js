export async function generateShareImage(seasonData, detectedColors) {
  const canvas = document.createElement('canvas')
  // Instagram story ratio (9:16)
  canvas.width = 1080
  canvas.height = 1920
  const ctx = canvas.getContext('2d')

  // Background gradient
  const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
  bgGradient.addColorStop(0, '#0f0f1a')
  bgGradient.addColorStop(0.5, '#1a1025')
  bgGradient.addColorStop(1, '#0f0f1a')
  ctx.fillStyle = bgGradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Decorative circles using palette colors
  const palette = seasonData.palette.best || []
  palette.slice(0, 6).forEach((color, i) => {
    ctx.beginPath()
    const x = 100 + (i % 3) * 350 + Math.random() * 100
    const y = 200 + Math.floor(i / 3) * 400 + Math.random() * 100
    const r = 80 + Math.random() * 120
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r)
    gradient.addColorStop(0, hexToRgba(color, 0.15))
    gradient.addColorStop(1, hexToRgba(color, 0))
    ctx.fillStyle = gradient
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fill()
  })

  // Title area
  ctx.textAlign = 'center'

  // "My Color Season" header
  ctx.font = '600 36px Inter, system-ui, sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.4)'
  ctx.fillText('MY COLOR SEASON', canvas.width / 2, 300)

  // Season emoji
  ctx.font = '120px serif'
  ctx.fillText(seasonData.emoji, canvas.width / 2, 520)

  // Season name
  ctx.font = 'bold 72px Inter, system-ui, sans-serif'
  ctx.fillStyle = '#ffffff'
  ctx.fillText(seasonData.name, canvas.width / 2, 650)

  // Subtitle
  ctx.font = '600 32px Inter, system-ui, sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.5)'
  ctx.fillText(seasonData.subtitle, canvas.width / 2, 710)

  // Color palette strip
  const paletteY = 820
  const swatchSize = 70
  const gap = 14
  const totalWidth = palette.slice(0, 8).length * (swatchSize + gap) - gap
  const startX = (canvas.width - totalWidth) / 2

  palette.slice(0, 8).forEach((color, i) => {
    const x = startX + i * (swatchSize + gap)
    ctx.beginPath()
    ctx.roundRect(x, paletteY, swatchSize, swatchSize, 16)
    ctx.fillStyle = color
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.1)'
    ctx.lineWidth = 1
    ctx.stroke()
  })

  // Detected colors section
  if (detectedColors) {
    const colorY = 980
    ctx.font = '500 24px Inter, system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    ctx.fillText('MY NATURAL COLORS', canvas.width / 2, colorY)

    const detectedItems = [
      { label: 'Skin', color: detectedColors.skin },
      { label: 'Eyes', color: detectedColors.eyes },
      { label: 'Hair', color: detectedColors.hair },
    ].filter(d => d.color)

    const circleSize = 50
    const circleGap = 120
    const circleStartX = canvas.width / 2 - ((detectedItems.length - 1) * circleGap) / 2

    detectedItems.forEach((item, i) => {
      const cx = circleStartX + i * circleGap
      const cy = colorY + 60

      ctx.beginPath()
      ctx.arc(cx, cy, circleSize, 0, Math.PI * 2)
      ctx.fillStyle = item.color.hex
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.2)'
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.font = '400 20px Inter, system-ui, sans-serif'
      ctx.fillStyle = 'rgba(255,255,255,0.5)'
      ctx.fillText(item.label, cx, cy + circleSize + 30)
    })
  }

  // Personality snippet
  if (seasonData.personality) {
    const maxWidth = canvas.width - 200
    ctx.font = '400 28px Inter, system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.5)'
    const words = seasonData.personality.split(' ').slice(0, 15).join(' ') + '...'
    wrapText(ctx, `"${words}"`, canvas.width / 2, 1250, maxWidth, 38)
  }

  // Celebrity matches
  if (seasonData.celebrities) {
    ctx.font = '500 24px Inter, system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    ctx.fillText('CELEBRITIES WITH MY PALETTE', canvas.width / 2, 1450)
    ctx.font = '400 28px Inter, system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.6)'
    ctx.fillText(seasonData.celebrities.slice(0, 3).join('  •  '), canvas.width / 2, 1500)
  }

  // Style keywords
  if (seasonData.styleKeywords) {
    ctx.font = '500 22px Inter, system-ui, sans-serif'
    ctx.fillStyle = 'rgba(255,255,255,0.3)'
    const keywords = seasonData.styleKeywords.join('  ·  ')
    ctx.fillText(keywords, canvas.width / 2, 1600)
  }

  // Footer / branding
  ctx.font = '500 24px Inter, system-ui, sans-serif'
  ctx.fillStyle = 'rgba(255,255,255,0.2)'
  ctx.fillText('Discover your colors', canvas.width / 2, 1800)

  // Purple accent line
  const accentGradient = ctx.createLinearGradient(canvas.width * 0.3, 0, canvas.width * 0.7, 0)
  accentGradient.addColorStop(0, 'rgba(168, 85, 247, 0)')
  accentGradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.5)')
  accentGradient.addColorStop(1, 'rgba(236, 72, 153, 0)')
  ctx.fillStyle = accentGradient
  ctx.fillRect(canvas.width * 0.2, 1840, canvas.width * 0.6, 2)

  return new Promise(resolve => {
    canvas.toBlob(blob => resolve(blob), 'image/png')
  })
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ')
  let line = ''
  let ly = y

  for (const word of words) {
    const testLine = line + word + ' '
    const metrics = ctx.measureText(testLine)
    if (metrics.width > maxWidth && line) {
      ctx.fillText(line.trim(), x, ly)
      line = word + ' '
      ly += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line.trim(), x, ly)
}
