import myLogo from "/logo.png";
import { Link } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/">
          <img src={myLogo} alt="coconut-cosmetics logo" />
        </Link>
        <ul className="flex space-x-4 text-2xl">
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
