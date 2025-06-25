'use client';

import ProductArea from '@/components/ProductArea';
import { Order, productData, productIdSet } from '@/data/products';
import { useRef, useState } from 'react';
import { IconPlus, IconCheck } from '@tabler/icons-react';
import Header from '@/components/Header';
import { setItem } from '@/data/cart';

export default function Home() {
  const [currentId, setCurrentId] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyProductId = (productID: string) => {
    if (inputRef.current) {
      inputRef.current.value = productID;
      setCurrentId(productID);
      inputRef.current.focus();
    }
  };

  const handleAddToCart = async () => {
    setIsAdding(true);

    const product = productData.find((p) => p.productId === currentId);
    const order: Order = { ...product!, quantity: 1 };
    setItem({ order });

    setShowSuccess(true);
    setCurrentId('');

    setTimeout(() => {
      setShowSuccess(false);
      setIsAdding(false);
    }, 2000);
  };

  const isValidId =
    currentId.trim().length === 6 && productIdSet.has(currentId.trim());

  return (
    <div className="min-h-screen bg-gray-50">
      <Header hasCartButton={true} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Add to Cart
            </h2>
            <p className="text-gray-600">
              Enter a product code or click on any product ID below
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <input
                className="w-full h-12 px-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-200 text-center sm:text-left"
                type="text"
                value={currentId}
                onChange={(e) => setCurrentId(e.target.value)}
                placeholder="Enter 6-digit code (e.g., 123456)"
                ref={inputRef}
                maxLength={6}
              />
              {isValidId && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <IconCheck size={20} className="text-green-500" />
                </div>
              )}
            </div>

            <button
              className="h-12 w-12 sm:w-auto sm:px-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-lg font-medium transition-all duration-200 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              disabled={!isValidId || isAdding}
              onClick={handleAddToCart}
            >
              {isAdding ? (
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
              ) : showSuccess ? (
                <IconCheck size={20} />
              ) : (
                <>
                  <IconPlus size={20} />
                  <span className="hidden sm:inline">Add</span>
                </>
              )}
            </button>
          </div>

          {showSuccess && (
            <div className="mt-4 text-center">
              <span className="inline-flex items-center gap-2 text-green-600 font-medium">
                <IconCheck size={16} />
                Product added to cart!
              </span>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              All Products
            </h2>
            <p className="text-gray-600">
              Click on any Product ID to copy it to the input above
            </p>
          </div>
          <ProductArea onCopyProductId={handleCopyProductId} />
        </div>
      </main>
    </div>
  );
}
