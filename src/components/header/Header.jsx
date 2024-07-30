import myCoconut from "../../../public/coconut.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <h1 className="text-3xl font-bold underline text-yellow-400 bg-red-300">
            Welcome to coconut. cosmetics
          </h1>
        </div>
        <img src={myCoconut} alt="coconut" />
      </div>
    </>
  );
}

export default Header;
