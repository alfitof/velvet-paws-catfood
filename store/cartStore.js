// stores/cartStore.js
import create from "zustand";

const useCartStore = create((set) => ({
  cartItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems")) || []
      : [],

  addToCart: (item) => {
    set((state) => {
      const updatedCartItems = [...state.cartItems, item];
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
      return { cartItems: updatedCartItems };
    });
  },
  removeFromCart: (index) =>
    set((state) => {
      const updatedCart = [...state.cartItems];
      updatedCart.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return { cartItems: updatedCart };
    }),
}));

export default useCartStore;
