'use client';

import Header from '@/components/Header';
import ItemBill from '@/components/ItemBill';
import { clearCart, getCart } from '@/data/cart';
import { IconCashBanknoteMove, IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Checkout() {
  const productCart = getCart();
  const totalPrice = productCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const numItems = productCart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div>
      <Header hasCartButton={false} />
      <div className="w-screen p-8 flex flex-col items-center justify-center">
        <div className="w-full flex flex-row items-center justify-between px-16">
          <div className="font-bold text-3xl">Checkout Area</div>
          <div className="flex flex-row items-center justify-center gap-8 pr-8 pt-2">
            <Link href={'/cart'}>
              <button
                type="button"
                className="h-12 w-12 flex items-center justify-center hover:shadow-xl"
              >
                <IconShoppingCart size={40} stroke={1.5} color="#171717" />
              </button>
            </Link>
            <button
              type="button"
              className="h-12 w-12 flex items-center justify-center hover:shadow-xl"
              onClick={() => {
                if (
                  confirm(
                    `Your total bill is Rs. ${totalPrice.toFixed(
                      2
                    )}. Do you want to head towards payment?`
                  )
                ) {
                  clearCart();
                  redirect('/home');
                }
              }}
            >
              <IconCashBanknoteMove size={40} stroke={1.5} color="#171717" />
            </button>
          </div>
        </div>
        <div className="w-2/3 mt-8 flex flex-col items-center justify-center border-2 border-gray-800 border-solid rounded-md">
          <ItemBill cart={productCart} />
          <div className="w-full border-t-2 p-4 border-gray-800 border-solid flex flex-row items-center justify-between">
            <div>{`Number of Items: ${numItems}`}</div>
            <div>{`Total Price: Rs. ${totalPrice.toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
