// 12-Season Color Analysis Data
const SEASONS = {
  lightSpring: {
    name: "Light Spring",
    emoji: "🌸",
    season: "Spring",
    subtitle: "Fresh & Luminous",
    description: "You radiate warmth and lightness. Your coloring is delicate with warm undertones, giving you a naturally fresh and youthful appearance.",
    personality: [
      "Optimistic and cheerful by nature",
      "Creative with a gentle energy",
      "Approachable and warm in social settings",
      "Drawn to beauty in everyday things",
      "Natural peacemaker with quiet confidence"
    ],
    bestColors: ["#FFD1DC", "#FFDAB9", "#E6E6FA", "#98FB98", "#FFE4B5", "#87CEEB", "#F0E68C", "#DDA0DD"],
    avoidColors: ["#000000", "#1C1C1C", "#8B0000", "#191970"],
    skinTone: { hueRange: [15, 45], satRange: [20, 55], lightRange: [65, 85] },
    clothing: [
      {
        name: "Pastel Floral Blouse",
        description: "Light peach or coral tones that complement your warm, delicate coloring",
        colors: ["Peach", "Coral", "Light Gold"],
        image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80"
      },
      {
        name: "Cream Knit Sweater",
        description: "Warm ivory that enhances your natural glow without overwhelming",
        colors: ["Ivory", "Warm White", "Butter"],
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80"
      },
      {
        name: "Light Wash Denim",
        description: "Soft blue denim keeps the look fresh and effortless",
        colors: ["Light Blue", "Soft Indigo"],
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Rose Gold Pendant",
        description: "Warm metallics harmonize with your peachy undertones",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
      },
      {
        name: "Straw Tote Bag",
        description: "Natural textures in warm beige tones complement your palette",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80"
  },

  warmSpring: {
    name: "Warm Spring",
    emoji: "🌻",
    season: "Spring",
    subtitle: "Golden & Vibrant",
    description: "You have a naturally golden, sun-kissed look. Your warm undertones give you a vibrant, energetic presence that lights up any room.",
    personality: [
      "Energetic and enthusiastic leader",
      "Naturally charismatic and inspiring",
      "Action-oriented with big ideas",
      "Generous and warm-hearted",
      "Thrives in collaborative environments"
    ],
    bestColors: ["#FF8C00", "#FFD700", "#FF6347", "#32CD32", "#FF7F50", "#DAA520", "#CD853F", "#F4A460"],
    avoidColors: ["#000000", "#808080", "#4B0082", "#191970"],
    skinTone: { hueRange: [20, 45], satRange: [30, 65], lightRange: [55, 75] },
    clothing: [
      {
        name: "Golden Yellow Top",
        description: "Rich warm yellows make your skin glow with vitality",
        colors: ["Golden", "Marigold", "Sunflower"],
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80"
      },
      {
        name: "Terracotta Blazer",
        description: "Earthy warm tones bring out the richness in your coloring",
        colors: ["Terracotta", "Burnt Orange", "Rust"],
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
      },
      {
        name: "Olive Green Trousers",
        description: "Warm greens create a harmonious, polished look",
        colors: ["Olive", "Moss", "Warm Green"],
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Gold Chain Necklace",
        description: "Yellow gold enhances your warm, golden undertones perfectly",
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80"
      },
      {
        name: "Amber Sunglasses",
        description: "Warm-toned frames that complement your sunny coloring",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
  },

  brightSpring: {
    name: "Bright Spring",
    emoji: "🌈",
    season: "Spring",
    subtitle: "Clear & Vivid",
    description: "You have striking contrast with warm undertones. Your clear, bright coloring gives you a dynamic and eye-catching presence.",
    personality: [
      "Bold and confident communicator",
      "Quick-witted with infectious laughter",
      "Thrives on variety and excitement",
      "Natural trendsetter and risk-taker",
      "Brings energy to every situation"
    ],
    bestColors: ["#FF4500", "#00CED1", "#FF1493", "#00FF00", "#FF6600", "#1E90FF", "#FFD700", "#FF69B4"],
    avoidColors: ["#808080", "#A9A9A9", "#D2B48C", "#F5F5DC"],
    skinTone: { hueRange: [15, 40], satRange: [35, 70], lightRange: [55, 78] },
    clothing: [
      {
        name: "Coral Statement Dress",
        description: "Bright warm corals make your features pop with energy",
        colors: ["Coral", "Bright Orange", "Poppy"],
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
      },
      {
        name: "Turquoise Blouse",
        description: "Clear blue-greens create stunning contrast with your warm skin",
        colors: ["Turquoise", "Aqua", "Bright Teal"],
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80"
      },
      {
        name: "Bright White Jeans",
        description: "Crisp white keeps the look fresh and high-contrast",
        colors: ["Bright White", "Snow"],
        image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Colorful Beaded Bracelet",
        description: "Vibrant mixed colors match your bright energy",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
      },
      {
        name: "Bold Red Handbag",
        description: "A statement piece that matches your dynamic personality",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80"
  },

  lightSummer: {
    name: "Light Summer",
    emoji: "🌊",
    season: "Summer",
    subtitle: "Soft & Cool",
    description: "You have a gentle, cool-toned appearance with light features. Your coloring is like a misty morning — soft, ethereal, and calming.",
    personality: [
      "Thoughtful and reflective thinker",
      "Empathetic listener and advisor",
      "Values harmony and balance",
      "Quietly creative with refined taste",
      "Loyal and deeply caring friend"
    ],
    bestColors: ["#B0C4DE", "#D8BFD8", "#E0E0E0", "#ADD8E6", "#C8A2C8", "#F0F8FF", "#B0E0E6", "#DCDCDC"],
    avoidColors: ["#FF4500", "#FF8C00", "#8B4513", "#FFD700"],
    skinTone: { hueRange: [0, 20], satRange: [10, 40], lightRange: [70, 90] },
    clothing: [
      {
        name: "Lavender Silk Top",
        description: "Soft purple tones enhance your cool, delicate coloring",
        colors: ["Lavender", "Soft Lilac", "Mauve"],
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80"
      },
      {
        name: "Powder Blue Cardigan",
        description: "Cool, muted blues harmonize beautifully with your skin tone",
        colors: ["Powder Blue", "Periwinkle", "Sky"],
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a02?w=400&q=80"
      },
      {
        name: "Soft Gray Trousers",
        description: "Cool grays keep the look elegant and cohesive",
        colors: ["Dove Gray", "Silver", "Ash"],
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Silver Drop Earrings",
        description: "Cool silver metals complement your undertone perfectly",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
      },
      {
        name: "Pastel Silk Scarf",
        description: "Soft, muted prints that blend with your gentle palette",
        image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80"
  },

  coolSummer: {
    name: "Cool Summer",
    emoji: "❄️",
    season: "Summer",
    subtitle: "Elegant & Serene",
    description: "You have distinctly cool undertones with medium contrast. Your coloring is poised and sophisticated, like a still lake reflecting the sky.",
    personality: [
      "Composed and intellectually sharp",
      "Values quality over quantity",
      "Strategic thinker with excellent judgment",
      "Prefers depth over breadth in relationships",
      "Quietly influential and respected"
    ],
    bestColors: ["#4682B4", "#6A5ACD", "#708090", "#9370DB", "#5F9EA0", "#778899", "#7B68EE", "#6495ED"],
    avoidColors: ["#FF8C00", "#FFD700", "#FF6347", "#CD853F"],
    skinTone: { hueRange: [340, 20], satRange: [15, 45], lightRange: [55, 75] },
    clothing: [
      {
        name: "Steel Blue Blazer",
        description: "Medium cool blues bring out the sophistication in your coloring",
        colors: ["Steel Blue", "Slate", "Denim Blue"],
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
      },
      {
        name: "Plum Knit Dress",
        description: "Cool berry tones add depth while flattering your undertone",
        colors: ["Plum", "Mulberry", "Grape"],
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
      },
      {
        name: "Charcoal Wool Coat",
        description: "Cool dark neutrals create a polished, elegant look",
        colors: ["Charcoal", "Graphite", "Cool Gray"],
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "White Gold Watch",
        description: "Cool-toned metals enhance your natural sophistication",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80"
      },
      {
        name: "Navy Leather Bag",
        description: "Deep cool tones that anchor your look with elegance",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
  },

  softSummer: {
    name: "Soft Summer",
    emoji: "🌫️",
    season: "Summer",
    subtitle: "Muted & Graceful",
    description: "You have a beautifully muted, cool-neutral coloring. Your look is understated and sophisticated — like watercolors blending gently together.",
    personality: [
      "Calm and grounded presence",
      "Appreciates subtlety and nuance",
      "Naturally diplomatic and tactful",
      "Creative with a minimalist aesthetic",
      "Patient and deeply perceptive"
    ],
    bestColors: ["#B8B8B8", "#A0A0A0", "#C9B1BD", "#8FBC8F", "#B8A9C9", "#9DB4C0", "#C4AEAD", "#A8B5A2"],
    avoidColors: ["#FF0000", "#0000FF", "#FFD700", "#FF1493"],
    skinTone: { hueRange: [5, 30], satRange: [15, 40], lightRange: [55, 72] },
    clothing: [
      {
        name: "Dusty Rose Blouse",
        description: "Muted pinks blend seamlessly with your soft coloring",
        colors: ["Dusty Rose", "Mauve", "Rose Taupe"],
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80"
      },
      {
        name: "Sage Green Linen Pants",
        description: "Soft, grayed greens are your secret weapon for looking effortlessly chic",
        colors: ["Sage", "Eucalyptus", "Soft Olive"],
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80"
      },
      {
        name: "Mushroom Cashmere Sweater",
        description: "Warm-cool neutral tones wrap you in understated elegance",
        colors: ["Mushroom", "Taupe", "Greige"],
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Brushed Silver Bangle",
        description: "Matte metals with low shine suit your muted palette",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
      },
      {
        name: "Soft Leather Crossbody",
        description: "Muted tan or gray leather in a relaxed style",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80"
  },

  softAutumn: {
    name: "Soft Autumn",
    emoji: "🍂",
    season: "Autumn",
    subtitle: "Warm & Muted",
    description: "You have a warm, muted coloring that's earthy and natural. Like autumn leaves just starting to turn — soft warmth with a touch of mystery.",
    personality: [
      "Grounded with quiet inner strength",
      "Values authenticity and sincerity",
      "Naturally nurturing and supportive",
      "Appreciates craftsmanship and quality",
      "Steady and reliable in all situations"
    ],
    bestColors: ["#D2B48C", "#BC8F8F", "#BDB76B", "#A0522D", "#CD853F", "#8B7355", "#C4A882", "#9C8B6E"],
    avoidColors: ["#FF1493", "#00FFFF", "#0000FF", "#FF00FF"],
    skinTone: { hueRange: [20, 40], satRange: [20, 50], lightRange: [50, 68] },
    clothing: [
      {
        name: "Camel Wool Coat",
        description: "Rich warm neutrals bring out the golden tones in your skin",
        colors: ["Camel", "Warm Beige", "Golden Tan"],
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80"
      },
      {
        name: "Muted Olive Shirt",
        description: "Earthy, toned-down greens harmonize with your warm palette",
        colors: ["Muted Olive", "Khaki", "Army Green"],
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80"
      },
      {
        name: "Warm Brown Corduroys",
        description: "Textured warm browns ground your look beautifully",
        colors: ["Coffee", "Warm Brown", "Sienna"],
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Brushed Gold Hoops",
        description: "Muted gold metals are your most flattering metallic",
        image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80"
      },
      {
        name: "Suede Tote in Cognac",
        description: "Warm leather tones that feel effortlessly natural",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=300&q=80"
  },

  warmAutumn: {
    name: "Warm Autumn",
    emoji: "🍁",
    season: "Autumn",
    subtitle: "Rich & Earthy",
    description: "You have a rich, warm coloring with golden-olive undertones. Your presence is like a cozy autumn day — warm, inviting, and deeply comforting.",
    personality: [
      "Dependable and deeply loyal",
      "Natural storyteller with rich humor",
      "Values tradition and heritage",
      "Hands-on problem solver",
      "Creates warmth wherever they go"
    ],
    bestColors: ["#D2691E", "#B8860B", "#8B4513", "#A0522D", "#CD853F", "#6B8E23", "#556B2F", "#8B6914"],
    avoidColors: ["#FF1493", "#00CED1", "#E6E6FA", "#C0C0C0"],
    skinTone: { hueRange: [25, 45], satRange: [35, 65], lightRange: [40, 62] },
    clothing: [
      {
        name: "Rust Knit Turtleneck",
        description: "Deep warm oranges bring out the richness in your complexion",
        colors: ["Rust", "Burnt Sienna", "Cinnamon"],
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80"
      },
      {
        name: "Forest Green Jacket",
        description: "Deep warm greens create a powerful, natural look",
        colors: ["Forest Green", "Hunter", "Pine"],
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
      },
      {
        name: "Chocolate Brown Boots & Outfit",
        description: "Rich dark browns anchor your warm palette beautifully",
        colors: ["Chocolate", "Espresso", "Dark Walnut"],
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Antique Gold Ring",
        description: "Aged, warm gold tones are your signature metallic",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
      },
      {
        name: "Woven Leather Belt",
        description: "Textured warm leather adds artisanal character",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80"
  },

  deepAutumn: {
    name: "Deep Autumn",
    emoji: "🌰",
    season: "Autumn",
    subtitle: "Intense & Warm",
    description: "You have deep, rich coloring with warm undertones. Your look is striking and powerful — like the last golden rays of an autumn sunset.",
    personality: [
      "Passionate and deeply committed",
      "Natural authority with warmth",
      "Driven by purpose and meaning",
      "Fiercely protective of loved ones",
      "Combines strength with compassion"
    ],
    bestColors: ["#8B0000", "#556B2F", "#8B4513", "#B8860B", "#800000", "#2F4F4F", "#654321", "#704214"],
    avoidColors: ["#FFB6C1", "#E6E6FA", "#F0F8FF", "#DCDCDC"],
    skinTone: { hueRange: [15, 40], satRange: [30, 65], lightRange: [30, 52] },
    clothing: [
      {
        name: "Burgundy Velvet Top",
        description: "Deep warm reds bring drama and richness to your look",
        colors: ["Burgundy", "Wine", "Oxblood"],
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
      },
      {
        name: "Dark Olive Trench Coat",
        description: "Deep earthy tones create a commanding presence",
        colors: ["Dark Olive", "Military Green", "Deep Moss"],
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80"
      },
      {
        name: "Dark Wash Denim",
        description: "Rich indigo adds depth while keeping warmth",
        colors: ["Dark Indigo", "Deep Navy"],
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Bronze Cuff Bracelet",
        description: "Warm bronze and copper metals complement your deep coloring",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80"
      },
      {
        name: "Mahogany Leather Satchel",
        description: "Deep warm leather adds sophistication",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=300&q=80"
  },

  deepWinter: {
    name: "Deep Winter",
    emoji: "🌑",
    season: "Winter",
    subtitle: "Bold & Dramatic",
    description: "You have high contrast with cool-neutral undertones. Your striking coloring commands attention — like a clear winter night sky full of stars.",
    personality: [
      "Intense and deeply focused",
      "Natural leader with vision",
      "Values truth and directness",
      "Powerful presence in any room",
      "Strategic mind with creative depth"
    ],
    bestColors: ["#000080", "#8B0000", "#006400", "#4B0082", "#191970", "#800020", "#2F4F4F", "#36454F"],
    avoidColors: ["#FFD700", "#FFA07A", "#F5DEB3", "#FFDAB9"],
    skinTone: { hueRange: [0, 25], satRange: [20, 55], lightRange: [25, 50] },
    clothing: [
      {
        name: "Black Structured Blazer",
        description: "True black enhances your natural high contrast beautifully",
        colors: ["Black", "Jet", "Onyx"],
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
      },
      {
        name: "Deep Emerald Dress",
        description: "Rich jewel tones bring out the intensity in your eyes",
        colors: ["Emerald", "Deep Forest", "Malachite"],
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80"
      },
      {
        name: "True Red Statement Piece",
        description: "Bold, clear red makes your features absolutely shine",
        colors: ["True Red", "Crimson", "Ruby"],
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Platinum Stud Earrings",
        description: "Cool, bright metals match your sharp contrast",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
      },
      {
        name: "Black Patent Clutch",
        description: "High-shine black for a dramatic finishing touch",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80"
  },

  coolWinter: {
    name: "Cool Winter",
    emoji: "💎",
    season: "Winter",
    subtitle: "Icy & Refined",
    description: "You have striking cool undertones with medium-high contrast. Your coloring is like a polished diamond — cool, clear, and absolutely radiant.",
    personality: [
      "Sophisticated and discerning",
      "Analytical with high standards",
      "Values precision and excellence",
      "Quietly powerful and self-assured",
      "Elegant in thought and expression"
    ],
    bestColors: ["#4169E1", "#9400D3", "#DC143C", "#008080", "#4682B4", "#8A2BE2", "#C71585", "#2E8B57"],
    avoidColors: ["#FFD700", "#FF8C00", "#DAA520", "#D2B48C"],
    skinTone: { hueRange: [340, 15], satRange: [15, 50], lightRange: [45, 70] },
    clothing: [
      {
        name: "Royal Blue Shirt",
        description: "Clear, cool blues make your features stand out brilliantly",
        colors: ["Royal Blue", "Cobalt", "Sapphire"],
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80"
      },
      {
        name: "Deep Magenta Top",
        description: "Cool berry tones add vibrancy to your icy palette",
        colors: ["Magenta", "Fuchsia", "Deep Berry"],
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80"
      },
      {
        name: "Navy Tailored Pants",
        description: "Cool dark navy anchors your look with sophistication",
        colors: ["Navy", "Midnight", "Deep Indigo"],
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Silver Statement Ring",
        description: "Bright silver metals echo your cool, clear undertones",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80"
      },
      {
        name: "Structured Navy Tote",
        description: "Clean lines in cool tones for a polished look",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80"
  },

  brightWinter: {
    name: "Bright Winter",
    emoji: "✨",
    season: "Winter",
    subtitle: "Vivid & Striking",
    description: "You have the highest contrast with cool undertones. Your coloring is electric and magnetic — like sunlight hitting fresh snow.",
    personality: [
      "Magnetic and unforgettable presence",
      "Innovative and forward-thinking",
      "Unapologetically authentic",
      "Inspires others through bold action",
      "Combines intensity with playfulness"
    ],
    bestColors: ["#FF0000", "#0000FF", "#FF00FF", "#00FF00", "#FF1493", "#00BFFF", "#8B008B", "#FFFFFF"],
    avoidColors: ["#D2B48C", "#A9A9A9", "#808080", "#F5DEB3"],
    skinTone: { hueRange: [345, 20], satRange: [20, 55], lightRange: [50, 75] },
    clothing: [
      {
        name: "Hot Pink Statement Top",
        description: "Bold, clear pinks make your high contrast absolutely electric",
        colors: ["Hot Pink", "Shocking Pink", "Vivid Rose"],
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"
      },
      {
        name: "Electric Blue Jacket",
        description: "Vivid cool blues amplify your natural magnetism",
        colors: ["Electric Blue", "Bright Cobalt", "Vivid Blue"],
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80"
      },
      {
        name: "Pure White & Black Contrast",
        description: "Maximum contrast mirrors your own striking coloring",
        colors: ["Pure White", "Jet Black"],
        image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80"
      }
    ],
    accessories: [
      {
        name: "Crystal Drop Earrings",
        description: "Sparkle and brilliance match your vivid energy",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80"
      },
      {
        name: "Metallic Silver Clutch",
        description: "High-shine cool metals for show-stopping accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80"
      }
    ],
    faceImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80"
  }
};

// Gender + Style specific clothing recommendations
// Structure: GENDER_STYLE_CLOTHING[gender][style][seasonKey] = [{name, description, colors, image}]
const GENDER_STYLE_CLOTHING = {
  female: {
    casual: {
      lightSpring: [
        { name: "Pastel Floral Blouse", description: "Light peach or coral tones that complement your warm, delicate coloring", colors: ["Peach", "Coral", "Light Gold"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Cream Knit Sweater", description: "Warm ivory that enhances your natural glow", colors: ["Ivory", "Warm White", "Butter"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Light Wash Denim", description: "Soft blue denim keeps the look fresh and effortless", colors: ["Light Blue", "Soft Indigo"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Marigold Cotton Top", description: "Warm yellows that make your skin glow with vitality", colors: ["Golden", "Marigold", "Sunflower"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" },
        { name: "Olive Linen Pants", description: "Warm greens create a harmonious, relaxed look", colors: ["Olive", "Moss", "Warm Green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Terracotta Sundress", description: "Earthy warm tones in a relaxed silhouette", colors: ["Terracotta", "Burnt Orange"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Coral Statement Top", description: "Bright warm corals make your features pop", colors: ["Coral", "Bright Orange", "Poppy"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Turquoise Tee", description: "Clear blue-greens create stunning contrast", colors: ["Turquoise", "Aqua"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80" },
        { name: "Bright White Jeans", description: "Crisp white keeps the look fresh", colors: ["Bright White", "Snow"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Cotton Top", description: "Soft purple tones enhance your cool, delicate coloring", colors: ["Lavender", "Soft Lilac"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Powder Blue Cardigan", description: "Cool, muted blues harmonize with your skin tone", colors: ["Powder Blue", "Sky"], image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a02?w=400&q=80" },
        { name: "Soft Gray Joggers", description: "Cool grays keep the look relaxed and cohesive", colors: ["Dove Gray", "Silver"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Plum Knit Top", description: "Cool berry tones flatter your undertone", colors: ["Plum", "Mulberry"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80" },
        { name: "Steel Blue Tee", description: "Medium cool blues bring out sophistication", colors: ["Steel Blue", "Slate"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Cool Gray Denim", description: "Cool dark neutrals for polished casual", colors: ["Charcoal", "Cool Gray"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      softSummer: [
        { name: "Dusty Rose Blouse", description: "Muted pinks blend with your soft coloring", colors: ["Dusty Rose", "Mauve"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80" },
        { name: "Sage Green Linen Pants", description: "Soft greens for effortlessly chic look", colors: ["Sage", "Eucalyptus"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Mushroom Sweater", description: "Warm-cool neutrals wrap you in elegance", colors: ["Mushroom", "Taupe"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Camel Cardigan", description: "Warm neutrals bring out golden tones", colors: ["Camel", "Warm Beige"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Muted Olive Top", description: "Toned-down greens harmonize with your palette", colors: ["Muted Olive", "Khaki"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Warm Brown Corduroys", description: "Textured warm browns ground your look", colors: ["Coffee", "Sienna"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Knit Sweater", description: "Deep warm oranges enrich your complexion", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Forest Green Jacket", description: "Deep warm greens create a natural look", colors: ["Forest Green", "Pine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Chocolate Pants", description: "Rich dark browns anchor your warm palette", colors: ["Chocolate", "Espresso"], image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Velvet Top", description: "Deep warm reds bring drama and richness", colors: ["Burgundy", "Wine"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Dark Olive Jacket", description: "Deep earthy tones create commanding presence", colors: ["Dark Olive", "Deep Moss"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dark Wash Denim", description: "Rich indigo adds depth while keeping warmth", colors: ["Dark Indigo", "Deep Navy"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Structured Top", description: "True black enhances your high contrast", colors: ["Black", "Jet"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Deep Emerald Sweater", description: "Rich jewel tones bring out eye intensity", colors: ["Emerald", "Malachite"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "True Red Top", description: "Bold red makes your features shine", colors: ["True Red", "Crimson"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Royal Blue Top", description: "Clear cool blues make features stand out", colors: ["Royal Blue", "Cobalt"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80" },
        { name: "Deep Magenta Blouse", description: "Cool berry tones add vibrancy", colors: ["Magenta", "Fuchsia"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80" },
        { name: "Navy Tailored Pants", description: "Cool dark navy for sophistication", colors: ["Navy", "Midnight"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Hot Pink Top", description: "Bold pinks make your high contrast electric", colors: ["Hot Pink", "Vivid Rose"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Electric Blue Jacket", description: "Vivid cool blues amplify your magnetism", colors: ["Electric Blue", "Bright Cobalt"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Pure White Tee", description: "Maximum contrast mirrors your coloring", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" }
      ]
    },
    office: {
      lightSpring: [
        { name: "Peach Silk Blouse", description: "Professional warmth in soft coral tones", colors: ["Peach", "Soft Coral"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Cream Tailored Blazer", description: "Warm ivory for polished boardroom presence", colors: ["Ivory", "Warm White"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Beige Pencil Skirt", description: "Elegant neutral that flatters your warmth", colors: ["Warm Beige", "Sand"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Golden Tan Blazer", description: "Rich warm neutral for professional settings", colors: ["Golden Tan", "Caramel"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm White Silk Shirt", description: "Creamy white for clean professional look", colors: ["Warm White", "Cream"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Olive Tailored Trousers", description: "Earthy professional tone that energizes", colors: ["Olive", "Warm Khaki"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Coral Fitted Blazer", description: "Bright warm tone for confident meetings", colors: ["Coral", "Poppy"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Crisp White Shirt", description: "Clean and bright for professional polish", colors: ["Bright White"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Teal Pencil Skirt", description: "Vivid tone that commands attention", colors: ["Teal", "Bright Teal"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Silk Blouse", description: "Soft purple for elegant professionalism", colors: ["Lavender", "Mauve"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Dove Gray Blazer", description: "Cool neutral for polished presence", colors: ["Dove Gray", "Silver"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Soft Blue Pencil Skirt", description: "Cool tone for refined office style", colors: ["Powder Blue", "Periwinkle"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Steel Blue Blazer", description: "Medium cool blue for authoritative look", colors: ["Steel Blue", "Slate"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Plum Silk Blouse", description: "Cool berry for sophisticated meetings", colors: ["Plum", "Grape"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Charcoal Tailored Pants", description: "Cool dark neutral for polished elegance", colors: ["Charcoal", "Graphite"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      softSummer: [
        { name: "Rose Taupe Blouse", description: "Muted pink for understated professionalism", colors: ["Rose Taupe", "Mauve"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Greige Blazer", description: "Soft neutral for refined office presence", colors: ["Greige", "Mushroom"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Sage Pencil Skirt", description: "Muted green for calm, professional aura", colors: ["Sage", "Soft Olive"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Camel Tailored Blazer", description: "Warm neutral for professional warmth", colors: ["Camel", "Golden Tan"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Beige Silk Shirt", description: "Soft warm tone for polished meetings", colors: ["Warm Beige", "Sand"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Muted Olive Trousers", description: "Earthy tone for grounded professionalism", colors: ["Muted Olive", "Khaki"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Wool Blazer", description: "Rich warm tone for authoritative presence", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Cream Silk Blouse", description: "Warm white for professional elegance", colors: ["Cream", "Ivory"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Brown Trousers", description: "Rich chocolate for grounded power look", colors: ["Chocolate", "Espresso"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Structured Blazer", description: "Deep warm red for powerful presence", colors: ["Burgundy", "Wine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Ivory Blouse", description: "Soft warm white for polished look", colors: ["Warm Ivory", "Cream"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Olive Pencil Skirt", description: "Deep earthy tone for commanding style", colors: ["Dark Olive", "Forest"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Tailored Blazer", description: "High contrast black for commanding boardroom presence", colors: ["Black", "Jet"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Pure White Silk Blouse", description: "Crisp contrast for striking professionalism", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Deep Navy Trousers", description: "Dark cool tone for polished authority", colors: ["Deep Navy", "Midnight"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Royal Blue Blazer", description: "Cool vivid blue for confident leadership", colors: ["Royal Blue", "Cobalt"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Icy White Blouse", description: "Cool crisp white for clean professionalism", colors: ["Icy White"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Navy Pencil Skirt", description: "Cool dark for sophisticated polish", colors: ["Navy", "Deep Indigo"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Fuchsia Structured Blazer", description: "Bold cool pink for memorable meetings", colors: ["Fuchsia", "Hot Pink"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Pure White Tailored Shirt", description: "Maximum contrast for striking presence", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Black Pencil Skirt", description: "High contrast anchor for your vivid palette", colors: ["Black"], image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" }
      ]
    },
    elegant: {
      lightSpring: [
        { name: "Champagne Evening Gown", description: "Warm shimmer that makes you glow", colors: ["Champagne", "Gold"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Peach Silk Midi Dress", description: "Delicate warmth for special occasions", colors: ["Peach", "Blush"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Ivory Lace Blouse", description: "Romantic warmth for elegant evenings", colors: ["Ivory", "Cream"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Gold Satin Gown", description: "Rich golden tone for show-stopping entrance", colors: ["Gold", "Amber"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Coral Evening Dress", description: "Warm vibrancy for memorable nights", colors: ["Coral", "Sunset"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Terracotta Wrap Dress", description: "Earthy elegance for warm occasions", colors: ["Terracotta", "Burnt Orange"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Bright Coral Gown", description: "Vivid warmth for unforgettable evenings", colors: ["Bright Coral", "Poppy"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Turquoise Satin Dress", description: "Striking contrast for elegant events", colors: ["Turquoise", "Aqua"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Bright White Tailored Set", description: "Crisp elegance with maximum impact", colors: ["Bright White"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Chiffon Gown", description: "Ethereal coolness for dreamlike evenings", colors: ["Lavender", "Lilac"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Powder Blue Silk Dress", description: "Cool delicacy for refined occasions", colors: ["Powder Blue", "Sky"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Silver Shimmer Top", description: "Cool metallic glow for special nights", colors: ["Silver", "Platinum"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Evening Gown", description: "Sophisticated cool tone for elegant events", colors: ["Slate Blue", "Steel"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Deep Plum Silk Dress", description: "Rich cool berry for stunning presence", colors: ["Plum", "Mulberry"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Charcoal Beaded Top", description: "Cool sparkle for refined evenings", colors: ["Charcoal", "Graphite"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" }
      ],
      softSummer: [
        { name: "Dusty Mauve Gown", description: "Muted romance for elegant occasions", colors: ["Dusty Mauve", "Rose"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Sage Silk Midi", description: "Understated elegance in soft tones", colors: ["Sage", "Eucalyptus"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Taupe Beaded Dress", description: "Muted shimmer for quiet luxury", colors: ["Taupe", "Greige"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Champagne Satin Dress", description: "Warm muted glow for special evenings", colors: ["Champagne", "Warm Gold"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Warm Bronze Evening Top", description: "Earthy metallics for autumn elegance", colors: ["Bronze", "Copper"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Muted Olive Silk Gown", description: "Natural warmth in luxurious fabric", colors: ["Muted Olive", "Sage"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Velvet Gown", description: "Deep warm luxury for dramatic evenings", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Deep Gold Satin Dress", description: "Rich warmth for show-stopping presence", colors: ["Deep Gold", "Amber"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Forest Green Evening Set", description: "Deep warm green for refined power", colors: ["Forest Green", "Hunter"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Velvet Gown", description: "Deep rich warmth for commanding presence", colors: ["Burgundy", "Oxblood"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Deep Bronze Satin Dress", description: "Warm metallic luxury", colors: ["Deep Bronze", "Copper"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Dark Emerald Evening Top", description: "Jewel tone for dramatic elegance", colors: ["Dark Emerald", "Deep Forest"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Velvet Gown", description: "Ultimate drama for formal occasions", colors: ["Black", "Jet"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Deep Ruby Satin Dress", description: "Jewel tone for unforgettable nights", colors: ["Ruby", "Crimson"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Emerald Silk Evening Set", description: "Rich cool jewel for commanding elegance", colors: ["Emerald", "Malachite"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Royal Blue Satin Gown", description: "Vivid cool luxury for formal events", colors: ["Royal Blue", "Sapphire"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Deep Berry Silk Dress", description: "Cool vibrancy for elegant evenings", colors: ["Deep Berry", "Magenta"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Platinum Beaded Top", description: "Cool metallic sparkle for special nights", colors: ["Platinum", "Silver"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Vivid Fuchsia Gown", description: "Electric pink for show-stopping entrance", colors: ["Fuchsia", "Hot Pink"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Electric Blue Satin Dress", description: "Brilliant cool blue for magnetic presence", colors: ["Electric Blue"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Pure White & Black Set", description: "Maximum contrast for ultimate glamour", colors: ["Pure White", "Black"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" }
      ]
    },
    street: {
      lightSpring: [
        { name: "Peach Oversized Hoodie", description: "Cozy warmth in soft tones", colors: ["Peach", "Coral"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Cream Cargo Pants", description: "Relaxed warm neutral for street style", colors: ["Cream", "Warm White"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Light Gold Sneaker Outfit", description: "Fresh warm tones for on-the-go", colors: ["Light Gold", "Butter"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Marigold Bomber Jacket", description: "Bold warm tone for street presence", colors: ["Marigold", "Sunflower"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Olive Cargo Joggers", description: "Earthy urban style", colors: ["Olive", "Moss"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Terracotta Graphic Tee", description: "Warm statement piece for street looks", colors: ["Terracotta", "Rust"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Coral Oversized Jacket", description: "Vivid warm layering piece", colors: ["Coral", "Bright Orange"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Turquoise Crop Top", description: "Eye-catching cool-warm contrast", colors: ["Turquoise", "Aqua"], image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80" },
        { name: "White Platform Sneaker Set", description: "Fresh and bold street energy", colors: ["Bright White"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Oversized Tee", description: "Soft cool tone for relaxed street style", colors: ["Lavender", "Lilac"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Powder Blue Denim Jacket", description: "Cool casual layering", colors: ["Powder Blue", "Sky"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Silver Gray Joggers", description: "Cool relaxed urban vibes", colors: ["Silver Gray", "Ash"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Bomber", description: "Cool urban sophistication", colors: ["Slate Blue", "Steel"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Grape Graphic Hoodie", description: "Cool berry for street edge", colors: ["Grape", "Plum"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Charcoal Cargo Pants", description: "Cool dark urban essential", colors: ["Charcoal", "Graphite"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softSummer: [
        { name: "Dusty Rose Hoodie", description: "Muted pink for soft street style", colors: ["Dusty Rose", "Mauve"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Sage Utility Jacket", description: "Muted green urban layering", colors: ["Sage", "Eucalyptus"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Taupe Wide Leg Pants", description: "Neutral elegance meets street", colors: ["Taupe", "Greige"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Camel Oversized Jacket", description: "Warm neutral for effortless street look", colors: ["Camel", "Warm Beige"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Muted Olive Cargo Pants", description: "Earthy urban essential", colors: ["Muted Olive", "Army"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Warm Brown Hoodie", description: "Cozy earth tones for street wear", colors: ["Coffee", "Sienna"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Bomber Jacket", description: "Deep warm tone for urban edge", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Forest Green Hoodie", description: "Deep warm green for street presence", colors: ["Forest Green", "Pine"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Dark Brown Cargo Pants", description: "Rich earth for grounded street style", colors: ["Chocolate", "Espresso"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Leather Jacket", description: "Deep warm edge for bold street looks", colors: ["Burgundy", "Oxblood"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dark Olive Utility Vest", description: "Earthy layering with attitude", colors: ["Dark Olive", "Deep Moss"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Indigo Denim", description: "Rich dark denim for urban power", colors: ["Dark Indigo"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Leather Jacket", description: "High contrast urban essential", colors: ["Black", "Jet"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Deep Red Graphic Hoodie", description: "Bold jewel tone for street impact", colors: ["Crimson", "Ruby"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Black Cargo Pants", description: "Dark essential for dramatic street style", colors: ["Black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Cobalt Puffer Jacket", description: "Cool vivid statement for urban style", colors: ["Cobalt", "Royal Blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Berry Graphic Tee", description: "Cool vibrancy for street edge", colors: ["Deep Berry", "Magenta"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Navy Joggers", description: "Cool dark essential for street looks", colors: ["Navy", "Midnight"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Hot Pink Bomber", description: "Electric urban statement", colors: ["Hot Pink", "Fuchsia"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Electric Blue Hoodie", description: "Vivid cool for street magnetism", colors: ["Electric Blue"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Black & White Contrast Set", description: "Maximum impact street style", colors: ["Pure White", "Black"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" }
      ]
    }
  },
  male: {
    casual: {
      lightSpring: [
        { name: "Cream Henley Shirt", description: "Warm ivory for relaxed everyday style", colors: ["Cream", "Warm White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Peach Polo Shirt", description: "Soft warm tone for casual elegance", colors: ["Peach", "Coral"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Light Wash Jeans", description: "Fresh light denim for effortless look", colors: ["Light Blue", "Soft Indigo"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Golden Yellow T-Shirt", description: "Warm vibrant tone for confident casual", colors: ["Golden", "Marigold"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Olive Chinos", description: "Earthy warm green for versatile style", colors: ["Olive", "Moss"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Terracotta Linen Shirt", description: "Warm earth tones for relaxed vibes", colors: ["Terracotta", "Burnt Orange"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Coral Crew Neck Tee", description: "Bright warm for eye-catching casual", colors: ["Coral", "Bright Orange"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Turquoise Polo", description: "Vivid cool-warm for dynamic casual", colors: ["Turquoise", "Aqua"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "White Chinos", description: "Crisp white for fresh contrast", colors: ["Bright White"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Linen Shirt", description: "Soft cool tone for relaxed refinement", colors: ["Lavender", "Soft Lilac"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Powder Blue Tee", description: "Cool casual everyday comfort", colors: ["Powder Blue", "Sky"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Soft Gray Chinos", description: "Cool neutral for easy pairing", colors: ["Dove Gray", "Silver"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Steel Blue Polo", description: "Cool medium blue for polished casual", colors: ["Steel Blue", "Slate"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Plum Crew Neck", description: "Cool berry for refined everyday", colors: ["Plum", "Grape"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Charcoal Jeans", description: "Cool dark for versatile casual", colors: ["Charcoal", "Cool Gray"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      softSummer: [
        { name: "Dusty Blue Henley", description: "Muted cool for understated casual", colors: ["Dusty Blue", "Slate"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Sage Green Tee", description: "Soft muted green for easy style", colors: ["Sage", "Eucalyptus"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Taupe Chinos", description: "Warm-cool neutral for effortless pairing", colors: ["Taupe", "Greige"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Camel Sweater", description: "Warm muted tone for cozy casual", colors: ["Camel", "Warm Beige"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Olive Henley", description: "Earthy warm for relaxed weekends", colors: ["Muted Olive", "Khaki"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Warm Brown Chinos", description: "Earth tones for grounded style", colors: ["Coffee", "Sienna"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Flannel Shirt", description: "Deep warm for cozy weekend style", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Forest Green Tee", description: "Deep warm green for everyday", colors: ["Forest Green", "Pine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Brown Jeans", description: "Rich earth tone denim", colors: ["Chocolate", "Espresso"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Crew Neck", description: "Deep warm red for bold casual", colors: ["Burgundy", "Wine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Olive Jacket", description: "Deep earthy tone for layered looks", colors: ["Dark Olive", "Deep Moss"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dark Indigo Jeans", description: "Rich dark denim for warm palette", colors: ["Dark Indigo"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Crew Neck Tee", description: "High contrast essential for bold casual", colors: ["Black", "Jet"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Deep Emerald Sweater", description: "Jewel tone for striking everyday", colors: ["Emerald", "Forest"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "True Red Polo", description: "Bold red for confident casual", colors: ["True Red", "Crimson"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Royal Blue Tee", description: "Cool vivid for standout casual", colors: ["Royal Blue", "Cobalt"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Navy Sweater", description: "Cool dark essential for refined casual", colors: ["Navy", "Midnight"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Deep Berry Polo", description: "Cool vibrancy for weekend style", colors: ["Deep Berry", "Magenta"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Bright Blue Tee", description: "Electric blue for magnetic casual", colors: ["Electric Blue", "Vivid Blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Black Slim Jeans", description: "High contrast anchor", colors: ["Black"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Pure White Henley", description: "Maximum contrast casual essential", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ]
    },
    office: {
      lightSpring: [
        { name: "Cream Dress Shirt", description: "Warm ivory for professional warmth", colors: ["Cream", "Warm White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Warm Beige Blazer", description: "Soft warm neutral for polished meetings", colors: ["Warm Beige", "Sand"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Light Tan Chinos", description: "Warm neutral for business casual", colors: ["Light Tan", "Camel"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Gold Tan Blazer", description: "Rich warm neutral for leadership presence", colors: ["Golden Tan", "Caramel"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm White Dress Shirt", description: "Creamy white for clean professional look", colors: ["Warm White", "Ivory"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Olive Dress Pants", description: "Earthy professional versatility", colors: ["Olive", "Warm Khaki"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Coral Pocket Square & Navy Blazer", description: "Bright accent with classic base", colors: ["Coral", "Navy"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Crisp White Dress Shirt", description: "Clean bright for professional polish", colors: ["Bright White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Teal Chinos", description: "Vivid tone for confident office style", colors: ["Teal", "Bright Teal"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Dress Shirt", description: "Soft cool for refined professionalism", colors: ["Lavender", "Light Blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dove Gray Blazer", description: "Cool neutral for polished meetings", colors: ["Dove Gray", "Silver"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Light Gray Dress Pants", description: "Cool tone for refined pairing", colors: ["Light Gray", "Ash"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Steel Blue Blazer", description: "Cool authority for boardroom presence", colors: ["Steel Blue", "Slate"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Light Blue Dress Shirt", description: "Cool classic for professional settings", colors: ["Light Blue", "Periwinkle"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Charcoal Dress Pants", description: "Cool dark for polished professionalism", colors: ["Charcoal", "Graphite"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softSummer: [
        { name: "Dusty Blue Dress Shirt", description: "Muted cool for understated authority", colors: ["Dusty Blue", "Slate"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Greige Blazer", description: "Soft neutral for quiet professionalism", colors: ["Greige", "Mushroom"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Medium Gray Trousers", description: "Muted neutral for office versatility", colors: ["Medium Gray", "Taupe"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Camel Blazer", description: "Warm neutral for approachable leadership", colors: ["Camel", "Golden Tan"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Beige Dress Shirt", description: "Soft warm for professional warmth", colors: ["Warm Beige", "Sand"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Muted Olive Trousers", description: "Earthy professional tone", colors: ["Muted Olive", "Khaki"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Tweed Blazer", description: "Rich warm professional authority", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Cream Dress Shirt", description: "Warm white for polished elegance", colors: ["Cream", "Ivory"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Brown Trousers", description: "Rich earth for grounded power", colors: ["Chocolate", "Espresso"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Wool Blazer", description: "Deep warm power for executive presence", colors: ["Burgundy", "Wine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Ivory Dress Shirt", description: "Warm white for commanding meetings", colors: ["Warm Ivory", "Cream"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Olive Trousers", description: "Deep earthy tone for authority", colors: ["Dark Olive", "Forest"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Tailored Suit", description: "Maximum contrast for commanding presence", colors: ["Black", "Jet"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Pure White Dress Shirt", description: "Crisp contrast for striking professionalism", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Deep Navy Tie", description: "Cool dark accent for polished authority", colors: ["Deep Navy", "Midnight"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Navy Tailored Blazer", description: "Cool dark for leadership presence", colors: ["Navy", "Midnight"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Icy Blue Dress Shirt", description: "Cool crisp for professional authority", colors: ["Icy Blue", "Light Blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Charcoal Dress Pants", description: "Cool neutral for executive polish", colors: ["Charcoal", "Graphite"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Bright Blue Tie & Navy Suit", description: "Vivid accent on classic base", colors: ["Electric Blue", "Navy"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Pure White Shirt", description: "Maximum contrast professional essential", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Black Dress Pants", description: "High contrast anchor for vivid palette", colors: ["Black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ]
    },
    elegant: {
      lightSpring: [
        { name: "Champagne Suit", description: "Warm shimmer for special occasions", colors: ["Champagne", "Gold"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Cream Tuxedo Shirt", description: "Warm elegance for formal nights", colors: ["Cream", "Ivory"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Light Gold Tie & Accessories", description: "Warm metallic accents for refinement", colors: ["Light Gold", "Champagne"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Tan Three-Piece Suit", description: "Rich warm formal presence", colors: ["Golden Tan", "Caramel"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Gold Silk Tie", description: "Warm metallic accent for elegance", colors: ["Gold", "Amber"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Warm White Dress Shirt", description: "Creamy base for formal warmth", colors: ["Warm White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Navy Suit with Coral Tie", description: "Vivid accent on classic elegance", colors: ["Navy", "Coral"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Bright White Tuxedo Shirt", description: "Crisp formal for striking presence", colors: ["Bright White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Turquoise Pocket Square", description: "Eye-catching formal accent", colors: ["Turquoise"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Light Gray Suit", description: "Cool elegant for refined events", colors: ["Light Gray", "Silver"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Lavender Silk Tie", description: "Soft cool accent for formal settings", colors: ["Lavender"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Powder Blue Dress Shirt", description: "Cool delicacy for elegant occasions", colors: ["Powder Blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Suit", description: "Cool sophisticated formal wear", colors: ["Slate Blue", "Steel"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Plum Silk Tie", description: "Cool berry accent for elegance", colors: ["Plum", "Mulberry"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Cool White Dress Shirt", description: "Clean cool base for formal events", colors: ["Cool White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      softSummer: [
        { name: "Medium Gray Suit", description: "Muted formal sophistication", colors: ["Medium Gray", "Taupe"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dusty Blue Tie", description: "Soft cool accent for quiet elegance", colors: ["Dusty Blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Soft White Shirt", description: "Muted white for understated formal", colors: ["Soft White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Brown Suit", description: "Earthy elegance for warm occasions", colors: ["Warm Brown", "Coffee"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Muted Gold Tie", description: "Warm metallic for refined events", colors: ["Muted Gold", "Bronze"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Warm Ivory Shirt", description: "Soft warm base for formal warmth", colors: ["Warm Ivory"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Deep Brown Three-Piece", description: "Rich warm formal authority", colors: ["Deep Brown", "Chocolate"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Rust Silk Tie", description: "Deep warm accent for dramatic elegance", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Cream Tuxedo Shirt", description: "Warm white for commanding formal look", colors: ["Cream"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Velvet Blazer", description: "Deep warm luxury for formal events", colors: ["Burgundy", "Wine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dark Forest Suit", description: "Deep jewel formal authority", colors: ["Dark Forest", "Deep Green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Gold Cufflinks & Accessories", description: "Warm metallic finishing touches", colors: ["Gold", "Bronze"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Tuxedo", description: "Ultimate formal drama and authority", colors: ["Black", "Jet"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Deep Red Bow Tie", description: "Bold jewel tone formal accent", colors: ["Deep Red", "Crimson"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Pure White Tuxedo Shirt", description: "Maximum contrast formal essential", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Midnight Navy Tuxedo", description: "Cool dark formal sophistication", colors: ["Midnight Navy"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Royal Blue Tie", description: "Cool vivid formal accent", colors: ["Royal Blue", "Cobalt"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Icy White Dress Shirt", description: "Cool crisp formal base", colors: ["Icy White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Black Suit with Electric Blue Tie", description: "Maximum contrast formal statement", colors: ["Black", "Electric Blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Pure White Tuxedo Shirt", description: "Crisp for high-impact formal", colors: ["Pure White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Silver Cufflinks & Watch", description: "Cool metallic finishing touches", colors: ["Silver", "Platinum"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ]
    },
    street: {
      lightSpring: [
        { name: "Cream Oversized Hoodie", description: "Warm cozy streetwear", colors: ["Cream", "Warm White"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Peach Graphic Tee", description: "Warm street statement", colors: ["Peach", "Coral"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Light Khaki Joggers", description: "Warm neutral street essential", colors: ["Light Khaki", "Sand"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Marigold Bomber", description: "Bold warm urban statement", colors: ["Marigold", "Sunflower"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Olive Cargo Pants", description: "Earthy urban essential", colors: ["Olive", "Moss"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Terracotta Hoodie", description: "Warm earth street layering", colors: ["Terracotta", "Rust"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Bright Orange Windbreaker", description: "Vivid warm urban energy", colors: ["Bright Orange", "Coral"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Turquoise Graphic Tee", description: "Eye-catching street presence", colors: ["Turquoise", "Aqua"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "White Sneaker Outfit", description: "Fresh contrast for street style", colors: ["Bright White"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Oversized Tee", description: "Soft cool street comfort", colors: ["Lavender", "Lilac"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Powder Blue Denim Jacket", description: "Cool casual urban layering", colors: ["Powder Blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Silver Gray Joggers", description: "Cool urban comfort", colors: ["Silver Gray", "Ash"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Bomber", description: "Cool urban sophistication", colors: ["Slate Blue", "Steel"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Grape Hoodie", description: "Cool berry urban edge", colors: ["Grape", "Plum"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Charcoal Cargo Pants", description: "Cool dark street essential", colors: ["Charcoal"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softSummer: [
        { name: "Dusty Blue Hoodie", description: "Muted cool street comfort", colors: ["Dusty Blue", "Slate"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Sage Utility Jacket", description: "Soft green urban layering", colors: ["Sage", "Eucalyptus"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Taupe Joggers", description: "Neutral street essential", colors: ["Taupe", "Greige"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Camel Oversized Jacket", description: "Warm neutral urban layer", colors: ["Camel", "Warm Beige"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Olive Cargo Pants", description: "Earthy street essential", colors: ["Muted Olive", "Army"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Warm Brown Hoodie", description: "Cozy earth street wear", colors: ["Coffee", "Sienna"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Parka", description: "Deep warm urban outerwear", colors: ["Rust", "Cinnamon"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Forest Green Hoodie", description: "Deep warm street layering", colors: ["Forest Green", "Pine"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Dark Brown Cargo Pants", description: "Rich earth urban essential", colors: ["Chocolate"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Leather Bomber", description: "Deep warm edge for bold street", colors: ["Burgundy", "Oxblood"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dark Olive Utility Vest", description: "Earthy layering with attitude", colors: ["Dark Olive"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Indigo Denim", description: "Rich dark street denim", colors: ["Dark Indigo"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Leather Jacket", description: "High contrast urban essential", colors: ["Black"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Deep Red Hoodie", description: "Bold jewel tone street impact", colors: ["Crimson", "Ruby"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Black Cargo Pants", description: "Dark essential street style", colors: ["Black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Cobalt Puffer Jacket", description: "Cool vivid urban statement", colors: ["Cobalt", "Royal Blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Navy Graphic Hoodie", description: "Cool dark street layering", colors: ["Navy", "Midnight"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Deep Berry Joggers", description: "Cool vibrancy street comfort", colors: ["Deep Berry"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Electric Blue Windbreaker", description: "Vivid urban energy", colors: ["Electric Blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Black & White Graphic Tee", description: "Maximum contrast street statement", colors: ["Black", "White"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Black Slim Joggers", description: "High contrast urban essential", colors: ["Black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ]
    }
  }
};

// Gender-specific accessories
const GENDER_ACCESSORIES = {
  female: {
    lightSpring: [
      { name: "Rose Gold Pendant Necklace", description: "Warm metallics harmonize with your peachy undertones", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Pearl Drop Earrings", description: "Delicate warm shimmer for soft elegance", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" }
    ],
    warmSpring: [
      { name: "Gold Statement Necklace", description: "Yellow gold enhances your warm undertones", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
      { name: "Amber Drop Earrings", description: "Warm-toned gems that complement your glow", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" }
    ],
    brightSpring: [
      { name: "Colorful Beaded Bracelet", description: "Vibrant mixed colors match your bright energy", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
      { name: "Coral Statement Earrings", description: "Bold warm accents for eye-catching style", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" }
    ],
    lightSummer: [
      { name: "Silver Drop Earrings", description: "Cool silver metals complement your undertone", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Pastel Silk Scarf", description: "Soft muted prints that blend with your palette", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400&q=80" }
    ],
    coolSummer: [
      { name: "White Gold Pendant", description: "Cool-toned metals for sophisticated elegance", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Sapphire Stud Earrings", description: "Cool jewel tones for refined accent", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" }
    ],
    softSummer: [
      { name: "Brushed Silver Bangle", description: "Matte metals with low shine suit your muted palette", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
      { name: "Rose Quartz Pendant", description: "Soft muted pink stone for gentle elegance", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" }
    ],
    softAutumn: [
      { name: "Brushed Gold Hoops", description: "Muted gold metals are your most flattering metallic", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
      { name: "Amber Beaded Necklace", description: "Warm earth tones for natural elegance", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" }
    ],
    warmAutumn: [
      { name: "Antique Gold Ring Set", description: "Aged warm gold for your signature metallic", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Leather Wrap Bracelet", description: "Textured warm leather for artisanal character", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" }
    ],
    deepAutumn: [
      { name: "Bronze Cuff Bracelet", description: "Warm bronze complements your deep coloring", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
      { name: "Garnet Drop Earrings", description: "Deep warm jewel for dramatic elegance", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" }
    ],
    deepWinter: [
      { name: "Platinum Stud Earrings", description: "Cool bright metals match your sharp contrast", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Emerald Pendant Necklace", description: "Deep jewel tone for dramatic finishing touch", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" }
    ],
    coolWinter: [
      { name: "Silver Statement Ring", description: "Bright silver echoes your cool undertones", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Amethyst Drop Earrings", description: "Cool jewel tone for refined sparkle", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" }
    ],
    brightWinter: [
      { name: "Crystal Drop Earrings", description: "Sparkle and brilliance match your vivid energy", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Metallic Silver Clutch", description: "High-shine cool metals for show-stopping style", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ]
  },
  male: {
    lightSpring: [
      { name: "Rose Gold Watch", description: "Warm metallic that complements your undertone", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Cream Leather Belt", description: "Warm neutral accessory for polished finish", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    warmSpring: [
      { name: "Gold Tone Watch", description: "Warm gold enhances your vibrant undertones", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Tan Leather Belt", description: "Warm leather for versatile style", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    brightSpring: [
      { name: "Gold Sports Watch", description: "Warm metallic for active lifestyle", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Colorful Canvas Belt", description: "Bright accent for casual outfits", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    lightSummer: [
      { name: "Silver Dress Watch", description: "Cool metallic for refined everyday", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Light Gray Leather Belt", description: "Cool neutral for polished pairing", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    coolSummer: [
      { name: "White Gold Watch", description: "Cool-toned metal for sophisticated style", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Navy Leather Belt", description: "Cool dark accent for professional look", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    softSummer: [
      { name: "Brushed Silver Watch", description: "Matte cool metal for understated style", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Taupe Suede Belt", description: "Muted neutral for quiet elegance", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    softAutumn: [
      { name: "Antique Gold Watch", description: "Muted warm metal for natural style", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Cognac Leather Belt", description: "Warm leather for earthy elegance", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    warmAutumn: [
      { name: "Bronze Tone Watch", description: "Deep warm metallic for rugged style", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Woven Leather Belt", description: "Textured warm leather for artisanal character", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    deepAutumn: [
      { name: "Copper Tone Watch", description: "Warm deep metal for bold presence", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Dark Brown Leather Belt", description: "Rich earth tone for grounded style", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    deepWinter: [
      { name: "Black Steel Watch", description: "High contrast metallic for dramatic style", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Black Leather Belt", description: "Bold dark essential accessory", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    coolWinter: [
      { name: "Silver Chronograph Watch", description: "Cool bright metallic for sharp style", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Navy Leather Belt", description: "Cool dark for refined sophistication", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ],
    brightWinter: [
      { name: "Platinum Watch", description: "Cool bright metallic for vivid impact", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Black Patent Belt", description: "High-shine cool for maximum contrast", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" }
    ]
  }
};

// Season group info for the result page background themes
const SEASON_THEMES = {
  Spring: { gradient: "linear-gradient(135deg, #FFF8E7, #FFE4CC, #FFDAB9)", icon: "🌸" },
  Summer: { gradient: "linear-gradient(135deg, #E8F0FE, #D4E4F7, #C8D8E8)", icon: "🌊" },
  Autumn: { gradient: "linear-gradient(135deg, #FFF0DB, #FFE0B2, #FFCC80)", icon: "🍂" },
  Winter: { gradient: "linear-gradient(135deg, #E8EAF6, #D1D9E6, #C5CAE9)", icon: "❄️" }
};
