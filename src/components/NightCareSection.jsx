import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import products from "../data/products";

const NightCareSection = () => {
  const NightCareProducts = products ? [...products] : [];
  let data = NightCareProducts.filter(
    (item) => item.label === "nightCare" || item.label === "both"
  );

  return (
    <>
      <>
        <div className="container pt-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-center md:text-left">
              <h3 className="font-medium text-2xl">NIGHT CARE</h3>
              <p className="text-gray-600 mt-2">Restore and renew at night</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-2">
            <div className="col-span-1 mb-4 md:mb-0">
              <img
                className="w-full h-full object-cover hidden md:flex"
                src="../public/night.png"
                alt="banner"
              />
            </div>
            <div className="w-full col-span-4">
              <Splide
                options={{
                  perPage: 4,
                  perMove: 1,
                  gap: "1rem",
                  pagination: false,
                  arrows: true,
                  type: "loop",
                  breakpoints: {
                    1024: {
                      perPage: 3,
                    },
                    768: {
                      perPage: 2,
                    },
                    640: {
                      perPage: 1,
                    },
                  },
                }}
              >
                {data.map((item) => (
                  <SplideSlide key={item.id}>
                    <ProductCard
                      key={item.id}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      rating={item.rating}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default NightCareSection;
