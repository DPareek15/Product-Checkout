'use client';

import ProductArea from '@/components/ProductArea';
import { Order, productData, productIdSet } from '@/data/products';
import { useRef, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import Header from '@/components/Header';
import { setItem } from '@/data/cart';

export default function Home() {
  const [currentId, setCurrentId] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyProductId = (productID: string) => {
    if (inputRef.current) {
      inputRef.current.value = productID;
      setCurrentId(productID);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <Header hasCartButton={true} />
      <div className="w-screen p-8 flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-24">
          <div className="font-bold text-lg">Enter the product code here</div>
          <div className="flex flex-row items-center gap-2">
            <input
              className="border-2 border-gray-800 border-solid rounded-lg p-2"
              type="text"
              value={currentId}
              onChange={(e) => setCurrentId(e.target.value)}
              placeholder="For eg. 123456"
              ref={inputRef}
            />
            <button
              className="h-12 w-12 flex items-center justify-center border-2 border-gray-800 border-solid hover:shadow-xl rounded-full disabled:border-gray-400 disabled:text-gray-400 disabled:shadow-none"
              disabled={
                currentId.trim().length !== 6 ||
                !productIdSet.has(currentId.trim())
              }
              onClick={() => {
                const product = productData.find(
                  (p) => p.productId === currentId
                );
                const order: Order = { ...product!, quantity: 1 };
                setItem({ order });
                setCurrentId('');
              }}
            >
              <IconPlus size={32} stroke={2} />
            </button>
          </div>
        </div>
        <div className="w-full p-8 mt-8">
          <ProductArea onCopyProductId={handleCopyProductId} />
        </div>
      </div>
    </div>
  );
}
