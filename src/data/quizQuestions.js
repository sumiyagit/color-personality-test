export const quizQuestions = {
  spring: [
    {
      question: 'Which set of colors makes your skin glow?',
      type: 'color-compare',
      options: [
        {
          label: 'Soft pastels & light warmth',
          colors: ['#FFE4B5', '#E6E6FA', '#B0E0E6', '#FFDAB9'],
          subSeason: 'light-spring',
          score: 1,
        },
        {
          label: 'Rich warm golds & corals',
          colors: ['#FF7F50', '#DAA520', '#FF6347', '#F4A460'],
          subSeason: 'warm-spring',
          score: 1,
        },
        {
          label: 'Vivid brights & clear colors',
          colors: ['#FF4500', '#00CED1', '#FFD700', '#FF1493'],
          subSeason: 'bright-spring',
          score: 1,
        },
      ],
    },
    {
      question: 'Which jewelry looks best on you?',
      type: 'visual',
      options: [
        {
          label: 'Light gold & delicate pieces',
          emoji: '✨',
          subSeason: 'light-spring',
          score: 1,
        },
        {
          label: 'Warm gold & amber stones',
          emoji: '🌟',
          subSeason: 'warm-spring',
          score: 1,
        },
        {
          label: 'Bright gold & colorful gems',
          emoji: '💎',
          subSeason: 'bright-spring',
          score: 1,
        },
      ],
    },
    {
      question: 'How does your skin react to sun?',
      type: 'text',
      options: [
        {
          label: 'Burns easily, light tan',
          subSeason: 'light-spring',
          score: 1,
        },
        {
          label: 'Tans to a warm golden tone',
          subSeason: 'warm-spring',
          score: 1,
        },
        {
          label: 'Tans well with a healthy glow',
          subSeason: 'bright-spring',
          score: 1,
        },
      ],
    },
  ],

  summer: [
    {
      question: 'Which colors make you look healthiest?',
      type: 'color-compare',
      options: [
        {
          label: 'Soft pinks & powder blues',
          colors: ['#E8D5E0', '#B0C4DE', '#DDA0DD', '#F0E68C'],
          subSeason: 'light-summer',
          score: 1,
        },
        {
          label: 'Cool berry & slate tones',
          colors: ['#8B008B', '#708090', '#4682B4', '#C71585'],
          subSeason: 'cool-summer',
          score: 1,
        },
        {
          label: 'Muted dusty rose & sage',
          colors: ['#BC8F8F', '#8FBC8F', '#D2B48C', '#C0C0C0'],
          subSeason: 'soft-summer',
          score: 1,
        },
      ],
    },
    {
      question: 'Which best describes your overall look?',
      type: 'text',
      options: [
        {
          label: 'Light and delicate, ethereal',
          subSeason: 'light-summer',
          score: 1,
        },
        {
          label: 'Cool and elegant, striking',
          subSeason: 'cool-summer',
          score: 1,
        },
        {
          label: 'Soft and blended, gentle',
          subSeason: 'soft-summer',
          score: 1,
        },
      ],
    },
    {
      question: 'Which lip color looks most natural?',
      type: 'text',
      options: [
        {
          label: 'Light pink or peach',
          subSeason: 'light-summer',
          score: 1,
        },
        {
          label: 'Cool raspberry or plum',
          subSeason: 'cool-summer',
          score: 1,
        },
        {
          label: 'Dusty rose or mauve',
          subSeason: 'soft-summer',
          score: 1,
        },
      ],
    },
  ],

  autumn: [
    {
      question: 'Which color palette attracts you most?',
      type: 'color-compare',
      options: [
        {
          label: 'Soft warm neutrals & blush',
          colors: ['#D2B48C', '#DEB887', '#C4A882', '#E8C8A0'],
          subSeason: 'soft-autumn',
          score: 1,
        },
        {
          label: 'Rich earthy oranges & golds',
          colors: ['#CD853F', '#D2691E', '#B8860B', '#8B4513'],
          subSeason: 'warm-autumn',
          score: 1,
        },
        {
          label: 'Deep rich jewel tones',
          colors: ['#800000', '#556B2F', '#8B0000', '#2F4F4F'],
          subSeason: 'deep-autumn',
          score: 1,
        },
      ],
    },
    {
      question: 'What describes your natural hair color best?',
      type: 'text',
      options: [
        {
          label: 'Light to medium brown with golden highlights',
          subSeason: 'soft-autumn',
          score: 1,
        },
        {
          label: 'Auburn, red, or warm chestnut',
          subSeason: 'warm-autumn',
          score: 1,
        },
        {
          label: 'Dark brown or deep auburn',
          subSeason: 'deep-autumn',
          score: 1,
        },
      ],
    },
    {
      question: 'Do you look better in muted or vivid colors?',
      type: 'text',
      options: [
        {
          label: 'Muted and toned-down colors',
          subSeason: 'soft-autumn',
          score: 1,
        },
        {
          label: 'Medium-intensity warm colors',
          subSeason: 'warm-autumn',
          score: 1,
        },
        {
          label: 'Rich, deep, intense colors',
          subSeason: 'deep-autumn',
          score: 1,
        },
      ],
    },
  ],

  winter: [
    {
      question: 'Which set of colors makes you feel most vibrant?',
      type: 'color-compare',
      options: [
        {
          label: 'Deep jewel tones',
          colors: ['#191970', '#800020', '#006400', '#4B0082'],
          subSeason: 'deep-winter',
          score: 1,
        },
        {
          label: 'Icy brights & true primary',
          colors: ['#FF0000', '#0000FF', '#FFFFFF', '#FF00FF'],
          subSeason: 'bright-winter',
          score: 1,
        },
        {
          label: 'Cool blues & blue-pinks',
          colors: ['#4169E1', '#C71585', '#708090', '#E6E6FA'],
          subSeason: 'cool-winter',
          score: 1,
        },
      ],
    },
    {
      question: 'How is the contrast between your hair and skin?',
      type: 'text',
      options: [
        {
          label: 'Very high — dark hair, medium-deep skin',
          subSeason: 'deep-winter',
          score: 1,
        },
        {
          label: 'Very high — dark hair, light/fair skin',
          subSeason: 'bright-winter',
          score: 1,
        },
        {
          label: 'Medium to high — cool-toned overall',
          subSeason: 'cool-winter',
          score: 1,
        },
      ],
    },
    {
      question: 'Which lip color looks most natural on you?',
      type: 'text',
      options: [
        {
          label: 'Deep berry or plum',
          subSeason: 'deep-winter',
          score: 1,
        },
        {
          label: 'Bright red or fuchsia',
          subSeason: 'bright-winter',
          score: 1,
        },
        {
          label: 'Cool pink or mauve',
          subSeason: 'cool-winter',
          score: 1,
        },
      ],
    },
  ],
}
