import { BsMailbox2 } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
import Swal from "sweetalert2";

function Newsletter() {
  const handleClick = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <>
      <div
        className="p-6 pl-20 pr-20 mt-24"
        style={{ backgroundColor: "#d6e7ff" }}
      >
        <div className="container">
          <p className="flex justify-between">
            <div className="flex text-slate-800">
              <div className="text-6xl flex">
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
                  className="border-2 border-slate-800 rounded-full p-4 w-[500px] text-xl text-slate-800"
                  required
                />
                <button
                  className="border-2 border-slate-800 text-white bg-slate-800 rounded-full p-3 text-xl ml-4 active:scale-95 relative right-[74px] top-[2px]"
                  type="submit"
                  onClick={handleClick}
                  required
                >
                  <BsSendFill />
                </button>
                <label className="flex mt-2 ml-4">
                  <input type="checkbox" className="mr-1" required />
                  <p className="text-sm">
                    By submitting this form, you agree to the privacy policy*
                  </p>
                </label>
              </form>
              <div className="flex mt-2"></div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
