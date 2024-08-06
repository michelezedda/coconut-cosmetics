import { FaShippingFast } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";

function Header() {
  return (
    <>
      <div className="bg-slate-400 flex text-white py-4">
        <div className="container grid grid-cols-2 gap-6 justify-center items-center md:flex lg:justify-around">
          <div className="flex place-items-center">
            <span className="info-wrapper text-2xl">
              <FaShippingFast />
            </span>
            <div className="ml-2">
              <p className="font-bold text-lg">Free shipping</p>
              <p>on orders over $50</p>
            </div>
          </div>
          <div className="flex place-items-center">
            <span className="info-wrapper text-lg">
              <FaLeaf />
            </span>
            <div className="ml-2">
              <p className="font-bold text-lg">Organic</p>
              <p>and 100% vegan</p>
            </div>
          </div>
          <div className="flex place-items-center">
            <span className="info-wrapper text-2xl">
              <MdOutlinePets />
            </span>
            <div className="ml-2">
              <p className="font-bold text-lg">Cruelty Free</p>
              <p>and eco-friendly</p>
            </div>
          </div>
          <div className="flex place-items-center">
            <span className="info-wrapper text-2xl">
              <RiCustomerServiceFill />
            </span>
            <div className="ml-2">
              <p className="font-bold text-lg">Support 24/7</p>
              <p>and user-friendly platform</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
