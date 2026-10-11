export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryId;
  price: number | null; // null if "Price at counter"
  priceDisplay?: string;
  description?: string;
  badge?: "Most Ordered" | "Chef's Special" | "Hot" | "Bestseller" | "Family Favorite" | "Party" | "Feast";
  image?: string;
  isPopular?: boolean;
  isUpsell?: boolean;
}

export type MenuCategoryId =
  | "dhuaan-rice"
  | "beef-rice"
  | "party-pack"
  | "kids-meal"
  | "gravy-deals"
  | "snacks"
  | "add-ons"
  | "hotties"
  | "desserts"
  | "chocolate-shakes"
  | "smoothies"
  | "drinks";

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  badge?: string;
  note?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "dhuaan-rice", name: "Dhuaan Rice Deals", badge: "Signature" },
  { id: "beef-rice", name: "Beef Rice", badge: "Desi Special" },
  { id: "party-pack", name: "Party Pack", badge: "Feast" },
  { id: "kids-meal", name: "Kids Meal" },
  { id: "gravy-deals", name: "Gravy Deals" },
  { id: "snacks", name: "Snacks" },
  { id: "add-ons", name: "Add-ons" },
  { id: "hotties", name: "Hotties (Hot Drinks)" },
  { id: "desserts", name: "Desserts" },
  { id: "chocolate-shakes", name: "Chocolate Shakes", note: "Rs. 300 each" },
  { id: "smoothies", name: "Smoothies & Mocktail", note: "Rs. 300 each" },
  { id: "drinks", name: "Drinks" },
];

export const MENU_ITEMS: MenuItem[] = [
  // DHUAAN RICE — PREMIUM DEALS
  {
    id: "premier-pack",
    name: "Premier Pack",
    category: "dhuaan-rice",
    price: 340,
    description: "Dhuaan Rice 400g · Tikka ×3 · Maghoolta",
    badge: "Most Ordered",
    image: "/deal-premier.png",
    isPopular: true,
  },
  {
    id: "value-pack",
    name: "Value Pack",
    category: "dhuaan-rice",
    price: 400,
    description: "Dhuaan Rice 400g · Tikka ×3 · Chicken Cutlet ×1 · Maghoolta",
    image: "/deal-premier.png",
  },
  {
    id: "chicken-seekh-pack",
    name: "Chicken Seekh Pack",
    category: "dhuaan-rice",
    price: 410,
    description: "Dhuaan Rice 400g · Tikka ×3 · Seekh Kebab ×1 · Maghoolta",
    image: "/deal-premier.png",
  },
  {
    id: "chicken-chapli",
    name: "Chicken Chapli",
    category: "dhuaan-rice",
    price: 420,
    description: "Dhuaan Rice 400g · Tikka ×3 · Chapli Kebab ×1 · Maghoolta",
    image: "/deal-premier.png",
  },
  {
    id: "chicken-lover",
    name: "Chicken Lover",
    category: "dhuaan-rice",
    price: 450,
    description: "Dhuaan Rice 400g · Chest Piece ½ · Chicken Cutlet ×1 · Maghoolta",
    image: "/deal-premier.png",
  },
  {
    id: "shish-tawook-pack",
    name: "Shish Tawook Pack",
    category: "dhuaan-rice",
    price: 460,
    description: "Dhuaan Rice 400g · Tikka ×3 · Shish Tawook ×1 · Maghoolta",
    image: "/deal-premier.png",
  },
  {
    id: "combo-pack",
    name: "Combo Pack",
    category: "dhuaan-rice",
    price: 700,
    description: "Dhuaan Rice 400g · Full Leg Piece ×1 · Chicken Cutlet ×1 · Chapli Kebab ×1 · Maghoolta",
    badge: "Bestseller",
    image: "/deal-thaal.png",
    isPopular: true,
  },
  {
    id: "pair-pack",
    name: "Pair Pack",
    category: "dhuaan-rice",
    price: 720,
    description: "Dhuaan Rice 700g · Tikka ×6 · Chicken Cutlets ×2 · Maghoolta",
    image: "/deal-thaal.png",
  },
  {
    id: "family-pack",
    name: "Family Pack",
    category: "dhuaan-rice",
    price: 800,
    description: "Dhuaan Rice 1kg · Tikka ×8 · Maghoolta",
    badge: "Family Favorite",
    image: "/deal-party.png",
    isPopular: true,
  },
  {
    id: "rice-thaal",
    name: "Rice Thaal",
    category: "dhuaan-rice",
    price: 1250,
    description: "Dhuaan Rice 1200g · Tikka ×8 · Chicken Cutlets ×2 · Chapli Kebab ×2 · Seekh Kebab ×2 · Maghoolta",
    badge: "Feast",
    image: "/deal-thaal.png",
    isPopular: true,
  },

  // BEEF RICE
  {
    id: "beef-lover-deal",
    name: "Beef Lover Deal",
    category: "beef-rice",
    price: 550,
    description: "Beef Qeema Rice 400g · Maghoolta",
    badge: "Hot",
    image: "/beef-rice.png",
  },
  {
    id: "beef-rice-1kg",
    name: "Beef Rice 1KG",
    category: "beef-rice",
    price: 1200,
    description: "Beef Qeema Rice 1kg · Maghoolta",
    image: "/beef-rice.png",
  },

  // PARTY PACK
  {
    id: "party-pack-deal",
    name: "Party Pack",
    category: "party-pack",
    price: 2000,
    description: "Dhuaan Rice 1600g · Tikka ×10 · Chicken Cutlets ×3 · Chapli Kebab ×3 · Shish Tawook ×2 · Seekh Kebab ×3 · Maghoolta",
    badge: "Party",
    image: "/deal-party.png",
    isPopular: true,
  },

  // KIDS MEAL
  {
    id: "kids-pack",
    name: "Kids Pack",
    category: "kids-meal",
    price: 200,
    description: "Dhuaan Rice 200g · Tikka ×1 · Maghoolta",
  },
  {
    id: "personal-pack",
    name: "Personal Pack",
    category: "kids-meal",
    price: 250,
    description: "Dhuaan Rice 200g · Tikka ×1 · Chicken Cutlet ×1 · Maghoolta",
  },

  // GRAVY DEALS
  {
    id: "dnd-khaas",
    name: "DnD Khaas",
    category: "gravy-deals",
    price: 850,
    description: "Premier Pack ×1 · Chicken Smoke Gravy (250g) · Chapati ×2 · Sweet · Maghoolta",
    badge: "Chef's Special",
    image: "/deal-khaas.png",
    isPopular: true,
  },

  // SNACKS
  {
    id: "nuggets-10",
    name: "Nuggets (10 pcs)",
    category: "snacks",
    price: 550,
    description: "10 pieces crispy golden chicken nuggets",
    image: "/snack-fries.png",
  },
  {
    id: "tender-pops",
    name: "Tender Pops (100g)",
    category: "snacks",
    price: 260,
    description: "100g crispy chicken bite pops",
    image: "/snack-fries.png",
  },
  {
    id: "hot-wings-10",
    name: "Hot Wings (10 pcs)",
    category: "snacks",
    price: 600,
    description: "10 pieces spicy glazed crispy wings",
  },
  {
    id: "wavy-de-fries",
    name: "Wavy De Fries",
    category: "snacks",
    price: 280,
    description: "Signature wavy crinkle cut fries with peri seasoning",
    image: "/snack-fries.png",
  },
  {
    id: "de-fries",
    name: "De Fries",
    category: "snacks",
    price: 230,
    description: "Classic salted crispy potato french fries",
    image: "/snack-fries.png",
  },
  {
    id: "chicken-cheese-samosa",
    name: "Chicken Cheese Samosa",
    category: "snacks",
    price: 60,
    description: "Golden stuffed samosa with seasoned chicken & melted cheese",
  },
  {
    id: "chicken-cheese-roll",
    name: "Chicken Cheese Roll",
    category: "snacks",
    price: 70,
    description: "Crispy fried spring roll stuffed with cheesy chicken",
  },

  // ADD-ONS
  {
    id: "addon-upsize-dhuaan-rice",
    name: "Upsize Dhuaan Rice (100g)",
    category: "add-ons",
    price: 80,
    description: "Extra 100g charcoal-smoked Dhuaan rice",
    isUpsell: true,
  },
  {
    id: "addon-upsize-beef-rice",
    name: "Upsize Beef Rice (100g)",
    category: "add-ons",
    price: 150,
    description: "Extra 100g spiced beef qeema rice",
  },
  {
    id: "addon-chicken-cutlet",
    name: "Chicken Cutlet",
    category: "add-ons",
    price: 70,
    description: "1 piece spiced chicken cutlet patty",
    isUpsell: true,
  },
  {
    id: "addon-chapli-kebab",
    name: "Chapli Kebab",
    category: "add-ons",
    price: 80,
    description: "1 piece traditional fried chapli kebab",
  },
  {
    id: "addon-tikka-pc",
    name: "Tikka (1 pc)",
    category: "add-ons",
    price: 40,
    description: "1 piece juicy flame-grilled chicken tikka boti",
    isUpsell: true,
  },
  {
    id: "addon-de-salad",
    name: "De' Salad",
    category: "add-ons",
    price: 60,
    description: "Fresh diced salad with lemon and green chilies",
  },
  {
    id: "addon-chapati-pair",
    name: "Chapati Pair",
    category: "add-ons",
    price: 60,
    description: "2 soft, warm freshly made chapatis",
  },
  {
    id: "addon-chicken-seekh-kebab",
    name: "Chicken Seekh Kebab",
    category: "add-ons",
    price: 80,
    description: "1 skewer spiced minced chicken seekh kebab",
  },
  {
    id: "addon-shish-tawook",
    name: "Shish Tawook (1 seekh)",
    category: "add-ons",
    price: 150,
    description: "1 skewer garlic-herb marinated chicken breast boti",
  },
  {
    id: "addon-chest-piece",
    name: "Chest Piece ½",
    category: "add-ons",
    price: 230,
    description: "Half grilled chicken breast / chest cut",
  },
  {
    id: "addon-upsize-maghoolta",
    name: "Upsize Maghoolta",
    category: "add-ons",
    price: 30,
    description: "Extra tub of signature secret Maghoolta chutney",
    isUpsell: true,
  },
  {
    id: "addon-thigh",
    name: "Thigh (1 pc)",
    category: "add-ons",
    price: 250,
    description: "1 piece succulent marinated grilled chicken thigh",
  },
  {
    id: "addon-leg-full",
    name: "Leg Full Piece",
    category: "add-ons",
    price: 450,
    description: "Full char-grilled marinated chicken leg quarter",
  },

  // HOTTIES (HOT DRINKS)
  {
    id: "cardamom-tea",
    name: "Cardamom Tea",
    category: "hotties",
    price: 180,
    description: "Fragrant karak chai brewed with fresh cardamom pods",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "hotties",
    price: 240,
    description: "Rich espresso topped with velvety frothed milk foam",
  },
  {
    id: "latte",
    name: "Latte",
    category: "hotties",
    price: 240,
    description: "Smooth steamed milk with rich espresso",
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    category: "hotties",
    price: 360,
    description: "Thick melted cocoa chocolate topped with foam",
  },
  {
    id: "tea-bag-tea",
    name: "Tea Bag Tea",
    category: "hotties",
    price: 110,
    description: "Classic English breakfast steeped tea",
  },

  // DESSERTS
  {
    id: "de-kheer",
    name: "De' Kheer (120g)",
    category: "desserts",
    price: 150,
    description: "Slow-cooked rice pudding infused with saffron, cardamom and nuts",
    image: "/dessert-kheer.png",
    isPopular: true,
  },
  {
    id: "ice-cream-2-scoops",
    name: "Ice Cream, 2 Scoops",
    category: "desserts",
    price: 180,
    description: "2 scoops premium rich ice cream",
  },
  {
    id: "ice-cream-2-fruita",
    name: "Ice Cream, 2 Scoops Ice-Fruita",
    category: "desserts",
    price: 240,
    description: "2 scoops fruit infused specialty ice cream",
  },
  {
    id: "ice-cream-3-fruita",
    name: "Ice Cream, 3 Scoops Ice-Fruita",
    category: "desserts",
    price: 280,
    description: "3 scoops fruit infused specialty ice cream",
  },

  // CHOCOLATE SHAKES — Rs. 300 each
  {
    id: "shake-dairy-milk",
    name: "Dairy Milk Shake",
    category: "chocolate-shakes",
    price: 300,
    description: "Creamy Cadbury Dairy Milk blended shake",
    image: "/drinks-shakes.png",
  },
  {
    id: "shake-kitkat",
    name: "Kit-Kat Shake",
    category: "chocolate-shakes",
    price: 300,
    description: "Crunchy Kit-Kat wafer and chocolate milkshake",
    image: "/drinks-shakes.png",
  },
  {
    id: "shake-bounty",
    name: "Bounty Shake",
    category: "chocolate-shakes",
    price: 300,
    description: "Decadent coconut and rich dark chocolate shake",
    image: "/drinks-shakes.png",
  },
  {
    id: "shake-oreo",
    name: "Oreo Shake",
    category: "chocolate-shakes",
    price: 300,
    description: "Crushed Oreo cookies blended with vanilla bean ice cream",
    badge: "Bestseller",
    image: "/drinks-shakes.png",
    isPopular: true,
    isUpsell: true,
  },
  {
    id: "shake-snickers",
    name: "Snickers Shake",
    category: "chocolate-shakes",
    price: 300,
    description: "Peanut, caramel and chocolate blended milkshake",
    image: "/drinks-shakes.png",
  },

  // SMOOTHIES — Rs. 300 each & MOCKTAIL
  {
    id: "smoothie-vanilla",
    name: "Vanilla Smoothie",
    category: "smoothies",
    price: 300,
    description: "Chilled French vanilla thick smoothie",
  },
  {
    id: "smoothie-mango",
    name: "Mango Smoothie",
    category: "smoothies",
    price: 300,
    description: "Sweet Alphonso mango pulp blended with yogurt",
  },
  {
    id: "smoothie-strawberry",
    name: "Strawberry Smoothie",
    category: "smoothies",
    price: 300,
    description: "Real ripe strawberries blended fresh & chilled",
  },
  {
    id: "mint-margarita",
    name: "Mint Margarita",
    category: "smoothies",
    price: 300,
    description: "Iced crushed mint leaves, fresh lime juice & soda",
    badge: "Bestseller",
    image: "/drinks-shakes.png",
    isPopular: true,
  },

  // DRINKS
  {
    id: "soft-drinks-counter",
    name: "Soft Drinks",
    category: "drinks",
    price: null,
    priceDisplay: "Counter Price",
    description: "Chilled Coke, Sprite, Fanta, Diet Coke",
  },
  {
    id: "mineral-water-counter",
    name: "Mineral Water",
    category: "drinks",
    price: null,
    priceDisplay: "Counter Price",
    description: "Pure chilled spring drinking water",
  },
];

export const UPSELL_ITEMS = MENU_ITEMS.filter((item) => item.isUpsell);
