import React from "react";

function Profile() {
  return (
    <>
      <div className="absolute top-14 right-0 w-[25rem] bg-white rounded-bl-xl text-black p-4">
        <h4 className="text-gray-600 font-semibold text-lg my-4">
          YOUR PROFILE
        </h4>
        <p className="text-gray-600 text-center mb-4">You are not logged in.</p>
        <div className="flex flex-col gap-2">
          <button className="myButton">LOG IN</button>
          <button className="myButton">SIGN UP</button>
        </div>
      </div>
    </>
  );
}

export default Profile;
