'use client';

import CartList from '@/components/CartList';
import Header from '@/components/Header';
import { clearCart, getCart, updateCart } from '@/data/cart';
import {
  IconArrowRight,
  IconTrash,
  IconShoppingBag,
} from '@tabler/icons-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function Cart() {
  const productCart = getCart();
  const [cart, setCart] = useState(productCart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear the cart?')) {
      clearCart();
      setCart([]);
    }
  };

  const handleProceedToCheckout = () => {
    updateCart(cart);
    if (cart.length > 0) {
      redirect('/checkout');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header hasCartButton={false} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 sm:p-12 max-w-lg mx-auto">
              <IconShoppingBag
                size={64}
                className="mx-auto text-gray-400 mb-6"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Start shopping to add items to your cart
              </p>
              <Link href="/home">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                  Start Shopping
                  <IconArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Your Cart
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} • ₹
                    {totalPrice.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="h-12 px-4 flex items-center gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border border-red-200 hover:border-red-300 rounded-lg transition-all duration-200 font-medium"
                    onClick={handleClearCart}
                  >
                    <IconTrash size={18} />
                    <span className="hidden sm:inline">Clear Cart</span>
                  </button>

                  <button
                    type="button"
                    className="h-12 px-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                    onClick={handleProceedToCheckout}
                  >
                    <span>Checkout</span>
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <CartList cart={cart} setCart={setCart} />

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-gray-600">
                    Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'}
                    )
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{totalPrice.toFixed(2)}
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
