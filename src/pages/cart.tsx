import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/Cart";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cart = useSelector((state: RootState) => state.cart); // RootState is defined in store
  useEffect(() => {
    setTotalPrice(cart.reduce((acc, val) => (acc += val.price), 0));
  }, [cart]);
  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="mx-auto grid min-h-[80vh] max-w-6xl md:grid-cols-2">
            <div className="flex flex-col items-center justify-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="mt-14 flex flex-col items-end justify-center space-y-5 p-5">
              <h1 className="text-lg font-bold text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="font-bold text-gray-800">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="font-bold text-gray-800">Total Amount</span>
                <span>: {totalPrice}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex min-h-[80vh] flex-col items-center justify-center">
          <h1 className="mb-2 text-xl font-bold text-gray-800">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="rounded-lg border-2 bg-red-950 p-4 font-bold text-white">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
