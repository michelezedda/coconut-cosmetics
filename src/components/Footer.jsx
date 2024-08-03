import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="text-white bg-slate-800 p-4 mt-40">
        <div className="container">
          <div className="flex justify-between p-6 leading-8">
            <ul>
              <li>About Us</li>
              <li>Payments Method</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Cookie Preferences</li>
              <li>Career Opportunities</li>
            </ul>
            <ul>
              <li>Sign Up</li>
              <li>Sing In</li>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-4">
            <div className="flex gap-4 text-2xl">
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.x.com/" target="_blank">
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
