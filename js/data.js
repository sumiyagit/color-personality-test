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

// Season group info for the result page background themes
const SEASON_THEMES = {
  Spring: { gradient: "linear-gradient(135deg, #FFF8E7, #FFE4CC, #FFDAB9)", icon: "🌸" },
  Summer: { gradient: "linear-gradient(135deg, #E8F0FE, #D4E4F7, #C8D8E8)", icon: "🌊" },
  Autumn: { gradient: "linear-gradient(135deg, #FFF0DB, #FFE0B2, #FFCC80)", icon: "🍂" },
  Winter: { gradient: "linear-gradient(135deg, #E8EAF6, #D1D9E6, #C5CAE9)", icon: "❄️" }
};
