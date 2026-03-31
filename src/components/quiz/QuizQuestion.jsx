export default function QuizQuestion({ question, onAnswer, currentIndex, totalQuestions }) {
  return (
    <div className="animate-fade-in">
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white/30 text-xs">Question {currentIndex + 1} of {totalQuestions}</span>
          <span className="text-white/20 text-xs">{Math.round(((currentIndex + 1) / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-lg font-semibold text-white text-center mb-6 px-2 leading-snug">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option)}
            className="w-full rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] active:scale-[0.97] transition-all text-left overflow-hidden group"
          >
            {/* Color swatch strip at top for color-compare */}
            {question.type === 'color-compare' && option.colors && (
              <div className="flex h-12">
                {option.colors.map((color, ci) => (
                  <div
                    key={ci}
                    className="flex-1 transition-all group-hover:brightness-110"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}

            <div className="flex items-center gap-3 p-4">
              {/* Emoji for visual type */}
              {question.type === 'visual' && option.emoji && (
                <span className="text-2xl shrink-0">{option.emoji}</span>
              )}

              {/* Selection indicator */}
              <div className="w-5 h-5 rounded-full border-2 border-white/15 flex items-center justify-center shrink-0 group-hover:border-purple-400/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-purple-400/50 transition-colors" />
              </div>

              <span className="text-white/70 text-sm leading-snug group-hover:text-white/90 transition-colors">
                {option.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
