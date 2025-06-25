import { IconHome, IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';

const Header = ({ hasCartButton }: { hasCartButton: boolean }) => {
  return (
    <header className="w-screen bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 w-full">
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Product Checkout
            </h1>
          </div>

          <nav className="flex-shrink-0">
            <Link href={hasCartButton ? '/cart' : '/home'}>
              <button
                type="button"
                className="h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200 hover:shadow-md group"
                title={hasCartButton ? 'Go to Cart' : 'Go to Home'}
              >
                {hasCartButton ? (
                  <IconShoppingCart
                    size={24}
                    className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200"
                  />
                ) : (
                  <IconHome
                    size={24}
                    className="text-gray-600 group-hover:text-gray-900 transition-colors duration-200"
                  />
                )}
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
