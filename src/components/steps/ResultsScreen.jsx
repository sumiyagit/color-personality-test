import { useState, useEffect } from 'react'
import { useApp } from '../../context/AppContext'
import { seasonalTypes } from '../../data/seasonalTypes'
import SeasonCard from '../results/SeasonCard'
import DetectedColors from '../results/DetectedColors'
import ColorPalette from '../results/ColorPalette'
import AnalysisBreakdown from '../results/AnalysisBreakdown'
import BeautyGuide from '../results/BeautyGuide'
import HairColorGuide from '../results/HairColorGuide'
import DrapeComparison from '../draping/DrapeComparison'
import ShareButton from '../share/ShareButton'
import Confetti from '../effects/Confetti'

export default function ResultsScreen() {
  const { state, dispatch } = useApp()
  const subSeason = state.subSeasonResult
  const seasonData = seasonalTypes[subSeason]
  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    // Haptic feedback on reveal
    if (navigator.vibrate) navigator.vibrate([100, 50, 100])
    const timer = setTimeout(() => setShowConfetti(false), 3500)
    return () => clearTimeout(timer)
  }, [])

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
    <div className="flex-1 px-5 py-4 max-w-md mx-auto w-full space-y-4 pb-28">
      {/* Confetti burst */}
      {showConfetti && <Confetti colors={seasonData.palette.best.slice(0, 6)} />}

      {/* Season scores bar chart */}
      {state.analysisScores && (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-fade-in">
          <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">Season Match</h4>
          <div className="space-y-2">
            {Object.entries(state.analysisScores)
              .sort(([, a], [, b]) => b - a)
              .map(([season, score]) => (
                <div key={season} className="flex items-center gap-3">
                  <span className="text-xs text-white/50 w-16 capitalize">{season}</span>
                  <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${score}%`,
                        background: season === state.seasonResult
                          ? `linear-gradient(to right, ${seasonData.accentColor || '#a855f7'}, #ec4899)`
                          : 'rgba(255,255,255,0.15)',
                      }}
                    />
                  </div>
                  <span className="text-xs text-white/40 w-8 text-right font-mono">{score}%</span>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Season card (hero) */}
      <SeasonCard seasonData={seasonData} />

      {/* Analysis methodology breakdown */}
      {state.isAnalyzing && (
        <AnalysisBreakdown dimensions={state.isAnalyzing} />
      )}

      {/* Detected colors */}
      <DetectedColors colors={state.detectedColors} />

      {/* Virtual draping */}
      {state.capturedImage && (
        <DrapeComparison
          imageSrc={state.capturedImage}
          bestColors={seasonData.palette.best}
          avoidColors={seasonData.palette.avoid}
          landmarks={null}
        />
      )}

      {/* Best palette - interactive */}
      <ColorPalette
        colors={seasonData.palette.best}
        colorNames={seasonData.colorNames?.best}
        title="Your Best Colors"
        variant="best"
      />

      {/* Neutral colors */}
      <ColorPalette
        colors={seasonData.palette.neutral}
        colorNames={seasonData.colorNames?.neutral}
        title="Your Neutrals"
        variant="best"
      />

      {/* Colors to avoid */}
      <ColorPalette
        colors={seasonData.palette.avoid}
        title="Colors to Avoid"
        variant="avoid"
      />

      {/* Beauty & Makeup guide */}
      <BeautyGuide beauty={seasonData.beauty} />

      {/* Hair color guide */}
      <HairColorGuide hairColors={seasonData.hairColors} />

      {/* Characteristics */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-4 animate-slide-up">
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

      {/* Share button */}
      <ShareButton seasonData={seasonData} detectedColors={state.detectedColors} />

      {/* CTA - Clothing recommendations */}
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
