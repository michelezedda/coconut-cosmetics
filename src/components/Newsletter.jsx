import { BsMailbox2 } from "react-icons/bs";

function Newsletter() {
  return (
    <>
      <div className="container">
        <div className="p-4 rounded-md" style={{ backgroundColor: "#d6e7ff" }}>
          <p className="flex justify-between font-bold text-2xl">
            <div className="justify-between">
              <div className="text-5xl mr-2 flex"></div> <BsMailbox2 />
              <p>TITOLO</p>
            </div>
            <div className="text-5xl mr-2">fwd</div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
