import { rgbToHsl, getContrastRatio, getSaturation } from '../utils/colorUtils'

function softmax(arr) {
  const max = Math.max(...arr)
  const exps = arr.map(x => Math.exp(x - max))
  const sum = exps.reduce((a, b) => a + b, 0)
  return exps.map(x => x / sum)
}

export function classifySeason(detectedColors) {
  const { skin, eyes, hair } = detectedColors

  // Step 1: Calculate warmth score (-1 cool to +1 warm)
  const channelWarmth = (skin.r - skin.b) / 255
  const skinHue = skin.hsl.h
  const hueWarmth = (skinHue >= 15 && skinHue <= 55) ? 0.3 : -0.3
  let warmthScore = (channelWarmth * 0.7) + (hueWarmth * 0.3)

  // Step 2: Calculate depth score (0 deep to 1 light)
  let depthScore = (skin.hsl.l * 0.3) + (hair.hsl.l * 0.5) + (eyes.hsl.l * 0.2)

  // Step 3: Eye color modifier
  const eyeHue = eyes.hsl.h
  const eyeSat = eyes.hsl.s
  const eyeLight = eyes.hsl.l

  if (eyeHue >= 190 && eyeHue <= 240 && eyeSat < 0.4) {
    warmthScore -= 0.1 // blue/grey eyes → cool
  } else if (eyeHue >= 80 && eyeHue <= 160 && eyeSat > 0.15) {
    warmthScore += 0.05 // green eyes → slight warm
  } else if (eyeHue >= 20 && eyeHue <= 40 && eyeLight < 0.4) {
    warmthScore += 0.1 // warm brown → warm
  }
  if (eyeLight < 0.2) {
    depthScore -= 0.1 // very dark eyes → deep
  }

  // Step 4: Classify main season
  let season
  if (warmthScore >= 0) {
    season = depthScore >= 0.45 ? 'spring' : 'autumn'
  } else {
    season = depthScore >= 0.45 ? 'summer' : 'winter'
  }

  // Step 5: Confidence scores
  const affinities = [
    warmthScore + (depthScore - 0.5),     // spring
    -warmthScore + (depthScore - 0.5),    // summer
    warmthScore - (depthScore - 0.5),     // autumn
    -warmthScore - (depthScore - 0.5),    // winter
  ]
  const scores = softmax(affinities)

  // Step 6: Compute secondary signals for sub-season quiz
  const overallContrast = getContrastRatio(skin, hair)
  const overallSaturation = (getSaturation(skin) + getSaturation(eyes) + getSaturation(hair)) / 3

  return {
    season,
    scores: {
      spring: Math.round(scores[0] * 100),
      summer: Math.round(scores[1] * 100),
      autumn: Math.round(scores[2] * 100),
      winter: Math.round(scores[3] * 100),
    },
    signals: {
      warmth: warmthScore,
      depth: depthScore,
      contrast: overallContrast,
      saturation: overallSaturation,
    },
  }
}

export function determineSubSeason(season, quizAnswers) {
  // Count votes for each sub-season from quiz answers
  const votes = {}
  for (const answer of quizAnswers) {
    const sub = answer.subSeason
    votes[sub] = (votes[sub] || 0) + answer.score
  }

  // Find the sub-season with highest score
  let best = null
  let bestScore = -1
  for (const [sub, score] of Object.entries(votes)) {
    if (score > bestScore) {
      best = sub
      bestScore = score
    }
  }

  return best
}
