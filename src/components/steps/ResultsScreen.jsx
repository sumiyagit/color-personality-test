import { useApp } from '../../context/AppContext'
import { seasonalTypes } from '../../data/seasonalTypes'
import SeasonCard from '../results/SeasonCard'
import DetectedColors from '../results/DetectedColors'
import ColorPalette from '../results/ColorPalette'

export default function ResultsScreen() {
  const { state, dispatch } = useApp()
  const subSeason = state.subSeasonResult
  const seasonData = seasonalTypes[subSeason]

  if (!seasonData) {
    return (
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-white/50 mb-4">Could not determine your season type.</p>
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
      {/* Season scores */}
      {state.analysisScores && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-fade-in">
          <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Season Match</h4>
          <div className="space-y-2">
            {Object.entries(state.analysisScores)
              .sort(([, a], [, b]) => b - a)
              .map(([season, score]) => (
                <div key={season} className="flex items-center gap-3">
                  <span className="text-xs text-white/50 w-16 capitalize">{season}</span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${score}%`,
                        background: season === state.seasonResult
                          ? 'linear-gradient(to right, #a855f7, #ec4899)'
                          : 'rgba(255,255,255,0.2)',
                      }}
                    />
                  </div>
                  <span className="text-xs text-white/40 w-8 text-right">{score}%</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Season card */}
      <SeasonCard seasonData={seasonData} />

      {/* Detected colors */}
      <DetectedColors colors={state.detectedColors} />

      {/* Best palette */}
      <ColorPalette colors={seasonData.palette.best} title="Your Best Colors" />

      {/* Colors to avoid */}
      <ColorPalette colors={seasonData.palette.avoid} title="Colors to Avoid" />

      {/* Characteristics */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Your Characteristics</h4>
        <div className="space-y-2">
          {Object.entries(seasonData.characteristics).map(([key, value]) => (
            <div key={key} className="flex justify-between gap-2">
              <span className="text-xs text-white/40 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="text-xs text-white/70 text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Celebrity matches */}
      {seasonData.celebrities && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Celebrity Matches</h4>
          <p className="text-white/60 text-sm">{seasonData.celebrities.join(', ')}</p>
        </div>
      )}

      {/* CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a] to-transparent">
        <button
          onClick={() => dispatch({ type: 'SET_STEP', payload: 5 })}
          className="w-full max-w-md mx-auto block py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-base shadow-lg shadow-purple-500/25 active:scale-[0.98] transition-all"
        >
          See Clothing Recommendations
        </button>
      </div>
    </div>
  )
}
