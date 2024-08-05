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
      <nav className="flex sticky top-0 z-40 justify-between items-center bg-white p-2 md:px-10">
        <Link to="/">
          <img
            src={myLogo}
            alt="coconut-cosmetics logo"
            className="h-14 lg:h-16"
          />
        </Link>
        <ul className="flex space-x-4 text-xl md:text-2xl place-items-center">
          <li className="icon-wrapper relative">
            <IoBagHandle />
            <CartBadge size="w-[20px] h-[20px] md:w-[25px] md:h-[25px]" />
          </li>
          <li
            className="icon-wrapper"
            onClick={() => {
              changeTheme();
            }}
          >
            <FaSun className="hidden dark:block" />
            <FaMoon className="block dark:hidden" />
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
