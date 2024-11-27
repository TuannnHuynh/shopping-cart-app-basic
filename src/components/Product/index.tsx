import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../pages/home";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
import { RootState } from "../../store";

interface IProductProps {
  product: IProduct;
}

const Product = ({ product }: IProductProps) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };
  return (
    <div>
      <div className="group ml-5 mt-10 flex h-[360px] flex-col items-center gap-3 rounded-xl border-2 border-red-900 p-4">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="mt-3 w-40 truncate text-lg font-bold text-gray-700">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="rounded-md bg-[#333] px-4 py-2 text-[#fff]"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove to cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
