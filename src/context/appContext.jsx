import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AppContext = createContext();

// Create a custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Create a provider component
export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    calculateShippingPrice();
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeProduct = (productId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        return [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
      }
      return prevCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce((a, b) => a + b.price, 0);
  };

  const calculateShippingPrice = () => {
    const total = calculateTotal();
    if (total >= 50 || total === 0) {
      setShippingPrice(0);
    } else {
      setShippingPrice(9.99);
    }
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