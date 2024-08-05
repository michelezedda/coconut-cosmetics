import { useCartContext } from "../context/cartContext";
import { RxCross1 } from "react-icons/rx";

function Cart({ setShowCart }) {
  const { cart } = useCartContext();

  return (
    <>
      <div
        className=" w-full h-screen fixed left-0 top-0 z-50"
        onClick={() => setShowCart(false)}
      ></div>
      <div
        className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px]"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>
        <div className="mt-6">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="border-b py-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 inline-block"
                />
                <span className="ml-4">{item.name}</span>
                <span className="ml-4">${item.price}</span>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mb-4 mt-4">
          View Cart
        </button>
        <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark">
          Checkout
        </button>
      </div>
    </>
  );
}

export default Cart;
