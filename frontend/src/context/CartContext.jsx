// import { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// // Custom hook for using the cart context
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const storedCart = localStorage.getItem("cart");
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // ✅ Add item to cart (or increase quantity)
//   const addToCart = (product) => {
//     setCartItems((prevCart) => {
//       const existingItem = prevCart.find((item) => item._id === product._id);

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   // ✅ Update quantity dynamically
//   const updateCartQuantity = (productId, quantity) => {
//     setCartItems((prevCart) =>
//       prevCart.map((item) =>
//         item._id === productId ? { ...item, quantity } : item
//       )
//     );
//   };

//   // ✅ Remove a single quantity of an item
//   const removeFromCart = (productId) => {
//     setCartItems((prevCart) =>
//       prevCart
//         .map((item) =>
//           item._id === productId
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // ✅ Remove item completely
//   const removeProductCompletely = (productId) => {
//     setCartItems((prevCart) =>
//       prevCart.filter((item) => item._id !== productId)
//     );
//   };

//   // ✅ Clear the entire cart
//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem("cart");
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         updateCartQuantity, // ✅ Added function to update quantity dynamically
//         removeFromCart,
//         removeProductCompletely,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Custom hook for using the cart context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add item to cart (or increase quantity)
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);

      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Update item quantity directly
  const updateCartItemQuantity = (productId, quantity) => {
    setCartItems(
      (prevCart) =>
        prevCart
          .map((item) =>
            item._id === productId ? { ...item, quantity } : item
          )
          .filter((item) => item.quantity > 0) // Removes item if quantity becomes zero
    );
  };

  // ✅ Remove item completely from cart
  const removeCartItem = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item._id !== productId)
    );
  };

  // ✅ Clear entire cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity, // ✅ Improved quantity update
        removeCartItem, // ✅ Directly removes item from cart
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
