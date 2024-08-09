import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-white bg-slate-800 p-4">
        <div className="container">
          <div className="flex justify-between p-6 leading-8">
            <ul>
              <li className="hover:text-sky-600 cursor-pointer">About Us</li>
              <li className="hover:text-sky-600 cursor-pointer">
                Payments Method
              </li>
              <li className="hover:text-sky-600 cursor-pointer">Shipping</li>
              <li className="hover:text-sky-600 cursor-pointer">Returns</li>
              <li className="hover:text-sky-600 cursor-pointer">Contact Us</li>
            </ul>
            <ul>
              <li className="hover:text-sky-600 cursor-pointer">
                Terms and Conditions
              </li>
              <li className="hover:text-sky-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-sky-600 cursor-pointer">
                Cookie Policy
              </li>
              <li className="hover:text-sky-600 cursor-pointer">
                cocoPoints Policy
              </li>
              <li className="hover:text-sky-600 cursor-pointer">
                Career Opportunities
              </li>
            </ul>
            <ul>
              <li className="hover:text-sky-600 cursor-pointer">Sign Up</li>
              <li className="hover:text-sky-600 cursor-pointer">Sing In</li>
              <li className="hover:text-sky-600 cursor-pointer">My Account</li>
              <li className="hover:text-sky-600 cursor-pointer">Wishlist</li>
              <li className="hover:text-sky-600 cursor-pointer">
                Order Tracking
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-4">
            <div className="flex gap-4 text-2xl">
              <a
                className="hover:text-sky-600"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
              <a
                className="hover:text-sky-600"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="hover:text-sky-600"
                href="https://www.x.com/"
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </div>
            <p>
              Copyright © {currentYear} coconut. cosmetics - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
