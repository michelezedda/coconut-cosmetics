import { createContext, useContext, useState, useMemo } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // // Function to add a product to the cart
  const addToCart = (newItem) => {
    setCart((prevCart) => {
      let itemFound = false;

      const updatedCart = prevCart.map((item) => {
        if (item.id === newItem.id) {
          itemFound = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return itemFound
        ? updatedCart
        : [...prevCart, { ...newItem, quantity: 1 }];
    });
  };

  // // Function to increase product quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // // Function to remove a product from the cart or decrease its quantity
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total points
  const totalPoints = useMemo(
    () => cart.reduce((total, item) => total + item.points * item.quantity, 0),
    [cart]
  );

  // Calculate subtotal price
  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart]
  );

  // Calculate shipping fee
  const shippingFee = totalPrice === 0 || totalPrice >= 50 ? 0 : 9.99;

  return (
    <AppContext.Provider
      value={{
        cart,
        cartQuantity,
        addToCart,
        increaseQuantity,
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
