import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add product
  const addToCart = (product) => {
    setCart((oldCart) => {
      const existingProduct = oldCart.find(
        (item) => item.id === product.id
      );
      //product.id (Line 12): The product object being passed to addToCart is undefined.
      //item.id (Inside .find): If an element inside the oldCart array is undefined or null, the comparison will crash.

      if (existingProduct) {
        return oldCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...oldCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart((oldCart) =>
      oldCart.filter((item) => item.id !== id)
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  }

  // Total items
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // Total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  // Shipping
  const Shipping = cartTotal > 10000 ? 0 : 40;

  // Total Price
  const totalPrice = cartTotal + Shipping;
  

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        cartCount,
        cartTotal,
        Shipping,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}