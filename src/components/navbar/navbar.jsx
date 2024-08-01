import myLogo from "/logo.png";
import { Link } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";
import { FaSun, FaMoon } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import { useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <nav className="flex sticky top-0 z-100 justify-between items-center shadow-md shadow-slate-400 mb-10 bg-white">
        <Link to="/">
          <img src={myLogo} alt="coconut-cosmetics logo" className="px-8" />
        </Link>
        <ul className="flex space-x-4 text-2xl px-8">
          <li>categories</li>
          <li>
            <TbShoppingCart />
          </li>
          <li
            onClick={() => {
              changeTheme();
            }}
          >
            <FaSun />
          </li>
          <li>
            <MdAccountCircle />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
