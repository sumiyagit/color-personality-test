export default function StepIndicator({ current, total, labels }) {
  return (
    <div className="px-6 pb-3">
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 flex-1 ${
              i + 1 <= current
                ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                : i + 1 === current + 1
                  ? 'bg-purple-500/20'
                  : 'bg-white/5'
            }`}
          />
        ))}
      </div>

      {/* Step label */}
      {labels && labels[current] && (
        <p className="text-[10px] text-white/25 text-center font-medium">
          {labels[current]}
        </p>
      )}
    </div>
  )
}
