import React from "react";

function CartBadge() {
  return (
    <>
      <div className="absolute bg-red-600 text-white text-[14px] -right-3 -top-2 rounded-full w-[30px] h-[30px] grid place-items-center">
        0
      </div>
    </>
  );
}

export default CartBadge;
