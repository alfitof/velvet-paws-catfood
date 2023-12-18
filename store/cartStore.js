// stores/cartStore.js
import create from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (item) => {
    set((state) => {
      const updatedCartItems = [...state.cartItems, item];
      return { cartItems: updatedCartItems };
    });
  },
  removeFromCart: (index) =>
    set((state) => {
      const updatedCart = [...state.cartItems];
      updatedCart.splice(index, 1);
      return { cartItems: updatedCart };
    }),
}));

export default useCartStore;
