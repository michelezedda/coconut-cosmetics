import React from "react";
import { useCartContext } from "../context/cartContext";

function CartBadge() {
  const { cart } = useCartContext();

  return (
    <>
      <div className="absolute bg-red-600 text-white text-[14px] -right-3 -top-2 rounded-full w-[30px] h-[30px] grid place-items-center">
        {cart.length}
      </div>
    </>
  );
}

export default CartBadge;
