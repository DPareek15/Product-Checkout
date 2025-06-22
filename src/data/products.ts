export type Product = {
  productId: string;
  name: string;
  price: number;
  image: string;
  stock: number;
};

export const productData = [
  {
    productId: '103615',
    name: 'Wireless Bluetooth Earbuds',
    price: 1499,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '673156',
    name: 'Stainless Steel Electric Kettle',
    price: 899,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '548461',
    name: 'Ergonomic Office Chair',
    price: 5999,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '254946',
    name: 'The Psychology of Money - Book',
    price: 399,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '156315',
    name: 'A4 Spiral Notebooks (Set of 3)',
    price: 199,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '454644',
    name: 'LED Table Lamp with USB Charging',
    price: 1199,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '146299',
    name: 'USB Type-C Charging Cable',
    price: 299,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '146653',
    name: 'Reusable Water Bottle - 1L',
    price: 249,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '615474',
    name: 'Ballpoint Pen Set (Pack of 10)',
    price: 129,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '968221',
    name: 'Automatic Washing Machine - 6.5kg',
    price: 15499,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '136411',
    name: 'Mobile Phone Stand Holder',
    price: 349,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '463188',
    name: 'Non-Stick Frying Pan - 28cm',
    price: 799,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '131495',
    name: 'Rechargeable Toothbrush',
    price: 1699,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '632946',
    name: '5m Extension Cord with Surge Protection',
    price: 599,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '326994',
    name: 'Laptop Backpack - Water Resistant',
    price: 1299,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '154646',
    name: 'Personal Blender for Smoothies',
    price: 1799,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '154546',
    name: 'Cotton Bath Towels (Set of 2)',
    price: 699,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '865622',
    name: 'Wall Clock - Silent Quartz',
    price: 549,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '161637',
    name: 'Desk Organizer Tray Set',
    price: 389,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '761221',
    name: 'C Programming Language - Book',
    price: 499,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '605161',
    name: 'Electric Room Heater',
    price: 2199,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '230546',
    name: 'Smart Fitness Band',
    price: 2499,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '894115',
    name: 'Portable USB Fan',
    price: 299,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '894310',
    name: 'Plastic Storage Boxes (Set of 4)',
    price: 999,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '615105',
    name: 'Digital Kitchen Weighing Scale',
    price: 599,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '784202',
    name: 'Stapler Machine with Pins',
    price: 199,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '452946',
    name: 'Ceiling Fan - Energy Efficient',
    price: 2499,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '164790',
    name: 'Laptop Cooling Pad',
    price: 899,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '100129',
    name: 'Dish Drying Rack',
    price: 649,
    image: '/mem.jpg',
    stock: 1000,
  },
  {
    productId: '460308',
    name: 'All-in-One Printer (Inkjet)',
    price: 5499,
    image: '/mem.jpg',
    stock: 1000,
  },
];

export const productIdSet = new Set(
  productData.reduce((acc: string[], curr) => acc.concat(curr.productId), [])
);
