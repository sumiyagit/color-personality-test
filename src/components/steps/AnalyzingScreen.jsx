import { useEffect, useState } from 'react'
import { useApp } from '../../context/AppContext'
import { useFaceDetection } from '../../hooks/useFaceDetection'

export default function AnalyzingScreen() {
  const { state, dispatch } = useApp()
  const { analyze } = useFaceDetection()
  const [progress, setProgress] = useState(0)
  const [statusText, setStatusText] = useState('Loading AI models...')
  const [failed, setFailed] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!state.capturedImage) return

    let cancelled = false

    const run = async () => {
      try {
        // Simulate progress stages
        setProgress(10)
        setStatusText('Loading AI models...')

        await new Promise(r => setTimeout(r, 500))
        if (cancelled) return
        setProgress(30)
        setStatusText('Detecting face landmarks...')

        const { colors, result } = await analyze(state.capturedImage)
        if (cancelled) return

        setProgress(70)
        setStatusText('Analyzing your colors...')
        await new Promise(r => setTimeout(r, 800))
        if (cancelled) return

        setProgress(90)
        setStatusText('Determining your season...')
        await new Promise(r => setTimeout(r, 500))
        if (cancelled) return

        setProgress(100)
        dispatch({ type: 'SET_DETECTED_COLORS', payload: colors })
        dispatch({ type: 'SET_SEASON_RESULT', payload: { season: result.season, scores: result.scores } })

        // Store signals for the quiz
        dispatch({ type: 'SET_ANALYZING', payload: result.signals })

        await new Promise(r => setTimeout(r, 300))
        if (cancelled) return
        dispatch({ type: 'SET_STEP', payload: 3 })
      } catch (err) {
        if (!cancelled) {
          setFailed(true)
          setErrorMsg(err.message || 'Analysis failed. Please try again.')
        }
      }
    }

    run()
    return () => { cancelled = true }
  }, [state.capturedImage, analyze, dispatch])

  if (failed) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 max-w-sm text-center">
          <div className="text-4xl mb-4">😅</div>
          <p className="text-red-400 text-sm mb-4">{errorMsg}</p>
          <button
            onClick={() => dispatch({ type: 'SET_STEP', payload: 1 })}
            className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
          >
            Retake Photo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6">
      {/* Photo with scanning overlay */}
      <div className="relative w-48 h-60 rounded-2xl overflow-hidden mb-8 shadow-2xl">
        {state.capturedImage && (
          <img
            src={state.capturedImage}
            alt="Your selfie"
            className="w-full h-full object-cover"
          />
        )}
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-scan-line"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
          />
        </div>
        <div className="absolute inset-0 bg-purple-500/10" />
      </div>

      {/* Progress */}
      <div className="w-full max-w-xs mb-4">
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="text-white/60 text-sm">{statusText}</p>
    </div>
  )
}
