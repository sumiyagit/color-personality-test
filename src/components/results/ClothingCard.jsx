import { useState } from 'react'

const categoryLabels = {
  tops: 'Tops',
  bottoms: 'Bottoms',
  outerwear: 'Outerwear',
  accessories: 'Accessories',
}

const categoryEmojis = {
  tops: '👕',
  bottoms: '👖',
  outerwear: '🧥',
  accessories: '💍',
}

export default function ClothingCard({ category, data }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      {/* Header - clickable */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{categoryEmojis[category]}</span>
          <h4 className="text-sm font-semibold text-white">{categoryLabels[category]}</h4>
        </div>

        {/* Color dots preview */}
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1">
            {data.colors.slice(0, 4).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full ring-1 ring-[#0f0f1a]"
                style={{
                  backgroundColor: getCSSColor(data.colors[i]),
                  zIndex: 4 - i,
                }}
              />
            ))}
          </div>
          <svg
            className={`w-4 h-4 text-white/30 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 space-y-3 border-t border-white/5 pt-3">
          {/* Colors */}
          <div>
            <p className="text-xs text-white/40 mb-1.5">Best colors</p>
            <div className="flex flex-wrap gap-1.5">
              {data.colors.map((color, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70 flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-white/20 inline-block"
                    style={{ backgroundColor: getCSSColor(color) }}
                  />
                  {color}
                </span>
              ))}
            </div>
          </div>

          {/* Styles */}
          <div>
            <p className="text-xs text-white/40 mb-1.5">Recommended styles</p>
            <div className="flex flex-wrap gap-1.5">
              {data.styles.map((style, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300/80">
                  {style}
                </span>
              ))}
            </div>
          </div>

          {/* Avoid */}
          {data.avoid && (
            <div>
              <p className="text-xs text-white/40 mb-1.5">Avoid</p>
              <div className="flex flex-wrap gap-1.5">
                {data.avoid.map((item, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-400/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Map common color names to CSS-approximate values
function getCSSColor(name) {
  const map = {
    'peach': '#FFDAB9', 'coral': '#FF7F50', 'gold': '#FFD700', 'camel': '#C4A882',
    'ivory': '#FFFFF0', 'cream': '#FFFDD0', 'tan': '#D2B48C', 'cognac': '#9A463D',
    'olive': '#808000', 'rust': '#B7410E', 'mustard': '#E1AD01', 'burgundy': '#800020',
    'navy': '#000080', 'charcoal': '#36454F', 'slate': '#708090', 'berry': '#8E4585',
    'plum': '#8E4585', 'sage': '#BCB88A', 'mauve': '#E0B0FF', 'taupe': '#483C32',
    'black': '#000000', 'white': '#FFFFFF', 'silver': '#C0C0C0', 'red': '#FF0000',
    'blue': '#0000FF', 'green': '#228B22', 'pink': '#FFC0CB',
  }
  const lower = name.toLowerCase()
  for (const [key, val] of Object.entries(map)) {
    if (lower.includes(key)) return val
  }
  return '#808080'
}
