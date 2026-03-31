import DimensionSlider from './DimensionSlider'

export default function AnalysisBreakdown({ dimensions }) {
  if (!dimensions) return null

  const dimensionList = [
    { key: 'undertone', icon: '🎨', title: 'Undertone' },
    { key: 'depth', icon: '🌗', title: 'Value / Depth' },
    { key: 'chroma', icon: '✨', title: 'Chroma / Clarity' },
  ]

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 animate-fade-in">
      <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-1">
        How We Determined Your Season
      </h4>
      <p className="text-white/30 text-xs mb-4">
        Your season is determined by three dimensions of your natural coloring
      </p>

      <div className="space-y-5">
        {dimensionList.map(({ key, icon, title }, i) => {
          const dim = dimensions[key]
          if (!dim) return null

          return (
            <div
              key={key}
              className="animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">{icon}</span>
                <span className="text-xs font-semibold text-white/80">{title}</span>
              </div>

              <DimensionSlider
                value={dim.value}
                min={dim.min}
                max={dim.max}
                labelLeft={dim.labelLeft}
                labelRight={dim.labelRight}
              />

              <p className="text-white/40 text-xs mt-1.5 leading-relaxed">
                {dim.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
