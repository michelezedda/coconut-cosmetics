import myLogo from "/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src={myLogo} alt="coconut-cosmetics logo" />
        </Link>
        <ul className="menu">
          <li>
            <a>categories</a>
          </li>
          <li>
            <a>
              <TbShoppingCart />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
