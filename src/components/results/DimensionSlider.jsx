export default function DimensionSlider({ value, min, max, labelLeft, labelRight }) {
  // Normalize value to 0-1 range
  const normalized = (value - min) / (max - min)
  const percentage = Math.max(0, Math.min(100, normalized * 100))

  // Determine gradient based on the dimension
  const isWarmCool = labelLeft === 'Cool' && labelRight === 'Warm'
  const isMutedBright = labelLeft === 'Muted' && labelRight === 'Bright'

  let gradientStyle
  if (isWarmCool) {
    gradientStyle = 'linear-gradient(to right, #6495ED, #B0B0B0, #E8A060)'
  } else if (isMutedBright) {
    gradientStyle = 'linear-gradient(to right, #A0A0A0, #C0C0C0, #FF69B4)'
  } else {
    gradientStyle = 'linear-gradient(to right, #2C2C2C, #808080, #F0F0F0)'
  }

  return (
    <div className="relative">
      {/* Track */}
      <div
        className="h-3 rounded-full relative overflow-hidden"
        style={{ background: gradientStyle }}
      >
        {/* Marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-lg shadow-black/30 border-2 border-white transition-all duration-1000 ease-out"
          style={{
            left: `calc(${percentage}% - 10px)`,
          }}
        >
          <div className="absolute inset-1 rounded-full bg-white/80" />
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between mt-1.5">
        <span className="text-[10px] text-white/40 font-medium">{labelLeft}</span>
        <span className="text-[10px] text-white/40 font-medium">{labelRight}</span>
      </div>
    </div>
  )
}
