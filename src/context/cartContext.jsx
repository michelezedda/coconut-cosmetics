import { createContext, useContext, useState } from "react";

// Create the Cart context
const CartContext = createContext();

// Create a custom hook to use the Cart context
export const useCartContext = () => useContext(CartContext);

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeProduct = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeProduct, showCart, setShowCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
