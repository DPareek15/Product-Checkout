import Image from 'next/image';
import { productData, Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
  onCopyId: (productId: string) => void;
};

const ProductCard = ({ product, onCopyId }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          width={400}
          height={300}
          alt={product.name}
          className="w-full h-48 sm:h-56 group-hover:scale-105 transition-transform duration-300"
        />
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          ₹{product.price.toFixed(2)}
        </p>

        <button
          type="button"
          title="Click to copy Product ID"
          onClick={() => onCopyId(product.productId)}
          className="w-full bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 transition-all duration-200 font-medium"
        >
          ID: {product.productId}
        </button>
      </div>
    </div>
  );
};

const ProductArea = ({
  onCopyProductId,
}: {
  onCopyProductId: (productId: string) => void;
}) => {
  const products = productData.map((product) => (
    <ProductCard
      product={product}
      key={product.productId}
      onCopyId={onCopyProductId}
    />
  ));

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
        <div className="max-h-[28rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
