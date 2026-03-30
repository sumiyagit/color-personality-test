import { medianColor } from '../utils/colorUtils'
import { getLandmarkPoints } from './faceDetection'

function sampleRegion(ctx, centerX, centerY, sampleSize = 15) {
  const half = Math.floor(sampleSize / 2)
  const x = Math.max(0, Math.floor(centerX - half))
  const y = Math.max(0, Math.floor(centerY - half))

  let imageData
  try {
    imageData = ctx.getImageData(x, y, sampleSize, sampleSize)
  } catch {
    return []
  }

  const pixels = []
  for (let i = 0; i < imageData.data.length; i += 4) {
    pixels.push({
      r: imageData.data[i],
      g: imageData.data[i + 1],
      b: imageData.data[i + 2],
    })
  }
  return pixels
}

function getCenter(points) {
  const x = points.reduce((sum, p) => sum + p.x, 0) / points.length
  const y = points.reduce((sum, p) => sum + p.y, 0) / points.length
  return { x, y }
}

export function extractColors(canvas, detection) {
  const ctx = canvas.getContext('2d')
  const points = getLandmarkPoints(detection)

  // 1. Skin color — sample from left and right cheek areas
  const leftCheekX = (points.jaw[2].x + points.nose[0].x) / 2
  const leftCheekY = (points.jaw[2].y + points.nose[4].y) / 2
  const rightCheekX = (points.jaw[14].x + points.nose[0].x) / 2
  const rightCheekY = (points.jaw[14].y + points.nose[4].y) / 2

  const skinPixels = [
    ...sampleRegion(ctx, leftCheekX, leftCheekY, 20),
    ...sampleRegion(ctx, rightCheekX, rightCheekY, 20),
  ]
  const skin = medianColor(skinPixels)

  // 2. Eye color — sample from center of each eye
  const leftEyeCenter = getCenter(points.leftEye)
  const rightEyeCenter = getCenter(points.rightEye)

  const eyePixels = [
    ...sampleRegion(ctx, leftEyeCenter.x, leftEyeCenter.y, 8),
    ...sampleRegion(ctx, rightEyeCenter.x, rightEyeCenter.y, 8),
  ]
  const eyes = medianColor(eyePixels)

  // 3. Hair color — sample above the forehead
  const foreheadCenter = getCenter([...points.leftEyebrow, ...points.rightEyebrow])
  const faceHeight = points.jaw[8].y - foreheadCenter.y
  const hairY = foreheadCenter.y - faceHeight * 0.4
  const hairX = foreheadCenter.x

  const hairPixels = [
    ...sampleRegion(ctx, hairX, hairY, 25),
    ...sampleRegion(ctx, hairX - 30, hairY, 15),
    ...sampleRegion(ctx, hairX + 30, hairY, 15),
  ]
  const hair = medianColor(hairPixels)

  return { skin, eyes, hair }
}
