import axios from "axios";
import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import Product from "../components/Product";

export interface IProduct {
  id: number;
  image: string;
  title: string;
}

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await axios("https://fakestoreapi.com/products");
    const data = res.data;
    if (data) {
      setLoading(false);
      setProducts(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div>
      {loading ? (
        <div className="flex min-h-screen w-full items-center justify-center">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <div className="mx-auto grid min-h-[80vh] max-w-6xl p-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products && products.length
            ? products.map((val) => <Product key={val.id} product={val} />)
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
