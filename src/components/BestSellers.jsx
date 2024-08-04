import SectionCard from "./SectionCard";

function BestSellers({}) {
  const data = [
    {
      id: 0,
      name: "eye serum",
      img: "../public/eye-serum.png",
      description: "lorem ipsum",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 className="flex font-bold text-2xl justify-center items-center">
          best sellers
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5gap-4">
          {Math.random() > 0.5 &&
            data.map((item) => <SectionCard key={item.id} {...item} />)}
        </div>
      </div>
    </>
  );
}

export default BestSellers;
