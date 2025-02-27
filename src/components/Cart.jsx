import { useAppContext } from "../context/AppContext";

function Cart() {
  const { cart, removeFromCart, totalPoints, totalPrice, shippingFee } =
    useAppContext();

  return (
    <>
      <div className="absolute top-14 right-0 w-[25rem] bg-white rounded-bl-xl text-black p-4">
        <h4 className="text-gray-600 font-semibold text-lg mt-4 mb-8">
          YOUR CART
        </h4>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="mt-2">
              <div className="flex justify-between">
                <div className="flex">
                  <div className="w-15 h-15">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-sm">{item.name}</p>
                    <div className="rounded-full border px-1 border-gray-500">
                      <p className="text-sm text-gray-500">
                        Quantity: - {item.quantity} +
                      </p>
                    </div>
                    <p className="text-sm  text-gray-500">
                      {item.points} 🥥points
                    </p>
                  </div>
                </div>
                <button onClick={removeFromCart} className=".myButton">
                  REMOVE
                </button>
                <div className="flex items-center">
                  <p className="font-semibold">
                    $ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <hr className="text-gray-200 mt-2" />
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mb-4">Your cart is empty.</p>
        )}
        {totalPoints > 0 && (
          <p className="mt-2">Total cocopoints: {totalPoints} 🥥</p>
        )}
        <div className="flex justify-between mt-6 font-semibold">
          <p>Subtotal:</p>
          <p>$ {totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>{shippingFee === 0 ? "Free Shipping!" : shippingFee}</p>
        </div>
        <div className="flex justify-between font-semibold text-red-700">
          <p>Total:</p>
          <p>$ {(totalPrice + shippingFee).toFixed(2)}</p>
        </div>
        <button className="myButton mt-4 w-full">CHECKOUT</button>
      </div>
    </>
  );
}

export default Cart;
