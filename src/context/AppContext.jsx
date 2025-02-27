import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // Function to add a product to the cart
  const addToCart = (newItem) => {
    setCart((prevCart) =>
      prevCart.find((item) => item.id === newItem.id)
        ? prevCart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...newItem, quantity: 1 }]
    );
  };

  // Function to remove a product from the cart
  const removeFromCart = (targetItem) => {};

  // Calculate total points
  const totalPoints = cart.reduce(
    (total, item) => total + item.points * item.quantity,
    0
  );

  // Calculate subtotal price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate shipping fee
  const shippingFee = totalPrice > 50 ? 0 : 9.99;

  return (
    <AppContext.Provider
      value={{
        cart,
        cartQuantity,
        addToCart,
        removeFromCart,
        totalPoints,
        totalPrice,
        shippingFee,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
