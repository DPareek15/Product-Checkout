import Image from 'next/image';
import { productData, Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
  onCopyId: (productId: string) => void;
};

const ProductCard = ({ product, onCopyId }: ProductCardProps) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <Image src={product.image} width={400} height={240} alt={product.name} />
      <div className="w-full py-4 text-left">
        <p className="font-bold text-lg">
          {product.name}
          {product.stock === 0 && (
            <span className="text-red-600"> (Out of stock)</span>
          )}
        </p>
        <p>{`Rs. ${product.price.toFixed(2)}`}</p>
        <button
          type="button"
          title="Click to copy ID"
          onClick={() => onCopyId(product.productId)}
        >
          {`Product ID: ${product.productId}`}
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
  const products = productData.map((product, index) => (
    <ProductCard
      product={product}
      key={product.productId}
      onCopyId={onCopyProductId}
    />
  ));
  return (
    <div className="w-full h-[28rem] overflow-y-auto">
      <div className="grid grid-cols-3 gap-12 p-4">{products}</div>
    </div>
  );
};

export default ProductArea;
