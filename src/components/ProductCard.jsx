import { ShoppingBag } from "lucide-react";

function ProductCard({ name, img, price, rating, points }) {
  return (
    <>
      <div className="relative rounded-lg border border-gray-300 mx-2 hover:bg-indigo-50 hover:scale-99">
        <div>
          <img src={img} alt={name} className="rounded-t-lg" />
        </div>
        <div className="absolute right-2 top-50 rounded-full bg-gray-500 p-3 cursor-pointer active:scale-98 hover:bg-teal-700">
          <ShoppingBag color="white" size={35} />
        </div>
        <div className="flex flex-col p-4">
          <span>{rating}</span>
          <span className="text-sm">{points} 🥥 points</span>
          <span className="font-semibold text-lg">{name}</span>
          <span className="font-semibold text-red-600 text-xl">$ {price}</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
