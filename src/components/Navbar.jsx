import myLogo from "/logo.png";
import { Link } from "react-router-dom";
import { IoBagHandle } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import CartBadge from "./CartBadge";

function Navbar({ setShowCart, setShowProfile }) {
  const cartToggle = () => {
    setShowCart((prev) => !prev);
  };

  const profileToggle = () => {
    setShowProfile((prev) => !prev);
  };

  return (
    <>
      <nav className="flex sticky top-0 z-50 justify-between items-center bg-white p-2 md:px-10">
        <Link to="/">
          <img
            src={myLogo}
            alt="coconut-cosmetics logo"
            className="h-14 lg:h-16"
          />
        </Link>
        <ul className="flex space-x-4 text-xl md:text-2xl place-items-center">
          <li className="icon-wrapper relative" onClick={cartToggle}>
            <IoBagHandle />
            <CartBadge size="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          </li>
          <li className="icon-wrapper" onClick={profileToggle}>
            <RiUser3Fill />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
