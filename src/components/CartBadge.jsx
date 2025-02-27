import { useAppContext } from "../context/AppContext";

const CartBadge = () => {
  const { cart, cartQuantity } = useAppContext();

  return (
    <>
      {cart.length > 0 ? (
        <div className="absolute left-7 w-[25px] h-[25px] bg-red-600 rounded-full text-white text-center">
          {cartQuantity}
        </div>
      ) : null}
    </>
  );
};

export default CartBadge;
