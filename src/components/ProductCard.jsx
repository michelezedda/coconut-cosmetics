import { ShoppingBag } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function ProductCard({ name, img, price, rating, points }) {
  const notify = () => toast.success("Added to cart!");
  return (
    <>
      <div className="relative bg-white rounded-lg border border-gray-300 mx-2 hover:bg-gray-50">
        <img src={img} alt={name} className="rounded-t-lg" />

        <div className="flex flex-col p-4">
          <span>{rating}</span>
          <span className="text-sm">{points} 🥥 points</span>
          <span className="font-semibold text-md">{name}</span>
          <span className="font-semibold text-red-600 text-xl">$ {price}</span>
        </div>
        <button
          className="absolute top-42 right-1 rounded-full bg-slate-600 p-3 cursor-pointer active:scale-98 hover:bg-teal-700"
          onClick={notify}
        >
          <ShoppingBag color="white" size={25} />
        </button>
      </div>
    </>
  );
}

export default ProductCard;
