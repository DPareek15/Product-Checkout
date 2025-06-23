import { Order } from '@/data/products';

const Bill = ({ order }: { order: Order }) => {
  return (
    <div className="w-full h-16 flex flex-row items-center justify-between">
      <div>{`${order.name} X ${order.quantity}`}</div>
      <div>{`Rs. ${(order.price * order.quantity).toFixed(2)}`}</div>
    </div>
  );
};

const ItemBill = ({ cart }: { cart: Order[] }) => {
  return (
    <div className="w-full h-[24rem] overflow-y-auto">
      <div className="flex flex-col items-center justify-center gap-4 p-4 pb-0">
        {cart.map((order) => (
          <Bill key={order.productId} order={order} />
        ))}
      </div>
    </div>
  );
};

export default ItemBill;
