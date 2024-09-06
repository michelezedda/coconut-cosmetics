import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [shippingPrice, setShippingPrice] = useState(0);

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    calculateShippingPrice();
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = useCallback(
    (product) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    },
    [setCart]
  );

  // Function to remove a product from the cart
  const removeProduct = useCallback(
    (productId) => {
      setCart((prevCart) => {
        const product = prevCart.find((item) => item.id === productId);
        if (product.quantity > 1) {
          return prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCart.filter((item) => item.id !== productId);
        }
      });
    },
    [setCart]
  );

  // Calculate total cart value
  const calculateTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // Calculate total points
  const totalPoints = cart.reduce((total, item) => {
    return total + item.points * item.quantity;
  }, 0);

  // Calculate shipping price based on cart value
  const calculateShippingPrice = useCallback(() => {
    const total = calculateTotal();
    setShippingPrice(total >= 50 || total === 0 ? 0 : 9.99);
  }, [calculateTotal]);

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeProduct,
        calculateTotal,
        shippingPrice,
        showCart,
        setShowCart,
        showProfile,
        setShowProfile,
        totalPoints,
        cartQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
