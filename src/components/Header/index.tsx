import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-xl font-bold tracking-wide text-red-900 sm:text-2xl md:text-3xl">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex items-center space-x-6 font-semibold text-gray-800">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
