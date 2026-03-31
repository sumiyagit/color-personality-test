import { useApp } from '../../context/AppContext'

export default function Header() {
  const { state, dispatch } = useApp()

  const handleBack = () => {
    if (state.currentStep === 2) return // don't go back during analysis
    if (state.currentStep > 0) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 })
    }
  }

  const showBack = state.currentStep > 0 && state.currentStep < 4 && state.currentStep !== 2

  return (
    <header className="px-4 py-3 flex items-center justify-between relative z-10">
      {showBack ? (
        <button
          onClick={handleBack}
          className="text-white/50 hover:text-white transition-colors p-1 -ml-1 flex items-center gap-1"
          aria-label="Go back"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span className="text-xs">Back</span>
        </button>
      ) : (
        <div className="w-12" />
      )}

      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        <h1 className="text-xs font-semibold tracking-wider text-white/40 uppercase">
          Color Season
        </h1>
      </div>

      {state.currentStep >= 4 ? (
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="text-white/30 hover:text-white/60 transition-colors text-xs p-1"
        >
          Restart
        </button>
      ) : (
        <div className="w-12" />
      )}
    </header>
  )
}
