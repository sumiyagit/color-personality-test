import { useState } from 'react'

const categories = [
  { key: 'lipColors', label: 'Lips', icon: '💋' },
  { key: 'eyeshadow', label: 'Eyes', icon: '👁️' },
  { key: 'blush', label: 'Blush', icon: '🌸' },
  { key: 'nailPolish', label: 'Nails', icon: '💅' },
]

export default function BeautyGuide({ beauty }) {
  const [activeCategory, setActiveCategory] = useState('lipColors')
  const [copiedHex, setCopiedHex] = useState(null)

  if (!beauty) return null

  const activeItems = beauty[activeCategory] || []

  const copyToClipboard = (hex) => {
    navigator.clipboard?.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 1500)
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 animate-slide-up">
      <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">
        Beauty & Makeup Guide
      </h4>

      {/* Category tabs */}
      <div className="flex gap-1 mb-4 overflow-x-auto no-scrollbar">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.key
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/20'
                : 'bg-white/5 text-white/40 hover:text-white/60'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Color swatches */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {activeItems.map((item, i) => (
          <button
            key={i}
            onClick={() => copyToClipboard(item.hex)}
            className="flex items-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors text-left group"
          >
            <div
              className="w-10 h-10 rounded-xl shadow-inner flex-shrink-0 ring-1 ring-white/10"
              style={{ backgroundColor: item.hex }}
            />
            <div className="min-w-0">
              <p className="text-xs text-white/70 font-medium truncate">{item.name}</p>
              <p className="text-[10px] text-white/30 font-mono">
                {copiedHex === item.hex ? 'Copied!' : item.hex.toUpperCase()}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Foundation guide */}
      {beauty.foundationUndertone && (
        <div className="bg-white/5 rounded-xl p-3 mb-3">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-sm">🧴</span>
            <span className="text-xs font-semibold text-white/70">Foundation Guide</span>
          </div>
          <p className="text-xs text-white/50 leading-relaxed">
            {beauty.foundationUndertone}
          </p>
        </div>
      )}

      {/* Metal guide */}
      {beauty.bestMetals && (
        <div className="bg-white/5 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">💍</span>
            <span className="text-xs font-semibold text-white/70">Best Metals</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {beauty.bestMetals.map((metal, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-yellow-500/10 to-amber-500/10 text-amber-300/80 border border-amber-500/10"
              >
                {metal}
              </span>
            ))}
          </div>
          {beauty.avoidMetals && (
            <div className="mt-2">
              <span className="text-[10px] text-white/30">Avoid: </span>
              <span className="text-[10px] text-white/40">{beauty.avoidMetals.join(', ')}</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
