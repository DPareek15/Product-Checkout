'use client';

import { IconMinus, IconPlus, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { Order } from '@/data/products';
import React from 'react';

const OrderList = ({
  order,
  modifyCart,
}: {
  order: Order;
  modifyCart: (order: Order, newOrder: Order) => void;
}) => {
  return (
    <div className="w-full h-24 border-2 border-gray-800 border-solid rounded-md flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-center gap-4 px-2">
        <Image
          src={order.image}
          width={100}
          height={60}
          alt={order.name}
          className="rounded-sm"
        />
        <div className="flex flex-col items-start justify-start">
          <p className="font-bold text-lg">{`${order.name} X ${order.quantity}`}</p>
          <p>{`Rs. ${order.price * order.quantity} (Rs. ${
            order.price
          } per unit)`}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 px-2">
        <div className="flex flex-row items-center justify-center gap-4 px-2">
          <button
            type="button"
            className="h-8 w-8 flex items-center justify-center border-2 border-black border-solid rounded-full hover:shadow-xl"
            onClick={() => {
              if (order.quantity > 0) {
                const newOrder: Order = {
                  ...order,
                  quantity: order.quantity - 1,
                };
                modifyCart(order, newOrder);
              }
            }}
          >
            <IconMinus size={24} stroke={1.5} color="#171717" />
          </button>
          <input
            type="number"
            className="w-12 h-12 flex items-center justify-center rounded-lg shadow-md [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none p-2 text-center"
            value={order.quantity}
            min={0}
            max={Math.min(order.stock, 999)}
            readOnly
          />
          <button
            type="button"
            className="h-8 w-8 flex items-center justify-center border-2 border-black border-solid rounded-full hover:shadow-xl"
            onClick={() => {
              if (order.quantity < Math.min(order.stock, 999)) {
                const newOrder: Order = {
                  ...order,
                  quantity: order.quantity + 1,
                };
                modifyCart(order, newOrder);
              }
            }}
          >
            <IconPlus size={24} stroke={1.5} color="#171717" />
          </button>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 px-2">
          <button
            type="button"
            className="h-8 w-8 flex items-center justify-center hover:border-2 hover:broder-black hover:border-solid rounded-full"
            onClick={() => {
              const newOrder: Order = {
                ...order,
                quantity: 0,
              };
              modifyCart(order, newOrder);
            }}
          >
            <IconX size={24} stroke={1.5} color="#171717" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CartList = ({
  cart,
  setCart,
}: {
  cart: Order[];
  setCart: React.Dispatch<React.SetStateAction<Order[]>>;
}): React.JSX.Element => {
  const modifyCart = (order: Order, newOrder: Order) => {
    const index = cart.findIndex((item) => item.productId === order.productId);
    const newCart = [...cart];
    if (newOrder.quantity === 0) newCart.splice(index, 1);
    else newCart[index] = newOrder;
    setCart(newCart);
  };

  return (
    <div className="w-full h-[28rem] overflow-y-auto">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {cart.map((order) => (
          <OrderList
            key={order.productId}
            order={order}
            modifyCart={modifyCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
