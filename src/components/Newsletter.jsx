import { BsMailbox2 } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
import { useState } from "react";
import Swal from "sweetalert2";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please enter a valid email address!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!isChecked) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please agree to the privacy policy!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank you for subscribing!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      className="p-6 pl-20 pr-20 mt-24"
      style={{ backgroundColor: "#d6e7ff" }}
    >
      <div className="container">
        <div className="flex justify-between">
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
            <form onSubmit={handleClick}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="border-2 border-slate-800 rounded-full p-4 w-[500px] text-xl text-slate-800"
              />
              <button
                className="border-2 border-slate-800 text-white bg-slate-800 rounded-full p-3 text-xl ml-4 active:scale-95 relative right-[74px] top-[2px]"
                type="submit"
              >
                <BsSendFill />
              </button>
              <label className="flex mt-2 ml-4">
                <input
                  type="checkbox"
                  className="mr-1"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <p className="text-sm">
                  By submitting this form, you agree to the privacy policy*
                </p>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
