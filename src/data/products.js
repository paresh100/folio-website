export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' }
};

export const LEATHER_FINISHES = [
  { id: 'saddle', name: 'Saddle Tan', hex: '#A45834', image: '/images/folio_cognac.jpg', desc: 'Warm chestnut amber full-grain leather with natural pull-up.' },
  { id: 'espresso', name: 'Oak Espresso', hex: '#4A2E1F', image: '/images/folio_espresso.jpg', desc: 'Deep chocolate brown vegetable-tanned hide.' },
  { id: 'moss', name: 'Moss Green', hex: '#4B5944', image: '/images/folio_olive.jpg', desc: 'Rich botanical olive green with satin finish.' },
  { id: 'obsidian', name: 'Obsidian Noir', hex: '#211E1C', image: '/images/folio_espresso.jpg', desc: 'Matte black leather with subtle grain texture.' }
];

export const SIZES = [
  { id: 'a6', name: 'The Everyday (A6 Pocket)', dimensions: '10.5 x 15 cm', basePrice: 75, desc: 'Little notes. Big ideas. A compact companion for wherever the day takes you.' },
  { id: 'a5', name: 'The Daybook (A5 Journal)', dimensions: '15.5 x 22 cm', basePrice: 115, desc: 'A home for your plans, pages and half-formed thoughts. The size of possibility.' },
  { id: 'a4', name: 'The Big Picture (A4 Studio)', dimensions: '22 x 31 cm', basePrice: 165, desc: 'Room to spread out. For projects, sketches and the work that needs a little more space.' }
];

export const ELASTIC_COLORS = [
  { id: 'terracotta', name: 'Terracotta', hex: '#A45834' },
  { id: 'sand', name: 'Sand Beige', hex: '#D8CEBE' },
  { id: 'forest', name: 'Forest Moss', hex: '#4B5944' },
  { id: 'charcoal', name: 'Charcoal Black', hex: '#2B2825' }
];

export const STAMPING_FINISHES = [
  { id: 'deboss', name: 'Blind Heat Deboss', extraCost: 10, desc: 'Subtle, tactile heat-pressed initials into the leather.' },
  { id: 'gold', name: 'Subtle Gold Foil', extraCost: 12, desc: 'Warm 24k gold leaf foil impression.' }
];

export const REFILL_BUNDLES = [
  { id: 'dot_lined', name: 'Dot Grid + Lined Set', price: 20, desc: '80gsm acid-free Swedish paper inserts.' },
  { id: 'planner_blank', name: 'Weekly Planner + Blank Booklet', price: 25, desc: 'Layout for dates and freehand sketches.' },
  { id: 'artist_trio', name: 'Complete Studio Trio (3 Booklets)', price: 28, desc: '1 Dot Grid, 1 Lined, 1 Blank paper insert.' }
];

export const PRODUCTS = [
  {
    id: 'forme-daybook-a5',
    title: 'The Daybook (A5)',
    subtitle: 'A home for your plans, pages and half-formed thoughts. The size of possibility.',
    category: 'folios',
    priceUSD: 115,
    rating: 4.95,
    reviewsCount: 128,
    image: '/images/folio_cognac.jpg',
    secondaryImage: '/images/hero_leather_folio.jpg',
    badge: 'Signature',
    description: 'Our staple A5 folio format. Crafted from full-grain vegetable-tanned leather. Fits up to 4 refillable booklets with an interchangeable central elastic spine.',
    details: [
      'Full-grain vegetable-tanned Tuscan leather',
      'Fits 15.5 x 22 cm refills and standard A5 notebooks',
      'Internal cord system holds up to 4 paper booklets',
      'Includes 1 free 80gsm Ivory dot grid insert',
      'Optional personalized monogramming'
    ],
    leatherOptions: ['saddle', 'espresso', 'moss', 'obsidian'],
    inStock: true
  },
  {
    id: 'forme-everyday-a6',
    title: 'The Everyday (A6)',
    subtitle: 'Little notes. Big ideas. A compact companion for wherever the day takes you.',
    category: 'folios',
    priceUSD: 75,
    rating: 4.9,
    reviewsCount: 94,
    image: '/images/folio_espresso.jpg',
    secondaryImage: '/images/folio_cognac.jpg',
    badge: 'Popular',
    description: 'Designed for passport booklets, memo inserts, and pocket thoughts. Lightweight, tactile, and indestructible.',
    details: [
      'Compact 10.5 x 15 cm size',
      'Holds passport & A6 memo inserts',
      'Integrated card slot for transit cards',
      'Hand-slicked beeswax edges'
    ],
    leatherOptions: ['espresso', 'saddle', 'moss', 'obsidian'],
    inStock: true
  },
  {
    id: 'forme-bigpicture-a4',
    title: 'The Big Picture (A4)',
    subtitle: 'Room to spread out. For projects, sketches and the work that needs a little more space.',
    category: 'folios',
    priceUSD: 165,
    rating: 5.0,
    reviewsCount: 42,
    image: '/images/folio_olive.jpg',
    secondaryImage: '/images/hero_folios_group.jpg',
    badge: 'Studio Edition',
    description: 'Generous format for architects, writers, and designers. Holds A4 notebooks, iPad Pro, and project loose sheets.',
    details: [
      'Generous 22 x 31 cm studio format',
      'Fits A4 pads, tablets & multiple booklets',
      'Solid brass page clip included'
    ],
    leatherOptions: ['moss', 'saddle', 'espresso', 'obsidian'],
    inStock: true
  },
  {
    id: 'paper-refill-trio',
    title: 'FORME Paper Booklet Inserts (3-Pack)',
    subtitle: '80gsm Acid-Free Swedish Ivory Paper',
    category: 'refills',
    priceUSD: 24,
    rating: 4.9,
    reviewsCount: 180,
    image: '/images/paper_refills.jpg',
    secondaryImage: '/images/hero_leather_folio.jpg',
    badge: 'Essential',
    description: 'Velvety smooth 80gsm ivory paper designed specifically for fountain pen fountain ink, watercolors, and daily note-taking.',
    details: [
      '3 Booklets: 1 Dot Grid, 1 Lined, 1 Blank',
      'Cotton-stitched spine bindings',
      '64 pages per booklet'
    ],
    inStock: true
  },
  {
    id: 'brass-clip-set',
    title: 'Solid Brass Studio Clip',
    subtitle: 'Brushed Raw Brass Hardware',
    category: 'accessories',
    priceUSD: 18,
    rating: 4.8,
    reviewsCount: 52,
    image: '/images/hero_leather_folio.jpg',
    secondaryImage: '/images/folio_espresso.jpg',
    badge: 'Hardware',
    description: 'Forged solid brass bookmark clip to mark your active page and secure your pen.',
    details: ['100% Solid raw brass', 'Develops natural patina alongside leather'],
    inStock: true
  },
  {
    id: 'gift-studio-set',
    title: 'The FORME Gift Box Set',
    subtitle: 'Folio + 3 Inserts + Brass Pen + Monogram',
    category: 'gifts',
    priceUSD: 155,
    rating: 5.0,
    reviewsCount: 68,
    image: '/images/unboxing_luxury_box.jpg',
    secondaryImage: '/images/folio_cognac.jpg',
    badge: 'Gift Choice',
    description: 'Presented in a rigid charcoal box with wax seal, tissue wrapping, and handwritten studio letter.',
    details: [
      'Choice of Folio format & leather finish',
      'Includes complimentary initial debossing',
      'Solid brass fountain pen & 3 refills included'
    ],
    leatherOptions: ['saddle', 'espresso', 'moss', 'obsidian'],
    inStock: true
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Charlotte H.',
    location: 'London, UK',
    rating: 5,
    date: 'September 2026',
    title: 'A little structure. A lot of soul.',
    comment: 'The quality of the leather and the restraint in design is unmatched. It feels personal, quiet, and timeless.',
    productName: 'The Daybook (A5) — Saddle Tan',
    verified: true
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    location: 'Stockholm, Sweden',
    rating: 5,
    date: 'September 2026',
    title: 'The everyday companion I was looking for',
    comment: 'Fits my pocket notebook and passport seamlessly. The leather smells incredible and has already gained a subtle patina.',
    productName: 'The Everyday (A6) — Oak Espresso',
    verified: true
  },
  {
    id: 3,
    name: 'Elena Rostova',
    location: 'Berlin, Germany',
    rating: 5,
    date: 'August 2026',
    title: 'Beautiful paper, flawless craftsmanship',
    comment: 'Fountain pen ink glides over the paper inserts without a trace of bleed-through. Truly a joy to write in every day.',
    productName: 'FORME Paper Booklet Inserts (3-Pack)',
    verified: true
  }
];

export const FAQS = [
  {
    q: 'What are the three folio formats?',
    a: 'We offer three distinct formats: The Everyday (A6 Compact, 10.5x15 cm), The Daybook (A5 Standard, 15.5x22 cm), and The Big Picture (A4 Studio, 22x31 cm).'
  },
  {
    q: 'How does the central elastic spine system work?',
    a: 'Each FORME folio features an internal woven elastic cord mechanism. You slide paper booklet inserts under the central cord, allowing you to bind up to 4 booklets simultaneously.'
  },
  {
    q: 'Can I personalize my folio with initials?',
    a: 'Yes. We offer subtle Blind Heat Debossing (deep tactile impression) or Gold Foil Stamping (up to 4 capital letters), stamped by hand in our studio.'
  },
  {
    q: 'Is the paper fountain-pen friendly?',
    a: 'Yes. Our paper inserts use 80gsm acid-free Swedish paper that prevents ink feathering or ghosting.'
  }
];
