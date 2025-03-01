import { ShoppingBag, CircleCheck, CircleX } from "lucide-react";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";

function ProductCard({ id, name, img, price, rating, points, available }) {
  const { addToCart } = useAppContext();

  const handleClick = () => {
    addToCart({ id, name, img, price, rating, points });

    toast("Added to cart!", {
      icon: "🛒",
    });
  };

  return (
    <>
      <div className="relative bg-white rounded-lg border border-gray-300 mx-2 hover:bg-gray-50">
        <img src={img} alt={name} className="rounded-t-lg" />
        <div className="flex flex-col p-4">
          <p>{rating}</p>
          <p className="text-sm">{points} 🥥 points</p>
          <p className="font-semibold text-md">{name}</p>
          <p className="font-semibold text-red-600 text-xl">$ {price}</p>
          {available ? (
            <p className="flex items-center gap-1 text-gray-700">
              <CircleCheck color="green" size={15} /> Available
            </p>
          ) : (
            <p className="flex items-center gap-1 text-gray-700">
              <CircleX color="red" size={15} /> Not available
            </p>
          )}
        </div>
        {available ? (
          <button
            className="absolute top-44 right-1 rounded-full bg-slate-600 p-3 cursor-pointer active:scale-98 hover:bg-teal-700"
            onClick={handleClick}
          >
            <ShoppingBag color="white" size={25} />
          </button>
        ) : (
          <button className="absolute top-43 right-1 rounded-full p-3 bg-red-700">
            <ShoppingBag color="white" size={25} />
          </button>
        )}
      </div>
    </>
  );
}

export default ProductCard;
