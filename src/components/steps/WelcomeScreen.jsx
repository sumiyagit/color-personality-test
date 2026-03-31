import { useApp } from '../../context/AppContext'
import ParticleBackground from '../effects/ParticleBackground'

export default function WelcomeScreen() {
  const { dispatch } = useApp()
  const hasCamera = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Hero */}
      <div className="relative z-10 animate-fade-in mb-6">
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center animate-pulse-glow shadow-2xl">
          <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
            <circle cx="24" cy="20" r="7" stroke="white" strokeWidth="1.5" fill="none" />
            <path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="white" strokeWidth="1.5" fill="none" />
            {/* Color dots around the face */}
            <circle cx="10" cy="12" r="2.5" fill="#FF7F50" opacity="0.8" />
            <circle cx="38" cy="12" r="2.5" fill="#87CEEB" opacity="0.8" />
            <circle cx="6" cy="28" r="2" fill="#98FB98" opacity="0.8" />
            <circle cx="42" cy="28" r="2" fill="#DDA0DD" opacity="0.8" />
          </svg>
        </div>

        <h1 className="text-4xl font-extrabold text-white mb-2 tracking-tight text-center">
          Discover Your
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Color Season
          </span>
        </h1>
        <p className="text-white/50 text-sm max-w-xs mx-auto leading-relaxed text-center">
          AI-powered seasonal color analysis with personalized style, beauty &amp; makeup recommendations
        </p>
      </div>

      {/* Season preview cards */}
      <div className="relative z-10 grid grid-cols-4 gap-2.5 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        {[
          { name: 'Spring', colors: ['#FFD700', '#FF7F50', '#98FB98'], emoji: '🌸' },
          { name: 'Summer', colors: ['#B0C4DE', '#DDA0DD', '#87CEEB'], emoji: '☀️' },
          { name: 'Autumn', colors: ['#D2691E', '#CD853F', '#556B2F'], emoji: '🍂' },
          { name: 'Winter', colors: ['#4169E1', '#FF0000', '#FFFFFF'], emoji: '❄️' },
        ].map(season => (
          <div key={season.name} className="flex flex-col items-center gap-1.5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1 p-1.5 backdrop-blur-sm">
              <span className="text-lg">{season.emoji}</span>
              <div className="flex gap-0.5">
                {season.colors.map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-white/30 font-medium">{season.name}</span>
          </div>
        ))}
      </div>

      {/* What you get */}
      <div className="relative z-10 w-full max-w-sm mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="space-y-2">
          {[
            { icon: '📷', text: 'Take a selfie for AI face analysis', sub: 'Detects skin, eye & hair colors' },
            { icon: '🎨', text: 'Get your color season & sub-season', sub: '12 unique seasonal types' },
            { icon: '💄', text: 'Makeup, hair & clothing guide', sub: 'Personalized beauty recommendations' },
            { icon: '📱', text: 'Share your results', sub: 'Beautiful social share cards' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white/[0.03] rounded-xl px-4 py-3 border border-white/5">
              <span className="text-lg mt-0.5">{item.icon}</span>
              <div>
                <span className="text-white/70 text-sm block">{item.text}</span>
                <span className="text-white/30 text-xs">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 w-full max-w-sm animate-slide-up" style={{ animationDelay: '0.5s' }}>
        {hasCamera ? (
          <button
            onClick={() => dispatch({ type: 'SET_STEP', payload: 1 })}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 active:scale-[0.98] transition-all"
          >
            Start My Analysis
          </button>
        ) : (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center">
            <p className="text-red-400 text-sm">
              Camera not supported in this browser. Please use Chrome or Safari on your phone.
            </p>
          </div>
        )}

        <p className="text-white/20 text-[10px] mt-3 text-center">
          Free &bull; No signup required &bull; All processing happens on your device
        </p>
      </div>

      {/* Tips */}
      <p className="relative z-10 text-white/20 text-xs mt-4 text-center max-w-xs">
        Tip: Face a window for best lighting. Remove sunglasses and keep your face centered.
      </p>
    </div>
  )
}
