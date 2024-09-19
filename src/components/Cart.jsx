import { useAppContext } from "../context/appContext";
import { RxCross1 } from "react-icons/rx";
import { FiTrash2 } from "react-icons/fi";
import toast from "react-hot-toast";

function Cart({ setShowCart }) {
  const {
    cart,
    removeProduct,
    calculateTotal,
    shippingPrice,
    totalPoints,
    cocoPoints,
  } = useAppContext();

  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-slate-900/70 z-40"
        aria-hidden="true"
      ></div>
      <div className="max-w-[400px] w-full h-auto rounded-bl-md bg-white fixed right-0 top-16 lg:top-20 p-6 z-50 shadow-lg">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
          aria-label="Close cart"
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          Your Cart
        </h3>
        <div className="mt-6 max-h-[500px] overflow-y-auto pr-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="border-b py-2 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={`Image of ${item.name}`}
                    className="w-12 h-12 rounded-sm object-cover"
                  />
                  <div className="flex flex-col ml-4">
                    <span className="block text-sm font-semibold">
                      {item.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </span>
                    <span className="text-sm text-gray-500">
                      {item.points * item.quantity} 🥥
                      {item.points * item.quantity > 1 ? `points` : `point`}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiTrash2
                    className="text-lg cursor-pointer mr-4 hover:text-red-600"
                    onClick={() => removeProduct(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  />
                  <span className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          )}
        </div>
        <div className="flex justify-between mt-2 pb-4 text-sm">
          <div>Total cocoPoints:</div>
          <div>{totalPoints} 🥥 </div>
        </div>
        <div className="flex justify-between mt-4 font-bold">
          <div>Subtotal:</div>
          <div>${calculateTotal().toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-2">
          <div>Shipping:</div>
          <div>${shippingPrice.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-2 font-bold text-red-700">
          <div>Total:</div>
          <div>${(calculateTotal() + shippingPrice).toFixed(2)}</div>
        </div>
        <button
          className="bg-slate-600 text-white text-center w-full rounded-3xl py-2 hover:bg-slate-700 active:scale-95 mt-4"
          onClick={() =>
            toast.error("This is just a demo; you cannot proceed.")
          }
          aria-label="Proceed to checkout"
        >
          CHECKOUT
        </button>
      </div>
    </>
  );
}

export default Cart;
