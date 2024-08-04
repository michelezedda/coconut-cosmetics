import CategoryCard from "./CategoryCard";

function Category() {
  const data = [
    {
      id: 0,
      name: "DAY CARE",
      count: 10,
      img: "../public/day.png",
    },
    {
      id: 1,
      name: "NIGHT CARE",
      count: 2,
      img: "../public/night.png",
    },
    {
      id: 3,
      name: "DAY CARE",
      count: 10,
      img: "../public/day.png",
    },
    {
      id: 4,
      name: "NIGHT CARE",
      count: 2,
      img: "../public/night.png",
    },
  ];

  return (
    <>
      <div className="container pt-16">
        <h1 className="flex text-4xl justify-center items-center mb-10">
          CATEGORIES
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
