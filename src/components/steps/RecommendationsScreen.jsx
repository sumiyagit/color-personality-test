import { useApp } from '../../context/AppContext'
import { seasonalTypes } from '../../data/seasonalTypes'
import { clothingRecommendations } from '../../data/clothingRecommendations'
import ClothingCard from '../results/ClothingCard'
import CapsuleWardrobe from '../results/CapsuleWardrobe'
import OutfitMoodBoard from '../results/OutfitMoodBoard'
import ShareButton from '../share/ShareButton'

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
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${seasonData.gradient} bg-opacity-10`}
          style={{ background: `linear-gradient(to right, ${seasonData.accentColor}15, ${seasonData.accentColor}08)` }}
        >
          <span className="text-xl">{seasonData.emoji}</span>
          <span className="text-sm font-semibold text-white">{seasonData.name}</span>
        </div>
        <h2 className="text-xl font-bold text-white mt-3 mb-1">
          Your Complete Style Guide
        </h2>
        <p className="text-white/40 text-xs">
          Everything you need to dress in your best colors
        </p>
      </div>

      {/* Outfit mood boards by occasion */}
      <OutfitMoodBoard recs={recs} seasonData={seasonData} />

      {/* Capsule wardrobe */}
      <CapsuleWardrobe subSeason={subSeason} />

      {/* Clothing categories - collapsible */}
      <div>
        <h3 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3 px-1">
          Detailed Recommendations
        </h3>
        <div className="space-y-2">
          {['tops', 'bottoms', 'outerwear', 'accessories'].map((category, i) => (
            <div key={category} className="animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <ClothingCard category={category} data={recs[category]} />
            </div>
          ))}
        </div>
      </div>

      {/* Fabrics & Patterns */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm">🧵</span>
            <h4 className="text-xs font-semibold text-white/70">Best Fabrics</h4>
          </div>
          <div className="space-y-1.5">
            {recs.fabrics.map((fabric, i) => (
              <span key={i} className="block text-xs text-white/50 bg-white/5 rounded-lg px-2.5 py-1.5">
                {fabric}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm">🎨</span>
            <h4 className="text-xs font-semibold text-white/70">Best Patterns</h4>
          </div>
          <div className="space-y-1.5">
            {recs.patterns.map((pattern, i) => (
              <span key={i} className="block text-xs text-white/50 bg-purple-500/5 rounded-lg px-2.5 py-1.5">
                {pattern}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Share + Start Over */}
      <div className="space-y-3 pt-2">
        <ShareButton seasonData={seasonData} detectedColors={state.detectedColors} />

        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-medium active:scale-[0.98] transition-all"
        >
          Start Over
        </button>
      </div>
    </div>
  )
}
