declare type Product = {
  productId: string;
  name: string;
  price: number;
  image: string;
  stock: number;
};

declare type Order = Product & { quantity: number };
