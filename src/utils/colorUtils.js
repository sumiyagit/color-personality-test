export function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s
  const l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }

  return { h: h * 360, s, l }
}

export function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('')
}

export function medianColor(pixels) {
  if (pixels.length === 0) return { r: 128, g: 128, b: 128 }

  // Filter outliers (very dark shadows / very bright highlights)
  const filtered = pixels.filter(p => {
    const { l } = rgbToHsl(p.r, p.g, p.b)
    return l > 0.05 && l < 0.95
  })

  const data = filtered.length > 0 ? filtered : pixels

  // Sort by luminance and take median
  const sorted = [...data].sort((a, b) => {
    const la = 0.299 * a.r + 0.587 * a.g + 0.114 * a.b
    const lb = 0.299 * b.r + 0.587 * b.g + 0.114 * b.b
    return la - lb
  })

  const mid = Math.floor(sorted.length / 2)
  const median = sorted[mid]

  return {
    r: median.r,
    g: median.g,
    b: median.b,
    hex: rgbToHex(median.r, median.g, median.b),
    hsl: rgbToHsl(median.r, median.g, median.b),
  }
}

export function getContrastRatio(color1, color2) {
  const lum1 = 0.299 * color1.r + 0.587 * color1.g + 0.114 * color1.b
  const lum2 = 0.299 * color2.r + 0.587 * color2.g + 0.114 * color2.b
  return Math.abs(lum1 - lum2) / 255
}

export function getSaturation(color) {
  const { s } = rgbToHsl(color.r, color.g, color.b)
  return s
}
