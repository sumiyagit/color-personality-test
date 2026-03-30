export default function QuizQuestion({ question, onAnswer, currentIndex, totalQuestions }) {
  return (
    <div className="animate-fade-in">
      {/* Progress */}
      <div className="text-white/40 text-xs mb-2 text-center">
        Question {currentIndex + 1} of {totalQuestions}
      </div>

      {/* Question */}
      <h3 className="text-lg font-semibold text-white text-center mb-6 px-2">
        {question.question}
      </h3>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(option)}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 active:scale-[0.98] transition-all text-left flex items-center gap-4"
          >
            {/* Color swatches for color-compare type */}
            {question.type === 'color-compare' && (
              <div className="flex gap-1.5 shrink-0">
                {option.colors.map((color, ci) => (
                  <div
                    key={ci}
                    className="w-8 h-8 rounded-lg shadow-inner"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}

            {/* Emoji for visual type */}
            {question.type === 'visual' && (
              <span className="text-2xl shrink-0">{option.emoji}</span>
            )}

            <span className="text-white/80 text-sm leading-snug">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
