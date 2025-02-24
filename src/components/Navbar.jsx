import { useState } from "react";
import { ShoppingBag, UserRound, X } from "lucide-react";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

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
      <div className="flex fixed w-full items-center justify-center bg-white z-10">
        <Link to="/">
          <img
            src="/media/logo.png"
            alt="coconut. cosmetics logo"
            className="w-50 cursor-pointer"
          />
        </Link>
        <div className="flex absolute right-10 gap-3">
          <div
            className="rounded-full border-2 border-black p-2 cursor-pointer active:scale-98"
            onClick={cartToggle}
          >
            {isCartOpen ? (
              <X color="black" size={25} />
            ) : (
              <ShoppingBag color="black" size={25} />
            )}
          </div>
          <CartBadge />
          <div
            className="rounded-full border-2 border-black p-2 cursor-pointer active:scale-98"
            onClick={profileToggle}
          >
            {isProfileOpen ? (
              <X color="black" size={25} />
            ) : (
              <UserRound color="black" size={25} />
            )}
          </div>
        </div>
        {/* Profile */}
        {isProfileOpen ? (
          <div className="absolute top-15 right-0 w-1/3 bg-white rounded-bl-xl text-black p-4">
            <h4 className="text-gray-600 font-semibold text-lg my-4">
              YOUR PROFILE
            </h4>
            <p className="text-gray-600 text-center mb-4">
              You are not logged in.
            </p>
            <div className="flex flex-col gap-2">
              <button>LOG IN</button>
              <button>SIGN UP</button>
            </div>
          </div>
        ) : null}
        {/* Cart */}
        {isCartOpen ? (
          <div className="absolute top-15 right-0 w-1/3 bg-white rounded-bl-xl text-black p-4">
            <h4 className="text-gray-600 font-semibold text-lg my-4">
              YOUR CART
            </h4>
            <p className="text-gray-600 text-center mb-4">
              Your cart is empty.
            </p>
            <span>Total cocopoints: 0 🥥</span>
            <div className="flex justify-between mt-6 font-semibold">
              <span>Subtotal:</span>
              <span>$ 0</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>$ 0</span>
            </div>
            <div className="flex justify-between font-semibold text-red-800">
              <span>Total:</span>
              <span>$ 0</span>
            </div>
            <button className="mt-4 w-full">CHECKOUT</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Navbar;
