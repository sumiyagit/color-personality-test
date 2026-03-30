import { useState, useCallback } from 'react'
import { loadModels, detectFace } from '../services/faceDetection'
import { extractColors } from '../services/colorAnalysis'
import { classifySeason } from '../services/seasonClassifier'

export function useFaceDetection() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const analyze = useCallback(async (imageDataUrl) => {
    setIsLoading(true)
    setError(null)

    try {
      await loadModels()

      // Create image element from data URL
      const img = new Image()
      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
        img.src = imageDataUrl
      })

      // Create canvas for pixel sampling
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)

      // Detect face and extract colors
      const detection = await detectFace(img)
      const colors = extractColors(canvas, detection)
      const result = classifySeason(colors)

      setIsLoading(false)
      return { colors, result }
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
      throw err
    }
  }, [])

  return { analyze, isLoading, error }
}
