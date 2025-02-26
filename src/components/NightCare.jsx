import products from "../data/products";
import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function NightCare() {
  const nightCareProducts = products.filter(
    (product) => product.label === "nightCare" || product.label === "both"
  );
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 mt-22">
        <div className="text-center md:text-left md:ml-2">
          <h2 className="text-2xl font-semibold">NIGHT CARE</h2>
          <p className="text-lg mt-2">Restore and renew at night</p>
        </div>
      </div>
      <div className="w-full mt-4">
        <Splide
          options={{
            perMove: 1,
            gap: "1px",
            pagination: false,
            arrows: true,
            type: "loop",
            fixedWidth: "198px",
          }}
        >
          {nightCareProducts.map((product) => (
            <SplideSlide key={product.id}>
              <ProductCard {...product} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default NightCare;
