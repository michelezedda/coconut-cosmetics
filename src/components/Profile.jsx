import { RxCross1 } from "react-icons/rx";
import { toast } from "react-hot-toast";

function Profile({ setShowProfile }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-slate-900/70 z-40 "></div>
      <div className="max-w-[400px] w-full h-auto rounded-bl-md bg-white fixed right-0 top-16 lg:top-20 p-6 z-50">
        <RxCross1
          className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
          onClick={() => setShowProfile(false)}
        />
        <h3 className="pt-6 text-lg font-medium text-gray-600">YOUR PROFILE</h3>
        <div className="mt-4 mb-4">You are not logged in</div>
        <button
          onClick={() =>
            toast.error("This is just a demo; you cannot proceed.")
          }
          className="bg-slate-600 text-white text-center w-full rounded-3xl py-2 hover:bg-slate-700  active:scale-95 mt-4"
        >
          SING UP
        </button>
        <button
          onClick={() =>
            toast.error("This is just a demo; you cannot proceed.")
          }
          className="bg-slate-600 text-white text-center w-full rounded-3xl py-2 hover:bg-slate-700 active:scale-95 mt-4"
        >
          SING IN
        </button>
      </div>
    </>
  );
}

export default Profile;
