export default function StepIndicator({ current, total }) {
  return (
    <div className="flex justify-center gap-2 px-4 pb-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i + 1 <= current
              ? 'bg-purple-500 w-8'
              : i + 1 === current + 1
                ? 'bg-purple-500/30 w-6'
                : 'bg-white/10 w-4'
          }`}
        />
      ))}
    </div>
  )
}
