import { useCartContext } from "../context/cartContext";
import { RxCross1 } from "react-icons/rx";
import { FiTrash2 } from "react-icons/fi";

function Cart({ setShowCart }) {
  const { cart, removeProduct } = useCartContext();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-slate-900/70 z-40 "></div>
      <div
        className="max-w-[400px] w-full h-auto rounded-bl-md bg-white fixed right-0 top-16 lg:top-20 p-6 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
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
                  className="w-12 h-12 inline-block rounded-sm"
                />
                <span className="ml-4">{item.name}</span>
                <div className="flex justify-end">
                  <FiTrash2
                    className="text-lg cursor-pointer mr-4"
                    onClick={() => removeProduct(item.id)}
                  />
                  <span className="ml-4 text-red-700 font-bold mr-4">
                    ${item.price}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
        <div className="mt-6 text-2xl mb-4 text-right">
          Total:&nbsp;&nbsp;
          <span className="font-bold text-red-700 mr-4">
            $ {cart.reduce((a, b) => a + b.price, 0)}
          </span>
        </div>
        <button className="bg-slate-600 text-white text-center w-full rounded-3xl py-2 hover:bg-red-800 active:scale-95">
          CHECKOUT
        </button>
      </div>
    </>
  );
}

export default Cart;
