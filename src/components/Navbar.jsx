import myLogo from "/logo.png";
import { Link } from "react-router-dom";
import { IoBagHandle } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { useState } from "react";
import CartBadge from "./CartBadge";

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
      <nav className="flex sticky top-0 z-50 justify-between items-center shadow-md shadow-slate-400 mb-10 bg-white">
        <Link to="/">
          <img src={myLogo} alt="coconut-cosmetics logo" className="px-8" />
        </Link>
        <ul className="flex space-x-4 text-2xl px-8 place-items-center">
          <li className="icon-wrapper relative">
            <IoBagHandle />
            <CartBadge size="w-[25px] h-[25px]" />
          </li>
          <li
            className="icon-wrapper"
            onClick={() => {
              changeTheme();
            }}
          >
            <FaSun />
          </li>
          <li className="icon-wrapper">
            <RiUser3Fill />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
