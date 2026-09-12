export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' }
};

export const LEATHER_FINISHES = [
  { id: 'cognac', name: 'Cognac Tuscan', hex: '#8C4724', image: '/images/folio_cognac.jpg', desc: 'Warm amber tones with natural pull-up character.' },
  { id: 'espresso', name: 'Dark Espresso', hex: '#3D261A', image: '/images/folio_espresso.jpg', desc: 'Deep chocolate brown full-grain Tuscan hide.' },
  { id: 'olive', name: 'Forest Olive', hex: '#4E5E4A', image: '/images/folio_olive.jpg', desc: 'Rich muted botanical green with subtle patina.' },
  { id: 'oak', name: 'Vintage Oak', hex: '#B87A44', image: '/images/hero_leather_folio.jpg', desc: 'Classic golden brown with hand-waxed finish.' },
  { id: 'noir', name: 'Obsidian Noir', hex: '#1C1A19', image: '/images/folio_espresso.jpg', desc: 'Sleek matte midnight black with satin sheen.' }
];

export const SIZES = [
  { id: 'pocket', name: 'Pocket Passport (9.5 x 14 cm)', basePrice: 65, desc: 'Compact companion for passports & small memo inserts.' },
  { id: 'a5', name: 'Grand A5 Journal (15 x 22 cm)', basePrice: 95, desc: 'The iconic standard size for daily journaling & sketching.' },
  { id: 'xl', name: 'Executive XL / iPad (21 x 28 cm)', basePrice: 135, desc: 'Holds A4 documents, tablets, and multiple refills.' }
];

export const ELASTIC_COLORS = [
  { id: 'terracotta', name: 'Terracotta Rust', hex: '#B85338' },
  { id: 'brass', name: 'Burnt Ochre', hex: '#C69A59' },
  { id: 'emerald', name: 'Deep Emerald', hex: '#2A4B3A' },
  { id: 'crimson', name: 'Vintage Crimson', hex: '#7A2424' },
  { id: 'charcoal', name: 'Charcoal Black', hex: '#2B2B2B' }
];

export const STAMPING_FINISHES = [
  { id: 'gold', name: '24k Gold Foil', extraCost: 10 },
  { id: 'silver', name: 'Sterling Silver Foil', extraCost: 10 },
  { id: 'deboss', name: 'Blind Heat Deboss', extraCost: 8 }
];

export const REFILL_BUNDLES = [
  { id: 'dot_lined', name: 'Dot Grid + Lined (2 Pack)', price: 18, desc: 'Fountain-pen friendly 80gsm ivory paper.' },
  { id: 'planner_zip', name: 'Weekly Planner + PVC Zip Pouch', price: 24, desc: 'Planner insert plus clear pocket for receipts & pens.' },
  { id: 'artist_trio', name: 'Artist Trio (Dot Grid, Blank, Kraft)', price: 26, desc: 'Complete set of 3 booklets for writing and sketching.' }
];

export const PRODUCTS = [
  {
    id: 'folio-voyageur-a5',
    title: 'The Voyageur A5 Leather Folio',
    subtitle: 'Signature Refillable Tuscan Leather Journal',
    category: 'folios',
    priceUSD: 95,
    rating: 4.9,
    reviewsCount: 142,
    image: '/images/folio_cognac.jpg',
    secondaryImage: '/images/hero_leather_folio.jpg',
    badge: 'Bestseller',
    description: 'Handcrafted in Florence from 2.5mm full-grain vegetable-tanned leather. Holds up to 4 refillable booklets with an interchangeable internal elastic ribbon system. Includes 1 dot grid insert.',
    details: [
      'Authentic Tuscan vegetable-tanned full-grain leather',
      'Holds 1 to 4 booklet inserts securely',
      'Includes 1 free 80gsm Ivory paper dot grid notebook',
      'Cut, burnished, and assembled by hand',
      'Custom monogramming available (up to 4 characters)'
    ],
    leatherOptions: ['cognac', 'espresso', 'olive', 'oak', 'noir'],
    inStock: true
  },
  {
    id: 'folio-pocket-passport',
    title: 'The Traveler Pocket Folio',
    subtitle: 'Passport & Pocket Journal Cover',
    category: 'folios',
    priceUSD: 65,
    rating: 4.8,
    reviewsCount: 89,
    image: '/images/folio_espresso.jpg',
    secondaryImage: '/images/folio_cognac.jpg',
    badge: 'Popular',
    description: 'Designed for explorers and daily notes. Perfectly fits standard passport booklets, Field Notes, and pocket calendar refills.',
    details: [
      'Fits standard 9x14 cm pocket notebooks & passports',
      'Integrated card slot for transit cards & business cards',
      'Solid brass closure clip included',
      'Ages gracefully with a rich natural patina'
    ],
    leatherOptions: ['espresso', 'cognac', 'olive', 'noir'],
    inStock: true
  },
  {
    id: 'folio-olive-special',
    title: 'The Botanical Olive A5 Folio',
    subtitle: 'Limited Edition Italian Leather Cover',
    category: 'folios',
    priceUSD: 105,
    rating: 5.0,
    reviewsCount: 38,
    image: '/images/folio_olive.jpg',
    secondaryImage: '/images/leather_workshop.jpg',
    badge: 'Limited Batch',
    description: 'Tanned using chestnut and mimosa extracts for a subtle olive green tone with natural grain variations. Each piece is individually numbered.',
    details: [
      'Limited production batch of 250 units',
      'Solid brass pen holder loop attached',
      'Includes 1 grid booklet and 1 blank sketch insert'
    ],
    leatherOptions: ['olive'],
    inStock: true
  },
  {
    id: 'refill-paper-trio',
    title: 'Ivory Paper Refill Booklets (3-Pack)',
    subtitle: '80gsm Fountain-Pen Friendly Paper',
    category: 'refills',
    priceUSD: 24,
    rating: 4.9,
    reviewsCount: 215,
    image: '/images/paper_refills.jpg',
    secondaryImage: '/images/hero_leather_folio.jpg',
    badge: 'Essential',
    description: 'Smooth, bleed-resistant 80gsm Swedish ivory paper designed for fountain pens, rollerballs, and watercolors. Contains 64 pages per booklet.',
    details: [
      'Pack includes: 1 Dot Grid, 1 Lined, 1 Blank Sketch',
      'Stitched spine with organic cotton thread',
      'Zero bleed-through or ghosting with archival inks'
    ],
    inStock: true
  },
  {
    id: 'accessory-brass-clip-set',
    title: 'Solid Brass Bookmark Clips & Pen Loops',
    subtitle: 'Artisan Hardware Accessories',
    category: 'accessories',
    priceUSD: 18,
    rating: 4.7,
    reviewsCount: 64,
    image: '/images/hero_leather_folio.jpg',
    secondaryImage: '/images/folio_espresso.jpg',
    badge: 'New',
    description: 'Custom forged solid brass bookmark clips designed to keep your current page open and hold your favorite pen securely.',
    details: [
      '100% Solid raw brass with hand-brushed finish',
      'Will develop a vintage patina alongside your leather cover',
      'Holds pens up to 14mm in diameter'
    ],
    inStock: true
  },
  {
    id: 'gift-artisan-box',
    title: 'The Master Artisan Starter Gift Set',
    subtitle: 'Leather Folio + 3 Refills + Brass Pen + Monogram',
    category: 'gifts',
    priceUSD: 145,
    rating: 5.0,
    reviewsCount: 56,
    image: '/images/leather_workshop.jpg',
    secondaryImage: '/images/folio_cognac.jpg',
    badge: 'Gift Choice',
    description: 'The ultimate luxury gift box presented in a rigid kraft box with wax seal. Includes A5 Folio, 3 Refill Booklets, Solid Brass Fountain Pen, and complimentary monogramming.',
    details: [
      'Choice of Leather Folio finish',
      'Complimentary Custom Initial Monogramming',
      'Solid Brass Pocket Fountain Pen included',
      'Includes gift card with custom handwritten note'
    ],
    leatherOptions: ['cognac', 'espresso', 'olive', 'oak', 'noir'],
    inStock: true
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Clarissa M.',
    location: 'Paris, France',
    rating: 5,
    date: 'August 28, 2026',
    title: 'Better than my Louise Carmen cover!',
    comment: 'The quality of this leather is absolute perfection. The smell when opening the box was divine. The gold monogram initials look stunning and fountain pen ink does not bleed through the inserts at all.',
    productName: 'The Voyageur A5 Leather Folio - Cognac',
    verified: true
  },
  {
    id: 2,
    name: 'Julian Vance',
    location: 'London, UK',
    rating: 5,
    date: 'August 14, 2026',
    title: 'An heirloom piece for daily writing',
    comment: 'I travel constantly for work. Having my passport, notebook, and brass pen clipped together in one compact pocket folio has changed my workflow completely. After 3 months the patina is rich and glossy.',
    productName: 'The Traveler Pocket Folio - Dark Espresso',
    verified: true
  },
  {
    id: 3,
    name: 'Sophia Lindqvist',
    location: 'Stockholm, Sweden',
    rating: 5,
    date: 'July 30, 2026',
    title: 'Exquisite paper and craft',
    comment: 'I draw with fountain pens and watercolors. The paper refills handle heavy ink without buckling. The custom elastic band system lets me swap notebooks in seconds.',
    productName: 'Ivory Paper Refill Booklets (3-Pack)',
    verified: true
  }
];

export const FAQS = [
  {
    q: 'How does the refillable notebook elastic system work?',
    a: 'Each Atelier Folio features our central elastic ribbon mechanism. You slide your paper refill booklet under the central cord. You can insert up to 4 booklets simultaneously using connecting bands.'
  },
  {
    q: 'What kind of leather do you use?',
    a: 'We exclusively use full-grain, vegetable-tanned Tuscan leather sourced from certified Italian tanneries. No synthetic coatings are applied, allowing the leather to develop a unique patina over years of use.'
  },
  {
    q: 'Can I personalize my leather folio with custom initials?',
    a: 'Yes! We offer hot foil stamping in 24k Gold, Sterling Silver, or Blind Heat Debossing (up to 4 capital letters). Each piece is stamped by hand in our workshop.'
  },
  {
    q: 'Is the paper fountain-pen friendly?',
    a: 'Absolutely. Our paper inserts are crafted from 80gsm acid-free ivory paper manufactured in Sweden. It provides a velvety writing surface with zero ghosting or feathering.'
  }
];
