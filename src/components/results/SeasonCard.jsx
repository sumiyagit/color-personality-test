export default function SeasonCard({ seasonData }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 animate-slide-up">
      <div className="text-center mb-4">
        <span className="text-5xl mb-3 block">{seasonData.emoji}</span>
        <h2 className="text-2xl font-bold text-white mb-1">{seasonData.name}</h2>
        <p className="text-purple-400 text-sm font-medium">{seasonData.subtitle}</p>
      </div>

      <p className="text-white/60 text-sm leading-relaxed text-center mb-4">
        {seasonData.description}
      </p>

      <div className="bg-white/5 rounded-2xl p-4">
        <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Personality</h4>
        <p className="text-white/70 text-sm leading-relaxed">
          {seasonData.personality}
        </p>
      </div>
    </div>
  )
}
