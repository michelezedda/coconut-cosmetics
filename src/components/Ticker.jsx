function Ticker() {
  return (
    <>
      <div className="fixed w-full bg-gray-900 text-white py-1 z-10">
        <p className="animate-ticker w-max lg:w-full">
          🚚 Free shipping on orders over $50 <span className="px-2">|</span> 📩
          Sign up for our newsletter and get 10% off your first order!
        </p>
      </div>
    </>
  );
}

export default Ticker;
