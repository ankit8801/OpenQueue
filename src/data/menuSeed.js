// Static menu seed matching the physical menu image
// Replace with Firestore data once seeded

export const MENU_ITEMS = [
  // ── Never I Have Ever ───────────────────────────────────────────
  { id: 'nihe-1', name: 'Frachos...!', category: 'Never I Have Ever', price: 256, description: 'An amazing triple combination of fries, nachos & cheese with exotic veggies / chicken and added taste of sauces.', available: true },
  { id: 'nihe-2', name: 'Tizziee...!', category: 'Never I Have Ever', price: 271, description: 'Union of cheesy pizza slices with thin layer of fried paneer / chicken.', available: true },
  { id: 'nihe-3', name: 'Sleepy Chicken...!', category: 'Never I Have Ever', price: 261, description: 'Saucy grilled chicken breast on the top of spaghetti with tossed veggies and mushroom sauce.', available: true },
  { id: 'nihe-4', name: 'Italian twist...!', category: 'Never I Have Ever', price: 354, description: 'Spicy Italian flavoured gravy and little hint of Indian spices with company of breads.', available: true },

  // ── Crazy Potatoes ──────────────────────────────────────────────
  { id: 'cp-1', name: 'French Fries',       category: 'Crazy Potatoes', price: 104, description: 'Salted fries with ketchup.', available: true },
  { id: 'cp-2', name: 'Peri Peri Fries',    category: 'Crazy Potatoes', price: 128, description: 'Fries with peri peri masala.', available: true },
  { id: 'cp-3', name: 'Lemon Pepper Fries', category: 'Crazy Potatoes', price: 139, description: 'Fries with lemon pepper masala.', available: true },
  { id: 'cp-4', name: 'Saucy Fries',        category: 'Crazy Potatoes', price: 159, description: 'French fries / Peri-peri fries with tangy cocktail sauce to relish your taste buds.', available: true },
  { id: 'cp-5', name: 'Chicken Fries',      category: 'Crazy Potatoes', price: 172, description: 'Fries with sauces and shredded chicken.', available: true },
  { id: 'cp-6', name: 'Cheese Bomb Fries',  category: 'Crazy Potatoes', price: 208, description: 'Fries loaded with cheese, a mouthful of heaven. Note: Extra DIP ₹25.', available: true },

  // ── Quickies ────────────────────────────────────────────────────
  { id: 'q-1', name: 'Chicken Keema Garlic Bread',  category: 'Quickies', price: 194, description: 'Garlic bread with chicken keema topping.', available: true },
  { id: 'q-2', name: 'Garlic Bread',                category: 'Quickies', price: 139, description: 'Classic garlic bread.', available: true },
  { id: 'q-3', name: 'Veggie Stuffed Garlic Bread', category: 'Quickies', price: 193, description: 'Garlic bread top with lots of exotic veggie & cheese.', available: true },
  { id: 'q-4', name: 'Nachos with Cheese Dip',      category: 'Quickies', price: 129, description: 'Nachos loaded with veggie & mixed sauces.', available: true },
  { id: 'q-5', name: 'Saucy Loaded Nachos',         category: 'Quickies', price: 193, description: 'Nachos loaded with veggie & mixed sauces.', available: true },
  { id: 'q-6', name: 'Crispy Chicken Strips',       category: 'Quickies', price: 256, description: 'Crispy Chicken Strips marinated with spicy sauce.', available: true },
  { id: 'q-7', name: 'BBQ Chicken Strips',          category: 'Quickies', price: 288, description: 'Chicken Strips tossed in spicy BBQ sauce.', available: true },
  { id: 'q-8', name: 'Mushroom Stuffed Buttons',    category: 'Quickies', price: 243, description: 'Cheese stuffed mushroom tossed in creamy sauce.', available: true },

  // ── Mexican Tamasha ─────────────────────────────────────────────
  { id: 'mt-1', name: 'Sizzler in Brown Sauce',           category: 'Mexican Tamasha', price: 378, description: 'Fried chicken/panner, Parsley garlic Spaghetti topped with brown sauce and exotic veggies with the company of fries.', available: true },
  { id: 'mt-2', name: 'Sizzler in Creamy Mushroom Sauce', category: 'Mexican Tamasha', price: 418, description: 'Fried chicken/panner, Parsley garlic Spaghetti topped with creamy mushroom sauce and exotic veggies with the company of fries.', available: true },

  // ── Between The Bread ───────────────────────────────────────────
  { id: 'btb-1', name: 'Veggie Club Sandwich',        category: 'Between The Bread', price: 209, description: 'Club Sandwich with all veggies and sauces.', available: true },
  { id: 'btb-2', name: 'Grilled Paneer Club Sandwich',category: 'Between The Bread', price: 233, description: 'Grilled paneer slices in between bread and sauces.', available: true },
  { id: 'btb-3', name: 'Egg & Cheese Sandwich',       category: 'Between The Bread', price: 223, description: 'Simply cheese and omelette.', available: true },
  { id: 'btb-4', name: 'Grilled Chicken Club Sandwich',category: 'Between The Bread', price: 254, description: 'Grilled chicken in between bread with sauces.', available: true },

  // ── Chocolate Chaos ─────────────────────────────────────────────
  { id: 'cc-1', name: 'Fudge Brownies',   category: 'Chocolate Chaos', price: 139, description: 'Freshly baked brownies right out of the oven for you, with soft texture and delightful taste.', available: true },
  { id: 'cc-2', name: 'Nutella Brownies', category: 'Chocolate Chaos', price: 204, description: 'Layers of Brownies filled and topped with Nutella.', available: true },
  { id: 'cc-3', name: 'Messy Messy',      category: 'Chocolate Chaos', price: 239, description: 'Crumbled hot chocolate topped with ice cream.', available: true },
  { id: 'cc-4', name: 'Tiramisu',         category: 'Chocolate Chaos', price: 233, description: 'A classic Italian dessert with layers of coffee-soaked lady fingers, creamy mascarpone, and a dusting of cocoa.', available: true },

  // ── Pancakes ────────────────────────────────────────────────────
  { id: 'pan-1', name: 'Pancakes with Honey',       category: 'Pancakes', price: 198, description: 'Fluffy pancakes poured with honey.', available: true },
  { id: 'pan-2', name: 'Pancakes with Maple Syrup', category: 'Pancakes', price: 229, description: 'Fluffy pancakes poured with maple syrup.', available: true },
  { id: 'pan-3', name: 'Nutella Pancakes',          category: 'Pancakes', price: 264, description: 'Fluffy pancakes with loads of Nutella.', available: true },
  { id: 'pan-4', name: 'BlueBerry Pancakes',        category: 'Pancakes', price: 252, description: 'Fluffy pancakes with blueberry compote.', available: true },

  // ── Milky Treat ─────────────────────────────────────────────────
  { id: 'milk-1', name: 'Heavy Chocolate Shake', category: 'Milky Treat', price: 163, description: 'Thick shake of chocolate and crumble brownie.', available: true },
  { id: 'milk-2', name: 'Caffe-Oreo Shake',      category: 'Milky Treat', price: 151, description: 'Coffee shake flavoured with Oreo cookies.', available: true },
  { id: 'milk-3', name: 'Nutella Shake',          category: 'Milky Treat', price: 258, description: 'Heavy shake with Crushed brownie and Nutella.', available: true },
  { id: 'milk-4', name: 'Cold Coffee',            category: 'Milky Treat', price: 145, description: 'Classic cold coffee.', available: true },
  { id: 'milk-5', name: 'Kitkat Shake',           category: 'Milky Treat', price: 191, description: 'Rich Chocolate shake flavoured with Kitkat.', available: true },
  { id: 'milk-6', name: 'Blueberry Shake',        category: 'Milky Treat', price: 145, description: 'Thick blueberry flavoured shake.', available: true },

  // ── Cheesecake ──────────────────────────────────────────────────
  { id: 'ck-1', name: 'BlueBerry CheeseCake', category: 'Cheesecake', price: 198, description: 'Cheesecake topped with blueberry compote.', available: true },
  { id: 'ck-2', name: 'Nutella Cheesecake',   category: 'Cheesecake', price: 239, description: 'Cheesecake topped with Nutella.', available: true },

  // ── Mocktails ───────────────────────────────────────────────────
  { id: 'mock-1', name: 'Virgin Mojito',   category: 'Mocktails', price: 138, description: 'Refreshing bubbly mocktail infuses with lemon and mint.', available: true },
  { id: 'mock-2', name: 'Lemon Ice Tea',   category: 'Mocktails', price: 122, description: 'Ice tea infused with lemon.', available: true },
  { id: 'mock-3', name: 'Peach Ice Tea',   category: 'Mocktails', price: 144, description: 'Chilling tea infused with peach syrup.', available: true },
  { id: 'mock-4', name: 'Spicy Cranberry', category: 'Mocktails', price: 141, description: 'Cranberries shaken with chillies.', available: true },
  { id: 'mock-5', name: 'Fresh Lime Soda', category: 'Mocktails', price: 96,  description: 'Club soda infused with lemon and simple syrup.', available: true },
  { id: 'mock-6', name: 'Blue Lagoon',     category: 'Mocktails', price: 144, description: 'Club soda, lime syrup infused with blue curacao.', available: true },
  { id: 'mock-7', name: 'Hot Chocolate',   category: 'Mocktails', price: 148, description: 'Hot chocolate is more melted belgian truffle. Note: With Brownie ₹38 extra, Extra Ice Cream ₹25 extra, With whipped cream ₹30 extra.', available: true },
]

export const CATEGORIES = ['All', ...new Set(MENU_ITEMS.map(i => i.category))]