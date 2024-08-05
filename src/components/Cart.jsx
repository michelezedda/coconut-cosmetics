import { IoBagCheckOutline } from "react-icons/io5";

function Cart() {
  return (
    <>
      <div className="fixed bg-slate-100 h-full w-full z-50 sm:w-[500px] sm:right-0 sm:top-0">
        <div className="flex flex-col justify-center items-center">
          <img src="logo.png" alt="" className="mb-10" />
          <h4 className="text-4xl mb-10">YOUR CART</h4>
          <div className="flex justify-items-start items bg-slate-300 p-1 rounded-md w-5/6">
            <img
              src="face-moisturizer.png"
              alt=""
              className="w-28 mr-6 rounded-md"
            />
            <div className="flex flex-col">
              <h3 className="text-xl my-2">Face Moisturizer</h3>
              <p className="text-red-800 text-2xl mb-4">$ 20.00</p>
              <div className="flex gap-2 mb-1">
                <button className="bg-slate-600 text-white rounded-full p-2">
                  +
                </button>
                <button className="bg-slate-600 text-white rounded-full p-2">
                  -
                </button>
                <button className="bg-slate-600 text-white rounded-full p-2">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 ">
            <button className="flex bg-red-800 text-10 text-white p-4 rounded-full active:scale-95">
              <IoBagCheckOutline className="mr-4 text-2xl" /> PROCEED TO
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
