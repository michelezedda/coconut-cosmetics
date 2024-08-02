import SectionCard from "./SectionCard";

const DayCareSection = () => {
  const data = [
    {
      id: 0,
      name: "eye serum",
      img: "../public/eye-serum.png",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 1,
      name: "face cleanser",
      img: "../public/face-cleanser.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "face moisturizer",
      img: "../public/face-moisturizer.png",
      price: 40,
      rating: "⭐⭐⭐⭐⭐",
    },
  ];
  return (
    <>
      <>
        <div className="container pt-16">
          <div className="lg:flex justify-between items-center">
            <div>
              <h3 className="font-medium text-2xl">day care</h3>
              <p className="text-gray-600 mt2">brighten and protect daily</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
            <div>
              <img
                className="w-full h-full object-cover"
                src="../public/day.png"
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

export default DayCareSection;
