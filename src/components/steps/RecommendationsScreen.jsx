import { useApp } from '../../context/AppContext'
import { seasonalTypes } from '../../data/seasonalTypes'
import { clothingRecommendations } from '../../data/clothingRecommendations'
import ClothingCard from '../results/ClothingCard'

export default function RecommendationsScreen() {
  const { state, dispatch } = useApp()
  const subSeason = state.subSeasonResult
  const seasonData = seasonalTypes[subSeason]
  const recs = clothingRecommendations[subSeason]

  if (!seasonData || !recs) {
    return (
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-white/50 mb-4">No recommendations available.</p>
          <button
            onClick={() => dispatch({ type: 'RESET' })}
            className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-sm"
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 px-5 py-4 max-w-md mx-auto w-full space-y-4 pb-24">
      {/* Header */}
      <div className="text-center animate-fade-in">
        <span className="text-3xl mb-2 block">{seasonData.emoji}</span>
        <h2 className="text-xl font-bold text-white mb-1">
          Style Guide for {seasonData.name}
        </h2>
        <p className="text-white/50 text-sm">
          Clothing recommendations tailored to your color season
        </p>
      </div>

      {/* Clothing categories */}
      {['tops', 'bottoms', 'outerwear', 'accessories'].map((category, i) => (
        <div key={category} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
          <ClothingCard category={category} data={recs[category]} />
        </div>
      ))}

      {/* Fabrics */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🧵</span>
          <h4 className="text-sm font-semibold text-white">Best Fabrics</h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {recs.fabrics.map((fabric, i) => (
            <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70">
              {fabric}
            </span>
          ))}
        </div>
      </div>

      {/* Patterns */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg">🎨</span>
          <h4 className="text-sm font-semibold text-white">Best Patterns</h4>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {recs.patterns.map((pattern, i) => (
            <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300/80">
              {pattern}
            </span>
          ))}
        </div>
      </div>

      {/* Start over */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a] to-transparent">
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="w-full max-w-md mx-auto block py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold text-base active:scale-[0.98] transition-all"
        >
          Start Over
        </button>
      </div>
    </div>
  )
}
