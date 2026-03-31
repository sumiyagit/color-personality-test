export default function HairColorGuide({ hairColors }) {
  if (!hairColors) return null

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">💇</span>
        <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider">
          Hair Color Guide
        </h4>
      </div>

      {/* Best hair colors */}
      <div className="mb-4">
        <p className="text-xs text-green-400/70 font-medium mb-2">Flattering Shades</p>
        <div className="grid grid-cols-2 gap-2">
          {hairColors.best.map((color, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-white/5 rounded-xl p-2.5">
              <div
                className="w-8 h-8 rounded-full shadow-inner ring-1 ring-white/10 flex-shrink-0"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs text-white/60">{color.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avoid hair colors */}
      <div>
        <p className="text-xs text-red-400/70 font-medium mb-2">Better to Avoid</p>
        <div className="grid grid-cols-3 gap-2">
          {hairColors.avoid.map((color, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 bg-white/5 rounded-xl p-2.5">
              <div
                className="w-7 h-7 rounded-full shadow-inner ring-1 ring-white/10 relative"
                style={{ backgroundColor: color.hex }}
              >
                <div className="absolute inset-0 rounded-full flex items-center justify-center">
                  <div className="w-5 h-0.5 bg-red-400/60 rotate-45 rounded-full" />
                </div>
              </div>
              <span className="text-[10px] text-white/40 text-center">{color.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
