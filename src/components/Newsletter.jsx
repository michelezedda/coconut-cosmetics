import { useFormik } from "formik";
import { Send } from "lucide-react";

function Newsletter() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="flex flex-col relative justify-center items-center p-4 mt-10 bg-gray-300">
        <span>Get 10% off your first order signing up to our newsletter!</span>
        <form onSubmit={formik.handleSubmit} className="mt-4">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="border rounded-full w-[320px] p-2 pl-5 mr-4"
          />
          <button
            className="cursor-pointer absolute right-28 bottom-6 active:scale-98"
            type="submit"
          >
            <Send color="black" size={25} />
          </button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
