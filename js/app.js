// Main App Controller
const App = (() => {
  let currentResult = null;
  let currentPhotoUrl = null;

  function goToStep(stepId) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    const step = document.getElementById(stepId);
    step.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  async function analyzePhoto() {
    const photoUrl = Camera.getPhotoDataUrl();
    if (!photoUrl) return;
    currentPhotoUrl = photoUrl;

    Camera.stopStream();
    goToStep('step-analyzing');

    const statusEl = document.getElementById('analyzing-status');
    const messages = [
      t('status1'),
      t('status2'),
      t('status3'),
      t('status4')
    ];

    statusEl.textContent = messages[0];
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

      await new Promise(r => setTimeout(r, 2400));
      clearInterval(msgInterval);

      renderResults(result, photoUrl);
      goToStep('step-results');
    } catch (err) {
      clearInterval(msgInterval);
      console.error('Analysis error:', err);
      alert('Something went wrong. Please try again.');
      goToStep('step-capture');
    }
  }

  function renderResults(result, userPhotoUrl) {
    const s = result.season;
    const key = result.key;
    const seasonName = tSeason(key, 'name');
    const seasonSubtitle = tSeason(key, 'subtitle');

    // Hero
    document.getElementById('result-emoji').textContent = s.emoji;
    document.getElementById('result-name').textContent = seasonName;
    document.getElementById('result-subtitle').textContent = seasonSubtitle;

    const hero = document.getElementById('result-hero');
    const theme = SEASON_THEMES[s.season];
    hero.style.background = theme.gradient;
    hero.style.borderRadius = '20px';
    hero.style.padding = '28px 20px';
    hero.style.marginBottom = '20px';

    // Faces
    document.getElementById('result-user-photo').src = userPhotoUrl;
    document.getElementById('result-type-photo').src = s.faceImage;
    document.getElementById('result-type-label').textContent = seasonName;

    // Description
    document.getElementById('result-description').textContent = tDescription(key);

    // Personality
    const personalityList = document.getElementById('result-personality');
    const traits = tPersonality(key);
    personalityList.innerHTML = traits.map(p => `<li>${p}</li>`).join('');

    // Section headings
    const headings = document.querySelectorAll('#step-results .result-card h3');
    headings.forEach(h3 => {
      const text = h3.textContent;
      if (text.includes('Personality') || text.includes('зан чанар')) h3.textContent = t('yourPersonality');
      else if (text.includes('Best Colors') || text.includes('шилдэг өнгө')) h3.textContent = t('yourBestColors');
      else if (text.includes('Avoid') || text.includes('Зайлсхийх')) h3.textContent = t('colorsToAvoid');
      else if (text.includes('Clothing') || text.includes('хувцас')) h3.textContent = t('clothingForYou');
      else if (text.includes('Accessories') || text.includes('чимэглэл')) h3.textContent = t('accessoriesForYou');
    });

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

    // Clothing intro
    document.getElementById('clothing-season-name').textContent = seasonName;
    const clothingIntroEl = document.querySelector('#result-clothing').closest('.result-card').querySelector('.rec-intro');
    if (clothingIntroEl) {
      clothingIntroEl.innerHTML = t('clothingIntro').replace('{season}', `<span id="clothing-season-name">${seasonName}</span>`);
    }

    // Accessories intro
    const accIntroEl = document.querySelector('#result-accessories').closest('.result-card').querySelector('.rec-intro');
    if (accIntroEl) {
      accIntroEl.textContent = t('accessoriesIntro');
    }

    // Clothing recommendations
    const clothingDiv = document.getElementById('result-clothing');
    clothingDiv.innerHTML = s.clothing.map(item => createRecCard(item, s.faceImage, seasonName, key)).join('');

    // Accessories
    const accessDiv = document.getElementById('result-accessories');
    accessDiv.innerHTML = s.accessories.map(item => createRecCard(item, s.faceImage, seasonName, key)).join('');

    // You label
    document.querySelector('#result-faces .face-card span').textContent = t('you');

    // Try again button
    const tryBtn = document.querySelector('.result-footer .btn-primary');
    if (tryBtn) {
      const svgEl = tryBtn.querySelector('svg');
      tryBtn.innerHTML = '';
      if (svgEl) tryBtn.appendChild(svgEl);
      tryBtn.appendChild(document.createTextNode(' ' + t('tryAgain')));
    }
  }

  function createRecCard(item, faceImage, seasonName, seasonKey) {
    const colorsHtml = item.colors
      ? item.colors.map(c => `<span class="rec-color-tag">${c}</span>`).join('')
      : '';

    const looksGreatText = t('looksGreatOn').replace('{season}', seasonName);

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
            <span>${looksGreatText}</span>
          </div>
        </div>
      </div>
    `;
  }

  function restart() {
    Camera.retake();
    currentResult = null;
    currentPhotoUrl = null;
    goToStep('step-welcome');
  }

  // Re-render results when language changes
  function reRenderIfNeeded() {
    if (currentResult && currentPhotoUrl) {
      renderResults(currentResult, currentPhotoUrl);
    }
  }

  return { goToStep, analyzePhoto, restart, reRenderIfNeeded };
})();
