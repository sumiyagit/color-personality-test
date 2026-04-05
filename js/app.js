// Main App Controller
const App = (() => {
  let currentResult = null;

  function goToStep(stepId) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    const step = document.getElementById(stepId);
    step.classList.add('active');
    window.scrollTo(0, 0);
  }

  async function analyzePhoto() {
    const photoUrl = Camera.getPhotoDataUrl();
    if (!photoUrl) return;

    Camera.stopStream();
    goToStep('step-analyzing');

    const statusEl = document.getElementById('analyzing-status');
    const messages = [
      'Detecting skin tone...',
      'Analyzing undertones...',
      'Matching color season...',
      'Preparing your results...'
    ];

    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      msgIndex++;
      if (msgIndex < messages.length) {
        statusEl.textContent = messages[msgIndex];
      }
    }, 600);

    try {
      const result = await Analyzer.analyze(photoUrl);
      currentResult = result;

      // Wait a bit for the animation to feel natural
      await new Promise(r => setTimeout(r, 2400));
      clearInterval(msgInterval);

      renderResults(result, photoUrl);
      goToStep('step-results');
    } catch (err) {
      clearInterval(msgInterval);
      console.error('Analysis error:', err);
      alert('Something went wrong analyzing your photo. Please try again.');
      goToStep('step-capture');
    }
  }

  function renderResults(result, userPhotoUrl) {
    const s = result.season;

    // Hero
    document.getElementById('result-emoji').textContent = s.emoji;
    document.getElementById('result-name').textContent = s.name;
    document.getElementById('result-subtitle').textContent = s.subtitle;

    // Set result background theme
    const hero = document.getElementById('result-hero');
    const theme = SEASON_THEMES[s.season];
    hero.style.background = theme.gradient;
    hero.style.borderRadius = '20px';
    hero.style.padding = '28px 20px';
    hero.style.marginBottom = '20px';

    // Faces
    document.getElementById('result-user-photo').src = userPhotoUrl;
    document.getElementById('result-type-photo').src = s.faceImage;
    document.getElementById('result-type-label').textContent = s.name;

    // Description
    document.getElementById('result-description').textContent = s.description;

    // Personality
    const personalityList = document.getElementById('result-personality');
    personalityList.innerHTML = s.personality.map(p => `<li>${p}</li>`).join('');

    // Best colors
    const colorsDiv = document.getElementById('result-colors');
    colorsDiv.innerHTML = s.bestColors.map(c =>
      `<div class="color-swatch" style="background:${c}" title="${c}"></div>`
    ).join('');

    // Avoid colors
    const avoidDiv = document.getElementById('result-avoid-colors');
    avoidDiv.innerHTML = s.avoidColors.map(c =>
      `<div class="color-swatch" style="background:${c}" title="${c}"></div>`
    ).join('');

    // Clothing name label
    document.getElementById('clothing-season-name').textContent = s.name;

    // Clothing recommendations
    const clothingDiv = document.getElementById('result-clothing');
    clothingDiv.innerHTML = s.clothing.map(item => createRecCard(item, s.faceImage, s.name)).join('');

    // Accessories
    const accessDiv = document.getElementById('result-accessories');
    accessDiv.innerHTML = s.accessories.map(item => createRecCard(item, s.faceImage, s.name)).join('');
  }

  function createRecCard(item, faceImage, seasonName) {
    const colorsHtml = item.colors
      ? item.colors.map(c => `<span class="rec-color-tag">${c}</span>`).join('')
      : '';

    return `
      <div class="rec-item">
        <img class="rec-item-img" src="${item.image}" alt="${item.name}" loading="lazy"
             onerror="this.style.background='#ddd';this.alt='Image';">
        <div class="rec-item-info">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          ${colorsHtml ? `<div class="rec-colors">${colorsHtml}</div>` : ''}
          <div class="rec-face-ref">
            <img src="${faceImage}" alt="${seasonName}" loading="lazy">
            <span>Looks great on ${seasonName} types</span>
          </div>
        </div>
      </div>
    `;
  }

  function restart() {
    Camera.retake();
    currentResult = null;
    goToStep('step-welcome');
  }

  return { goToStep, analyzePhoto, restart };
})();
