import { useDispatch } from "react-redux";
import { IProductState, removeFromCart } from "../../store/slices/cartSlice";

type TCartItemProps = {
  cartItem: IProductState;
};

const CartTile = ({ cartItem }: TCartItemProps) => {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <>
      <div className="mb-2 mt-2 flex items-center justify-between rounded-xl bg-red-500 p-5">
        <div className="flex p-3">
          <img
            src={cartItem.image}
            className="h-28 rounded-lg"
            alt={cartItem.title}
          />
          <div className="ml-10 space-y-5 self-start">
            <h1 className="text-xl font-bold text-white">{cartItem.title}</h1>
            <p className="font-extrabold text-white">{cartItem.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="rounded-lg border-2 bg-red-950 p-4 font-bold text-white"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
