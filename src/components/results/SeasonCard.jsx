export default function SeasonCard({ seasonData }) {
  if (!seasonData) return null

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 animate-fade-in">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${seasonData.gradient} opacity-15`} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />

      <div className="relative p-5">
        {/* Emoji and name */}
        <div className="text-center mb-3">
          <span className="text-5xl block mb-2">{seasonData.emoji}</span>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {seasonData.name}
          </h2>
          <p className="text-white/50 text-sm font-medium mt-0.5">
            {seasonData.subtitle}
          </p>
        </div>

        {/* Style keywords */}
        {seasonData.styleKeywords && (
          <div className="flex justify-center gap-1.5 mb-3 flex-wrap">
            {seasonData.styleKeywords.map((keyword, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50 font-medium"
              >
                {keyword}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed text-center mb-3">
          {seasonData.description}
        </p>

        {/* Personality */}
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-xs text-white/30 uppercase tracking-wider font-medium mb-1">
            Personality
          </p>
          <p className="text-white/50 text-xs leading-relaxed">
            {seasonData.personality}
          </p>
        </div>

        {/* Celebrity matches */}
        {seasonData.celebrities && (
          <div className="mt-3 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-wider font-medium mb-1">
              Celebrity Matches
            </p>
            <p className="text-white/50 text-xs">
              {seasonData.celebrities.join('  ·  ')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
