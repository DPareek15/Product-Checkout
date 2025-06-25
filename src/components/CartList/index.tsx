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
    <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-3 sm:gap-4 flex-1">
          <div className="relative overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src={order.image}
              width={80}
              height={60}
              alt={order.name}
              className="object-cover w-20 h-15 sm:w-24 sm:h-18"
            />
          </div>
          <div className="flex flex-col items-start justify-start min-w-0 flex-1">
            <h3 className="font-semibold text-base sm:text-lg text-gray-900 truncate w-full">
              {order.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Qty: <span className="font-medium">{order.quantity}</span>
            </p>
            <p className="text-sm sm:text-base font-semibold text-gray-900 mt-1">
              ₹{(order.price * order.quantity).toFixed(2)}
              <span className="text-xs text-gray-500 font-normal ml-1">
                (₹{order.price.toFixed(2)} each)
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 rounded-lg p-1">
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                if (order.quantity > 0) {
                  const newOrder: Order = {
                    ...order,
                    quantity: order.quantity - 1,
                  };
                  modifyCart(order, newOrder);
                }
              }}
              disabled={order.quantity <= 0}
            >
              <IconMinus size={16} stroke={2} className="text-gray-600" />
            </button>

            <input
              type="number"
              className="w-10 sm:w-12 h-8 text-center text-sm font-medium bg-transparent border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              value={order.quantity}
              min={0}
              max={Math.min(order.stock, 999)}
              readOnly
            />

            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center bg-white border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                if (order.quantity < Math.min(order.stock, 999)) {
                  const newOrder: Order = {
                    ...order,
                    quantity: order.quantity + 1,
                  };
                  modifyCart(order, newOrder);
                }
              }}
              disabled={order.quantity >= Math.min(order.stock, 999)}
            >
              <IconPlus size={16} stroke={2} className="text-gray-600" />
            </button>
          </div>

          <button
            type="button"
            className="h-8 w-8 flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors duration-200"
            onClick={() => {
              const newOrder: Order = {
                ...order,
                quantity: 0,
              };
              modifyCart(order, newOrder);
            }}
            title="Remove item"
          >
            <IconX size={18} stroke={2} />
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
        <div className="max-h-[28rem] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {cart.map((order) => (
            <OrderList
              key={order.productId}
              order={order}
              modifyCart={modifyCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartList;
