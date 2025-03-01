import { useState } from "react";
import { ShoppingBag, UserRound, X } from "lucide-react";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";
import Cart from "./Cart";
import Profile from "./Profile";

function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const cartToggle = () => {
    setIsCartOpen((prevState) => !prevState);
    setIsProfileOpen(false);
  };

  const profileToggle = () => {
    setIsProfileOpen((prevState) => !prevState);
    setIsCartOpen(false);
  };

  return (
    <>
      <div className="flex fixed top-8 w-full items-center justify-center bg-white z-10">
        <Link to="/">
          <img
            src="/media/logo.png"
            alt="coconut. cosmetics logo"
            className="w-46 cursor-pointer"
          />
        </Link>
        <div className="flex absolute right-7 gap-3 lg:mr-10">
          <div
            className="rounded-full border-2 border-black p-2 cursor-pointer active:scale-98"
            onClick={cartToggle}
          >
            {isCartOpen ? (
              <X color="black" size={22} />
            ) : (
              <ShoppingBag color="black" size={22} />
            )}
          </div>
          <CartBadge />
          <div
            className="rounded-full border-2 border-black p-2 cursor-pointer active:scale-98"
            onClick={profileToggle}
          >
            {isProfileOpen ? (
              <X color="black" size={22} />
            ) : (
              <UserRound color="black" size={22} />
            )}
          </div>
        </div>
        {isProfileOpen ? <Profile /> : null}
        {isCartOpen ? <Cart /> : null}
      </div>
    </>
  );
}

export default Navbar;
