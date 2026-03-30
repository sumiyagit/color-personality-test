export default function DetectedColors({ colors }) {
  const items = [
    { label: 'Skin', color: colors.skin },
    { label: 'Eyes', color: colors.eyes },
    { label: 'Hair', color: colors.hair },
  ]

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
      <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Detected Colors</h4>
      <div className="flex justify-around">
        {items.map(item => (
          <div key={item.label} className="flex flex-col items-center gap-2">
            <div
              className="w-12 h-12 rounded-full border-2 border-white/20 shadow-lg"
              style={{ backgroundColor: item.color?.hex || '#888' }}
            />
            <span className="text-xs text-white/50">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
