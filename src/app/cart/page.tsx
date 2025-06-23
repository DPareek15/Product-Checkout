'use client';

import CartList from '@/components/CartList';
import Header from '@/components/Header';
import { clearCart, getCart, updateCart } from '@/data/cart';
import { IconArrowRight, IconTrash } from '@tabler/icons-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
  const productCart = getCart();
  const [cart, setCart] = useState(productCart);
  return (
    <div>
      <Header hasCartButton={false} />
      <div className="w-screen p-8 flex flex-col items-center justify-center">
        {cart.length === 0 ? (
          <div className="font-bold text-3xl">
            Your cart is empty! Add some items{' '}
            <Link href={'/home'} className="hover:underline">
              here
              <IconArrowRight
                size={24}
                stroke={1.5}
                color="#171717"
                className="inline"
              />
            </Link>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-row items-center justify-between px-16">
              <div className="font-bold text-3xl">Your Cart</div>
              <div className="flex flex-row items-center gap-2">
                <button
                  type="button"
                  className="h-12 w-12 flex items-center justify-center hover:shadow-xl"
                  onClick={() => {
                    if (confirm('Are you sure you want to clear the cart?')) {
                      clearCart();
                      setCart([]);
                    }
                  }}
                >
                  <IconTrash size={24} stroke={1.5} color="#171717" />
                </button>
                <button
                  type="button"
                  className="h-12 w-12 flex items-center justify-center hover:shadow-xl"
                  onClick={() => {
                    updateCart(cart);
                    cart.length > 0 && redirect('/checkout');
                  }}
                >
                  <IconArrowRight size={24} stroke={1.5} color="#171717" />
                </button>
              </div>
            </div>
            <div className="w-full p-8 mt-8">
              <CartList cart={cart} setCart={setCart} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
