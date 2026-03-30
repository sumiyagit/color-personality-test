export default function ClothingCard({ category, data }) {
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

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{categoryEmojis[category]}</span>
        <h4 className="text-sm font-semibold text-white">{categoryLabels[category]}</h4>
      </div>

      {/* Colors */}
      <div className="mb-3">
        <p className="text-xs text-white/40 mb-1.5">Best colors</p>
        <div className="flex flex-wrap gap-1.5">
          {data.colors.map((color, i) => (
            <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70">
              {color}
            </span>
          ))}
        </div>
      </div>

      {/* Styles */}
      <div className="mb-3">
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
  )
}
