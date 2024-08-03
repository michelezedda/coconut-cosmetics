import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";

function Header() {
  return (
    <>
      <div className="bg-slate-400 h-[150px] flex gap-20 justify-center items-center text-white">
        <div className="flex place-items-center">
          <span className="info-wrapper text-4xl">
            <FaShippingFast />
          </span>
          <div className="ml-2">
            <p className="font-bold text-xl">Free shipping</p>
            <p>on orders over $50</p>
          </div>
        </div>
        <div className="flex place-items-center">
          <span className="info-wrapper text-4xl">
            <FaLeaf />
          </span>
          <div className="ml-2">
            <p className="font-bold text-xl">Organic</p>
            <p>and 100% vegan</p>
          </div>
        </div>
        <div className="flex place-items-center">
          <span className="info-wrapper text-4xl">
            <MdOutlinePets />
          </span>
          <div className="ml-2">
            <p className="font-bold text-xl">Cruelty Free</p>
            <p>and eco-friendly</p>
          </div>
        </div>
        <div className="flex place-items-center">
          <span className="info-wrapper text-4xl">
            <MdOutlineSupportAgent />
          </span>
          <div className="ml-2">
            <p className="font-bold text-xl">Support 24/7</p>
            <p>and user-friendly platform</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
