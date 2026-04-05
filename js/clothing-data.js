// clothing-data.js
// Complete clothing and accessories data for all gender/style/season combinations
// 480 clothing items (2 genders x 4 styles x 12 seasons x 5 items)
// 72 accessory items (2 genders x 12 seasons x 3 items)

const GENDER_STYLE_CLOTHING = {
  female: {
    casual: {
      lightSpring: [
        { name: "Peach Cotton Tee", description: "Soft peach tee enhances your light spring warmth", colors: ["peach", "ivory"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Light Coral Jeans", description: "Coral-tinted denim flatters light spring undertones", colors: ["coral", "light wash"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Warm Gold Cardigan", description: "Golden knit brings out your spring glow", colors: ["warm gold", "cream"], image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a02?w=400&q=80" },
        { name: "Apricot Knit Sweater", description: "Apricot hue complements your delicate warm coloring", colors: ["apricot", "soft peach"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Buttercup Cotton Pants", description: "Soft yellow pants harmonize with light spring palette", colors: ["buttercup", "cream"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Terracotta V-Neck Tee", description: "Warm terracotta enriches your spring complexion", colors: ["terracotta", "warm beige"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Golden Honey Jeans", description: "Honey-toned denim suits your warm undertones perfectly", colors: ["golden honey", "camel"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Coral Pullover Sweater", description: "Vibrant coral brings life to warm spring coloring", colors: ["coral", "peach"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Warm Green Hoodie", description: "Earthy green hoodie echoes your natural warmth", colors: ["warm green", "olive"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Tangerine Cotton Pants", description: "Tangerine shade brightens warm spring skin tones", colors: ["tangerine", "warm cream"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Vivid Coral Tee", description: "Bright coral energizes your vivid spring palette", colors: ["vivid coral", "warm white"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Bright Turquoise Jeans", description: "Turquoise denim pops against bright spring coloring", colors: ["turquoise", "bright blue"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Mango Knit Sweater", description: "Saturated mango flatters your bright spring warmth", colors: ["mango", "golden yellow"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Electric Green Hoodie", description: "Electric green matches your high-contrast coloring", colors: ["electric green", "lime"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Poppy Red Cotton Pants", description: "Bold poppy red complements bright spring vibrancy", colors: ["poppy red", "warm red"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Powder Blue Tee", description: "Soft blue harmonizes with your cool light coloring", colors: ["powder blue", "sky blue"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Lavender Wash Jeans", description: "Lavender denim suits your muted summer palette", colors: ["lavender", "soft lilac"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Dusty Rose Cardigan", description: "Dusty rose enhances your gentle summer complexion", colors: ["dusty rose", "mauve"], image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a02?w=400&q=80" },
        { name: "Soft Mint Sweater", description: "Cool mint refreshes your light summer coloring", colors: ["soft mint", "seafoam"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Pearl Gray Cotton Pants", description: "Pearl gray tones complement your delicate contrast", colors: ["pearl gray", "silver"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Tee", description: "Cool slate blue deepens your summer undertones", colors: ["slate blue", "steel blue"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Cool Gray Jeans", description: "Gray denim anchors your cool summer palette", colors: ["cool gray", "charcoal"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Berry Pullover Sweater", description: "Berry tones bring depth to cool summer coloring", colors: ["berry", "plum"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Periwinkle Hoodie", description: "Periwinkle perfectly echoes cool summer harmony", colors: ["periwinkle", "soft violet"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Sage Green Cotton Pants", description: "Muted sage pairs naturally with cool summer tones", colors: ["sage", "cool green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softSummer: [
        { name: "Muted Mauve Tee", description: "Soft mauve blends with your muted summer palette", colors: ["muted mauve", "dusty pink"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Faded Denim Jeans", description: "Faded wash echoes your softly blended coloring", colors: ["faded blue", "light indigo"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Smoky Rose Cardigan", description: "Smoky rose complements your muted complexion beautifully", colors: ["smoky rose", "taupe"], image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a02?w=400&q=80" },
        { name: "Dove Gray Sweater", description: "Dove gray mirrors the softness of your coloring", colors: ["dove gray", "silver gray"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Dusty Teal Cotton Pants", description: "Muted teal harmonizes with soft summer undertones", colors: ["dusty teal", "sage"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Taupe Tee", description: "Taupe warmth blends with your soft autumn palette", colors: ["warm taupe", "mushroom"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Camel Wash Jeans", description: "Camel denim suits your muted warm coloring", colors: ["camel", "sand"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Dusty Olive Cardigan", description: "Muted olive enhances your earthy autumn complexion", colors: ["dusty olive", "sage green"], image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a02?w=400&q=80" },
        { name: "Soft Rust Sweater", description: "Gentle rust enriches your warm muted palette", colors: ["soft rust", "terracotta"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Khaki Cotton Pants", description: "Khaki grounds your soft autumn warmth naturally", colors: ["khaki", "warm beige"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Burnt Orange Tee", description: "Burnt orange ignites your warm autumn glow", colors: ["burnt orange", "amber"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Wash Jeans", description: "Rich denim anchors your deep warm undertones", colors: ["dark indigo", "warm navy"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Pumpkin Knit Sweater", description: "Pumpkin hue celebrates your warm autumn richness", colors: ["pumpkin", "copper"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Forest Green Hoodie", description: "Deep green grounds your warm autumn palette", colors: ["forest green", "moss"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Chocolate Cotton Pants", description: "Chocolate brown deepens your warm autumn coloring", colors: ["chocolate", "espresso"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy V-Neck Tee", description: "Deep burgundy intensifies your rich autumn palette", colors: ["burgundy", "wine"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Olive Jeans", description: "Olive denim adds depth to your autumn coloring", colors: ["dark olive", "army green"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Mahogany Pullover Sweater", description: "Mahogany richness mirrors your deep warm undertones", colors: ["mahogany", "dark rust"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Bronze Hoodie", description: "Metallic bronze highlights deep autumn warmth", colors: ["bronze", "dark gold"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Espresso Cotton Pants", description: "Espresso brown anchors your deep autumn palette", colors: ["espresso", "dark chocolate"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Crew Neck Tee", description: "Crisp black frames your high-contrast winter look", colors: ["black", "charcoal"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Navy Jeans", description: "Deep navy suits your cool deep winter palette", colors: ["dark navy", "midnight"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Emerald Green Sweater", description: "Rich emerald enhances your deep winter coloring", colors: ["emerald", "dark green"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Deep Plum Hoodie", description: "Plum intensity matches your bold winter contrast", colors: ["deep plum", "aubergine"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Charcoal Cotton Pants", description: "Dark charcoal grounds your deep winter presence", colors: ["charcoal", "graphite"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Icy Pink Tee", description: "Cool pink brightens your crisp winter complexion", colors: ["icy pink", "rose"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "True Blue Jeans", description: "True blue denim flatters cool winter undertones", colors: ["true blue", "cobalt"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Silver Gray Sweater", description: "Silver gray mirrors your cool winter sophistication", colors: ["silver gray", "pewter"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Navy Hoodie", description: "Classic navy anchors your cool winter palette", colors: ["navy", "midnight blue"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Pure White Cotton Pants", description: "Crisp white enhances your cool winter clarity", colors: ["pure white", "snow"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Hot Pink Tee", description: "Vivid pink electrifies your bright winter palette", colors: ["hot pink", "fuchsia"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Royal Blue Jeans", description: "Royal blue denim amplifies bright winter vibrancy", colors: ["royal blue", "electric blue"], image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
        { name: "Magenta Pullover Sweater", description: "Bold magenta celebrates your high-contrast coloring", colors: ["magenta", "vivid pink"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Bright Red Hoodie", description: "True red pops against your bright winter contrast", colors: ["bright red", "scarlet"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Stark White Cotton Pants", description: "Pure white sharpens your bright winter clarity", colors: ["stark white", "crisp white"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ]
    },
    office: {
      lightSpring: [
        { name: "Peach Silk Blouse", description: "Delicate peach silk flatters light spring warmth", colors: ["peach", "blush"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Warm Ivory Blazer", description: "Ivory blazer enhances your soft warm undertones", colors: ["warm ivory", "cream"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Light Coral Pencil Skirt", description: "Coral skirt adds vibrancy to light spring coloring", colors: ["light coral", "salmon"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Champagne Tailored Pants", description: "Champagne tones bring elegance to your spring palette", colors: ["champagne", "soft gold"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Apricot Dress Shirt", description: "Apricot hue warms your light spring complexion", colors: ["apricot", "peach"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Golden Amber Blouse", description: "Amber silk enriches your warm spring glow", colors: ["golden amber", "honey"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Terracotta Blazer", description: "Terracotta blazer radiates warm spring confidence", colors: ["terracotta", "burnt sienna"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Coral Pencil Skirt", description: "Rich coral complements warm spring skin beautifully", colors: ["coral", "warm pink"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Camel Tailored Pants", description: "Camel trousers anchor your warm spring wardrobe", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Warm Green Dress Shirt", description: "Warm green brings nature to your spring palette", colors: ["warm green", "leaf green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Vivid Peach Blouse", description: "Bright peach energizes your vibrant spring look", colors: ["vivid peach", "bright coral"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Bright Gold Blazer", description: "Saturated gold blazer makes your coloring shine", colors: ["bright gold", "marigold"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Tropical Green Pencil Skirt", description: "Vivid green highlights your bright spring contrast", colors: ["tropical green", "lime green"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Clear Aqua Tailored Pants", description: "Aqua tones pop with your bright spring clarity", colors: ["clear aqua", "turquoise"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Tangerine Dress Shirt", description: "Tangerine boldness suits bright spring perfectly", colors: ["tangerine", "bright orange"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Silk Blouse", description: "Cool lavender silk enhances light summer softness", colors: ["lavender", "soft purple"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Powder Blue Blazer", description: "Powder blue frames your cool summer complexion", colors: ["powder blue", "sky blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dusty Rose Pencil Skirt", description: "Muted rose flatters your gentle summer palette", colors: ["dusty rose", "soft pink"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Silver Gray Tailored Pants", description: "Soft silver pairs perfectly with light summer tones", colors: ["silver gray", "dove gray"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Aqua Dress Shirt", description: "Cool aqua refreshes your light summer look", colors: ["soft aqua", "pale teal"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Steel Blue Blouse", description: "Steel blue deepens your cool summer sophistication", colors: ["steel blue", "slate"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Charcoal Blue Blazer", description: "Cool charcoal blazer suits your summer undertones", colors: ["charcoal blue", "blue gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Plum Pencil Skirt", description: "Cool plum enriches your summer complexion", colors: ["plum", "grape"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Cool Gray Tailored Pants", description: "Cool gray grounds your muted summer palette", colors: ["cool gray", "ash gray"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Raspberry Dress Shirt", description: "Raspberry tone adds depth to cool summer coloring", colors: ["raspberry", "cool pink"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      softSummer: [
        { name: "Muted Lilac Blouse", description: "Soft lilac blends with your muted summer harmony", colors: ["muted lilac", "soft violet"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Greige Blazer", description: "Greige blazer mirrors your softly blended tones", colors: ["greige", "warm gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Soft Mauve Pencil Skirt", description: "Mauve skirt echoes your muted summer palette", colors: ["soft mauve", "dusty plum"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Taupe Tailored Pants", description: "Taupe tones complement your subdued summer warmth", colors: ["taupe", "mushroom"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Muted Sage Dress Shirt", description: "Soft sage enhances your gentle blended coloring", colors: ["muted sage", "soft green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Sand Blouse", description: "Sandy tones harmonize with soft autumn warmth", colors: ["warm sand", "camel"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Muted Olive Blazer", description: "Olive blazer deepens your soft autumn richness", colors: ["muted olive", "army green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dusty Coral Pencil Skirt", description: "Muted coral suits your softened warm palette", colors: ["dusty coral", "soft peach"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Camel Tailored Pants", description: "Warm camel tones enhance soft autumn coloring", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Warm Taupe Dress Shirt", description: "Taupe shirt grounds your soft autumn palette", colors: ["warm taupe", "mushroom"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Silk Blouse", description: "Rich rust silk celebrates warm autumn depth", colors: ["rust", "burnt orange"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Chocolate Brown Blazer", description: "Chocolate blazer enriches your warm autumn look", colors: ["chocolate", "dark brown"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Olive Pencil Skirt", description: "Deep olive flatters warm autumn skin beautifully", colors: ["olive", "dark green"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Cognac Tailored Pants", description: "Cognac tones radiate warm autumn sophistication", colors: ["cognac", "warm brown"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Copper Dress Shirt", description: "Copper hue lights up your warm autumn glow", colors: ["copper", "bronze"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Silk Blouse", description: "Deep burgundy intensifies your autumn presence", colors: ["burgundy", "wine"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Dark Forest Blazer", description: "Forest green blazer grounds deep autumn richness", colors: ["dark forest", "evergreen"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Oxblood Pencil Skirt", description: "Oxblood deepens your rich autumn coloring", colors: ["oxblood", "dark red"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Dark Olive Tailored Pants", description: "Deep olive anchors your bold autumn palette", colors: ["dark olive", "hunter green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Teak Brown Dress Shirt", description: "Teak warmth complements your deep autumn depth", colors: ["teak", "dark camel"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Crisp White Blouse", description: "Pure white enhances your high winter contrast", colors: ["crisp white", "bright white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Black Tailored Blazer", description: "Sharp black blazer frames deep winter coloring", colors: ["black", "jet black"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Deep Emerald Pencil Skirt", description: "Emerald skirt adds drama to your winter palette", colors: ["deep emerald", "dark green"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Midnight Navy Tailored Pants", description: "Midnight navy deepens your winter sophistication", colors: ["midnight navy", "dark blue"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Deep Red Dress Shirt", description: "Rich red complements your bold winter contrast", colors: ["deep red", "crimson"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Icy Blue Silk Blouse", description: "Icy blue brings out your cool winter clarity", colors: ["icy blue", "frost blue"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Charcoal Blazer", description: "Charcoal blazer sharpens cool winter elegance", colors: ["charcoal", "slate gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Navy Pencil Skirt", description: "True navy suits your cool winter undertones", colors: ["navy", "dark blue"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Silver Tailored Pants", description: "Silvery tones echo your cool winter precision", colors: ["silver", "cool gray"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Cool Burgundy Dress Shirt", description: "Cool burgundy adds richness to winter coloring", colors: ["cool burgundy", "wine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Vivid Red Blouse", description: "True red electrifies your bright winter palette", colors: ["vivid red", "scarlet"], image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80" },
        { name: "Bright Navy Blazer", description: "Bold navy sharpens your bright winter contrast", colors: ["bright navy", "royal blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Fuchsia Pencil Skirt", description: "Fuchsia skirt celebrates bright winter vibrancy", colors: ["fuchsia", "hot pink"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Stark White Tailored Pants", description: "Bright white maximizes your winter contrast", colors: ["stark white", "pure white"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Emerald Green Dress Shirt", description: "Vivid emerald amplifies bright winter brilliance", colors: ["emerald", "jewel green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" }
      ]
    },
    elegant: {
      lightSpring: [
        { name: "Blush Silk Gown", description: "Ethereal blush silk glows on light spring coloring", colors: ["blush", "soft pink"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Champagne Cocktail Dress", description: "Champagne shimmer enhances your delicate warmth", colors: ["champagne", "gold"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Light Gold Velvet Jacket", description: "Warm gold velvet radiates light spring elegance", colors: ["light gold", "honey"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Peach Chiffon Skirt", description: "Flowing peach chiffon flatters your spring palette", colors: ["peach", "coral pink"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Ivory Satin Pants", description: "Ivory satin brings refined warmth to your look", colors: ["ivory", "warm white"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Coral Silk Evening Gown", description: "Coral silk illuminates warm spring skin tones", colors: ["coral", "salmon"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Gold Lamé Cocktail Dress", description: "Gold shimmer celebrates your warm spring radiance", colors: ["gold", "amber"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Terracotta Velvet Blazer", description: "Rich terracotta velvet deepens spring warmth", colors: ["terracotta", "burnt sienna"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Peach Maxi Skirt", description: "Peach maxi skirt radiates warm spring charm", colors: ["warm peach", "apricot"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Honey Satin Dress Pants", description: "Honey satin adds luxe warmth to your palette", colors: ["honey", "golden tan"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Vivid Coral Evening Gown", description: "Bright coral gown dazzles with spring vibrancy", colors: ["vivid coral", "tangerine"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Bright Turquoise Cocktail Dress", description: "Turquoise dress pops with bright spring energy", colors: ["bright turquoise", "aqua"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Electric Yellow Velvet Jacket", description: "Bold yellow velvet radiates spring brilliance", colors: ["electric yellow", "marigold"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Mango Silk Skirt", description: "Saturated mango silk suits bright spring coloring", colors: ["mango", "bright orange"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Warm White Satin Pants", description: "Crisp warm white sharpens your bright palette", colors: ["warm white", "ivory"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Lavender Chiffon Gown", description: "Soft lavender gown mirrors light summer grace", colors: ["lavender", "wisteria"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Powder Pink Cocktail Dress", description: "Powder pink enhances your delicate summer beauty", colors: ["powder pink", "pale rose"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Soft Silver Velvet Jacket", description: "Silver velvet adds shimmer to light summer tones", colors: ["soft silver", "platinum"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Periwinkle Silk Skirt", description: "Periwinkle silk flows beautifully on summer coloring", colors: ["periwinkle", "soft blue"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Rose Quartz Satin Pants", description: "Rose quartz tones enhance your gentle palette", colors: ["rose quartz", "blush"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Evening Gown", description: "Cool slate gown complements your summer depth", colors: ["slate blue", "steel"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Cool Berry Cocktail Dress", description: "Berry tones enrich your cool summer presence", colors: ["cool berry", "raspberry"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Blue Gray Velvet Jacket", description: "Blue gray velvet suits your cool undertones", colors: ["blue gray", "pewter"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Plum Satin Skirt", description: "Rich plum satin deepens cool summer elegance", colors: ["plum", "purple"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Icy Mauve Dress Pants", description: "Icy mauve tones refine your summer sophistication", colors: ["icy mauve", "cool pink"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softSummer: [
        { name: "Dusty Rose Evening Gown", description: "Muted rose gown flatters soft summer coloring", colors: ["dusty rose", "soft mauve"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Soft Cocoa Cocktail Dress", description: "Cocoa tones complement your muted summer palette", colors: ["soft cocoa", "taupe"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Smoky Lavender Velvet Jacket", description: "Smoky lavender echoes your subdued summer tones", colors: ["smoky lavender", "gray purple"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Muted Teal Silk Skirt", description: "Soft teal complements your blended summer warmth", colors: ["muted teal", "sage blue"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Dove Gray Satin Pants", description: "Dove gray satin mirrors your quiet elegance", colors: ["dove gray", "silver"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Camel Silk Gown", description: "Camel silk gown enhances soft autumn warmth", colors: ["warm camel", "golden tan"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Dusty Rose Gold Cocktail Dress", description: "Rose gold tones flatter soft autumn skin", colors: ["dusty rose gold", "warm pink"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Soft Olive Velvet Jacket", description: "Muted olive velvet enriches your autumn palette", colors: ["soft olive", "sage"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Mushroom Silk Skirt", description: "Mushroom tones blend with your earthy coloring", colors: ["warm mushroom", "taupe"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Sand Satin Pants", description: "Sandy satin adds quiet luxury to autumn tones", colors: ["sand", "warm beige"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Velvet Evening Gown", description: "Rich rust gown celebrates warm autumn beauty", colors: ["rust", "copper"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Bronze Cocktail Dress", description: "Bronze shimmer enhances your warm autumn depth", colors: ["bronze", "dark gold"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Burgundy Velvet Jacket", description: "Burgundy velvet amplifies warm autumn richness", colors: ["burgundy", "wine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Forest Green Silk Skirt", description: "Forest green deepens your autumn elegance", colors: ["forest green", "pine"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Cognac Satin Dress Pants", description: "Cognac satin radiates warm autumn sophistication", colors: ["cognac", "amber brown"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Wine Red Evening Gown", description: "Deep wine gown commands with autumn intensity", colors: ["wine red", "dark burgundy"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Dark Bronze Cocktail Dress", description: "Dark bronze shines on deep autumn coloring", colors: ["dark bronze", "antique gold"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Mahogany Velvet Jacket", description: "Mahogany velvet enriches your deep autumn palette", colors: ["mahogany", "dark rust"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dark Olive Silk Skirt", description: "Deep olive grounds your intense autumn beauty", colors: ["dark olive", "hunter green"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Dark Chocolate Satin Pants", description: "Chocolate satin anchors your deep autumn look", colors: ["dark chocolate", "espresso"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Velvet Evening Gown", description: "Dramatic black gown showcases deep winter contrast", colors: ["black", "midnight"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Deep Ruby Cocktail Dress", description: "Ruby red dazzles on your winter complexion", colors: ["deep ruby", "garnet"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Midnight Blue Velvet Jacket", description: "Midnight blue velvet deepens winter elegance", colors: ["midnight blue", "dark navy"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Emerald Silk Skirt", description: "Deep emerald captivates with winter richness", colors: ["emerald", "dark green"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Jet Black Satin Pants", description: "Jet black satin anchors your dramatic palette", colors: ["jet black", "onyx"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Icy Silver Evening Gown", description: "Silver gown reflects your cool winter luminosity", colors: ["icy silver", "platinum"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Royal Purple Cocktail Dress", description: "Royal purple elevates cool winter sophistication", colors: ["royal purple", "deep violet"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Navy Velvet Jacket", description: "Navy velvet adds depth to cool winter looks", colors: ["navy", "dark blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Cool Rose Silk Skirt", description: "Cool rose silk flatters winter undertones", colors: ["cool rose", "icy pink"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Pewter Satin Pants", description: "Pewter satin mirrors your cool winter refinement", colors: ["pewter", "silver gray"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Vivid Magenta Evening Gown", description: "Magenta gown electrifies bright winter coloring", colors: ["vivid magenta", "hot pink"], image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
        { name: "Electric Blue Cocktail Dress", description: "Electric blue stuns on bright winter palette", colors: ["electric blue", "cobalt"], image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
        { name: "Bright White Velvet Jacket", description: "Stark white velvet sharpens bright winter contrast", colors: ["bright white", "pure white"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "True Red Silk Skirt", description: "True red silk commands attention on winter skin", colors: ["true red", "scarlet"], image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj7a?w=400&q=80" },
        { name: "Jet Black Satin Pants", description: "Black satin grounds your vivid winter palette", colors: ["jet black", "charcoal"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" }
      ]
    },
    street: {
      lightSpring: [
        { name: "Peach Bomber Jacket", description: "Soft peach bomber flatters light spring warmth", colors: ["peach", "apricot"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Coral Graphic Tee", description: "Coral tee pops with your light spring coloring", colors: ["coral", "warm pink"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Light Gold Cargo Pants", description: "Gold cargo pants suit your warm undertones", colors: ["light gold", "sand"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Warm Ivory Oversized Hoodie", description: "Ivory hoodie enhances your delicate spring glow", colors: ["warm ivory", "cream"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Buttercup Utility Vest", description: "Bright buttercup energizes light spring tones", colors: ["buttercup", "warm yellow"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Terracotta Bomber Jacket", description: "Terracotta bomber celebrates warm spring richness", colors: ["terracotta", "rust"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Amber Graphic Tee", description: "Amber tee glows against warm spring skin", colors: ["amber", "golden yellow"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Olive Cargo Pants", description: "Warm olive grounds your earthy spring palette", colors: ["olive", "army green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Copper Oversized Hoodie", description: "Copper hoodie mirrors your warm spring depth", colors: ["copper", "bronze"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Warm Green Windbreaker", description: "Earthy green windbreaker suits warm spring naturally", colors: ["warm green", "moss"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Electric Coral Bomber Jacket", description: "Vivid coral bomber energizes bright spring coloring", colors: ["electric coral", "hot pink"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Bright Lime Graphic Tee", description: "Lime tee pops with bright spring vibrancy", colors: ["bright lime", "neon green"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Turquoise Cargo Pants", description: "Bold turquoise matches your high-energy palette", colors: ["turquoise", "aqua"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Mango Oversized Hoodie", description: "Saturated mango hoodie radiates spring brightness", colors: ["mango", "tangerine"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Poppy Red Windbreaker", description: "Bold poppy red windbreaker suits vivid coloring", colors: ["poppy red", "bright red"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Powder Blue Bomber Jacket", description: "Soft blue bomber enhances light summer calm", colors: ["powder blue", "sky"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Lavender Graphic Tee", description: "Lavender tee complements your cool summer tones", colors: ["lavender", "lilac"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dove Gray Cargo Pants", description: "Dove gray grounds your gentle summer palette", colors: ["dove gray", "silver"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Mint Oversized Hoodie", description: "Mint hoodie refreshes your light summer look", colors: ["soft mint", "seafoam"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Dusty Pink Windbreaker", description: "Dusty pink windbreaker softens summer brightness", colors: ["dusty pink", "blush"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Bomber Jacket", description: "Slate blue bomber deepens cool summer styling", colors: ["slate blue", "steel"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Berry Graphic Tee", description: "Cool berry tee enhances your summer contrast", colors: ["berry", "plum"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Cool Gray Cargo Pants", description: "Cool gray cargo anchors your summer palette", colors: ["cool gray", "ash"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Periwinkle Oversized Hoodie", description: "Periwinkle hoodie echoes cool summer harmony", colors: ["periwinkle", "soft violet"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Sage Utility Vest", description: "Cool sage vest complements muted summer tones", colors: ["sage", "eucalyptus"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softSummer: [
        { name: "Mauve Bomber Jacket", description: "Muted mauve bomber blends with soft summer tones", colors: ["mauve", "dusty purple"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Smoky Rose Graphic Tee", description: "Smoky rose echoes your softly muted coloring", colors: ["smoky rose", "soft pink"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Mushroom Cargo Pants", description: "Mushroom tone grounds your gentle summer palette", colors: ["mushroom", "taupe"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Gray Oversized Hoodie", description: "Soft gray hoodie mirrors your muted elegance", colors: ["soft gray", "dove"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Dusty Teal Windbreaker", description: "Muted teal windbreaker suits soft summer coloring", colors: ["dusty teal", "faded blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Khaki Bomber Jacket", description: "Khaki bomber blends with soft autumn warmth", colors: ["warm khaki", "sand"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dusty Rust Graphic Tee", description: "Muted rust enhances your soft autumn complexion", colors: ["dusty rust", "terracotta"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Soft Olive Cargo Pants", description: "Soft olive pairs naturally with autumn undertones", colors: ["soft olive", "sage green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Camel Oversized Hoodie", description: "Camel hoodie wraps you in autumn warmth", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Mushroom Utility Vest", description: "Mushroom vest suits your muted warm palette", colors: ["mushroom", "taupe"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Orange Bomber Jacket", description: "Rich rust bomber celebrates warm autumn depth", colors: ["rust orange", "burnt sienna"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Forest Green Graphic Tee", description: "Deep green tee grounds warm autumn richness", colors: ["forest green", "pine"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Chocolate Cargo Pants", description: "Chocolate cargo anchors your earthy autumn palette", colors: ["chocolate", "dark brown"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Copper Oversized Hoodie", description: "Copper hoodie brings metallic warmth to autumn", colors: ["copper", "dark amber"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Burnt Sienna Windbreaker", description: "Burnt sienna windbreaker deepens autumn warmth", colors: ["burnt sienna", "terracotta"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Dark Burgundy Bomber Jacket", description: "Deep burgundy bomber intensifies autumn richness", colors: ["dark burgundy", "wine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Bronze Graphic Tee", description: "Bronze tee highlights your deep autumn warmth", colors: ["bronze", "dark gold"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Olive Cargo Pants", description: "Dark olive cargo suits your intense autumn palette", colors: ["dark olive", "army green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Mahogany Oversized Hoodie", description: "Mahogany hoodie deepens your rich coloring", colors: ["mahogany", "dark rust"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Espresso Utility Vest", description: "Espresso vest anchors deep autumn street style", colors: ["espresso", "dark brown"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Bomber Jacket", description: "Sharp black bomber frames deep winter contrast", colors: ["black", "charcoal"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Deep Red Graphic Tee", description: "Bold red tee pops on deep winter complexion", colors: ["deep red", "crimson"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Midnight Cargo Pants", description: "Midnight cargo anchors your dark winter palette", colors: ["midnight", "dark navy"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dark Emerald Oversized Hoodie", description: "Emerald hoodie adds depth to winter coloring", colors: ["dark emerald", "forest green"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Charcoal Windbreaker", description: "Charcoal windbreaker suits your bold winter look", colors: ["charcoal", "graphite"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Navy Bomber Jacket", description: "Navy bomber sharpens your cool winter style", colors: ["navy", "dark blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Icy White Graphic Tee", description: "Crisp white tee enhances cool winter clarity", colors: ["icy white", "snow"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Steel Gray Cargo Pants", description: "Steel gray cargo suits your cool undertones", colors: ["steel gray", "silver"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Cool Purple Oversized Hoodie", description: "Cool purple hoodie deepens winter sophistication", colors: ["cool purple", "grape"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Silver Utility Vest", description: "Silver vest adds edge to cool winter street look", colors: ["silver", "pewter"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Vivid Red Bomber Jacket", description: "True red bomber commands bright winter attention", colors: ["vivid red", "scarlet"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Electric Blue Graphic Tee", description: "Electric blue tee amplifies bright winter energy", colors: ["electric blue", "cobalt"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Black Cargo Pants", description: "Black cargo creates bold bright winter contrast", colors: ["black", "jet black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Fuchsia Oversized Hoodie", description: "Fuchsia hoodie celebrates your vivid winter palette", colors: ["fuchsia", "hot pink"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Emerald Windbreaker", description: "Vivid emerald windbreaker suits bright winter perfectly", colors: ["emerald", "jewel green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ]
    }
  },
  male: {
    casual: {
      lightSpring: [
        { name: "Peach Crew Neck Tee", description: "Warm peach complements your light spring skin", colors: ["peach", "soft coral"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Light Camel Chinos", description: "Camel chinos enhance your warm spring palette", colors: ["light camel", "sand"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Warm Ivory Polo", description: "Ivory polo suits your delicate warm undertones", colors: ["warm ivory", "cream"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Apricot Cotton Sweater", description: "Apricot sweater warms your light spring complexion", colors: ["apricot", "light coral"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Soft Gold Lightweight Jacket", description: "Gold jacket adds warmth to your spring glow", colors: ["soft gold", "honey"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Terracotta Henley Tee", description: "Terracotta henley ignites your warm spring look", colors: ["terracotta", "burnt orange"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Warm Tan Chinos", description: "Warm tan chinos anchor your earthy spring palette", colors: ["warm tan", "camel"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Coral Cotton Polo", description: "Coral polo enhances warm spring skin beautifully", colors: ["coral", "salmon"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Amber Knit Sweater", description: "Amber sweater celebrates your warm spring depth", colors: ["amber", "golden brown"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Olive Canvas Jacket", description: "Warm olive jacket grounds your spring warmth", colors: ["olive", "moss green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Vivid Orange Crew Tee", description: "Bright orange energizes your vivid spring palette", colors: ["vivid orange", "tangerine"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Bright Coral Chinos", description: "Coral chinos pop with your bright spring contrast", colors: ["bright coral", "warm red"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Electric Green Polo", description: "Electric green matches your high-energy coloring", colors: ["electric green", "lime"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Turquoise Cotton Sweater", description: "Turquoise sweater amplifies bright spring clarity", colors: ["turquoise", "aqua"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Marigold Light Jacket", description: "Bold marigold jacket radiates bright spring warmth", colors: ["marigold", "golden yellow"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Powder Blue Crew Tee", description: "Cool blue complements your light summer softness", colors: ["powder blue", "sky blue"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Silver Gray Chinos", description: "Silver gray chinos suit your muted summer palette", colors: ["silver gray", "dove"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Lavender Polo", description: "Lavender polo enhances your cool summer tones", colors: ["soft lavender", "lilac"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dusty Blue Sweater", description: "Dusty blue sweater mirrors light summer harmony", colors: ["dusty blue", "faded denim"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Light Gray Casual Jacket", description: "Light gray jacket frames your summer coloring", colors: ["light gray", "pearl"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Blue Henley", description: "Slate blue deepens your cool summer undertones", colors: ["slate blue", "steel blue"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Cool Gray Chinos", description: "Cool gray chinos anchor your summer palette", colors: ["cool gray", "charcoal"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Sage Green Polo", description: "Sage polo complements your muted summer coloring", colors: ["sage green", "eucalyptus"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Berry Cotton Sweater", description: "Berry sweater adds richness to cool summer depth", colors: ["berry", "plum"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Blue Gray Casual Jacket", description: "Blue gray jacket suits your cool summer look", colors: ["blue gray", "pewter"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softSummer: [
        { name: "Muted Blue Crew Tee", description: "Soft blue blends with your muted summer palette", colors: ["muted blue", "faded denim"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Mushroom Chinos", description: "Mushroom chinos suit your softly blended tones", colors: ["mushroom", "taupe"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dusty Green Polo", description: "Dusty green complements your muted summer coloring", colors: ["dusty green", "sage"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Soft Mauve Sweater", description: "Mauve sweater mirrors your subdued summer warmth", colors: ["soft mauve", "dusty rose"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Greige Canvas Jacket", description: "Greige jacket blends with your soft summer palette", colors: ["greige", "warm gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Khaki Crew Tee", description: "Khaki tee suits your muted warm autumn tones", colors: ["warm khaki", "sand"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Camel Cotton Chinos", description: "Camel chinos enhance your soft autumn warmth", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dusty Olive Polo", description: "Muted olive polo grounds your earthy autumn palette", colors: ["dusty olive", "sage green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Soft Rust Sweater", description: "Gentle rust enhances your muted autumn coloring", colors: ["soft rust", "terracotta"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Warm Beige Canvas Jacket", description: "Warm beige jacket complements soft autumn tones", colors: ["warm beige", "sand"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Burnt Orange Henley", description: "Burnt orange celebrates your warm autumn richness", colors: ["burnt orange", "copper"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Chocolate Brown Chinos", description: "Chocolate chinos deepen your warm autumn palette", colors: ["chocolate", "dark brown"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Moss Green Polo", description: "Moss green polo grounds your earthy autumn warmth", colors: ["moss green", "olive"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Pumpkin Knit Sweater", description: "Pumpkin sweater radiates warm autumn richness", colors: ["pumpkin", "burnt orange"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Dark Olive Field Jacket", description: "Dark olive jacket anchors your warm autumn look", colors: ["dark olive", "army green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Burgundy Crew Tee", description: "Deep burgundy intensifies your autumn presence", colors: ["burgundy", "wine"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Espresso Chinos", description: "Espresso chinos anchor your deep autumn palette", colors: ["espresso", "dark brown"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dark Forest Polo", description: "Forest green polo enriches deep autumn coloring", colors: ["dark forest", "pine green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Rust Sweater", description: "Dark rust sweater deepens your rich autumn warmth", colors: ["dark rust", "mahogany"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Bronze Brown Jacket", description: "Bronze jacket highlights your deep autumn depth", colors: ["bronze brown", "dark copper"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black V-Neck Tee", description: "Crisp black frames your high-contrast winter look", colors: ["black", "charcoal"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Navy Chinos", description: "Deep navy suits your cool deep winter palette", colors: ["dark navy", "midnight"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Emerald Green Polo", description: "Rich emerald enhances your deep winter coloring", colors: ["emerald", "dark green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Plum Sweater", description: "Deep plum sweater matches your bold winter contrast", colors: ["dark plum", "aubergine"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Charcoal Canvas Jacket", description: "Charcoal jacket grounds your deep winter palette", colors: ["charcoal", "graphite"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Cool White Crew Tee", description: "Pure white enhances your crisp winter clarity", colors: ["cool white", "snow"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Steel Gray Chinos", description: "Steel gray grounds your cool winter undertones", colors: ["steel gray", "silver"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Navy Blue Polo", description: "True navy complements cool winter sophistication", colors: ["navy blue", "dark blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Icy Blue Sweater", description: "Icy blue sweater mirrors your cool winter palette", colors: ["icy blue", "frost"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Silver Gray Casual Jacket", description: "Silver jacket sharpens your winter cool tones", colors: ["silver gray", "pewter"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Vivid Red Crew Tee", description: "True red electrifies your bright winter palette", colors: ["vivid red", "scarlet"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Black Chinos", description: "Sharp black chinos anchor bright winter contrast", colors: ["black", "jet black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Royal Blue Polo", description: "Royal blue amplifies your bright winter vibrancy", colors: ["royal blue", "cobalt"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Bright White Sweater", description: "Stark white maximizes your winter contrast power", colors: ["bright white", "pure white"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" },
        { name: "Electric Blue Casual Jacket", description: "Electric blue jacket dazzles with bright winter energy", colors: ["electric blue", "cobalt"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ]
    },
    office: {
      lightSpring: [
        { name: "Peach Dress Shirt", description: "Soft peach shirt flatters light spring warmth", colors: ["peach", "blush"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Warm Ivory Blazer", description: "Ivory blazer enhances your delicate warm tones", colors: ["warm ivory", "cream"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Champagne Tailored Pants", description: "Champagne pants bring refinement to your palette", colors: ["champagne", "soft gold"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Light Coral Tie", description: "Coral tie adds vibrancy to light spring look", colors: ["light coral", "salmon"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Sand Cotton Sweater Vest", description: "Sand vest layers warmth over spring tones", colors: ["sand", "warm beige"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Golden Tan Dress Shirt", description: "Golden tan deepens your warm spring glow", colors: ["golden tan", "honey"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Terracotta Blazer", description: "Terracotta blazer celebrates warm spring richness", colors: ["terracotta", "rust"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Olive Tailored Pants", description: "Olive pants ground your warm spring earth tones", colors: ["warm olive", "army green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Copper Dress Shirt", description: "Copper shirt radiates warm spring confidence", colors: ["copper", "amber"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Camel Knit Sweater", description: "Camel sweater adds warmth to office spring style", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Bright Coral Dress Shirt", description: "Vivid coral energizes your bright spring look", colors: ["bright coral", "tangerine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Bold Gold Blazer", description: "Saturated gold blazer makes spring coloring shine", colors: ["bold gold", "marigold"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm White Tailored Pants", description: "Warm white grounds your bright vivid palette", colors: ["warm white", "ivory"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Turquoise Dress Shirt", description: "Bright turquoise pops on your spring complexion", colors: ["turquoise", "aqua"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Lime Green Knit Vest", description: "Vivid lime accent brightens spring office wear", colors: ["lime green", "electric green"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Powder Blue Dress Shirt", description: "Cool blue shirt enhances light summer elegance", colors: ["powder blue", "sky blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Light Gray Blazer", description: "Light gray blazer frames your summer complexion", colors: ["light gray", "pearl"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Silver Tailored Pants", description: "Silver toned pants suit your cool summer palette", colors: ["silver", "light gray"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Lilac Dress Shirt", description: "Lilac shirt complements your gentle summer tones", colors: ["soft lilac", "lavender"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dove Gray Sweater Vest", description: "Dove gray layers elegantly with summer coloring", colors: ["dove gray", "silver"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Steel Blue Dress Shirt", description: "Steel blue deepens your cool summer presence", colors: ["steel blue", "slate"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Charcoal Blue Blazer", description: "Charcoal blue blazer sharpens summer undertones", colors: ["charcoal blue", "blue gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Cool Gray Tailored Pants", description: "Cool gray pants anchor your summer sophistication", colors: ["cool gray", "ash"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Sage Dress Shirt", description: "Sage shirt adds calm depth to summer coloring", colors: ["sage", "muted green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Berry Knit Sweater", description: "Berry sweater enriches cool summer office style", colors: ["berry", "plum"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      softSummer: [
        { name: "Muted Blue Dress Shirt", description: "Soft blue blends with your muted summer palette", colors: ["muted blue", "faded denim"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Greige Blazer", description: "Greige blazer mirrors your softly muted tones", colors: ["greige", "warm gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Taupe Tailored Pants", description: "Taupe pants harmonize with soft summer warmth", colors: ["taupe", "mushroom"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dusty Green Dress Shirt", description: "Muted green complements your subdued summer look", colors: ["dusty green", "sage"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Soft Gray Knit Vest", description: "Soft gray layers gently over summer coloring", colors: ["soft gray", "dove"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Sand Dress Shirt", description: "Sandy tone complements your soft autumn warmth", colors: ["warm sand", "camel"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Soft Olive Blazer", description: "Muted olive blazer grounds your autumn palette", colors: ["soft olive", "sage green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Beige Tailored Pants", description: "Warm beige pants enhance soft autumn coloring", colors: ["warm beige", "khaki"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dusty Coral Dress Shirt", description: "Muted coral suits your softened autumn palette", colors: ["dusty coral", "soft peach"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Camel Sweater Vest", description: "Camel vest adds refined warmth to office wear", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Dress Shirt", description: "Rich rust celebrates your warm autumn depth", colors: ["rust", "burnt orange"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Chocolate Brown Blazer", description: "Chocolate blazer enriches warm autumn styling", colors: ["chocolate", "dark brown"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Cognac Tailored Pants", description: "Cognac pants radiate warm autumn sophistication", colors: ["cognac", "warm brown"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Forest Green Dress Shirt", description: "Forest green deepens your warm autumn look", colors: ["forest green", "pine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Amber Knit Sweater", description: "Amber sweater glows with warm autumn richness", colors: ["amber", "golden brown"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Dark Burgundy Dress Shirt", description: "Deep burgundy commands with autumn intensity", colors: ["dark burgundy", "wine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Forest Blazer", description: "Forest green blazer grounds your deep richness", colors: ["dark forest", "evergreen"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Espresso Tailored Pants", description: "Espresso pants anchor your bold autumn palette", colors: ["espresso", "dark chocolate"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dark Olive Dress Shirt", description: "Deep olive enriches your intense autumn presence", colors: ["dark olive", "hunter green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Mahogany Knit Sweater", description: "Mahogany sweater deepens your autumn warmth", colors: ["mahogany", "dark rust"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Crisp White Dress Shirt", description: "Pure white enhances your sharp winter contrast", colors: ["crisp white", "bright white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Black Tailored Blazer", description: "Black blazer frames your deep winter presence", colors: ["black", "jet black"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Midnight Navy Tailored Pants", description: "Midnight navy deepens your winter sophistication", colors: ["midnight navy", "dark blue"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Deep Red Dress Shirt", description: "Rich red complements bold deep winter contrast", colors: ["deep red", "crimson"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Charcoal Sweater Vest", description: "Dark charcoal layers power into winter office wear", colors: ["charcoal", "graphite"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Icy Blue Dress Shirt", description: "Icy blue brings out your cool winter clarity", colors: ["icy blue", "frost"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Charcoal Blazer", description: "Charcoal blazer sharpens cool winter elegance", colors: ["charcoal", "slate gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Navy Tailored Pants", description: "Navy pants anchor your cool winter palette", colors: ["navy", "dark blue"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Cool Lavender Dress Shirt", description: "Lavender complements your cool winter undertones", colors: ["cool lavender", "icy violet"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Silver Knit Sweater", description: "Silver sweater echoes your winter sophistication", colors: ["silver", "pewter"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Bright White Dress Shirt", description: "Stark white shirt maximizes winter contrast", colors: ["bright white", "pure white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Royal Blue Blazer", description: "Royal blue blazer energizes bright winter style", colors: ["royal blue", "cobalt"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Black Tailored Pants", description: "Black pants ground your vivid winter palette", colors: ["black", "jet black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "True Red Dress Shirt", description: "Vivid red commands attention on bright winter skin", colors: ["true red", "scarlet"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Emerald Green Knit Vest", description: "Emerald accent sharpens bright winter office look", colors: ["emerald", "jewel green"], image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80" }
      ]
    },
    elegant: {
      lightSpring: [
        { name: "Champagne Formal Suit", description: "Champagne suit glows on light spring coloring", colors: ["champagne", "soft gold"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Warm Ivory Tuxedo Shirt", description: "Ivory shirt enhances your warm delicate tones", colors: ["warm ivory", "cream"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Peach Silk Vest", description: "Peach silk vest flatters light spring undertones", colors: ["peach", "blush"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Light Gold Formal Pants", description: "Gold toned pants radiate spring elegance", colors: ["light gold", "champagne"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Coral Velvet Jacket", description: "Coral velvet brings warmth to formal attire", colors: ["soft coral", "apricot"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Golden Brown Formal Suit", description: "Golden brown suit celebrates warm spring richness", colors: ["golden brown", "amber"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Warm White Tuxedo Shirt", description: "Warm white shirt suits your golden undertones", colors: ["warm white", "ivory"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Terracotta Silk Vest", description: "Terracotta vest enriches warm spring formality", colors: ["terracotta", "copper"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Camel Formal Pants", description: "Camel pants ground warm spring formal wear", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Bronze Velvet Jacket", description: "Bronze velvet jacket illuminates spring warmth", colors: ["bronze", "dark gold"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Bright Tan Formal Suit", description: "Vivid tan suit radiates bright spring energy", colors: ["bright tan", "golden"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Crisp Ivory Tuxedo Shirt", description: "Crisp ivory maximizes bright spring contrast", colors: ["crisp ivory", "warm white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Bright Coral Silk Vest", description: "Vivid coral vest pops with spring brightness", colors: ["bright coral", "tangerine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Electric Turquoise Formal Pants", description: "Turquoise pants electrify bright spring formality", colors: ["electric turquoise", "aqua"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Marigold Velvet Jacket", description: "Bold marigold jacket commands spring attention", colors: ["marigold", "bright gold"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Light Gray Formal Suit", description: "Light gray suit frames your summer delicacy", colors: ["light gray", "pearl"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Cool White Tuxedo Shirt", description: "Cool white shirt enhances summer clarity", colors: ["cool white", "snow"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Powder Blue Silk Vest", description: "Powder blue vest flatters light summer tones", colors: ["powder blue", "sky blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Silver Formal Pants", description: "Silver pants add refinement to your palette", colors: ["silver", "light gray"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Lavender Velvet Jacket", description: "Lavender velvet elevates light summer elegance", colors: ["soft lavender", "wisteria"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Medium Gray Formal Suit", description: "Cool gray suit sharpens your summer undertones", colors: ["medium gray", "slate"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Crisp White Tuxedo Shirt", description: "White shirt brightens your cool summer palette", colors: ["crisp white", "pure white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Steel Blue Silk Vest", description: "Steel blue vest deepens summer formality", colors: ["steel blue", "slate blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Blue Gray Formal Pants", description: "Blue gray pants suit your cool summer depth", colors: ["blue gray", "pewter"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Berry Velvet Jacket", description: "Berry velvet adds richness to summer elegance", colors: ["berry", "plum"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softSummer: [
        { name: "Greige Formal Suit", description: "Greige suit mirrors your soft muted coloring", colors: ["greige", "warm gray"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Soft White Tuxedo Shirt", description: "Soft white suits your gently muted tones", colors: ["soft white", "off-white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Dusty Blue Silk Vest", description: "Dusty blue vest harmonizes with muted summer", colors: ["dusty blue", "faded blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Mushroom Formal Pants", description: "Mushroom pants complement your blended coloring", colors: ["mushroom", "taupe"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Smoky Mauve Velvet Jacket", description: "Smoky mauve jacket elevates soft summer style", colors: ["smoky mauve", "dusty pink"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Taupe Formal Suit", description: "Taupe suit enhances your muted autumn warmth", colors: ["warm taupe", "mushroom"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Cream Tuxedo Shirt", description: "Warm cream suits your soft autumn undertones", colors: ["cream", "off-white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Soft Olive Silk Vest", description: "Muted olive vest grounds your autumn formality", colors: ["soft olive", "sage"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Camel Formal Pants", description: "Camel pants radiate soft autumn sophistication", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dusty Gold Velvet Jacket", description: "Dusty gold velvet enriches your soft palette", colors: ["dusty gold", "muted amber"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rich Brown Formal Suit", description: "Rich brown suit celebrates warm autumn depth", colors: ["rich brown", "chocolate"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Warm Ivory Tuxedo Shirt", description: "Ivory shirt warms your deep autumn complexion", colors: ["warm ivory", "cream"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Burnt Orange Silk Vest", description: "Burnt orange vest ignites autumn formality", colors: ["burnt orange", "copper"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Olive Formal Pants", description: "Dark olive pants anchor warm autumn elegance", colors: ["dark olive", "forest green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Copper Velvet Jacket", description: "Copper velvet radiates warm autumn luxury", colors: ["copper", "bronze"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Dark Espresso Formal Suit", description: "Espresso suit commands with deep autumn power", colors: ["dark espresso", "dark brown"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Warm Cream Tuxedo Shirt", description: "Cream shirt softens your deep autumn intensity", colors: ["warm cream", "ivory"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Burgundy Silk Vest", description: "Burgundy vest deepens your rich autumn palette", colors: ["burgundy", "wine"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Dark Forest Formal Pants", description: "Forest pants ground your intense autumn coloring", colors: ["dark forest", "evergreen"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dark Bronze Velvet Jacket", description: "Bronze velvet enriches deep autumn formality", colors: ["dark bronze", "antique gold"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Formal Tuxedo", description: "Black tuxedo showcases deep winter drama", colors: ["black", "midnight"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Bright White Tuxedo Shirt", description: "Stark white shirt maximizes winter contrast", colors: ["bright white", "pure white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Deep Emerald Silk Vest", description: "Emerald vest adds jewel tone to winter formal", colors: ["deep emerald", "dark green"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Midnight Blue Formal Pants", description: "Midnight blue deepens your formal winter look", colors: ["midnight blue", "dark navy"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Dark Red Velvet Jacket", description: "Dark red velvet commands deep winter attention", colors: ["dark red", "garnet"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Charcoal Formal Suit", description: "Charcoal suit sharpens cool winter elegance", colors: ["charcoal", "slate"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Icy White Tuxedo Shirt", description: "Icy white enhances your crisp winter clarity", colors: ["icy white", "snow"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Navy Silk Vest", description: "Navy vest anchors cool winter formality", colors: ["navy", "dark blue"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Silver Gray Formal Pants", description: "Silver pants reflect your cool winter polish", colors: ["silver gray", "pewter"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Cool Burgundy Velvet Jacket", description: "Cool burgundy adds depth to winter formal wear", colors: ["cool burgundy", "wine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Black Tie Tuxedo", description: "Sharp black tuxedo frames bright winter contrast", colors: ["black", "jet black"], image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
        { name: "Stark White Tuxedo Shirt", description: "Pure white creates maximum bright winter impact", colors: ["stark white", "crisp white"], image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&q=80" },
        { name: "Royal Blue Silk Vest", description: "Royal blue vest electrifies winter formality", colors: ["royal blue", "cobalt"], image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80" },
        { name: "Bright Navy Formal Pants", description: "Bold navy sharpens your vivid winter look", colors: ["bright navy", "sapphire"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Emerald Velvet Jacket", description: "Vivid emerald jacket dazzles at formal events", colors: ["emerald", "jewel green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ]
    },
    street: {
      lightSpring: [
        { name: "Peach Bomber Jacket", description: "Soft peach bomber enhances light spring warmth", colors: ["peach", "apricot"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Warm Gold Graphic Tee", description: "Gold tee brings out your spring glow", colors: ["warm gold", "honey"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Cream Cargo Pants", description: "Warm cream cargos suit your delicate warmth", colors: ["cream", "warm ivory"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Coral Oversized Hoodie", description: "Coral hoodie brightens your light spring palette", colors: ["coral", "salmon"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Apricot Utility Vest", description: "Apricot vest adds street edge to spring tones", colors: ["apricot", "light coral"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmSpring: [
        { name: "Terracotta Bomber Jacket", description: "Terracotta bomber celebrates warm spring depth", colors: ["terracotta", "rust"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Amber Graphic Tee", description: "Amber tee glows with warm spring energy", colors: ["amber", "golden yellow"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Olive Cargo Pants", description: "Olive cargos ground your warm spring palette", colors: ["olive", "moss green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Copper Oversized Hoodie", description: "Copper hoodie reflects warm spring depth", colors: ["copper", "bronze"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Warm Green Windbreaker", description: "Green windbreaker echoes your earthy warmth", colors: ["warm green", "leaf green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightSpring: [
        { name: "Electric Orange Bomber", description: "Vivid orange bomber pops with spring vibrancy", colors: ["electric orange", "tangerine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Bright Lime Graphic Tee", description: "Lime tee amplifies your bright spring energy", colors: ["bright lime", "neon green"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Turquoise Cargo Pants", description: "Turquoise cargos match your vivid coloring", colors: ["turquoise", "bright aqua"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Mango Oversized Hoodie", description: "Bold mango hoodie celebrates spring brightness", colors: ["mango", "vivid orange"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Poppy Red Windbreaker", description: "Poppy red windbreaker suits your vivid palette", colors: ["poppy red", "bright red"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      lightSummer: [
        { name: "Powder Blue Bomber", description: "Soft blue bomber suits light summer calm", colors: ["powder blue", "sky"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Lavender Graphic Tee", description: "Lavender tee enhances your cool summer tones", colors: ["lavender", "lilac"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Silver Gray Cargo Pants", description: "Silver cargos ground your gentle summer palette", colors: ["silver gray", "dove"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Mint Oversized Hoodie", description: "Mint hoodie refreshes your light summer coloring", colors: ["soft mint", "seafoam"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Dusty Blue Windbreaker", description: "Dusty blue windbreaker softens summer styling", colors: ["dusty blue", "faded blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolSummer: [
        { name: "Slate Bomber Jacket", description: "Slate bomber sharpens cool summer street style", colors: ["slate", "steel blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Cool Purple Graphic Tee", description: "Purple tee deepens your cool summer look", colors: ["cool purple", "grape"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Blue Gray Cargo Pants", description: "Blue gray cargos suit your summer undertones", colors: ["blue gray", "pewter"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Berry Oversized Hoodie", description: "Berry hoodie adds richness to summer street wear", colors: ["berry", "plum"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Sage Utility Vest", description: "Sage vest complements cool summer naturally", colors: ["sage", "eucalyptus"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softSummer: [
        { name: "Muted Gray Bomber", description: "Soft gray bomber blends with muted summer tones", colors: ["muted gray", "dove"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Dusty Rose Graphic Tee", description: "Dusty rose tee echoes your muted summer palette", colors: ["dusty rose", "mauve"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Taupe Cargo Pants", description: "Taupe cargos ground your softly blended tones", colors: ["taupe", "mushroom"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Soft Teal Oversized Hoodie", description: "Muted teal hoodie suits your gentle coloring", colors: ["soft teal", "faded blue"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Greige Windbreaker", description: "Greige windbreaker mirrors your subtle palette", colors: ["greige", "warm gray"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      softAutumn: [
        { name: "Warm Khaki Bomber", description: "Khaki bomber suits your muted autumn warmth", colors: ["warm khaki", "sand"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Soft Terracotta Graphic Tee", description: "Muted terracotta enhances soft autumn coloring", colors: ["soft terracotta", "dusty rust"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Olive Cargo Pants", description: "Soft olive cargos ground your autumn palette", colors: ["soft olive", "sage green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Camel Oversized Hoodie", description: "Camel hoodie wraps you in autumn comfort", colors: ["camel", "warm tan"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Mushroom Utility Vest", description: "Mushroom vest complements muted warm tones", colors: ["mushroom", "warm taupe"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      warmAutumn: [
        { name: "Rust Bomber Jacket", description: "Rust bomber celebrates warm autumn richness", colors: ["rust", "burnt sienna"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Forest Green Graphic Tee", description: "Forest green tee grounds your warm depth", colors: ["forest green", "pine"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Chocolate Cargo Pants", description: "Chocolate cargos anchor your autumn earth tones", colors: ["chocolate", "dark brown"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Copper Oversized Hoodie", description: "Copper hoodie radiates autumn metallic warmth", colors: ["copper", "bronze"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Burnt Orange Windbreaker", description: "Burnt orange windbreaker ignites autumn vibes", colors: ["burnt orange", "amber"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepAutumn: [
        { name: "Dark Burgundy Bomber", description: "Burgundy bomber intensifies deep autumn impact", colors: ["dark burgundy", "wine"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Bronze Graphic Tee", description: "Bronze tee highlights your deep autumn warmth", colors: ["bronze", "dark gold"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Dark Olive Cargo Pants", description: "Dark olive cargos anchor your intense palette", colors: ["dark olive", "army green"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Mahogany Oversized Hoodie", description: "Mahogany hoodie deepens your rich autumn tone", colors: ["mahogany", "dark rust"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Espresso Utility Vest", description: "Espresso vest grounds deep autumn street style", colors: ["espresso", "dark brown"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      deepWinter: [
        { name: "Black Bomber Jacket", description: "Black bomber anchors deep winter street style", colors: ["black", "charcoal"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Deep Red Graphic Tee", description: "Bold red tee pops against winter complexion", colors: ["deep red", "crimson"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Midnight Cargo Pants", description: "Midnight cargos suit your dark winter palette", colors: ["midnight", "dark navy"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Emerald Oversized Hoodie", description: "Emerald hoodie adds depth to winter street wear", colors: ["emerald", "dark green"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Charcoal Windbreaker", description: "Charcoal windbreaker suits your bold winter look", colors: ["charcoal", "graphite"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      coolWinter: [
        { name: "Navy Bomber Jacket", description: "Navy bomber sharpens cool winter street style", colors: ["navy", "dark blue"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Pure White Graphic Tee", description: "White tee enhances your cool winter contrast", colors: ["pure white", "snow"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Steel Gray Cargo Pants", description: "Steel gray cargos anchor cool winter edge", colors: ["steel gray", "silver"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Cool Purple Oversized Hoodie", description: "Purple hoodie deepens your winter cool tones", colors: ["cool purple", "grape"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Silver Utility Vest", description: "Silver vest adds cool edge to winter style", colors: ["silver", "pewter"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ],
      brightWinter: [
        { name: "Vivid Red Bomber Jacket", description: "True red bomber commands bright winter attention", colors: ["vivid red", "scarlet"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
        { name: "Electric Blue Graphic Tee", description: "Electric blue amplifies bright winter impact", colors: ["electric blue", "cobalt"], image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&q=80" },
        { name: "Black Cargo Pants", description: "Black cargos create maximum winter contrast", colors: ["black", "jet black"], image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80" },
        { name: "Fuchsia Oversized Hoodie", description: "Fuchsia hoodie electrifies your winter palette", colors: ["fuchsia", "hot pink"], image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80" },
        { name: "Emerald Windbreaker", description: "Emerald windbreaker suits bright winter vibrancy", colors: ["emerald", "jewel green"], image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" }
      ]
    }
  }
};

const GENDER_ACCESSORIES = {
  female: {
    lightSpring: [
      { name: "Gold Flower Earrings", description: "Delicate gold blooms enhance light spring warmth", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Peach Silk Scarf", description: "Soft peach scarf flatters your warm spring glow", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400&q=80" },
      { name: "Champagne Tote Bag", description: "Champagne tote complements your delicate palette", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" }
    ],
    warmSpring: [
      { name: "Coral Beaded Necklace", description: "Coral necklace enriches warm spring skin tones", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Amber Drop Earrings", description: "Amber earrings celebrate your warm spring depth", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Terracotta Leather Handbag", description: "Terracotta bag anchors your earthy spring warmth", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ],
    brightSpring: [
      { name: "Vivid Turquoise Ring", description: "Bright turquoise pops on your spring coloring", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
      { name: "Bold Gold Chain Bracelet", description: "Bold gold bracelet matches your vivid palette", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
      { name: "Coral Leather Handbag", description: "Coral bag energizes your bright spring wardrobe", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ],
    lightSummer: [
      { name: "Silver Pearl Earrings", description: "Silver pearls mirror your light summer softness", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Lavender Silk Scarf", description: "Lavender scarf complements cool summer tones", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400&q=80" },
      { name: "Powder Blue Tote Bag", description: "Powder blue tote suits your gentle summer palette", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" }
    ],
    coolSummer: [
      { name: "Silver Chain Necklace", description: "Cool silver necklace deepens summer sophistication", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Berry Hair Clip", description: "Berry clip adds depth to cool summer styling", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Slate Blue Handbag", description: "Slate blue bag anchors your cool summer look", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ],
    softSummer: [
      { name: "Rose Gold Bracelet", description: "Rose gold blends with your muted summer warmth", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
      { name: "Dusty Pink Scarf", description: "Dusty pink scarf echoes your soft muted palette", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400&q=80" },
      { name: "Taupe Leather Tote", description: "Taupe tote complements your softly blended tones", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" }
    ],
    softAutumn: [
      { name: "Matte Gold Hoop Earrings", description: "Matte gold hoops warm your soft autumn palette", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Camel Leather Handbag", description: "Camel bag enhances your muted warm coloring", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" },
      { name: "Warm Taupe Silk Scarf", description: "Taupe scarf blends with your soft autumn tones", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400&q=80" }
    ],
    warmAutumn: [
      { name: "Copper Cuff Bracelet", description: "Copper bracelet celebrates warm autumn richness", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
      { name: "Amber Pendant Necklace", description: "Amber pendant deepens your warm autumn glow", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Cognac Leather Tote", description: "Cognac tote radiates warm autumn sophistication", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" }
    ],
    deepAutumn: [
      { name: "Garnet Drop Earrings", description: "Deep garnet earrings intensify autumn presence", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Dark Bronze Ring", description: "Bronze ring highlights your deep autumn warmth", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
      { name: "Burgundy Leather Handbag", description: "Burgundy bag anchors your rich autumn palette", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ],
    deepWinter: [
      { name: "Platinum Statement Necklace", description: "Platinum necklace frames deep winter contrast", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Emerald Stud Earrings", description: "Emerald studs add jewel tone to winter look", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Black Leather Handbag", description: "Black bag grounds your dramatic winter palette", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ],
    coolWinter: [
      { name: "Silver Pendant Necklace", description: "Cool silver pendant enhances winter clarity", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
      { name: "Icy Blue Hair Accessory", description: "Icy blue clip sharpens your winter cool tones", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
      { name: "Navy Structured Handbag", description: "Navy bag suits your cool winter sophistication", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ],
    brightWinter: [
      { name: "Diamond-cut Silver Bracelet", description: "Bright silver bracelet maximizes winter sparkle", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=80" },
      { name: "Fuchsia Silk Scarf", description: "Vivid fuchsia scarf electrifies your winter look", image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400&q=80" },
      { name: "Red Patent Handbag", description: "True red bag commands bright winter attention", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" }
    ]
  },
  male: {
    lightSpring: [
      { name: "Gold-tone Dress Watch", description: "Warm gold watch enhances light spring elegance", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Tan Leather Belt", description: "Tan belt complements your warm spring palette", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Peach Patterned Tie", description: "Peach tie flatters your light spring skin tone", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" }
    ],
    warmSpring: [
      { name: "Rose Gold Watch", description: "Rose gold watch celebrates warm spring richness", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Cognac Leather Belt", description: "Cognac belt deepens your warm spring look", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Tortoiseshell Sunglasses", description: "Warm tortoiseshell frames suit your spring warmth", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80" }
    ],
    brightSpring: [
      { name: "Bold Gold Watch", description: "Vivid gold watch matches your bright spring energy", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Coral Patterned Tie", description: "Bright coral tie pops on your vivid coloring", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" },
      { name: "Tan Leather Wallet", description: "Warm tan wallet suits your bright spring palette", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80" }
    ],
    lightSummer: [
      { name: "Silver Dress Watch", description: "Cool silver watch enhances light summer elegance", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Light Gray Belt", description: "Gray belt grounds your gentle summer palette", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Powder Blue Tie", description: "Powder blue tie complements your summer softness", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" }
    ],
    coolSummer: [
      { name: "Steel Watch", description: "Steel watch deepens your cool summer sophistication", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Charcoal Belt", description: "Charcoal belt anchors your cool summer look", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Blue Gray Sunglasses", description: "Cool gray frames suit your summer undertones", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80" }
    ],
    softSummer: [
      { name: "Matte Silver Watch", description: "Matte silver blends with your muted summer tones", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Taupe Leather Belt", description: "Taupe belt harmonizes with soft summer coloring", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Dove Gray Hat", description: "Dove gray hat mirrors your subdued summer palette", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80" }
    ],
    softAutumn: [
      { name: "Antique Gold Watch", description: "Antique gold warms your soft autumn palette", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Camel Leather Belt", description: "Camel belt enhances your muted warm coloring", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Warm Tan Wallet", description: "Tan wallet complements soft autumn earth tones", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&q=80" }
    ],
    warmAutumn: [
      { name: "Bronze-tone Watch", description: "Bronze watch celebrates warm autumn depth", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Dark Brown Leather Belt", description: "Dark brown belt anchors your warm autumn richness", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Rust Patterned Tie", description: "Rust tie deepens your warm autumn presence", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" }
    ],
    deepAutumn: [
      { name: "Dark Gold Watch", description: "Dark gold intensifies your deep autumn warmth", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Espresso Belt", description: "Espresso belt grounds your rich autumn palette", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Burgundy Cufflinks", description: "Burgundy cufflinks add deep autumn refinement", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" }
    ],
    deepWinter: [
      { name: "Black Steel Watch", description: "Black steel frames your deep winter contrast", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Black Leather Belt", description: "Black belt anchors your dramatic winter palette", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Deep Navy Tie", description: "Navy tie deepens your bold winter sophistication", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" }
    ],
    coolWinter: [
      { name: "Platinum Watch", description: "Platinum watch mirrors your cool winter elegance", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Silver Buckle Belt", description: "Silver belt sharpens your cool winter precision", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Navy Sunglasses", description: "Navy frames complement your cool winter clarity", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80" }
    ],
    brightWinter: [
      { name: "Chrome Watch", description: "Chrome watch amplifies bright winter vibrancy", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80" },
      { name: "Black Patent Belt", description: "Black belt creates maximum bright winter contrast", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
      { name: "Royal Blue Tie", description: "Royal blue tie electrifies bright winter style", image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=400&q=80" }
    ]
  }
};
