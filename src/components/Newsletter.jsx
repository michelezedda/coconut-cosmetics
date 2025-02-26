import { useFormik } from "formik";
import { Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function Newsletter() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      toast("Thank you for subscribing!", {
        icon: "📨",
      });
    },
  });

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4 mt-20 text-black  bg-gray-300">
        <span className="font-semibold">
          Get 10% off your first order signing up to our newsletter!
        </span>
        <div className="relative">
          <form onSubmit={formik.handleSubmit} className="mt-4">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border rounded-full w-[400px] p-2 pl-5"
            />
            <button
              className="absolute right-4 top-6 active:scale-98 cursor-pointer"
              type="submit"
            >
              <Send color="black" size={25} />
            </button>
            <div className="text-center">
              <input type="checkbox" required className="mt-4" />
              <span className="text-[14px] ml-1">
                By submitting this form, you agree to the privacy policy*
              </span>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default Newsletter;
