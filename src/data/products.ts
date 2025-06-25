export type Product = {
  productId: string;
  name: string;
  price: number;
  image: string;
  stock: number;
};

export type Order = Product & { quantity: number };

export const productData = [
  {
    productId: '103615',
    name: 'Wireless Bluetooth Earbuds',
    price: 1499.0,
    image: 'https://images.unsplash.com/photo-1705614055108-93b3985a0999',
    stock: 1000,
  },
  {
    productId: '673156',
    name: 'Stainless Steel Electric Kettle',
    price: 899.0,
    image: 'https://images.unsplash.com/photo-1571552879083-e93b6ea70d1d',
    stock: 1000,
  },
  {
    productId: '548461',
    name: 'Ergonomic Office Chair',
    price: 5999.0,
    image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a',
    stock: 1000,
  },
  {
    productId: '254946',
    name: 'The Psychology of Money - Book',
    price: 399.0,
    image: 'https://m.media-amazon.com/images/I/81Dky+tD+pL._SY466_.jpg',
    stock: 1000,
  },
  {
    productId: '156315',
    name: 'A4 Spiral Notebooks (Set of 3)',
    price: 199.0,
    image: 'https://m.media-amazon.com/images/I/81avjKuFFuL._SL1500_.jpg',
    stock: 1000,
  },
  {
    productId: '454644',
    name: 'LED Table Lamp with USB Charging',
    price: 1199.0,
    image: 'https://images.unsplash.com/photo-1744754405566-c14f63d820f7',
    stock: 1000,
  },
  {
    productId: '146299',
    name: 'USB Type-C Charging Cable',
    price: 299.0,
    image: 'https://images.unsplash.com/photo-1595756630452-736bc8ef3693',
    stock: 1000,
  },
  {
    productId: '146653',
    name: 'Reusable Water Bottle - 1L',
    price: 249.0,
    image: 'https://images.unsplash.com/photo-1664714628878-9d2aa898b9e3',
    stock: 1000,
  },
  {
    productId: '615474',
    name: 'Ballpoint Pen Set (Pack of 10)',
    price: 129.0,
    image:
      'https://topperskit.com/cdn/shop/files/11_f9996c23-c816-4f17-a6d3-8be2a59ce9b3.jpg',
    stock: 1000,
  },
  {
    productId: '968221',
    name: 'Automatic Washing Machine',
    price: 15499.0,
    image:
      'https://m.media-amazon.com/images/I/41jFP-rHTJL._SY445_SX342_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '136411',
    name: 'Mobile Phone Stand',
    price: 349.0,
    image:
      'https://m.media-amazon.com/images/I/31fuRzA5tGL._SX300_SY300_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '463188',
    name: 'Non-Stick Frying Pan',
    price: 799.0,
    image: 'https://images.unsplash.com/photo-1592156328757-ae2941276b2c',
    stock: 1000,
  },
  {
    productId: '131495',
    name: 'Rechargeable Toothbrush',
    price: 1699.0,
    image: 'https://images.unsplash.com/photo-1575325345210-a65324e66537',
    stock: 1000,
  },
  {
    productId: '632946',
    name: '5m Extension Cord with Surge Protection',
    price: 599.0,
    image: 'https://images.unsplash.com/photo-1650501386688-41f6d0251875',
    stock: 1000,
  },
  {
    productId: '326994',
    name: 'Laptop Backpack - Water Resistant',
    price: 1299.0,
    image: 'https://images.unsplash.com/photo-1595724281096-bd3e2b66c86a',
    stock: 1000,
  },
  {
    productId: '154646',
    name: 'Personal Blender for Smoothies',
    price: 1799.0,
    image:
      'https://m.media-amazon.com/images/I/4119wv06UCL._SX300_SY300_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '154546',
    name: 'Cotton Bath Towels (Set of 2)',
    price: 699.0,
    image: 'https://images.unsplash.com/photo-1639298108944-76a403a7c38d',
    stock: 1000,
  },
  {
    productId: '865622',
    name: 'Wall Clock',
    price: 549.0,
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c',
    stock: 1000,
  },
  {
    productId: '161637',
    name: 'Desk Organizer Tray Set',
    price: 389.0,
    image: 'https://m.media-amazon.com/images/I/81dXVBAGp4L._SL1500_.jpg',
    stock: 1000,
  },
  {
    productId: '761221',
    name: 'The C Programming Language',
    price: 499.0,
    image:
      'https://m.media-amazon.com/images/I/41X6A1yk+sL._SY445_SX342_PQ57_.jpg',
    stock: 1000,
  },
  {
    productId: '605161',
    name: 'Electric Room Heater',
    price: 2199.0,
    image: 'https://m.media-amazon.com/images/I/81Pm1MEvURL._SL1500_.jpg',
    stock: 1000,
  },
  {
    productId: '230546',
    name: 'Smart Fitness Band',
    price: 2499.0,
    image: 'https://m.media-amazon.com/images/I/31+UUSyz9uL._SX300_SY300_.jpg',
    stock: 1000,
  },
  {
    productId: '894115',
    name: 'Portable USB Fan',
    price: 299.0,
    image:
      'https://m.media-amazon.com/images/I/41SySJC7fzL._SX300_SY300_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '894310',
    name: 'Plastic Storage Boxes (Set of 4)',
    price: 999.0,
    image:
      'https://m.media-amazon.com/images/I/51R0xYVjL0L._SX300_SY300_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '615105',
    name: 'Digital Kitchen Weighing Scale',
    price: 599.0,
    image:
      'https://m.media-amazon.com/images/I/31rSUkx1mDL._SY445_SX342_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '784202',
    name: 'Stapler Machine with Pins',
    price: 199.0,
    image:
      'https://m.media-amazon.com/images/I/41OSrUscs0L._SY300_SX300_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '452946',
    name: 'Ceiling Fan with LED Light',
    price: 2499.0,
    image: 'https://m.media-amazon.com/images/I/31+WlXIAfUL._SY300_SX300_.jpg',
    stock: 1000,
  },
  {
    productId: '164790',
    name: 'Laptop Cooling Pad',
    price: 899.0,
    image: 'https://m.media-amazon.com/images/I/61ghf-VGpqL._SL1500_.jpg',
    stock: 1000,
  },
  {
    productId: '100129',
    name: 'Dish Drying Rack',
    price: 649.0,
    image:
      'https://m.media-amazon.com/images/I/51Tbtb3hS3L._SX300_SY300_QL70_FMwebp_.jpg',
    stock: 1000,
  },
  {
    productId: '460308',
    name: 'All-in-One Printer (Inkjet)',
    price: 5499.0,
    image: 'https://images.unsplash.com/photo-1708793699492-5fa208f52dcb',
    stock: 1000,
  },
];

export const productIdSet = new Set(
  productData.reduce((acc: string[], curr) => acc.concat(curr.productId), [])
);
