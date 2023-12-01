import React, { useState } from "react";
import Banner from "./components/Banner";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    // Initialize with some example items
    { id: 1, name: "Item 1", price: 20 },
    { id: 2, name: "Item 2", price: 30 },
    { id: 3, name: "Item 3", price: 40},
    { id: 4, name: "Item 4", price: 50 },
    { id: 5, name: "Item 5", price: 60 },
    { id: 6, name: "Item 6", price: 70 },

  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <Banner>
      <div className="w-full h-screen flex items-center justify-center">

        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-[#F73D27]">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-center mb-4">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 focus:outline-none"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-bold">Total: ${calculateTotal()}</p>
              </div>
              <button
                className="bg-[#F73D27] text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300 mt-4"
              >
                Checkout
              </button>
            </>
          )}
        </div>
      </div>
    </Banner>
  );
};

export default CartPage;
