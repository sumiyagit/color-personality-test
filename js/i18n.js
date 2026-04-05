// Internationalization — Mongolian (default) + English
const I18N = {
  mn: {
    // Welcome
    title: "Өөрт тохирсон\nхувцаслалттай болоорой",
    subtitle: "Нүүрнийхээ өнгийг шинжлүүлэн, танд хамгийн тохирох хувцас, өнгөний зөвлөмж аваарай. Ердөө 3 алхамд.",
    step1: "Сэлфи авах",
    step2: "Бид таны өнгийг шинжилнэ",
    step3: "Тохирох хувцасны зөвлөмж авах",
    letsBegin: "Эхлэе",

    // Capture
    showFace: "Нүүрээ харуулна уу",
    captureSubtitle: "Таны арьсны өнгөнд үндэслэн хамгийн тохирох хувцас, өнгөний зөвлөмж өгнө.",
    photoPlaceholder: "Таны зураг энд харагдана",
    takeSelfie: "Сэлфи авах",
    or: "эсвэл",
    uploadPhoto: "Зураг оруулах",
    retake: "Дахин авах",
    analyzeColors: "Шинжлүүлэх",

    // Analyzing
    analyzingTitle: "Таны өнгийг шинжилж байна",
    status1: "Арьсны өнгийг тодорхойлж байна...",
    status2: "Дэд өнгийг шинжилж байна...",
    status3: "Тохирох хувцасны өнгийг тааруулж байна...",
    status4: "Зөвлөмжийг бэлтгэж байна...",

    // Results
    you: "Та",
    yourPersonality: "✨ Таны онцлог шинж",
    yourBestColors: "🎨 Танд тохирох өнгөнүүд",
    colorsToAvoid: "🚫 Зайлсхийх өнгөнүүд",
    clothingForYou: "👗 Танд тохирох хувцас",
    clothingIntro: "Таны {season} өнгөнд хамгийн тохирох хувцаснууд:",
    accessoriesForYou: "💎 Танд тохирох гоёл чимэглэл",
    accessoriesIntro: "Таны өнгөнд тохирсон загварууд:",
    looksGreatOn: "{season} төрөлд маш сайн тохирно",
    tryAgain: "Дахин оролдох",

    // Confirm step
    confirmTitle: "Баталгаажуулалт",
    confirmSubtitle: "Бид дараах зүйлсийг тодорхойлсон. Зөв эсэхийг шалгана уу.",
    confirmEyeLabel: "👁️ Нүдний өнгө",
    confirmHairLabel: "💇 Үсний өнгө",
    confirmSkinLabel: "🎨 Арьсны дэд өнгө",
    confirmDetected: "Бидний тодорхойлсон: {value}",
    confirmSubmit: "Үр дүнг харах",
    eyeBlack: "Хар",
    eyeBrown: "Бор",
    eyeHazel: "Ойн самрын",
    eyeBlue: "Хөх",
    eyeGreen: "Ногоон",
    eyeGray: "Саарал",
    hairBlack: "Хар",
    hairDarkBrown: "Хүрэн бор",
    hairBrown: "Бор",
    hairBlonde: "Шар",
    hairRed: "Улаан",
    hairGray: "Саарал/Цагаан",
    skinWarm: "Дулаан",
    skinCool: "Сэрүүн",
    skinNeutral: "Төвийг сахисан",
    skinWarmDesc: "Алтлаг, шаргал",
    skinCoolDesc: "Ягаан, улаавтар",
    skinNeutralDesc: "Холимог",
    confirmGenderLabel: "👤 Хүйс",
    genderFemale: "Эмэгтэй",
    genderMale: "Эрэгтэй",
    confirmStyleLabel: "✨ Хувцаслалтын хэв маяг",
    styleCasual: "Чөлөөт",
    styleOffice: "Оффис",
    styleElegant: "Дэгжин",
    styleStreet: "Гудамжны",

    // Season names
    seasons: {
      lightSpring: { name: "Цайвар Хавар", subtitle: "Сэрүүн & Гэрэлтэй" },
      warmSpring: { name: "Дулаан Хавар", subtitle: "Алтан & Эрч хүчтэй" },
      brightSpring: { name: "Тод Хавар", subtitle: "Тунгалаг & Тод" },
      lightSummer: { name: "Цайвар Зун", subtitle: "Зөөлөн & Сэрүүн" },
      coolSummer: { name: "Сэрүүн Зун", subtitle: "Дэгжин & Тайван" },
      softSummer: { name: "Зөөлөн Зун", subtitle: "Бүдэг & Нарийн" },
      softAutumn: { name: "Зөөлөн Намар", subtitle: "Дулаан & Бүдэг" },
      warmAutumn: { name: "Дулаан Намар", subtitle: "Баялаг & Газрын" },
      deepAutumn: { name: "Гүн Намар", subtitle: "Эрчимтэй & Дулаан" },
      deepWinter: { name: "Гүн Өвөл", subtitle: "Хатуу & Драматик" },
      coolWinter: { name: "Сэрүүн Өвөл", subtitle: "Мөсөн & Нарийн" },
      brightWinter: { name: "Тод Өвөл", subtitle: "Тод & Гайхалтай" }
    },

    // Personality translations
    personalities: {
      lightSpring: [
        "Байгалиасаа өөдрөг, баяр хөөртэй",
        "Зөөлөн энергитэй бүтээлч",
        "Нийтэч, дулаан зантай",
        "Өдөр тутмын гоо сайхныг мэдрэгч",
        "Тайван итгэлтэй энхийн элч"
      ],
      warmSpring: [
        "Эрч хүчтэй, урам зоригтой удирдагч",
        "Байгалиасаа харизматик, урам өгөгч",
        "Үйл ажиллагаанд чиглэсэн, том санаатай",
        "Өгөөмөр, дулаан зүрхтэй",
        "Хамтын орчинд амжилттай"
      ],
      brightSpring: [
        "Зоригтой, итгэлтэй харилцагч",
        "Шуурхай ухаантай, халдварлаж чадах инээмтгэй",
        "Олон янз, хөдөлгөөнт зүйлд дуртай",
        "Трэнд бүтээгч, эрсдэл хүлээгч",
        "Аливаа нөхцөлд энерги авчирдаг"
      ],
      lightSummer: [
        "Ухаалаг, тунгаан бодогч",
        "Өрөвдөх сэтгэлтэй сонсогч, зөвлөгч",
        "Зохицол, тэнцвэрийг эрхэмлэдэг",
        "Нарийн амттай, чимээгүй бүтээлч",
        "Үнэнч, гүнзгий халамжтай найз"
      ],
      coolSummer: [
        "Тайван, оюуны хурц",
        "Тоо ширхэгээс чанарыг эрхэмлэдэг",
        "Стратегийн сэтгэгч, шилдэг дүгнэлттэй",
        "Гүнзгий харилцааг эрхэмлэдэг",
        "Чимээгүй нөлөөлөл, хүндэтгэлтэй"
      ],
      softSummer: [
        "Тайван, тогтвортой байдал",
        "Нарийн ялгаа, мэдрэмжийг үнэлдэг",
        "Байгалиасаа дипломат, нарийн мэдрэмжтэй",
        "Минималист гоо зүйтэй бүтээлч",
        "Тэвчээртэй, гүнзгий ажиглагч"
      ],
      softAutumn: [
        "Тайван дотоод хүч чадалтай",
        "Үнэнч шударга байдлыг эрхэмлэдэг",
        "Байгалиасаа халамжтай, дэмжлэг үзүүлэгч",
        "Урлаг, чанарыг үнэлдэг",
        "Тогтвортой, найдвартай"
      ],
      warmAutumn: [
        "Найдвартай, гүнзгий үнэнч",
        "Баялаг хошин шогтой түүхч",
        "Уламжлал, өв соёлыг эрхэмлэдэг",
        "Гараар шийдвэрлэгч",
        "Хаана ч дулаан уур амьсгал бүтээдэг"
      ],
      deepAutumn: [
        "Хүсэл тэмүүлэлтэй, гүнзгий зориулалттай",
        "Дулаан эрх мэдэлтэй",
        "Зорилго, утга учраар хөдөлдөг",
        "Хайртай хүмүүсээ хамгаалагч",
        "Хүч чадал, өрөвдөх сэтгэлийг хослуулдаг"
      ],
      deepWinter: [
        "Эрчимтэй, гүнзгий төвлөрсөн",
        "Алсын харааг удирдагч",
        "Үнэн, шулуун шударгыг эрхэмлэдэг",
        "Аливаа өрөөнд хүчтэй байдал",
        "Бүтээлч гүнзгийтэй стратегийн оюун ухаан"
      ],
      coolWinter: [
        "Нарийн, ялгаатай",
        "Өндөр стандарттай аналитик",
        "Нарийвчлал, шилдэг чанарыг эрхэмлэдэг",
        "Чимээгүй хүчирхэг, өөртөө итгэлтэй",
        "Бодол, илэрхийлэлд дэгжин"
      ],
      brightWinter: [
        "Соромзон, мартагдашгүй",
        "Шинэлэг, ирээдүйг харсан",
        "Жинхэнэ өөрөө байх зоригтой",
        "Бусдыг зоригтой үйлдлээр урамшуулдаг",
        "Эрчимтэй байдал, тоглоомыг хослуулдаг"
      ]
    },

    // Season descriptions
    descriptions: {
      lightSpring: "Та дулаан, гэрэлтэй туяа цацруулдаг. Таны өнгө дулаан дэд өнгөтэй, нарийн, байгалиасаа сэрүүн, залуу харагддаг.",
      warmSpring: "Та байгалиасаа алтан, нарны туяанд орсон харагддаг. Таны дулаан дэд өнгөнүүд эрч хүч, энерги өгдөг.",
      brightSpring: "Та дулаан дэд өнгөтэй тод ялгаатай. Таны тунгалаг, тод өнгө динамик, нүд булаам байдаг.",
      lightSummer: "Та зөөлөн, сэрүүн дэд өнгөтэй цайвар шинж чанартай. Таны өнгө манантай өглөө шиг зөөлөн, эфирийн, тайвшируулдаг.",
      coolSummer: "Та дунд зэргийн ялгаатай тод сэрүүн дэд өнгөтэй. Таны өнгө тэнгэрийг тусгасан тогтмол нуур шиг нарийн, боловсронгуй.",
      softSummer: "Та сэрүүн-төвийг сахисан бүдэг өнгөтэй. Таны харагдах байдал усан будгийн зөөлөн холилдсон шиг нарийхан, боловсронгуй.",
      softAutumn: "Та газрын, байгалийн дулаан бүдэг өнгөтэй. Намрын навчис эргэж эхэлж буй шиг зөөлөн дулаан, нууцлаг.",
      warmAutumn: "Та алтан-олив дэд өнгөтэй баялаг дулаан өнгөтэй. Таны байдал дулаан, урьж байгаа, гүнзгий тайвшируулдаг намрын өдөр шиг.",
      deepAutumn: "Та дулаан дэд өнгөтэй гүн, баялаг өнгөтэй. Таны харагдах байдал гайхалтай, хүчтэй — намрын нарны шар туяа шиг.",
      deepWinter: "Та сэрүүн-төвийг сахисан дэд өнгөтэй өндөр ялгаатай. Таны гайхалтай өнгө анхаарал татдаг — одод дүүрэн тунгалаг өвлийн шөнийн тэнгэр шиг.",
      coolWinter: "Та дунд-өндөр ялгаатай тод сэрүүн дэд өнгөтэй. Таны өнгө цэвэрхэн алмаз шиг — сэрүүн, тунгалаг, цацрагтай.",
      brightWinter: "Та сэрүүн дэд өнгөтэй хамгийн өндөр ялгаатай. Таны өнгө цахилгаан, соромзон — шинэ цас дээрх нарны гэрэл шиг."
    }
  },

  en: {
    // Welcome
    title: "Find Clothes\nThat Suit You",
    subtitle: "Get personalized clothing and color recommendations based on your skin tone in 3 simple steps.",
    step1: "Take a selfie",
    step2: "We analyze your colors",
    step3: "Get clothing recommendations",
    letsBegin: "Let's Begin",

    // Capture
    showFace: "Show Us Your Face",
    captureSubtitle: "We'll analyze your skin tone to recommend the best clothing colors for you.",
    photoPlaceholder: "Your photo will appear here",
    takeSelfie: "Take Selfie",
    or: "or",
    uploadPhoto: "Upload Photo",
    retake: "Retake",
    analyzeColors: "Analyze",

    // Analyzing
    analyzingTitle: "Analyzing Your Colors",
    status1: "Detecting skin tone...",
    status2: "Analyzing undertones...",
    status3: "Matching your best clothing colors...",
    status4: "Preparing recommendations...",

    // Results
    you: "You",
    yourPersonality: "✨ Your Style Profile",
    yourBestColors: "🎨 Colors That Suit You",
    colorsToAvoid: "🚫 Colors to Avoid",
    clothingForYou: "👗 Clothing For You",
    clothingIntro: "Pieces that complement your {season} coloring:",
    accessoriesForYou: "💎 Accessories For You",
    accessoriesIntro: "Styles that match your colors:",
    looksGreatOn: "Looks great on {season} types",
    tryAgain: "Try Again",

    // Confirm step
    confirmTitle: "Confirm Your Features",
    confirmSubtitle: "We detected the following. Please verify or correct them.",
    confirmEyeLabel: "👁️ Eye Color",
    confirmHairLabel: "💇 Hair Color",
    confirmSkinLabel: "🎨 Skin Undertone",
    confirmDetected: "We detected: {value}",
    confirmSubmit: "See My Results",
    eyeBlack: "Black",
    eyeBrown: "Brown",
    eyeHazel: "Hazel",
    eyeBlue: "Blue",
    eyeGreen: "Green",
    eyeGray: "Gray",
    hairBlack: "Black",
    hairDarkBrown: "Dark Brown",
    hairBrown: "Brown",
    hairBlonde: "Blonde",
    hairRed: "Red",
    hairGray: "Gray/White",
    skinWarm: "Warm",
    skinCool: "Cool",
    skinNeutral: "Neutral",
    skinWarmDesc: "Golden, yellowish",
    skinCoolDesc: "Pink, reddish",
    skinNeutralDesc: "Mixed",
    confirmGenderLabel: "👤 Gender",
    genderFemale: "Female",
    genderMale: "Male",
    confirmStyleLabel: "✨ Style Preference",
    styleCasual: "Casual",
    styleOffice: "Office",
    styleElegant: "Elegant",
    styleStreet: "Street",

    // Season names (use from data.js)
    seasons: {
      lightSpring: { name: "Light Spring", subtitle: "Fresh & Luminous" },
      warmSpring: { name: "Warm Spring", subtitle: "Golden & Vibrant" },
      brightSpring: { name: "Bright Spring", subtitle: "Clear & Vivid" },
      lightSummer: { name: "Light Summer", subtitle: "Soft & Cool" },
      coolSummer: { name: "Cool Summer", subtitle: "Elegant & Serene" },
      softSummer: { name: "Soft Summer", subtitle: "Muted & Graceful" },
      softAutumn: { name: "Soft Autumn", subtitle: "Warm & Muted" },
      warmAutumn: { name: "Warm Autumn", subtitle: "Rich & Earthy" },
      deepAutumn: { name: "Deep Autumn", subtitle: "Intense & Warm" },
      deepWinter: { name: "Deep Winter", subtitle: "Bold & Dramatic" },
      coolWinter: { name: "Cool Winter", subtitle: "Icy & Refined" },
      brightWinter: { name: "Bright Winter", subtitle: "Vivid & Striking" }
    },

    personalities: null, // use from data.js directly
    descriptions: null   // use from data.js directly
  }
};

// Current language state
let currentLang = 'mn';

function t(key) {
  return I18N[currentLang]?.[key] || I18N.en[key] || key;
}

function tSeason(seasonKey, field) {
  return I18N[currentLang]?.seasons?.[seasonKey]?.[field]
    || I18N.en.seasons[seasonKey]?.[field]
    || '';
}

function tPersonality(seasonKey) {
  if (currentLang === 'mn') {
    return I18N.mn.personalities[seasonKey] || SEASONS[seasonKey].personality;
  }
  return SEASONS[seasonKey].personality;
}

function tDescription(seasonKey) {
  if (currentLang === 'mn') {
    return I18N.mn.descriptions[seasonKey] || SEASONS[seasonKey].description;
  }
  return SEASONS[seasonKey].description;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('colortest-lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  // Update language switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Re-render results if on results page
  if (typeof App !== 'undefined' && App.reRenderIfNeeded) {
    App.reRenderIfNeeded();
  }
}

function applyTranslations() {
  // Welcome
  document.querySelector('#step-welcome h1').innerHTML = t('title').replace('\n', '<br>');
  document.querySelector('#step-welcome .subtitle').textContent = t('subtitle');
  document.querySelectorAll('.preview-step span:last-child')[0].textContent = t('step1');
  document.querySelectorAll('.preview-step span:last-child')[1].textContent = t('step2');
  document.querySelectorAll('.preview-step span:last-child')[2].textContent = t('step3');
  document.querySelector('#step-welcome .btn-primary').firstChild.textContent = t('letsBegin') + ' ';

  // Capture
  document.querySelector('#step-capture h2').textContent = t('showFace');
  document.querySelector('#step-capture .subtitle').textContent = t('captureSubtitle');
  document.querySelector('#camera-placeholder p').textContent = t('photoPlaceholder');
  document.querySelector('#btn-start-camera').lastChild.textContent = ' ' + t('takeSelfie');
  document.querySelector('.or-text').textContent = t('or');
  document.querySelector('.btn-upload-label').childNodes[1].textContent = ' ' + t('uploadPhoto');
  document.querySelector('#photo-actions .btn-capture').lastChild.textContent = ' ' + t('retake');
  document.querySelector('#photo-actions .btn-primary').firstChild.textContent = t('analyzeColors') + ' ';

  // Analyzing
  document.querySelector('#step-analyzing h2').textContent = t('analyzingTitle');

  // Confirm step
  const confirmTitle = document.getElementById('confirm-title');
  if (confirmTitle) confirmTitle.textContent = t('confirmTitle');
  const confirmSub = document.getElementById('confirm-subtitle');
  if (confirmSub) confirmSub.textContent = t('confirmSubtitle');
  const confirmEye = document.getElementById('confirm-eye-label');
  if (confirmEye) confirmEye.textContent = t('confirmEyeLabel');
  const confirmHair = document.getElementById('confirm-hair-label');
  if (confirmHair) confirmHair.textContent = t('confirmHairLabel');
  const confirmSkin = document.getElementById('confirm-skin-label');
  if (confirmSkin) confirmSkin.textContent = t('confirmSkinLabel');
  const confirmGender = document.getElementById('confirm-gender-label');
  if (confirmGender) confirmGender.textContent = t('confirmGenderLabel');
  const confirmStyle = document.getElementById('confirm-style-label');
  if (confirmStyle) confirmStyle.textContent = t('confirmStyleLabel');
  const confirmBtn = document.querySelector('.confirm-submit-btn');
  if (confirmBtn) {
    const svgEl = confirmBtn.querySelector('svg');
    confirmBtn.innerHTML = '';
    confirmBtn.appendChild(document.createTextNode(t('confirmSubmit') + ' '));
    if (svgEl) confirmBtn.appendChild(svgEl);
  }

  // Result static labels — use data attributes for reliable matching
  const labelMap = {
    'personality': 'yourPersonality',
    'best-colors': 'yourBestColors',
    'avoid-colors': 'colorsToAvoid',
    'clothing': 'clothingForYou',
    'accessories': 'accessoriesForYou'
  };
  document.querySelectorAll('#step-results .result-card h3[data-label]').forEach(h3 => {
    const key = labelMap[h3.dataset.label];
    if (key) h3.textContent = t(key);
  });

  // Try Again button
  const tryAgainBtn = document.querySelector('.result-footer .btn-primary');
  if (tryAgainBtn) {
    tryAgainBtn.lastChild.textContent = ' ' + t('tryAgain');
  }
}

// Initialize language from localStorage or default to Mongolian
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('colortest-lang');
  currentLang = saved || 'mn';
  applyTranslations();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
});
