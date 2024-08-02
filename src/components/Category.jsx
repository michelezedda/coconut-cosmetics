import CategoryCard from "./CategoryCard";

function Category() {
  const data = [
    {
      id: 0,
      name: "day care",
      count: 10,
      img: "../public/day.png",
    },
    {
      id: 1,
      name: "night care",
      count: 2,
      img: "../public/night.png",
    },
    {
      id: 2,
      name: "serums",
      count: 3,
      img: "../public/serum.png",
    },
  ];

  return (
    <>
      <div className="container pt-16">
        <h1 className="flex font-bold text-2xl justify-center items-center">
          categories
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <CategoryCard
              key={item.id}
              img={item.img}
              name={item.name}
              count={item.count}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;
