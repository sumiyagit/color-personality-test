import { useApp } from '../../context/AppContext'

export default function Header() {
  const { state, dispatch } = useApp()

  const handleBack = () => {
    if (state.currentStep > 0) {
      dispatch({ type: 'SET_STEP', payload: state.currentStep - 1 })
    }
  }

  return (
    <header className="px-4 py-3 flex items-center justify-between relative z-10">
      {state.currentStep > 0 && state.currentStep < 5 ? (
        <button
          onClick={handleBack}
          className="text-white/60 hover:text-white transition-colors p-1"
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      ) : (
        <div className="w-8" />
      )}

      <h1 className="text-sm font-medium tracking-wider text-white/50 uppercase">
        Color Analysis
      </h1>

      <div className="w-8" />
    </header>
  )
}
