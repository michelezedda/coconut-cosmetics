import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import products from "./data/products";

const NightCareSection = () => {
  const NightCareProducts = products ? [...products] : [];
  let data = NightCareProducts.filter(
    (item) => item.label === "nightCare" || item.label === "both"
  );

  return (
    <>
      <>
        <div className="container pt-16">
          <div className="lg:flex justify-between items-center">
            <div className="mb-6">
              <h3 className="font-medium text-2xl">NIGHT CARE</h3>
              <p className="text-gray-600 mt2">Restore and renew at night</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-2">
            <div className="col-span-1">
              <img
                className="w-full h-full object-cover"
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
