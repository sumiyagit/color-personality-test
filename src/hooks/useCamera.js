import { useState, useRef, useCallback, useEffect } from 'react'

export function useCamera() {
  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const [error, setError] = useState(null)
  const [photo, setPhoto] = useState(null)

  const startCamera = useCallback(async () => {
    setError(null)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 640 },
          height: { ideal: 480 },
        },
        audio: false,
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        // iOS Safari needs these
        videoRef.current.setAttribute('playsinline', '')
        videoRef.current.setAttribute('autoplay', '')
        videoRef.current.setAttribute('muted', '')
        await videoRef.current.play()
      }
      setIsActive(true)
    } catch (err) {
      let message = 'Could not access camera.'
      if (err.name === 'NotAllowedError') {
        message = 'Camera permission denied. Please allow camera access in your browser settings and reload.'
      } else if (err.name === 'NotFoundError') {
        message = 'No camera found on this device.'
      } else if (err.name === 'NotReadableError') {
        message = 'Camera is in use by another app. Please close it and try again.'
      } else if (err.name === 'OverconstrainedError') {
        // Retry without facingMode constraint
        try {
          const fallbackStream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false,
          })
          streamRef.current = fallbackStream
          if (videoRef.current) {
            videoRef.current.srcObject = fallbackStream
            await videoRef.current.play()
          }
          setIsActive(true)
          return
        } catch {
          message = 'Could not access any camera on this device.'
        }
      }
      setError(message)
    }
  }, [])

  const capturePhoto = useCallback(() => {
    if (!videoRef.current) return null
    const video = videoRef.current
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    // Mirror the image (front camera is mirrored in preview)
    ctx.translate(canvas.width, 0)
    ctx.scale(-1, 1)
    ctx.drawImage(video, 0, 0)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85)
    setPhoto(dataUrl)
    return dataUrl
  }, [])

  const retakePhoto = useCallback(() => {
    setPhoto(null)
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
    setIsActive(false)
  }, [])

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }, [])

  return {
    videoRef,
    isActive,
    error,
    photo,
    startCamera,
    capturePhoto,
    retakePhoto,
    stopCamera,
  }
}
