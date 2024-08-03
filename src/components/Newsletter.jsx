import { BsMailbox2 } from "react-icons/bs";

function Newsletter() {
  return (
    <>
      <div className="container">
        <div className="p-6 rounded-md" style={{ backgroundColor: "#d6e7ff" }}>
          <p className="flex justify-between">
            <div className="flex">
              <div className="text-6xl mr-2 flex">
                <BsMailbox2 />
              </div>
              <div className="flex flex-col ml-6">
                <p className="text-2xl font-bold">Sign up to our newsletter</p>
                <p className="text-lg">... and get 10% off your first order!</p>
              </div>
            </div>
            <div className="flex flex-col place-items-center">
              <form>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border-2 border-black w-xl rounded-lg p-2 text-xl"
                  required
                />
                <button
                  className="border-2 border-black bg-white rounded-lg p-2 text-xl ml-4 active:scale-95"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex mt-2">
                <label>
                  <input type="checkbox" />
                </label>
                <p className="text-sm ml-1">
                  By submitting this form, you agree to the privacy policy*
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
