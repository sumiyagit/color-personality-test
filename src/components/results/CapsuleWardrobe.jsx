const capsuleItems = {
  'light-spring': ['Ivory silk blouse', 'Light wash jeans', 'Peach cardigan', 'Soft gold accessories', 'Camel trench coat', 'Floral wrap dress', 'White sneakers', 'Coral tote bag', 'Linen trousers', 'Pastel knit'],
  'warm-spring': ['Coral wrap top', 'Camel chinos', 'Gold earrings', 'Cognac leather belt', 'Warm olive jacket', 'Terracotta blouse', 'Medium wash jeans', 'Amber pendant', 'Suede boots', 'Golden sweater'],
  'bright-spring': ['Bright coral top', 'White jeans', 'Turquoise jewelry', 'Cobalt blazer', 'Hot pink dress', 'Gold statement earrings', 'Emerald scarf', 'Red crossbody bag', 'Electric blue tee', 'Colorful sneakers'],
  'light-summer': ['Powder blue blouse', 'Soft grey trousers', 'Pearl earrings', 'Lavender cardigan', 'Silver bracelet', 'Rose midi skirt', 'Light denim jacket', 'Dusty pink top', 'Seafoam scarf', 'Grey cashmere knit'],
  'cool-summer': ['Berry silk top', 'Navy trousers', 'Silver chains', 'Slate blazer', 'Plum wrap dress', 'Cool grey cardigan', 'Steel blue jeans', 'Amethyst studs', 'Burgundy leather bag', 'Charcoal wool coat'],
  'soft-summer': ['Dusty rose blouse', 'Mushroom chinos', 'Matte silver jewelry', 'Sage cardigan', 'Soft grey knit', 'Mauve midi dress', 'Taupe tote bag', 'Muted blue jeans', 'Pewter accessories', 'Cocoa wool coat'],
  'soft-autumn': ['Warm taupe blouse', 'Soft olive trousers', 'Matte gold studs', 'Camel cardigan', 'Warm beige knit', 'Khaki chinos', 'Cognac leather bag', 'Cream silk scarf', 'Warm grey coat', 'Natural linen dress'],
  'warm-autumn': ['Burnt orange knit', 'Dark olive chinos', 'Gold hoop earrings', 'Rust leather jacket', 'Mustard sweater', 'Cognac boots', 'Amber bracelet', 'Corduroy pants', 'Suede tote bag', 'Warm plaid scarf'],
  'deep-autumn': ['Maroon silk blouse', 'Dark brown trousers', 'Antique gold jewelry', 'Forest green blazer', 'Burgundy leather bag', 'Deep olive dress', 'Espresso boots', 'Dark amber pendant', 'Rich wool coat', 'Velvet top'],
  'deep-winter': ['Black silk top', 'Navy trousers', 'White gold jewelry', 'Deep burgundy blazer', 'Emerald green dress', 'Dark charcoal coat', 'Indigo jeans', 'Onyx studs', 'Deep plum scarf', 'Sleek leather bag'],
  'cool-winter': ['Royal blue blouse', 'Cool grey trousers', 'Silver jewelry', 'Navy pea coat', 'Crimson dress', 'Slate blue knit', 'White crisp shirt', 'Platinum bracelet', 'Charcoal blazer', 'Icy lavender scarf'],
  'bright-winter': ['True red top', 'Black jeans', 'Crystal earrings', 'Cobalt blue blazer', 'White crisp shirt', 'Hot pink dress', 'Emerald scarf', 'Silver statement ring', 'Black leather jacket', 'Fuchsia clutch'],
}

export default function CapsuleWardrobe({ subSeason }) {
  const items = capsuleItems[subSeason] || capsuleItems['cool-winter']

  const icons = ['👚', '👖', '💍', '🧥', '👗', '🧣', '👢', '👜', '👔', '🧶']

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 animate-slide-up">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">✨</span>
        <h4 className="text-sm font-semibold text-white">Capsule Wardrobe Essentials</h4>
      </div>
      <p className="text-xs text-white/30 mb-4">10 key pieces to build your wardrobe around</p>

      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 bg-white/5 rounded-xl px-3 py-2.5 hover:bg-white/10 transition-colors"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="text-sm">{icons[i]}</span>
            <span className="text-xs text-white/60">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
