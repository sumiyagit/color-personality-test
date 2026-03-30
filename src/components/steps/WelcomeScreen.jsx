import { useApp } from '../../context/AppContext'

export default function WelcomeScreen() {
  const { dispatch } = useApp()
  const hasCamera = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
      {/* Hero */}
      <div className="animate-fade-in mb-8">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center animate-pulse-glow">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2" fill="none" />
            <circle cx="24" cy="20" r="7" stroke="white" strokeWidth="2" fill="none" />
            <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
          Discover Your Colors
        </h2>
        <p className="text-white/60 text-base max-w-xs mx-auto leading-relaxed">
          Find your seasonal color type and get personalized style recommendations
        </p>
      </div>

      {/* Season icons */}
      <div className="grid grid-cols-4 gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {[
          { name: 'Spring', color: 'from-green-400 to-yellow-300', emoji: '🌸' },
          { name: 'Summer', color: 'from-sky-400 to-blue-300', emoji: '☀️' },
          { name: 'Autumn', color: 'from-orange-500 to-amber-400', emoji: '🍂' },
          { name: 'Winter', color: 'from-indigo-500 to-purple-400', emoji: '❄️' },
        ].map(season => (
          <div key={season.name} className="flex flex-col items-center gap-1.5">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${season.color} flex items-center justify-center text-2xl shadow-lg`}>
              {season.emoji}
            </div>
            <span className="text-xs text-white/40">{season.name}</span>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="w-full max-w-sm mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="space-y-3">
          {[
            { step: '1', text: 'Take a selfie', icon: '📷' },
            { step: '2', text: 'We analyze your colors', icon: '🎨' },
            { step: '3', text: 'Get your style guide', icon: '✨' },
          ].map(item => (
            <div key={item.step} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-white/70 text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="w-full max-w-sm animate-slide-up" style={{ animationDelay: '0.6s' }}>
        {hasCamera ? (
          <button
            onClick={() => dispatch({ type: 'SET_STEP', payload: 1 })}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.98] transition-all"
          >
            Start Analysis
          </button>
        ) : (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center">
            <p className="text-red-400 text-sm">
              Camera not supported in this browser. Please use Chrome or Safari on your phone.
            </p>
          </div>
        )}
      </div>

      {/* Tips */}
      <p className="text-white/30 text-xs mt-4 text-center max-w-xs">
        For best results: face a window, remove sunglasses, and keep your face centered
      </p>
    </div>
  )
}
