import products from "../data/products";
import ProductCard from "./ProductCard";

function NightCare() {
  const nightCareProducts = products.filter((product) =>
    product.label === "nightCare" || product.label === "both"
      ? { ...products }
      : null
  );

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-22">
        <h2 className="text-2xl font-semibold">NIGHT CARE</h2>
        <h4 className="text-lg mt-2">Restore and renew at night</h4>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {nightCareProducts.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default NightCare;
