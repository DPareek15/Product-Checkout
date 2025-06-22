import { IconShoppingCart } from '@tabler/icons-react';

const Header = () => {
  return (
    <div className="h-[4rem] w-screen flex flex-row items-center justify-between px-8 py-12 shadow-md">
      <div className="m-2">
        <h1 className="text-5xl">Product Checkout</h1>
      </div>
      <div className="mx-8 my-16">
        <button
          type="button"
          className="h-16 w-16 flex items-center justify-center hover:border-2 hover:border-gray-600 hover:border-solid hover:shadow-lg rounded-lg"
        >
          <IconShoppingCart size={40} stroke={1.5} color="#171717" />
        </button>
      </div>
    </div>
  );
};

export default Header;
