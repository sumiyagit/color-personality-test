export default function OutfitMoodBoard({ recs, seasonData }) {
  if (!recs || !seasonData) return null

  const palette = seasonData.palette.best.slice(0, 6)

  const occasions = [
    {
      name: 'Everyday Casual',
      icon: '☕',
      outfit: [
        { piece: recs.tops?.styles?.[3] || 'Relaxed tee', color: palette[0] },
        { piece: recs.bottoms?.styles?.[2] || 'Jeans', color: palette[4] },
        { piece: recs.accessories?.styles?.[3] || 'Bag', color: palette[2] },
      ],
    },
    {
      name: 'Work / Office',
      icon: '💼',
      outfit: [
        { piece: recs.tops?.styles?.[1] || 'Blouse', color: palette[1] },
        { piece: recs.bottoms?.styles?.[0] || 'Trousers', color: seasonData.palette.neutral?.[0] || palette[3] },
        { piece: recs.outerwear?.styles?.[1] || 'Blazer', color: palette[5] },
      ],
    },
    {
      name: 'Evening Out',
      icon: '🌙',
      outfit: [
        { piece: recs.tops?.styles?.[0] || 'Silk top', color: palette[3] },
        { piece: recs.bottoms?.styles?.[3] || 'Statement piece', color: palette[1] },
        { piece: recs.accessories?.styles?.[0] || 'Statement jewelry', color: palette[5] },
      ],
    },
  ]

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">👗</span>
        <h4 className="text-sm font-semibold text-white">Outfit Ideas by Occasion</h4>
      </div>
      <p className="text-xs text-white/30 mb-4">Color combinations that work for you</p>

      <div className="space-y-3">
        {occasions.map((occ, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-3">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-sm">{occ.icon}</span>
              <span className="text-xs font-semibold text-white/70">{occ.name}</span>
            </div>

            <div className="flex gap-2">
              {occ.outfit.map((item, j) => (
                <div key={j} className="flex-1 flex flex-col items-center gap-1.5">
                  <div
                    className="w-full aspect-square rounded-xl ring-1 ring-white/10"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[10px] text-white/40 text-center leading-tight">
                    {item.piece}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
