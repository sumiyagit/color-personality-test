// Main App Controller
const App = (() => {
  let currentResult = null;
  let currentPhotoUrl = null;
  let currentRgb = null;
  let confirmedFeatures = {};

  // Additional color analysis questions (style moved here from confirm step)
  const QUESTIONS = [
    {
      id: 'stylePref',
      guide: `<svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="65" height="80" rx="8" fill="#f0eeeb"/><text x="32" y="35" text-anchor="middle" font-size="28">👕</text><text x="32" y="60" text-anchor="middle" font-size="8" fill="#888">Casual</text>
        <rect x="72" y="0" width="65" height="80" rx="8" fill="#f0eeeb"/><text x="104" y="35" text-anchor="middle" font-size="28">👔</text><text x="104" y="60" text-anchor="middle" font-size="8" fill="#888">Office</text>
        <rect x="144" y="0" width="65" height="80" rx="8" fill="#f0eeeb"/><text x="176" y="35" text-anchor="middle" font-size="28">👗</text><text x="176" y="60" text-anchor="middle" font-size="8" fill="#888">Elegant</text>
        <rect x="216" y="0" width="65" height="80" rx="8" fill="#f0eeeb"/><text x="248" y="35" text-anchor="middle" font-size="28">🧥</text><text x="248" y="60" text-anchor="middle" font-size="8" fill="#888">Street</text>
      </svg>`,
      options: [
        { key: 'casual' },
        { key: 'office' },
        { key: 'elegant' },
        { key: 'street' }
      ]
    },
    {
      id: 'veinColor',
      guide: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" rx="12" fill="#FFF5EE"/>
        <path d="M40 100 Q50 60 60 40 Q65 25 70 20" stroke="#2E8B57" stroke-width="2" fill="none" opacity="0.7"/>
        <path d="M55 100 Q65 55 75 35 Q80 22 82 18" stroke="#4169E1" stroke-width="2" fill="none" opacity="0.7"/>
        <path d="M70 100 Q78 65 85 45 Q90 30 92 25" stroke="#2E8B57" stroke-width="1.5" fill="none" opacity="0.5"/>
        <ellipse cx="100" cy="70" rx="60" ry="35" fill="none" stroke="#ddd" stroke-width="1" stroke-dasharray="4 3"/>
        <circle cx="100" cy="15" r="8" fill="none" stroke="#999" stroke-width="1"/><text x="100" y="19" text-anchor="middle" font-size="10" fill="#999">🔍</text>
        <text x="100" y="110" text-anchor="middle" font-size="9" fill="#999">Бугуй</text>
      </svg>`,
      options: [
        { key: 'green', color: '#2E8B57' },
        { key: 'blue', color: '#4169E1' },
        { key: 'both', color: '#7B8CDE' }
      ]
    },
    {
      id: 'jewelryPref',
      guide: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" rx="12" fill="#FAFAFA"/>
        <circle cx="65" cy="50" r="25" fill="none" stroke="#DAA520" stroke-width="3"/>
        <circle cx="65" cy="50" r="18" fill="none" stroke="#DAA520" stroke-width="1.5" opacity="0.5"/>
        <circle cx="135" cy="50" r="25" fill="none" stroke="#C0C0C0" stroke-width="3"/>
        <circle cx="135" cy="50" r="18" fill="none" stroke="#C0C0C0" stroke-width="1.5" opacity="0.5"/>
        <text x="65" y="90" text-anchor="middle" font-size="10" fill="#B8860B">Алт</text>
        <text x="135" y="90" text-anchor="middle" font-size="10" fill="#808080">Мөнгө</text>
      </svg>`,
      options: [
        { key: 'gold' },
        { key: 'silver' },
        { key: 'both' }
      ]
    },
    {
      id: 'whiteCream',
      guide: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" rx="12" fill="#f8f6f3"/>
        <rect x="20" y="20" width="70" height="80" rx="8" fill="#FFFFFF" stroke="#e0e0e0" stroke-width="1"/>
        <text x="55" y="65" text-anchor="middle" font-size="9" fill="#999">Цагаан</text>
        <rect x="110" y="20" width="70" height="80" rx="8" fill="#FFFDD0" stroke="#e0e0e0" stroke-width="1"/>
        <text x="145" y="65" text-anchor="middle" font-size="9" fill="#999">Цөцгий</text>
        <text x="100" y="12" text-anchor="middle" font-size="9" fill="#aaa">Нүүрний дэргэд аль нь илүү зохицох вэ?</text>
      </svg>`,
      options: [
        { key: 'white' },
        { key: 'cream' },
        { key: 'both' }
      ]
    },
    {
      id: 'lipColor',
      guide: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" rx="12" fill="#FFF5F5"/>
        <ellipse cx="50" cy="55" rx="18" ry="12" fill="#FFDAB9" stroke="#E8B89D" stroke-width="1"/>
        <ellipse cx="100" cy="55" rx="18" ry="12" fill="#FFB6C1" stroke="#E8A0AB" stroke-width="1"/>
        <ellipse cx="150" cy="55" rx="18" ry="12" fill="#8B2252" stroke="#6B1242" stroke-width="1"/>
        <text x="50" y="85" text-anchor="middle" font-size="8" fill="#999">Тоор</text>
        <text x="100" y="85" text-anchor="middle" font-size="8" fill="#999">Ягаан</text>
        <text x="150" y="85" text-anchor="middle" font-size="8" fill="#ddd">Жимс</text>
      </svg>`,
      options: [
        { key: 'peach', color: '#FFDAB9' },
        { key: 'pink', color: '#FFB6C1' },
        { key: 'berry', color: '#8B2252' },
        { key: 'brown', color: '#A0522D' }
      ]
    },
    {
      id: 'sunReaction',
      guide: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" rx="12" fill="#FFFDE7"/>
        <circle cx="100" cy="30" r="18" fill="#FFD54F" stroke="#FFC107" stroke-width="1.5"/>
        <line x1="100" y1="8" x2="100" y2="2" stroke="#FFC107" stroke-width="1.5"/>
        <line x1="115" y1="15" x2="120" y2="10" stroke="#FFC107" stroke-width="1.5"/>
        <line x1="85" y1="15" x2="80" y2="10" stroke="#FFC107" stroke-width="1.5"/>
        <line x1="122" y1="30" x2="128" y2="30" stroke="#FFC107" stroke-width="1.5"/>
        <line x1="78" y1="30" x2="72" y2="30" stroke="#FFC107" stroke-width="1.5"/>
        <rect x="30" y="60" width="50" height="45" rx="6" fill="#FFCDD2"/><text x="55" y="87" text-anchor="middle" font-size="8" fill="#C62828">Шарддаг</text>
        <rect x="120" y="60" width="50" height="45" rx="6" fill="#D7CCC8"/><text x="145" y="87" text-anchor="middle" font-size="8" fill="#5D4037">Бариздаг</text>
      </svg>`,
      options: [
        { key: 'burn' },
        { key: 'tan' },
        { key: 'burnThenTan' }
      ]
    },
    {
      id: 'contrastLevel',
      guide: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="120" rx="12" fill="#FAFAFA"/>
        <circle cx="40" cy="45" r="20" fill="#D2B48C"/><rect x="25" y="20" width="30" height="15" rx="7" fill="#C4A882"/><circle cx="40" cy="42" r="3" fill="#8B7355"/>
        <text x="40" y="85" text-anchor="middle" font-size="8" fill="#999">Бага</text>
        <circle cx="100" cy="45" r="20" fill="#D2B48C"/><rect x="85" y="20" width="30" height="15" rx="7" fill="#5D4037"/><circle cx="100" cy="42" r="3" fill="#3E2723"/>
        <text x="100" y="85" text-anchor="middle" font-size="8" fill="#999">Дунд</text>
        <circle cx="160" cy="45" r="20" fill="#FFE0B2"/><rect x="145" y="20" width="30" height="15" rx="7" fill="#1a1a1a"/><circle cx="160" cy="42" r="3" fill="#1B5E20"/>
        <text x="160" y="85" text-anchor="middle" font-size="8" fill="#999">Өндөр</text>
      </svg>`,
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

    // Set detected text
    document.getElementById('confirm-eye-detected').textContent =
      t('confirmDetected').replace('{value}', t('eye' + guessed.eyeColor.charAt(0).toUpperCase() + guessed.eyeColor.slice(1)));
    document.getElementById('confirm-hair-detected').textContent =
      t('confirmDetected').replace('{value}', t('hair' + guessed.hairColor.charAt(0).toUpperCase() + guessed.hairColor.slice(1)));
    document.getElementById('confirm-skin-detected').textContent =
      t('confirmDetected').replace('{value}', t('skin' + guessed.skinUndertone.charAt(0).toUpperCase() + guessed.skinUndertone.slice(1)));

    // Store initial selections — gender must be chosen, style moved to questions
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

    const guideHtml = q.guide ? `<div class="question-guide">${q.guide}</div>` : '';

    container.innerHTML = `
      <h2 class="question-title">${title}</h2>
      <p class="question-desc">${desc}</p>
      ${guideHtml}
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
    // Map stylePref question answer to confirmedFeatures.style
    if (questionAnswers.stylePref) {
      confirmedFeatures.style = questionAnswers.stylePref;
    }

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
