import { Order } from './products';

const localStorage = window.localStorage;

export const createCart = () => {
  if (!localStorage.getItem('cart'))
    localStorage.setItem('cart', JSON.stringify([]));
};

export const updateCart = (cart: Order[]) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const setItem = ({ order }: { order: Order }) => {
  createCart();

  const cart: Order[] = JSON.parse(localStorage.getItem('cart')!);
  if (cart.some((item: Order) => item.productId === order.productId)) {
    const index = cart.findIndex(
      (item: Order) => item.productId === order.productId
    );
    cart[index] = order;
  } else cart.push(order);

  localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCart = (): Order[] => {
  createCart();
  return JSON.parse(localStorage.getItem('cart')!);
};
