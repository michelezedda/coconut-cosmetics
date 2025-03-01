import ProductCard from "./ProductCard";
import products from "../data/products";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function DayCare() {
  const dayCareProducts = products.filter(
    (product) => product.label === "dayCare" || product.label === "both"
  );
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 pt-35 ">
        <div className="text-center md:text-left md:ml-2">
          <h2 className="text-2xl font-semibold">DAY CARE</h2>
          <p className="text-lg mt-2">Brighten and protect daily</p>
        </div>
      </div>
      <div className="w-full mt-4">
        <Splide
          options={{
            perMove: 1,
            pagination: false,
            arrows: true,
            type: "loop",
            fixedWidth: "198px",
          }}
        >
          {dayCareProducts.map((product) => (
            <SplideSlide key={product.id}>
              <ProductCard {...product} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default DayCare;
