import { useState } from 'react'

export default function ColorPalette({ colors, colorNames, title = 'Your Best Colors', variant = 'best' }) {
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [copiedHex, setCopiedHex] = useState(null)

  const copyHex = (hex, idx) => {
    navigator.clipboard?.writeText(hex)
    setCopiedHex(hex)
    setSelectedIdx(idx)
    setTimeout(() => setCopiedHex(null), 1500)
  }

  const isAvoid = variant === 'avoid'

  return (
    <div className={`bg-white/5 border rounded-2xl p-4 ${
      isAvoid ? 'border-red-500/10' : 'border-white/10'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">{title}</h4>
        {!isAvoid && (
          <span className="text-[10px] text-white/20">Tap to copy</span>
        )}
      </div>

      <div className="grid grid-cols-6 gap-2">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => copyHex(color, i)}
            className={`flex flex-col items-center gap-1 group transition-transform ${
              selectedIdx === i ? 'scale-110' : 'hover:scale-105'
            }`}
          >
            <div
              className={`w-full aspect-square rounded-xl shadow-inner ring-1 transition-all ${
                selectedIdx === i
                  ? 'ring-white ring-offset-1 ring-offset-[#0f0f1a]'
                  : 'ring-white/10 group-hover:ring-white/30'
              } ${isAvoid ? 'relative' : ''}`}
              style={{ backgroundColor: color }}
            >
              {isAvoid && (
                <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                  <div className="w-3/4 h-0.5 bg-red-400/50 rotate-45 rounded-full" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Selected color detail */}
      {selectedIdx !== null && colorNames && (
        <div className="mt-3 flex items-center justify-center gap-2 bg-white/5 rounded-xl py-2 px-3 animate-fade-in">
          <div
            className="w-5 h-5 rounded-md ring-1 ring-white/20"
            style={{ backgroundColor: colors[selectedIdx] }}
          />
          <span className="text-xs text-white/60">
            {colorNames[selectedIdx] || colors[selectedIdx]}
          </span>
          <span className="text-[10px] text-white/30 font-mono">
            {copiedHex === colors[selectedIdx] ? 'Copied!' : colors[selectedIdx]?.toUpperCase()}
          </span>
        </div>
      )}
    </div>
  )
}
