import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...cartItems, product]);
  };

  // // Function to remove a product from the cart
  // const removeFromCart = (product) => {

  // }
  // };

  return (
    <AppContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
