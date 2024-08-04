import ProductCard from "./ProductCard";

function Products() {
  const data = [
    {
      id: 0,
      name: "EYE SERUM",
      img: "../public/eye-serum.png",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
      label: "dayCare",
    },
    {
      id: 1,
      name: "FACE CLEANSER",
      img: "../public/face-cleanser.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
      label: ["dayCare", "nightCare"],
    },
    {
      id: 2,
      name: "FACE MOISTURIZER",
      img: "../public/face-moisturizer.png",
      price: 40,
      rating: "⭐⭐⭐⭐⭐",
      label: "dayCare",
    },
    {
      id: 3,
      name: "SUNSCREEN",
      img: "../public/sunscreen.png",
      price: 50,
      rating: "⭐⭐⭐⭐⭐",
      label: "dayCare",
    },
    {
      id: 4,
      name: "BODY CREAM",
      img: "../public/body-cream.jpeg",
      price: 60,
      rating: "⭐⭐⭐⭐⭐",
      label: "dayCare",
    },
    {
      id: 5,
      name: "LIP BALM",
      img: "../public/lipbalm.png",
      price: 70,
      rating: "⭐⭐⭐⭐⭐",
      label: ["dayCare", "nightCare"],
    },
    {
      id: 6,
      name: "NIGHT FACE SERUM",
      img: "../public/night-face-serum.png",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 7,
      name: "NIGHT FACE CREAM",
      img: "../public/night-cream.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 8,
      name: "BODY OIL",
      img: "../public/body-oil.png",
      price: 40,
      rating: "⭐⭐⭐⭐⭐",
      label: ["dayCare", "nightCare"],
    },
    {
      id: 9,
      name: "ANTIAGE SERUM",
      img: "../public/antiage-serum.jpeg",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 10,
      name: "NIGHT TONIC",
      img: "../public/night-tonic.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 11,
      name: "NIGHT CREAM",
      img: "../public/night-cream.png",
      price: 40,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
    },
    {
      id: 12,
      name: "CLEANSING LOTION",
      img: "../public/cleansing-lotion.jpeg",
      price: 20,
      rating: "⭐⭐⭐⭐⭐",
      label: ["dayCare", "nightCare"],
    },
    {
      id: 13,
      name: "FACE SERUM",
      img: "../public/face-serum.png",
      price: 30,
      rating: "⭐⭐⭐⭐⭐",
      label: "dayCare",
    },
    {
      id: 14,
      name: "HAIR OIL",
      img: "../public/hair-oil.png",
      price: 40,
      rating: "⭐⭐⭐⭐⭐",
      label: "dayCare",
    },
    {
      id: 15,
      name: "HAND CREAM",
      img: "../public/hand-cream.jpeg",
      price: 50,
      rating: "⭐⭐⭐⭐⭐",
      label: ["dayCare", "nightCare"],
    },
    {
      id: 16,
      name: "LIP SCRUB",
      img: "../public/lip-scrub.png",
      price: 50,
      rating: "⭐⭐⭐⭐⭐",
      label: ["dayCare", "nightCare"],
    },
    {
      id: 17,
      name: "MAGIC CREAM",
      img: "../public/magic-cream.png",
      price: 50,
      rating: "⭐⭐⭐⭐⭐",
      label: "dayCare",
    },
    {
      id: 18,
      name: "NIGHT MASK",
      img: "../public/night-mask.png",
      price: 50,
      rating: "⭐⭐⭐⭐⭐",
      label: "nightCare",
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
