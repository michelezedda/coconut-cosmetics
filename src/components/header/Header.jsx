import "./header.css";
import myCoconut from "../../../public/coconut.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <h1>Welcome to coconut. cosmetics</h1>
        </div>
        <img src={myCoconut} alt="coconut" />
      </div>
    </>
  );
}

export default Header;
