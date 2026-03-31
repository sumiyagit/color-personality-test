export default function DetectedColors({ colors }) {
  if (!colors) return null

  const items = [
    { label: 'Skin', sublabel: 'Undertone', color: colors.skin },
    { label: 'Eyes', sublabel: 'Iris color', color: colors.eyes },
    { label: 'Hair', sublabel: 'Natural shade', color: colors.hair },
  ]

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Your Detected Colors</h4>
      <div className="flex justify-around">
        {items.map((item, i) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1.5 animate-scale-in"
            style={{ animationDelay: `${i * 0.15 + 0.2}s` }}
          >
            <div className="relative">
              <div
                className="w-14 h-14 rounded-full shadow-lg ring-2 ring-white/10"
                style={{ backgroundColor: item.color?.hex || '#888' }}
              />
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-md opacity-30"
                style={{ backgroundColor: item.color?.hex || '#888' }}
              />
            </div>
            <span className="text-xs text-white/60 font-medium">{item.label}</span>
            {item.color?.hex && (
              <span className="text-[10px] text-white/25 font-mono">{item.color.hex.toUpperCase()}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
