import { useState } from 'react'
import { generateShareImage } from '../../utils/generateShareImage'

export default function ShareButton({ seasonData, detectedColors }) {
  const [isGenerating, setIsGenerating] = useState(false)
  const [shared, setShared] = useState(false)

  const handleShare = async () => {
    setIsGenerating(true)

    try {
      const blob = await generateShareImage(seasonData, detectedColors)

      if (navigator.share && navigator.canShare) {
        const file = new File([blob], `my-color-season-${seasonData.id}.png`, { type: 'image/png' })
        const shareData = {
          title: `I'm a ${seasonData.name}!`,
          text: `I just discovered I'm a ${seasonData.name} in the seasonal color analysis! Find out your color season too.`,
          files: [file],
        }

        if (navigator.canShare(shareData)) {
          await navigator.share(shareData)
          setShared(true)
          setTimeout(() => setShared(false), 2000)
          return
        }
      }

      // Fallback: download the image
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `my-color-season-${seasonData.id}.png`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.error('Share failed:', err)
      }
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={handleShare}
      disabled={isGenerating}
      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 border border-white/20 text-white/80 text-sm font-medium hover:bg-white/15 active:scale-[0.98] transition-all disabled:opacity-50"
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>Generating...</span>
        </>
      ) : shared ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Saved!</span>
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          <span>Share My Results</span>
        </>
      )}
    </button>
  )
}
