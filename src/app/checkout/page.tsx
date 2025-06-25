'use client';

import Header from '@/components/Header';
import ItemBill from '@/components/ItemBill';
import { clearCart, getCart } from '@/data/cart';
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function Checkout() {
  const productCart = getCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = productCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const numItems = productCart.reduce((acc, item) => acc + item.quantity, 0);

  const handlePayment = async () => {
    const confirmed = confirm(
      `Your total bill is ₹${totalPrice.toFixed(2)}. Proceed with payment?`
    );

    if (confirmed) {
      setIsProcessing(true);

      setTimeout(() => {
        clearCart();
        alert('Payment successful! Thank you for your purchase.');
        redirect('/home');
      }, 2000);
    }
  };

  if (productCart.length === 0) {
    redirect('/cart');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header hasCartButton={false} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Checkout
              </h1>
              <p className="text-gray-600 mt-1">
                Review your order and complete payment
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/cart">
                <button
                  type="button"
                  className="h-12 px-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-lg transition-all duration-200 font-medium"
                >
                  <IconShoppingCart size={18} />
                  <span className="hidden sm:inline">Back to Cart</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Order Summary
            </h2>
            <ItemBill cart={productCart} />
          </div>

          <div className="border-t border-gray-200 p-6 sm:p-8 bg-gray-50">
            <div className="space-y-3">
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-gray-200 p-6 sm:p-8">
            <button
              type="button"
              className="w-full h-14 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md disabled:cursor-not-allowed"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Processing Payment...
                </>
              ) : (
                <>
                  <IconCreditCard size={24} />
                  Pay ₹{totalPrice.toFixed(2)}
                </>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
