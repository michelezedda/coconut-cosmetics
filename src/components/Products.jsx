import ProductCard from "./ProductCard";

function Products() {
  const data = [
    {
      id: 0,
      name: "eye serum",
      img: "../public/eye-serum.png",
      description: "lorem ipsum",
    },
    {
      id: 1,
      name: "face cleanser",
      img: "../public/face-cleanser.png",
      description: "lorem ipsum",
    },
    {
      id: 2,
      name: "night cream",
      img: "../public/night-cream.png",
      description: "lorem ipsum",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <ProductCard
              key={item.id}
              img={item.img}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
