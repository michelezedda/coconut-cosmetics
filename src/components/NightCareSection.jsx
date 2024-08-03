import SectionCard from "./SectionCard";

const NightCareSection = () => {
  const data = [
    {
      id: 0,
      name: "night face serum",
      img: "../public/night-face-serum.png",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 1,
      name: "night face cream",
      img: "../public/night-cream.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "face cleanser",
      img: "../public/face-cleanser.png",
      price: 40,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "anti-age serum",
      img: "../public/antiage-serum.jpeg",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <div>
              <img
                className="w-full h-full object-cover"
                src="../public/night.png"
                alt="banner"
              />
            </div>
            {data.map((item) => (
              <SectionCard
                key={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </>
    </>
  );
};

export default NightCareSection;
