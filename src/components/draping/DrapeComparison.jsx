import { useState } from 'react'
import ColorDrape from './ColorDrape'

export default function DrapeComparison({ imageSrc, bestColors, avoidColors, landmarks }) {
  const [activeTab, setActiveTab] = useState('best')
  const [selectedIdx, setSelectedIdx] = useState(0)

  const colors = activeTab === 'best' ? bestColors : avoidColors
  const currentColor = colors[selectedIdx] || colors[0]

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-fade-in">
      <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
        Virtual Color Draping
      </h4>

      {/* Tab switcher */}
      <div className="flex gap-1 mb-4 bg-white/5 rounded-xl p-1">
        <button
          onClick={() => { setActiveTab('best'); setSelectedIdx(0) }}
          className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'best'
              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/20'
              : 'text-white/40 hover:text-white/60'
          }`}
        >
          Your Best Colors
        </button>
        <button
          onClick={() => { setActiveTab('avoid'); setSelectedIdx(0) }}
          className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
            activeTab === 'avoid'
              ? 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-400 border border-red-500/20'
              : 'text-white/40 hover:text-white/60'
          }`}
        >
          Colors to Avoid
        </button>
      </div>

      {/* Drape preview */}
      <div className="flex justify-center mb-4">
        <ColorDrape
          imageSrc={imageSrc}
          color={currentColor}
          landmarks={landmarks}
          size="lg"
        />
      </div>

      {/* Color selector */}
      <div className="flex justify-center gap-2 flex-wrap">
        {colors.slice(0, 8).map((color, i) => (
          <button
            key={i}
            onClick={() => setSelectedIdx(i)}
            className={`w-8 h-8 rounded-full transition-all duration-200 ${
              i === selectedIdx
                ? 'ring-2 ring-white ring-offset-2 ring-offset-[#0f0f1a] scale-110'
                : 'hover:scale-105 opacity-70 hover:opacity-100'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Try color ${color}`}
          />
        ))}
      </div>

      <p className="text-center text-white/30 text-xs mt-3">
        {activeTab === 'best'
          ? 'See how your best colors complement your natural coloring'
          : 'Notice how these colors clash with your undertone'
        }
      </p>
    </div>
  )
}
