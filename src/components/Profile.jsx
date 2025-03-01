import toast from "react-hot-toast";

function Profile() {
  const handleClick = () => {
    toast.error(
      "You can’t proceed, but you can pretend you did. That’s something."
    );
  };
  return (
    <>
      <div className="absolute top-14 right-0 w-[100dvw] sm:w-[30rem] bg-white sm:rounded-bl-xl text-black p-4">
        <h4 className="text-gray-600 font-semibold text-lg my-4">
          YOUR PROFILE
        </h4>
        <p className="text-gray-600 text-center mb-4">You are not logged in.</p>
        <div className="flex flex-col gap-2">
          <button className="myButton" onClick={handleClick}>
            LOG IN
          </button>
          <button className="myButton" onClick={handleClick}>
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
