// ============================================================
//  EDIT THIS FILE for each shop — name, links, menu and prices.
// ============================================================

export const shop = {
  name: 'Orbit Scoops',
  tagline: 'Small-batch ice cream, made fresh for pickup & delivery.',
  // The owner's Messenger link: https://m.me/<facebook-page-username>
  messenger: 'https://m.me/your.page.name',
  facebook: 'https://facebook.com/your.page.name',
  phone: '0917 000 0000',
  address: '123 Sample Street, Brgy. Example, Your City',
  mapsUrl: 'https://maps.google.com/?q=Your+City+Philippines',
  hours: [
    { days: 'Mon – Fri', time: '11:00 AM – 9:00 PM' },
    { days: 'Sat – Sun', time: '10:00 AM – 10:00 PM' },
  ],
  payment: {
    gcashName: 'J**N D.',
    gcashNumber: '0917 000 0000',
  },
  paymentOptions: ['GCash', 'Cash on pickup/delivery'],
  deliveryNote: "Delivery fee depends on your location — we'll confirm it in Messenger.",
  currency: '₱',
};

export const categories = ['All', 'Classics', 'Pinoy Favorites', 'Specials'];

// Helper for the usual three sizes
const scoopSizes = (cup, pint, liter) => [
  { label: 'Cup', price: cup },
  { label: 'Pint', price: pint },
  { label: '1 Liter', price: liter },
];

// colors: [highlight, main, shadow] — used to draw the scoop (no photos needed)
// specks: optional color for bits/chips in the scoop
// tag: optional badge like 'Bestseller' or 'New'
export const menu = [
  {
    id: 'ube',
    name: 'Ube Galaxy',
    flavor: 'Ube & macapuno',
    desc: 'Creamy purple yam with chewy macapuno strings.',
    category: 'Pinoy Favorites',
    colors: ['#eadcff', '#9d72e0', '#5c3399'],
    specks: '#ffffff',
    tag: 'Bestseller',
    sizes: scoopSizes(65, 190, 340),
  },
  {
    id: 'mango',
    name: 'Mango Supernova',
    flavor: 'Carabao mango',
    desc: 'Sweet ripe mangoes blended into a bright, fruity cream.',
    category: 'Pinoy Favorites',
    colors: ['#fff2b8', '#ffc43d', '#e08a00'],
    sizes: scoopSizes(65, 190, 340),
  },
  {
    id: 'buko',
    name: 'Buko Pandan Orbit',
    flavor: 'Young coconut & pandan',
    desc: 'Fragrant pandan cream with tender young coconut.',
    category: 'Pinoy Favorites',
    colors: ['#e3fbe6', '#7fd89a', '#3a9d5c'],
    specks: '#ffffff',
    sizes: scoopSizes(65, 190, 340),
  },
  {
    id: 'cheese',
    name: 'Keso Comet',
    flavor: 'Cheese ice cream',
    desc: 'The classic sorbetes favorite — sweet, salty and creamy.',
    category: 'Pinoy Favorites',
    colors: ['#fffbe3', '#ffe38a', '#d9b23a'],
    specks: '#f5a623',
    sizes: scoopSizes(60, 180, 320),
  },
  {
    id: 'vanilla',
    name: 'Vanilla Moon',
    flavor: 'Vanilla bean',
    desc: 'Smooth, classic vanilla with real vanilla bean specks.',
    category: 'Classics',
    colors: ['#ffffff', '#fbeed3', '#d9c09a'],
    specks: '#4a3424',
    sizes: scoopSizes(60, 180, 320),
  },
  {
    id: 'chocolate',
    name: 'Chocolate Eclipse',
    flavor: 'Dark chocolate',
    desc: 'Rich and fudgy, for serious chocolate lovers.',
    category: 'Classics',
    colors: ['#a7745a', '#6b3a26', '#3a1c11'],
    sizes: scoopSizes(65, 190, 340),
  },
  {
    id: 'strawberry',
    name: 'Strawberry Nebula',
    flavor: 'Strawberry',
    desc: 'Pink, fruity and creamy with real strawberry bits.',
    category: 'Classics',
    colors: ['#ffe0ea', '#ff8fb1', '#e0446f'],
    specks: '#c2184b',
    tag: 'Kids love it',
    sizes: scoopSizes(60, 180, 320),
  },
  {
    id: 'cookies',
    name: 'Cookies & Comets',
    flavor: 'Cookies & cream',
    desc: 'Vanilla cream loaded with crushed chocolate cookies.',
    category: 'Classics',
    colors: ['#ffffff', '#eeeae6', '#bdb4ad'],
    specks: '#2b2321',
    sizes: scoopSizes(65, 190, 340),
  },
  {
    id: 'halohalo',
    name: 'Halo-Halo Sundae',
    flavor: 'Ube scoop, leche flan, beans & more',
    desc: 'All the halo-halo favorites topped with a scoop of ube.',
    category: 'Specials',
    colors: ['#f3e6ff', '#c79cf0', '#7b48b8'],
    specks: '#ff9f1c',
    tag: 'New',
    sizes: [{ label: 'Glass', price: 145 }],
  },
  {
    id: 'float',
    name: 'Black Hole Float',
    flavor: 'Cola + vanilla scoop',
    desc: 'Ice-cold cola crowned with a big scoop of vanilla.',
    category: 'Specials',
    colors: ['#8a5a44', '#4a2a1d', '#1f0f09'],
    sizes: [{ label: 'Glass', price: 95 }],
  },
  {
    id: 'trio',
    name: 'Planet Trio',
    flavor: 'Any 3 flavors',
    desc: 'Three scoops of your choice — tell us the flavors in the notes.',
    category: 'Specials',
    colors: ['#ffe0ea', '#ff8fb1', '#9d72e0'],
    specks: '#ffffff',
    sizes: [{ label: 'Bowl', price: 160 }],
  },
];
