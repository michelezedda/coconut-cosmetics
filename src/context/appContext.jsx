import { createContext, useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    calculateShippingPrice();
  }, [cart]);

  const addToCart = (product) => {
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
  };

  const removeProduct = (productId) => {
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
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShippingPrice = () => {
    const total = calculateTotal();
    setShippingPrice(total >= 50 || total === 0 ? 0 : 9.99);
  };

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
