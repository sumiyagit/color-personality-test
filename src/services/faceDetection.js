import * as faceapi from 'face-api.js'

let modelsLoaded = false

export async function loadModels() {
  if (modelsLoaded) return true
  const MODEL_URL = import.meta.env.BASE_URL + 'models'
  try {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
    ])
    modelsLoaded = true
    return true
  } catch (err) {
    console.error('Failed to load face detection models:', err)
    throw new Error('Failed to load face detection models. Please check your internet connection and reload.')
  }
}

export async function detectFace(imageElement) {
  if (!modelsLoaded) await loadModels()

  const detection = await faceapi
    .detectSingleFace(imageElement, new faceapi.TinyFaceDetectorOptions({ inputSize: 416, scoreThreshold: 0.3 }))
    .withFaceLandmarks(true)

  if (!detection) {
    throw new Error('No face detected. Please make sure your face is clearly visible and try again.')
  }

  return detection
}

export function getLandmarkPoints(detection) {
  const landmarks = detection.landmarks
  const positions = landmarks.positions

  return {
    jaw: positions.slice(0, 17),
    leftEyebrow: positions.slice(17, 22),
    rightEyebrow: positions.slice(22, 27),
    nose: positions.slice(27, 36),
    leftEye: positions.slice(36, 42),
    rightEye: positions.slice(42, 48),
    mouth: positions.slice(48, 68),
  }
}
