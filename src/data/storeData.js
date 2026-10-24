export const STORE_DETAILS = {
  name: "Barnyard Feed & Supply",
  tagline: "Fresno's Trusted Livestock Feed & Farm Supply Store Since 1985",
  address: "847 N Pleasant Ave, Fresno, CA 93728, USA",
  phone: "+1 (559) 486-7333",
  phoneFormatted: "(559) 486-7333",
  rating: 4.7,
  reviewsCount: 101,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=847+N+Pleasant+Ave,+Fresno,+CA+93728",
  hours: [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM", status: "Open Today" },
    { days: "Saturday", hours: "8:00 AM - 5:00 PM", status: "Open" },
    { days: "Sunday", hours: "9:00 AM - 3:00 PM", status: "Open (Short Hours)" }
  ],
  services: [
    {
      title: "Local Fresno Delivery",
      badge: "SAME / NEXT DAY",
      desc: "Fast flatbed & liftgate delivery across Fresno, Clovis, Sanger, Kerman, and Madera. Pallets unloaded directly into your barn or feed storage room.",
      icon: "Truck"
    },
    {
      title: "Curbside Pickup & Bay Loading",
      badge: "5-MINUTE LOADING",
      desc: "Drive up to our staging docks at 847 N Pleasant Ave. Our warehouse team and forklift operators load your truck or trailer right away.",
      icon: "PackageCheck"
    },
    {
      title: "Recurring Ranch Standing Orders",
      badge: "5% AUTOMATIC DISCOUNT",
      desc: "Set-and-forget feed replenishment for commercial operations and homesteads. Weekly, bi-weekly, or monthly automated feed deliveries.",
      icon: "CalendarClock"
    },
    {
      title: "Livestock Feed & Nutrition Rations",
      badge: "EXPERT NUTRITIONIST ON-SITE",
      desc: "Formulations engineered for Central Valley seasonal temperatures: equine metabolic sweet feeds, high-calcium egg layers, and dairy calf growers.",
      icon: "Award"
    }
  ]
};

export const FEED_CATEGORIES = [
  { id: "all", name: "All Feeds & Supplies", count: 12 },
  { id: "horse-livestock", name: "Horse & Livestock Feed", count: 4 },
  { id: "poultry", name: "Poultry & Game Bird", count: 3 },
  { id: "pet-small-animal", name: "Pet & Small Animal", count: 2 },
  { id: "hardware-supplements", name: "Farm Hardware & Supplements", count: 2 },
  { id: "hay-forage", name: "Hay, Straw & Forage", count: 2 }
];

export const PRODUCTS = [
  {
    id: "feed-01",
    name: "Valley Gold 16% Egg Layer Pellets",
    category: "poultry",
    brand: "Barnyard Valley Blend",
    weight: "50 lb Bag",
    defaultSize: "50 lb Bag",
    price: 18.99,
    originalPrice: 21.50,
    rating: 4.9,
    reviews: 42,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 84,
    sizes: [
      { size: "50 lb Bag", stockCount: 84, price: 18.99, bayLocation: "Bay A-04", sku: "BY-847-01-50" },
      { size: "25 lb Bag", stockCount: 46, price: 11.25, bayLocation: "Bay A-05", sku: "BY-847-01-25" }
    ],
    bayLocation: "Bay A-04",
    bestSeller: true,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=700&q=80",
    description: "Complete nutrition for laying hens with added calcium for strong eggshells and marigold extract for vibrant golden yolks.",
    protein: "16.0%",
    fat: "3.5%",
    fiber: "6.0%",
    features: ["Enriched with probiotics & calcium", "Dust-free pelleting minimizes waste", "Formulated for Central Valley layer hens"]
  },
  {
    id: "feed-02",
    name: "Sierra Ranch 14% Sweet Horse Feed",
    category: "horse-livestock",
    brand: "Sierra Milling Co.",
    weight: "50 lb Bag",
    defaultSize: "50 lb Bag",
    price: 24.50,
    originalPrice: 26.99,
    rating: 4.8,
    reviews: 38,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 52,
    sizes: [
      { size: "50 lb Bag", stockCount: 52, price: 24.50, bayLocation: "Bay B-01", sku: "BY-847-02-50" },
      { size: "25 lb Bag", stockCount: 30, price: 14.50, bayLocation: "Bay B-02", sku: "BY-847-02-25" }
    ],
    bayLocation: "Bay B-01",
    bestSeller: true,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80",
    description: "Texturized equine sweet feed with steam-flaked grains, molasses, and fortified vitamins for active trail, work, and pleasure horses.",
    protein: "14.0%",
    fat: "5.0%",
    fiber: "8.5%",
    features: ["Steam-flaked corn, oats & barley", "Enhanced coat and hoof biotics", "High palatability for pickier eaters"]
  },
  {
    id: "feed-03",
    name: "Premium Central Valley Alfalfa 3-Tie Bale",
    category: "hay-forage",
    brand: "Fresno Grower Direct",
    weight: "~105 lb Bale",
    defaultSize: "~105 lb Bale",
    price: 22.00,
    originalPrice: 24.00,
    rating: 4.9,
    reviews: 67,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 140,
    sizes: [
      { size: "~105 lb 3-Tie Bale", stockCount: 140, price: 22.00, bayLocation: "Barn Barn-H2", sku: "BY-847-03-BALE" },
      { size: "Pallet Stack (21 Bales)", stockCount: 6, price: 440.00, bayLocation: "Yard Staging", sku: "BY-847-03-PLT" }
    ],
    bayLocation: "Barn Barn-H2",
    bestSeller: true,
    badge: "FRESH CUT",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=700&q=80",
    description: "Sun-cured leafy green Central Valley alfalfa hay. High in natural protein and digestible energy, tightly tied in clean 3-wire bales.",
    protein: "18.5%",
    fat: "2.1%",
    fiber: "24.0%",
    features: ["Dust-reduced leafy green flakes", "Third cutting high-protein forage", "Pallet offload available for 20+ bales"]
  },
  {
    id: "feed-04",
    name: "Bar-ALE 20% Calf & Cattle Creep Pellets",
    category: "horse-livestock",
    brand: "Bar-ALE Feed",
    weight: "50 lb Bag",
    defaultSize: "50 lb Bag",
    price: 21.75,
    originalPrice: 23.50,
    rating: 4.7,
    reviews: 29,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 39,
    sizes: [
      { size: "50 lb Bag", stockCount: 39, price: 21.75, bayLocation: "Bay C-06", sku: "BY-847-04-50" },
      { size: "25 lb Bag", stockCount: 22, price: 12.50, bayLocation: "Bay C-07", sku: "BY-847-04-25" }
    ],
    bayLocation: "Bay C-06",
    bestSeller: false,
    badge: "HIGH PROTEIN",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=700&q=80",
    description: "Formulated for growing calves, replacement heifers, and beef cattle on pasture to support lean muscle gain and digestive efficiency.",
    protein: "20.0%",
    fat: "3.2%",
    fiber: "9.0%",
    features: ["Balanced calcium to phosphorus ratio", "Organic trace minerals for immunity", "Palatable molasses coating"]
  },
  {
    id: "feed-05",
    name: "Pleasant Valley Non-GMO 5-Grain Scratch",
    category: "poultry",
    brand: "Pleasant Valley",
    weight: "50 lb Bag",
    defaultSize: "50 lb Bag",
    price: 19.50,
    originalPrice: 21.00,
    rating: 4.9,
    reviews: 51,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 65,
    sizes: [
      { size: "50 lb Bag", stockCount: 65, price: 19.50, bayLocation: "Bay A-02", sku: "BY-847-05-50" },
      { size: "25 lb Bag", stockCount: 38, price: 11.50, bayLocation: "Bay A-03", sku: "BY-847-05-25" }
    ],
    bayLocation: "Bay A-02",
    bestSeller: true,
    badge: "TOP PICK",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=700&q=80",
    description: "Cracked corn, whole wheat, milo, barley, and black oil sunflower seeds. Encourages natural foraging and winter body warmth.",
    protein: "10.5%",
    fat: "4.0%",
    fiber: "4.5%",
    features: ["Whole cleaned grains, triple aspirated", "Sunflower seed boost for feathers", "Non-GMO grain blend"]
  },
  {
    id: "feed-06",
    name: "Show Champion Texturized Goat Grower",
    category: "horse-livestock",
    brand: "Modesto Milling",
    weight: "50 lb Bag",
    defaultSize: "50 lb Bag",
    price: 23.25,
    originalPrice: 25.00,
    rating: 4.8,
    reviews: 24,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 28,
    sizes: [
      { size: "50 lb Bag", stockCount: 28, price: 23.25, bayLocation: "Bay D-02", sku: "BY-847-06-50" },
      { size: "25 lb Bag", stockCount: 19, price: 13.50, bayLocation: "Bay D-03", sku: "BY-847-06-25" }
    ],
    bayLocation: "Bay D-02",
    bestSeller: false,
    badge: "SHOW QUALITY",
    image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=700&q=80",
    description: "Specially balanced for meat and dairy goats with ammonium chloride to help prevent urinary calculi in wethers.",
    protein: "16.0%",
    fat: "4.0%",
    fiber: "14.0%",
    features: ["Contains Ammonium Chloride", "Decoquinate for coccidiosis control", "Nutritious yeast cultures"]
  },
  {
    id: "feed-07",
    name: "Valley Hog Grower & Finisher Pellets 16%",
    category: "horse-livestock",
    brand: "King Brand Feeds",
    weight: "50 lb Bag",
    defaultSize: "50 lb Bag",
    price: 20.50,
    originalPrice: 22.50,
    rating: 4.6,
    reviews: 19,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 31,
    sizes: [
      { size: "50 lb Bag", stockCount: 31, price: 20.50, bayLocation: "Bay C-09", sku: "BY-847-07-50" },
      { size: "25 lb Bag", stockCount: 18, price: 12.00, bayLocation: "Bay C-10", sku: "BY-847-07-25" }
    ],
    bayLocation: "Bay C-09",
    bestSeller: false,
    badge: "VALUE PACK",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=700&q=80",
    description: "Balanced amino acids and energy dense formula for growing pigs from 50 lbs to market weight.",
    protein: "16.0%",
    fat: "4.5%",
    fiber: "5.0%",
    features: ["Lysine fortified for muscle structure", "Phytase enzyme for bone development", "Minimal dust crumble format"]
  },
  {
    id: "feed-08",
    name: "SweetPro 250lb Cattle Mineral Lick Tub",
    category: "hardware-supplements",
    brand: "SweetPro USA",
    weight: "250 lb Tub",
    defaultSize: "250 lb Tub",
    price: 139.00,
    originalPrice: 149.00,
    rating: 4.9,
    reviews: 16,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 12,
    sizes: [
      { size: "250 lb Tub", stockCount: 12, price: 139.00, bayLocation: "Yard Tub Rack", sku: "BY-847-08-250" },
      { size: "125 lb Half-Tub", stockCount: 8, price: 79.00, bayLocation: "Yard Tub Rack", sku: "BY-847-08-125" }
    ],
    bayLocation: "Yard Tub Rack",
    bestSeller: false,
    badge: "BULK TUB",
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=700&q=80",
    description: "All-weather solidified molasses block with prebiotic yeast and complete trace minerals. Weather-proof for open pasture grazing.",
    protein: "18.0%",
    fat: "4.5%",
    fiber: "12.0%",
    features: ["Non-protein nitrogen free", "Weatherproof, zero rain-dissolve waste", "Supports ruminal fermentation"]
  },
  {
    id: "feed-09",
    name: "Premium Kiln-Dried Pine Shavings Bale",
    category: "hay-forage",
    brand: "Guardian Horse Bedding",
    weight: "8.5 cu ft Expanded",
    defaultSize: "8.5 cu ft Bale",
    price: 8.75,
    originalPrice: 9.99,
    rating: 4.9,
    reviews: 83,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 185,
    sizes: [
      { size: "Compressed 3.0 cu ft Bale (Expands to 8.5)", stockCount: 185, price: 8.75, bayLocation: "Shed Shaving-1", sku: "BY-847-09-STD" },
      { size: "Pallet Stack (45 Bales)", stockCount: 8, price: 375.00, bayLocation: "Shed Shaving-PLT", sku: "BY-847-09-PLT" }
    ],
    bayLocation: "Shed Shaving-1",
    bestSeller: true,
    badge: "HIGH DEMAND",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=700&q=80",
    description: "Ultra-absorbent, triple-screened pine shavings for equine stalls, chicken nesting boxes, and goat pens. Low dust guarantee.",
    protein: "N/A",
    fat: "N/A",
    fiber: "N/A",
    features: ["Kiln-dried to inhibit mold & spores", "Triple dust-screened for respiratory safety", "High thermal insulation"]
  },
  {
    id: "feed-10",
    name: "Ranch Pro 26/18 High Protein Working Dog Food",
    category: "pet-small-animal",
    brand: "Barnyard Pro Canine",
    weight: "40 lb Bag",
    defaultSize: "40 lb Bag",
    price: 43.50,
    originalPrice: 47.00,
    rating: 4.8,
    reviews: 35,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 44,
    sizes: [
      { size: "40 lb Bag", stockCount: 44, price: 43.50, bayLocation: "Bay E-03", sku: "BY-847-10-40" },
      { size: "20 lb Bag", stockCount: 26, price: 24.50, bayLocation: "Bay E-04", sku: "BY-847-10-20" }
    ],
    bayLocation: "Bay E-03",
    bestSeller: false,
    badge: "FARM FAVORITE",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80",
    description: "Engineered for active livestock herding dogs and ranch working breeds with chicken meal, brown rice, glucosamine, and chondroitin.",
    protein: "26.0%",
    fat: "18.0%",
    fiber: "3.8%",
    features: ["Glucosamine & joint support for active dogs", "Omega 3 & 6 for weatherproof coats", "Real meat first ingredient"]
  },
  {
    id: "feed-11",
    name: "Nutrena SafeChoice Special Care Equine Feed",
    category: "horse-livestock",
    brand: "Nutrena",
    weight: "50 lb Bag",
    defaultSize: "50 lb Bag",
    price: 28.50,
    originalPrice: 30.99,
    rating: 4.9,
    reviews: 44,
    inStock: true,
    stockStatus: "low-stock",
    stockCount: 4,
    sizes: [
      { size: "50 lb Bag", stockCount: 4, price: 28.50, bayLocation: "Bay B-04", sku: "BY-847-11-50" },
      { size: "25 lb Bag", stockCount: 2, price: 16.50, bayLocation: "Bay B-05", sku: "BY-847-11-25" }
    ],
    bayLocation: "Bay B-04",
    bestSeller: false,
    badge: "LOW STOCK",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5f?auto=format&fit=crop&w=700&q=80",
    description: "Controlled starch and sugar formula for horses prone to metabolic issues, founder, or insulin resistance. Highly recommended by vets.",
    protein: "14.0%",
    fat: "7.0%",
    fiber: "17.0%",
    features: ["Low NSC (Non-Structural Carbohydrates)", "Digestive Shield prebiotics & probiotics", "Organic trace minerals for immunity"]
  },
  {
    id: "feed-12",
    name: "Redmond Natural Trace Mineral Rock Salt Block",
    category: "hardware-supplements",
    brand: "Redmond Agriculture",
    weight: "44 lb Block",
    defaultSize: "44 lb Block",
    price: 16.25,
    originalPrice: 18.00,
    rating: 5.0,
    reviews: 28,
    inStock: true,
    stockStatus: "in-stock",
    stockCount: 56,
    sizes: [
      { size: "44 lb Block", stockCount: 56, price: 16.25, bayLocation: "Bay D-08", sku: "BY-847-12-44" },
      { size: "22 lb Block", stockCount: 32, price: 9.75, bayLocation: "Bay D-09", sku: "BY-847-12-22" }
    ],
    bayLocation: "Bay D-08",
    bestSeller: false,
    badge: "NATURAL",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=700&q=80",
    description: "Ancient sea salt containing 60+ natural trace minerals mined in Utah. Provides unrefined electrolytes for livestock grazing.",
    protein: "N/A",
    fat: "N/A",
    fiber: "N/A",
    features: ["Unrefined mineral sea salt", "Naturally weather resistant on pasture", "Essential for summer electrolyte balance"]
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Hank Callahan",
    role: "Senior Livestock Nutritionist",
    experience: "28 Years Experience",
    bio: "Former Fresno State Ag grad specializing in ruminant rations, dairy heifer nutrition, and heat-stress mitigating mineral blends.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Elena Morales-Gomez",
    role: "Equine & Performance Horse Specialist",
    experience: "16 Years Experience",
    bio: "Lifelong barrel racer and breeder. Elena guides ranch clients on hay analysis, metabolic feed choices, and joint supplementation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Marcus Vance",
    role: "Poultry & Small Flock Advisor",
    experience: "12 Years Experience",
    bio: "Passionate about backyard poultry health, organic non-GMO feeds, predator biosecurity, and high egg production formulas.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Dave 'Bear' Miller",
    role: "Central Valley Logistics & Fleet Lead",
    experience: "22 Years Serving Fresno",
    bio: "Knows every rural route between Fresno, Kerman, Sanger, and Madera. Ensures your pallet arrives dry, undamaged, and right in your barn.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Clint & Sarah Henderson",
    location: "Henderson Quarter Horses (Clovis, CA)",
    rating: 5,
    title: "The best feed supplier in Fresno County - hands down.",
    quote: "We run 18 performance quarter horses in Clovis. Barnyard Feed has been delivering our 3-tie alfalfa and SafeChoice grain every other Tuesday for four years straight. Their team backs up their truck directly to our feed room and stacks every bag. You can't beat their price and customer service.",
    date: "Verified Fresno Customer • 2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Brenda Valenzuela",
    location: "Valley Crest Pastures (Fresno, CA)",
    rating: 5,
    title: "Always in stock and loaded in under 5 minutes!",
    quote: "I raise pasture goats and heritage laying hens on Pleasant Ave just a mile away. Whenever I pull in with my flatbed truck, Dave and the guys have 15 bags loaded before I'm even done paying at the register. The 4.7-star rating is well earned!",
    date: "Local Fresno Rancher • 1 month ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Ray Castellanos",
    location: "Castellanos Boer Goats & Cattle (Sanger, CA)",
    rating: 5,
    title: "Their recurring ranch order tool saves our operation hours.",
    quote: "Setting up our monthly recurring feed order took the headache out of inventory. We get our cattle grower and mineral lick tubs delivered on schedule. If we ever need to add five extra bales of straw, a quick call to (559) 486-7333 gets it added instantly.",
    date: "Sanger Ag Producer • 2 months ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Beating Central Valley Heat: Electrolyte & Hydration Strategies For Livestock",
    category: "Cattle & Horse Health",
    author: "Hank Callahan",
    date: "July 14, 2026",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=600&q=80",
    excerpt: "With Fresno summer temperatures exceeding 100°F, discover how sodium, potassium, and cool water access protect against heat stress in cattle and horses."
  },
  {
    id: 2,
    title: "Maximizing Winter Egg Laying: Calcium, Lighting & Protein Rations",
    category: "Poultry Management",
    author: "Marcus Vance",
    date: "October 18, 2026",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80",
    excerpt: "Short days slow down layer hens. Learn why adjusting your feed from 16% to 18% crumble with crushed oyster shell keeps egg production consistent through colder nights."
  },
  {
    id: 3,
    title: "Alfalfa vs. Bermuda vs. Orchard Grass: How To Choose The Right Hay For Your Horse",
    category: "Equine Forage",
    author: "Elena Morales-Gomez",
    date: "September 02, 2026",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5f?auto=format&fit=crop&w=600&q=80",
    excerpt: "Understand leaf-to-stem ratios, digestible energy, and carbohydrate levels so you can tailor your barn's forage to your horse's activity level and age."
  }
];

export const STORE_STATS = [
  { value: "500+", label: "Bags In Stock Daily", sub: "Fresh mill turnaround" },
  { value: "40+", label: "Years Serving Fresno", sub: "Local family operated" },
  { value: "1,250+", label: "Valley Ranchers Served", sub: "Commercial & homestead" },
  { value: "4.7 ★", label: "101+ Google Reviews", sub: "Fresno community trust" }
];
