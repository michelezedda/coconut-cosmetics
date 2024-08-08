import { useAppContext } from "../context/appContext";
import { RxCross1 } from "react-icons/rx";
import { FiTrash2 } from "react-icons/fi";

function Cart({ setShowCart }) {
  const { cart, removeProduct, calculateTotal, shippingPrice } =
    useAppContext();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-slate-900/70 z-40"></div>
      <div className="max-w-[400px] w-full h-auto rounded-bl-md bg-white fixed right-0 top-16 lg:top-20 p-6 z-50">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowCart(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
          YOUR CART
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
                    alt={item.name}
                    className="w-12 h-12 rounded-sm"
                  />
                  <span className="ml-4">{item.name}</span>
                </div>
                <div className="flex items-center">
                  <FiTrash2
                    className="text-lg cursor-pointer mr-4"
                    onClick={() => removeProduct(item.id)}
                  />
                  <span>${item.price}</span>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="flex justify-between mt-4 font-bold">
          <div>Subtotal:</div>
          <div>$&nbsp;{calculateTotal().toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-2">
          <div>Shipping:</div>
          <div>$&nbsp;{shippingPrice.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-2 font-bold text-red-700">
          <div>Total:</div>
          <div>$ {(calculateTotal() + shippingPrice).toFixed(2)}</div>
        </div>
        <button className="bg-slate-600 text-white text-center w-full rounded-3xl py-2 hover:bg-red-800 active:scale-95 mt-4">
          CHECKOUT
        </button>
      </div>
    </>
  );
}

export default Cart;
