import { IoBagHandle } from "react-icons/io5";
import Swal from "sweetalert2";

function SectionCard({ img, name, price, rating }) {
  const handleClick = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <>
      <div className="bg-white border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative">
        <img src={img} alt={name} />
        <div className="space-y-2 relative p-4">
          <div className="flex gap-[2px] text-[15px]">{rating}</div>
          <h3 className="font-medium">{name}</h3>
          <h3 className="text-2xl font-medium text-red-600">$ {price}</h3>
          <button
            onClick={handleClick}
            className="absolute -top-4 right-2 bg-green-700 text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer"
          >
            <IoBagHandle />
          </button>
        </div>
      </div>
    </>
  );
}

export default SectionCard;
