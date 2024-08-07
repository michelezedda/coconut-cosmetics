import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import products from "../data/products";
import dayCarePic from "/day.png";
import { Link } from "react-router-dom";

const DayCareSection = () => {
  const DayCareProducts = products ? [...products] : [];
  let data = DayCareProducts.filter(
    (item) => item.label === "dayCare" || item.label === "both"
  );

  return (
    <div className="container pt-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-center md:text-left">
          <h3 className="font-medium text-2xl">DAY CARE</h3>
          <p className="text-gray-600 mt-2">Brighten and protect daily</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-2">
        <div className="col-span-1 mb-4 md:mb-0">
          <img
            src={dayCarePic}
            alt="day"
            className="w-full h-full object-cover hidden md:flex"
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
                <Link to={`/product/${item.id}`} key={item.id}>
                  <ProductCard
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                  />
                </Link>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default DayCareSection;
