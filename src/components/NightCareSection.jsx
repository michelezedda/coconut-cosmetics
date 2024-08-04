import SectionCard from "./SectionCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const NightCareSection = () => {
  const data = [
    {
      id: 0,
      name: "night face serum",
      img: "../public/night-face-serum.png",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 1,
      name: "night face cream",
      img: "../public/night-cream.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 2,
      name: "face cleanser",
      img: "../public/face-cleanser.png",
      price: 40,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 3,
      name: "anti-age serum",
      img: "../public/antiage-serum.jpeg",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 4,
      name: "night tonic",
      img: "../public/night-tonic.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
  ];
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
                    <SectionCard
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
