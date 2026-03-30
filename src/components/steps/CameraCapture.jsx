import { useEffect } from 'react'
import { useApp } from '../../context/AppContext'
import { useCamera } from '../../hooks/useCamera'

export default function CameraCapture() {
  const { dispatch } = useApp()
  const { videoRef, isActive, error, photo, startCamera, capturePhoto, retakePhoto, stopCamera } = useCamera()

  useEffect(() => {
    startCamera()
    return () => stopCamera()
  }, [startCamera, stopCamera])

  const handleCapture = () => {
    capturePhoto()
  }

  const handleUsePhoto = () => {
    if (photo) {
      dispatch({ type: 'SET_CAPTURED_IMAGE', payload: photo })
      stopCamera()
      dispatch({ type: 'SET_STEP', payload: 2 })
    }
  }

  const handleRetake = () => {
    retakePhoto()
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 max-w-sm text-center">
          <div className="text-4xl mb-4">📷</div>
          <p className="text-red-400 text-sm mb-4">{error}</p>
          <button
            onClick={startCamera}
            className="px-6 py-2.5 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-4">
      <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden bg-black/50 mb-6">
        {/* Live video */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`w-full h-full object-cover ${photo ? 'hidden' : ''}`}
          style={{ transform: 'scaleX(-1)' }}
        />

        {/* Captured photo */}
        {photo && (
          <img
            src={photo}
            alt="Captured selfie"
            className="w-full h-full object-cover"
          />
        )}

        {/* Face guide overlay */}
        {!photo && isActive && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-60 border-2 border-white/30 rounded-[50%] relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white/50 text-xs whitespace-nowrap">
                Position your face here
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      {photo ? (
        <div className="flex gap-4 animate-fade-in">
          <button
            onClick={handleRetake}
            className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
          >
            Retake
          </button>
          <button
            onClick={handleUsePhoto}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg shadow-purple-500/25 active:scale-[0.98] transition-all"
          >
            Use This Photo
          </button>
        </div>
      ) : (
        <button
          onClick={handleCapture}
          disabled={!isActive}
          className="w-18 h-18 rounded-full bg-white flex items-center justify-center shadow-lg shadow-white/20 active:scale-90 transition-transform disabled:opacity-30"
          aria-label="Take photo"
        >
          <div className="w-14 h-14 rounded-full border-4 border-gray-800" />
        </button>
      )}
    </div>
  )
}
