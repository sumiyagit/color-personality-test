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

  // Classify RGB color into a 12-season type
  function classifySeason(rgb) {
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const { h, s, l } = hsl;

    // Warmth: hue in the warm range (yellow-orange-red) = warm, otherwise cool
    // Normalize hue to handle wrapping
    const isWarm = (h >= 10 && h <= 50) || (h >= 350);
    const isCool = !isWarm;

    // Depth: how light or dark
    const isLight = l >= 65;
    const isDark = l <= 45;
    const isMedium = !isLight && !isDark;

    // Saturation: how vivid
    const isMuted = s <= 35;
    const isBright = s >= 55;

    // Classification logic
    let seasonKey;

    if (isWarm && isLight && !isMuted) {
      seasonKey = 'lightSpring';
    } else if (isWarm && isLight && isMuted) {
      seasonKey = 'lightSpring';
    } else if (isWarm && isMedium && isBright) {
      seasonKey = 'brightSpring';
    } else if (isWarm && isMedium && !isMuted) {
      seasonKey = 'warmSpring';
    } else if (isWarm && isMedium && isMuted) {
      seasonKey = 'softAutumn';
    } else if (isWarm && isDark && isBright) {
      seasonKey = 'deepAutumn';
    } else if (isWarm && isDark && !isMuted) {
      seasonKey = 'warmAutumn';
    } else if (isWarm && isDark && isMuted) {
      seasonKey = 'deepAutumn';
    } else if (isCool && isLight && isBright) {
      seasonKey = 'brightWinter';
    } else if (isCool && isLight && !isMuted) {
      seasonKey = 'lightSummer';
    } else if (isCool && isLight && isMuted) {
      seasonKey = 'lightSummer';
    } else if (isCool && isMedium && isBright) {
      seasonKey = 'brightWinter';
    } else if (isCool && isMedium && !isMuted) {
      seasonKey = 'coolSummer';
    } else if (isCool && isMedium && isMuted) {
      seasonKey = 'softSummer';
    } else if (isCool && isDark && isBright) {
      seasonKey = 'deepWinter';
    } else if (isCool && isDark && !isMuted) {
      seasonKey = 'coolWinter';
    } else if (isCool && isDark && isMuted) {
      seasonKey = 'deepWinter';
    } else {
      // Fallback
      seasonKey = 'warmSpring';
    }

    return {
      key: seasonKey,
      season: SEASONS[seasonKey],
      analysis: { rgb, hsl, isWarm, isLight, isDark, isMuted, isBright }
    };
  }

  async function analyze(imageDataUrl) {
    const rgb = await extractSkinColor(imageDataUrl);
    return classifySeason(rgb);
  }

  return { analyze };
})();
