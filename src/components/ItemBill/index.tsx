const Bill = ({ order }: { order: Order }) => {
  return (
    <div className="w-full py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex-1">
          <span className="text-gray-900 font-medium">{order.name}</span>
          <span className="text-gray-500 ml-2">× {order.quantity}</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-semibold text-gray-900">
            ₹{(order.price * order.quantity).toFixed(2)}
          </span>
          <div className="text-xs text-gray-500">
            ₹{order.price.toFixed(2)} each
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemBill = ({ cart }: { cart: Order[] }) => {
  return (
    <div className="w-full">
      <div className="max-h-[20rem] sm:max-h-[24rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="divide-y divide-gray-100">
          {cart.map((order) => (
            <Bill key={order.productId} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemBill;
