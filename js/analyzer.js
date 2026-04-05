// Color Analyzer — extracts skin tone from photo and classifies into 12 seasons
const Analyzer = (() => {

  // Extract dominant skin color from the center region of the photo
  function extractSkinColor(imageDataUrl) {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const size = 300;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Draw image scaled to canvas
        const scale = Math.max(size / img.width, size / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);

        // Sample from center oval (face region)
        const centerX = size / 2;
        const centerY = size * 0.4; // slightly above center for face
        const radiusX = size * 0.2;
        const radiusY = size * 0.25;

        const imageData = ctx.getImageData(0, 0, size, size);
        const pixels = imageData.data;

        let totalR = 0, totalG = 0, totalB = 0, count = 0;

        for (let y = 0; y < size; y++) {
          for (let x = 0; x < size; x++) {
            // Check if pixel is within the face oval
            const dx = (x - centerX) / radiusX;
            const dy = (y - centerY) / radiusY;
            if (dx * dx + dy * dy <= 1) {
              const i = (y * size + x) * 4;
              const r = pixels[i];
              const g = pixels[i + 1];
              const b = pixels[i + 2];

              // Basic skin tone filter — skip very dark, very bright, or highly saturated pixels
              const hsl = rgbToHsl(r, g, b);
              if (hsl.l > 15 && hsl.l < 95 && hsl.s < 85) {
                totalR += r;
                totalG += g;
                totalB += b;
                count++;
              }
            }
          }
        }

        if (count === 0) {
          // Fallback: just use center pixel area
          const fallbackData = ctx.getImageData(size * 0.35, size * 0.3, size * 0.3, size * 0.3);
          const fb = fallbackData.data;
          for (let i = 0; i < fb.length; i += 4) {
            totalR += fb[i];
            totalG += fb[i + 1];
            totalB += fb[i + 2];
            count++;
          }
        }

        resolve({
          r: Math.round(totalR / count),
          g: Math.round(totalG / count),
          b: Math.round(totalB / count)
        });
      };
      img.src = imageDataUrl;
    });
  }

  // RGB to HSL conversion
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  }

  // Guess initial features from skin color analysis
  function guessFeatures(rgb) {
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const { h, s, l } = hsl;

    // Guess skin undertone
    const isWarm = (h >= 10 && h <= 50) || (h >= 350);
    let skinUndertone = isWarm ? 'warm' : 'cool';
    if (s <= 25) skinUndertone = 'neutral';

    // Guess eye color based on common correlations with skin tone
    let eyeColor;
    if (l <= 50) eyeColor = 'black';
    else if (l <= 65 && isWarm) eyeColor = 'brown';
    else if (l <= 65) eyeColor = 'brown';
    else eyeColor = 'brown';

    // Guess hair color
    let hairColor;
    if (l <= 45) hairColor = 'black';
    else if (l <= 60) hairColor = 'darkBrown';
    else if (l <= 70 && isWarm) hairColor = 'brown';
    else if (l <= 70) hairColor = 'brown';
    else hairColor = 'brown';

    return { eyeColor, hairColor, skinUndertone };
  }

  // Classify into 12-season type using skin analysis + user-confirmed features + question answers
  function classifySeason(rgb, userFeatures) {
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const { h, s, l } = hsl;

    // Use user-confirmed undertone if available, otherwise detect from image
    let skinUndertone = userFeatures?.skinUndertone ||
      ((h >= 10 && h <= 50) || (h >= 350) ? 'warm' : 'cool');

    // Refine undertone with additional question signals
    const vein = userFeatures?.veinColor;
    const jewelry = userFeatures?.jewelryPref;
    const whiteCream = userFeatures?.whiteCream;
    const sunReaction = userFeatures?.sunReaction;

    // Warm signals: green veins, gold jewelry, cream, tans easily
    let warmScore = 0;
    let coolScore = 0;
    if (vein === 'green') warmScore += 2;
    else if (vein === 'blue') coolScore += 2;
    if (jewelry === 'gold') warmScore += 1;
    else if (jewelry === 'silver') coolScore += 1;
    if (whiteCream === 'cream') warmScore += 1;
    else if (whiteCream === 'white') coolScore += 1;
    if (sunReaction === 'tan') warmScore += 1;
    else if (sunReaction === 'burn') coolScore += 1;

    // Override undertone if question signals strongly disagree
    if (warmScore >= 3 && coolScore <= 1) skinUndertone = 'warm';
    else if (coolScore >= 3 && warmScore <= 1) skinUndertone = 'cool';
    else if (warmScore >= 2 && coolScore >= 2) skinUndertone = 'neutral';

    const isWarm = skinUndertone === 'warm' || skinUndertone === 'neutral';
    const isCool = skinUndertone === 'cool';

    // Depth: how light or dark
    const isLight = l >= 65;
    const isDark = l <= 45;

    // Saturation: how vivid
    const isMuted = s <= 35;
    const isBright = s >= 55;

    // Eye and hair influence on contrast
    const eye = userFeatures?.eyeColor || 'brown';
    const hair = userFeatures?.hairColor || 'brown';

    // Contrast from user's self-assessment or calculated
    const contrastLevel = userFeatures?.contrastLevel;
    const darkHair = hair === 'black' || hair === 'darkBrown';
    const lightEyes = eye === 'blue' || eye === 'green' || eye === 'gray';
    const highContrast = contrastLevel === 'high' || (darkHair && isLight) || (lightEyes && darkHair);
    const lowContrast = contrastLevel === 'low';

    // Classification logic with all features
    let seasonKey;

    if (isWarm && isLight) {
      if (highContrast || isBright) seasonKey = 'brightSpring';
      else if (isMuted || lowContrast) seasonKey = 'lightSpring';
      else seasonKey = 'lightSpring';
    } else if (isWarm && isDark) {
      if (isBright || highContrast) seasonKey = 'deepAutumn';
      else if (isMuted || lowContrast) seasonKey = 'softAutumn';
      else seasonKey = 'warmAutumn';
    } else if (isWarm) {
      if (isBright || highContrast) seasonKey = 'brightSpring';
      else if (isMuted || lowContrast) seasonKey = 'softAutumn';
      else seasonKey = 'warmSpring';
    } else if (isCool && isLight) {
      if (highContrast || isBright) seasonKey = 'brightWinter';
      else if (isMuted || lowContrast) seasonKey = 'lightSummer';
      else seasonKey = 'lightSummer';
    } else if (isCool && isDark) {
      if (isBright || highContrast) seasonKey = 'deepWinter';
      else if (isMuted || lowContrast) seasonKey = 'coolWinter';
      else seasonKey = 'coolWinter';
    } else if (isCool) {
      if (isBright || highContrast) seasonKey = 'brightWinter';
      else if (isMuted || lowContrast) seasonKey = 'softSummer';
      else seasonKey = 'coolSummer';
    } else {
      seasonKey = 'warmSpring';
    }

    return {
      key: seasonKey,
      season: SEASONS[seasonKey],
      analysis: { rgb, hsl, isWarm, isLight, isDark, isMuted, isBright, skinUndertone, eye, hair }
    };
  }

  async function analyze(imageDataUrl) {
    const rgb = await extractSkinColor(imageDataUrl);
    const guessed = guessFeatures(rgb);
    const initialResult = classifySeason(rgb, guessed);
    return { ...initialResult, rgb, guessedFeatures: guessed };
  }

  function reclassify(rgb, confirmedFeatures) {
    return classifySeason(rgb, confirmedFeatures);
  }

  return { analyze, reclassify };
})();
