// Main App Controller
const App = (() => {
  let currentResult = null;
  let currentPhotoUrl = null;
  let currentRgb = null;
  let confirmedFeatures = {};

  // Additional color analysis questions
  const QUESTIONS = [
    {
      id: 'veinColor',
      options: [
        { key: 'green', color: '#2E8B57' },
        { key: 'blue', color: '#4169E1' },
        { key: 'both', color: '#7B8CDE' }
      ]
    },
    {
      id: 'jewelryPref',
      options: [
        { key: 'gold' },
        { key: 'silver' },
        { key: 'both' }
      ]
    },
    {
      id: 'whiteCream',
      options: [
        { key: 'white' },
        { key: 'cream' },
        { key: 'both' }
      ]
    },
    {
      id: 'lipColor',
      options: [
        { key: 'peach', color: '#FFDAB9' },
        { key: 'pink', color: '#FFB6C1' },
        { key: 'berry', color: '#8B2252' },
        { key: 'brown', color: '#A0522D' }
      ]
    },
    {
      id: 'sunReaction',
      options: [
        { key: 'burn' },
        { key: 'tan' },
        { key: 'burnThenTan' }
      ]
    },
    {
      id: 'contrastLevel',
      options: [
        { key: 'low' },
        { key: 'medium' },
        { key: 'high' }
      ]
    }
  ];
  let currentQuestionIndex = 0;
  let questionAnswers = {};

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
      currentRgb = result.rgb;

      await new Promise(r => setTimeout(r, 2400));
      clearInterval(msgInterval);

      // Show confirmation step instead of results
      showConfirmStep(result.guessedFeatures, photoUrl);
      goToStep('step-confirm');
    } catch (err) {
      clearInterval(msgInterval);
      console.error('Analysis error:', err);
      alert('Something went wrong. Please try again.');
      goToStep('step-capture');
    }
  }

  function showConfirmStep(guessed, photoUrl) {
    // Show user photo
    document.getElementById('confirm-user-photo').src = photoUrl;

    // Eye color options
    const eyeOptions = [
      { key: 'black', color: '#1a1a1a' },
      { key: 'brown', color: '#8B4513' },
      { key: 'hazel', color: '#8E7618' },
      { key: 'blue', color: '#4682B4' },
      { key: 'green', color: '#2E8B57' },
      { key: 'gray', color: '#808080' }
    ];

    // Hair color options
    const hairOptions = [
      { key: 'black', color: '#1a1a1a' },
      { key: 'darkBrown', color: '#3B2314' },
      { key: 'brown', color: '#8B4513' },
      { key: 'blonde', color: '#DAA520' },
      { key: 'red', color: '#B7410E' },
      { key: 'gray', color: '#A9A9A9' }
    ];

    // Skin undertone options
    const skinOptions = [
      { key: 'warm', color: '#E8C07A' },
      { key: 'cool', color: '#D4A0A0' },
      { key: 'neutral', color: '#D2B48C' }
    ];

    // Gender options
    const genderOptions = [
      { key: 'female' },
      { key: 'male' }
    ];

    // Style options
    const styleOptions = [
      { key: 'casual' },
      { key: 'office' },
      { key: 'elegant' },
      { key: 'street' }
    ];

    // Render eye options
    renderOptions('eye-options', eyeOptions, 'eye', guessed.eyeColor, (key) => {
      return t('eye' + key.charAt(0).toUpperCase() + key.slice(1));
    });

    // Render hair options
    renderOptions('hair-options', hairOptions, 'hair', guessed.hairColor, (key) => {
      const labelKey = 'hair' + key.charAt(0).toUpperCase() + key.slice(1);
      return t(labelKey);
    });

    // Render skin options
    renderSkinOptions('skin-options', skinOptions, guessed.skinUndertone);

    // Render gender options
    renderGenderOptions('gender-options', genderOptions);

    // Render style options
    renderStyleOptions('style-options', styleOptions);

    // Set detected text
    document.getElementById('confirm-eye-detected').textContent =
      t('confirmDetected').replace('{value}', t('eye' + guessed.eyeColor.charAt(0).toUpperCase() + guessed.eyeColor.slice(1)));
    document.getElementById('confirm-hair-detected').textContent =
      t('confirmDetected').replace('{value}', t('hair' + guessed.hairColor.charAt(0).toUpperCase() + guessed.hairColor.slice(1)));
    document.getElementById('confirm-skin-detected').textContent =
      t('confirmDetected').replace('{value}', t('skin' + guessed.skinUndertone.charAt(0).toUpperCase() + guessed.skinUndertone.slice(1)));

    // Store initial selections — gender and style must be chosen by user
    confirmedFeatures = {
      eyeColor: guessed.eyeColor,
      hairColor: guessed.hairColor,
      skinUndertone: guessed.skinUndertone,
      gender: null,
      style: null
    };
  }

  function renderOptions(containerId, options, group, selected, labelFn) {
    const container = document.getElementById(containerId);
    container.innerHTML = options.map(opt => {
      const isSelected = opt.key === selected ? ' selected' : '';
      return `<button class="confirm-option${isSelected}" data-group="${group}" data-value="${opt.key}" onclick="App.selectOption(this, '${group}')">
        <span class="option-dot" style="background:${opt.color}"></span>
        ${labelFn(opt.key)}
      </button>`;
    }).join('');
  }

  function renderSkinOptions(containerId, options, selected) {
    const container = document.getElementById(containerId);
    container.innerHTML = options.map(opt => {
      const isSelected = opt.key === selected ? ' selected' : '';
      const label = t('skin' + opt.key.charAt(0).toUpperCase() + opt.key.slice(1));
      const desc = t('skin' + opt.key.charAt(0).toUpperCase() + opt.key.slice(1) + 'Desc');
      return `<button class="confirm-option${isSelected}" data-group="skin" data-value="${opt.key}" onclick="App.selectOption(this, 'skin')">
        <span class="option-dot" style="background:${opt.color}"></span>
        ${label} <span style="color:#999;font-size:0.75rem">(${desc})</span>
      </button>`;
    }).join('');
  }

  function renderGenderOptions(containerId, options) {
    const container = document.getElementById(containerId);
    container.innerHTML = options.map(opt => {
      const label = t('gender' + opt.key.charAt(0).toUpperCase() + opt.key.slice(1));
      const icon = opt.key === 'female' ? '👩' : '👨';
      return `<button class="confirm-option" data-group="gender" data-value="${opt.key}" onclick="App.selectOption(this, 'gender')">
        ${icon} ${label}
      </button>`;
    }).join('');
  }

  function renderStyleOptions(containerId, options) {
    const container = document.getElementById(containerId);
    container.innerHTML = options.map(opt => {
      const label = t('style' + opt.key.charAt(0).toUpperCase() + opt.key.slice(1));
      const icons = { casual: '👕', office: '👔', elegant: '👗', street: '🧥' };
      return `<button class="confirm-option" data-group="style" data-value="${opt.key}" onclick="App.selectOption(this, 'style')">
        ${icons[opt.key]} ${label}
      </button>`;
    }).join('');
  }

  function selectOption(btn, group) {
    // Deselect siblings
    btn.parentElement.querySelectorAll('.confirm-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // Update confirmed features
    const value = btn.dataset.value;
    if (group === 'eye') confirmedFeatures.eyeColor = value;
    else if (group === 'hair') confirmedFeatures.hairColor = value;
    else if (group === 'skin') confirmedFeatures.skinUndertone = value;
    else if (group === 'gender') confirmedFeatures.gender = value;
    else if (group === 'style') confirmedFeatures.style = value;
  }

  function goToQuestions() {
    // Validate required selections from confirm step
    if (!confirmedFeatures.gender) {
      highlightRequired('gender-options');
      return;
    }
    if (!confirmedFeatures.style) {
      highlightRequired('style-options');
      return;
    }

    currentQuestionIndex = 0;
    questionAnswers = {};
    renderQuestion(0);
    goToStep('step-questions');
  }

  function renderQuestion(index) {
    const q = QUESTIONS[index];
    const container = document.getElementById('question-container');
    const total = QUESTIONS.length;

    // Update progress
    document.getElementById('question-progress-fill').style.width = ((index + 1) / total * 100) + '%';
    document.getElementById('question-progress-text').textContent = (index + 1) + '/' + total;

    // Update button text
    const nextBtn = document.getElementById('btn-question-next');
    const isLast = index === total - 1;
    const svgHtml = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    nextBtn.innerHTML = (isLast ? t('seeResults') : t('next')) + ' ' + svgHtml;

    // Question title and description
    const title = t('q_' + q.id);
    const desc = t('q_' + q.id + '_desc');

    let optionsHtml = q.options.map(opt => {
      const label = t('q_' + q.id + '_' + opt.key);
      const selected = questionAnswers[q.id] === opt.key ? ' selected' : '';
      const dotHtml = opt.color ? `<span class="option-dot" style="background:${opt.color}"></span>` : '';
      return `<button class="confirm-option${selected}" data-value="${opt.key}" onclick="App.selectQuestionAnswer('${q.id}', '${opt.key}', this)">
        ${dotHtml}${label}
      </button>`;
    }).join('');

    container.innerHTML = `
      <h2 class="question-title">${title}</h2>
      <p class="question-desc">${desc}</p>
      <div class="confirm-options question-options">${optionsHtml}</div>
    `;
  }

  function selectQuestionAnswer(questionId, value, btn) {
    btn.parentElement.querySelectorAll('.confirm-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    questionAnswers[questionId] = value;
  }

  function nextQuestion() {
    const q = QUESTIONS[currentQuestionIndex];
    if (!questionAnswers[q.id]) {
      // Highlight that selection is needed
      const container = document.getElementById('question-container');
      const opts = container.querySelector('.question-options');
      if (opts) {
        opts.style.boxShadow = '0 0 0 2px #e53935';
        opts.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => { opts.style.boxShadow = ''; }, 2000);
      }
      return;
    }

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
    } else {
      // All questions answered — go to payment gate
      goToStep('step-payment');
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion(currentQuestionIndex);
    } else {
      goToStep('step-confirm');
    }
  }

  function proceedToResults() {
    // Reclassify with all data (confirmed features + question answers)
    const enhancedFeatures = { ...confirmedFeatures, ...questionAnswers };
    const result = Analyzer.reclassify(currentRgb, enhancedFeatures);
    currentResult = result;

    renderResults(result, currentPhotoUrl);
    goToStep('step-results');
  }

  function confirmAndAnalyze() {
    // Validate required selections
    if (!confirmedFeatures.gender) {
      highlightRequired('gender-options');
      return;
    }
    if (!confirmedFeatures.style) {
      highlightRequired('style-options');
      return;
    }

    // Reclassify with user-confirmed features
    const result = Analyzer.reclassify(currentRgb, confirmedFeatures);
    currentResult = result;

    renderResults(result, currentPhotoUrl);
    goToStep('step-results');
  }

  function highlightRequired(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.closest('.confirm-card').style.boxShadow = '0 0 0 2px #e53935';
    el.closest('.confirm-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      el.closest('.confirm-card').style.boxShadow = '';
    }, 2000);
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

    // Section headings — use data-label attributes
    const labelMap = {
      'personality': 'yourPersonality',
      'best-colors': 'yourBestColors',
      'avoid-colors': 'colorsToAvoid',
      'clothing': 'clothingForYou',
      'accessories': 'accessoriesForYou'
    };
    document.querySelectorAll('#step-results .result-card h3[data-label]').forEach(h3 => {
      const lkey = labelMap[h3.dataset.label];
      if (lkey) h3.textContent = t(lkey);
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

    // Clothing — filter by gender and style
    const gender = confirmedFeatures.gender || 'female';
    const style = confirmedFeatures.style || 'casual';
    const clothingData = getClothingForGenderStyle(key, gender, style);
    const accessoryData = getAccessoriesForGender(key, gender);

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
    clothingDiv.innerHTML = clothingData.map(item => createRecCard(item, s.faceImage, seasonName, key)).join('');

    // Accessories
    const accessDiv = document.getElementById('result-accessories');
    accessDiv.innerHTML = accessoryData.map(item => createRecCard(item, s.faceImage, seasonName, key)).join('');

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

  // Get clothing items based on gender and style
  function getClothingForGenderStyle(seasonKey, gender, style) {
    const genderStyleData = GENDER_STYLE_CLOTHING[gender]?.[style]?.[seasonKey];
    if (genderStyleData) return genderStyleData;
    // Fallback to default season clothing
    return SEASONS[seasonKey].clothing;
  }

  // Get accessories based on gender
  function getAccessoriesForGender(seasonKey, gender) {
    const genderAccData = GENDER_ACCESSORIES[gender]?.[seasonKey];
    if (genderAccData) return genderAccData;
    return SEASONS[seasonKey].accessories;
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
    currentRgb = null;
    confirmedFeatures = {};
    currentQuestionIndex = 0;
    questionAnswers = {};
    goToStep('step-welcome');
  }

  // Re-render results when language changes
  function reRenderIfNeeded() {
    if (currentResult && currentPhotoUrl) {
      renderResults(currentResult, currentPhotoUrl);
    }
  }

  return { goToStep, analyzePhoto, restart, reRenderIfNeeded, selectOption, confirmAndAnalyze, goToQuestions, nextQuestion, prevQuestion, selectQuestionAnswer, proceedToResults };
})();
