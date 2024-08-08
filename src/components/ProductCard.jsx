import { IoBagHandle } from "react-icons/io5";
import Swal from "sweetalert2";
import { useAppContext } from "../context/appContext";

function ProductCard({ id, name, img, price, rating, points }) {
  const { addToCart } = useAppContext();

  const handleClick = () => {
    addToCart({ id, name, img, price, rating, points });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to cart!",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="bg-white border border-gray-300 hover:bg-slate-100 hover:border-slate-400 hover:scale-[0.98] transition-transform rounded-lg relative">
      <img src={img} alt={name} className="rounded-t-lg" />
      <div className="space-y-2 relative p-4">
        <div className="flex gap-[2px] text-[15px]">{rating}</div>
        <div className="flex gap-[2px] text-[15px]">{points} 🥥 point/s</div>
        <h3 className="font-medium">{name}</h3>
        <h3 className="text-2xl font-medium text-red-600">$ {price}</h3>
        <button
          onClick={handleClick}
          className="absolute -top-4 right-2 bg-slate-600 hover:bg-sky-700 active:scale-95 text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer"
        >
          <IoBagHandle />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
