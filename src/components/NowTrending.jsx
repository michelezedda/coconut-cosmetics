import ProductCard from "./ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

function NowTrending() {
  const shuffledProducts = products
    ? [...products].sort(() => Math.random() - 0.5)
    : [];
  const data = shuffledProducts.slice(0, 10);

  return (
    <>
      <div className="container mt-20">
        <h1 className="flex text-4xl justify-center items-center mb-10">
          NOW TRENDING
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default NowTrending;
