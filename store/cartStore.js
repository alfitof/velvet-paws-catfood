// stores/cartStore.js
import create from "zustand";

const useCartStore = create((set) => {
  // const isBrowser = typeof window !== "undefined";

  const initialState = {
    cartItems: [],
  };

  set(initialState);

  return {
    ...initialState,

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
  };
});

export default useCartStore;
