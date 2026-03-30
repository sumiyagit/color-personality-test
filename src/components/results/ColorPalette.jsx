export default function ColorPalette({ colors, title = 'Your Best Colors' }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
      <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-3">{title}</h4>
      <div className="grid grid-cols-6 gap-2">
        {colors.map((color, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className="w-full aspect-square rounded-xl shadow-inner border border-white/10"
              style={{ backgroundColor: color }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
