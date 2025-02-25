import ProductCard from "./ProductCard";
import products from "../data/products";

function DayCare() {
  const dayCareProducts = products.filter((product) =>
    product.label === "dayCare" || product.label === "both"
      ? [...products]
      : null
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-22">
        <h2 className="text-2xl font-semibold">DAY CARE</h2>
        <h4 className="text-lg mt-2">Brighten and protect daily</h4>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {dayCareProducts.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default DayCare;
