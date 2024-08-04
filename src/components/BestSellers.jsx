import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import products from "../components/products";

function BestSellers() {
  const products = useSelector((state) => state.products.value);

  return (
    <>
      <div className="container">
        <h1 className="flex font-bold text-2xl justify-center items-center">
          BEST SELLERS
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5gap-4">
          {Math.random() > 0.5 &&
            data.map((products) => (
              <ProductCard key={product.id} {...products} />
            ))}
        </div>
      </div>
    </>
  );
}

export default BestSellers;
