import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="text-white p-8 bg-gray-900 text-center">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <ul>
              <li className="hover:opacity-55 cursor-pointer">About Us</li>
              <li className="hover:opacity-55 cursor-pointer">
                Payments Method
              </li>
              <li className="hover:opacity-55 cursor-pointer">Shipping</li>
              <li className="hover:opacity-55 cursor-pointer">Returns</li>
              <li className="hover:opacity-55 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="hover:opacity-55 cursor-pointer">
                Terms and Conditions
              </li>
              <li className="hover:opacity-55 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:opacity-55 cursor-pointer">Cookie Policy</li>
              <li className="hover:opacity-55 cursor-pointer">
                cocopoints Policy
              </li>
              <li className="hover:opacity-55 cursor-pointer">
                Career Opportunities
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="hover:opacity-55 cursor-pointer">Sign Up</li>
              <li className="hover:opacity-55 cursor-pointer">Sing In</li>
              <li className="hover:opacity-55 cursor-pointer">My Account</li>
              <li className="hover:opacity-55 cursor-pointer">Tracking</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <span className="flex justify-center mb-4">
            <Facebook
              color="white"
              size={35}
              className="hover:opacity-55 cursor-pointer"
            />
            <Instagram
              color="white"
              size={35}
              className="hover:opacity-55 cursor-pointer ml-3 mr-4"
            />
            <Twitter
              color="white"
              size={35}
              className="hover:opacity-55 cursor-pointer"
            />
          </span>
          <p>
            {new Date().getFullYear()} coconut. cosmetics&#174; - All rights
            reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
