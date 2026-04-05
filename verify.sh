#!/bin/bash
# Verification script — checks feature completeness
# Outputs a score (0-100) where higher is better

SCORE=0
TOTAL=20

check() {
  if grep -q "$2" "$1" 2>/dev/null; then
    SCORE=$((SCORE + 1))
  fi
}

# HTML structure (5 checks)
check "index.html" "step-welcome"
check "index.html" "step-capture"
check "index.html" "step-analyzing"
check "index.html" "step-results"
check "index.html" "camera-video"

# CSS (5 checks)
check "css/style.css" "max-width: 480px"
check "css/style.css" "@media"
check "css/style.css" ".btn-primary"
check "css/style.css" ".result-card"
check "css/style.css" ".rec-item"

# Camera (3 checks)
check "js/camera.js" "getUserMedia"
check "js/camera.js" "handleUpload"
check "js/camera.js" "takePhoto"

# Analyzer (3 checks)
check "js/analyzer.js" "extractSkinColor"
check "js/analyzer.js" "classifySeason"
check "js/analyzer.js" "rgbToHsl"

# App (2 checks)
check "js/app.js" "renderResults"
check "js/app.js" "createRecCard"

# Data (2 checks)
check "js/data.js" "lightSpring"
check "js/data.js" "SEASON_THEMES"

PERCENT=$((SCORE * 100 / TOTAL))
echo "$PERCENT"
