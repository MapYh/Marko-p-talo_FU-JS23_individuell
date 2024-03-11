import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  count: 0,
  totalSum: 0,
  orderNumber: "",
  eta: 0,
  setOrderNumber: (orderNumber) => set({ orderNumber }),
  setEta: (eta) => set({ eta }),
  resetCart: () => set({ cart: [], count: 0, totalSum: 0 }),

  addToCart: (item) => {
    set((state) => {
      let updatedCart = [...state.cart];
      let index = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

      if (index !== -1) {
        updatedCart[index].quantity += 1;
        updatedCart[index].itemSum =
          updatedCart[index].quantity * updatedCart[index].price;
      } else {
        updatedCart.push({ ...item, quantity: 1, itemSum: item.price * 1 });
      }

      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum,
        0
      );

      return { cart: updatedCart, count: totalCount, totalSum: totalSum };
    });
  },

  increaseQuantity: (id) => {
    console.log("inc");
    return set((state) => {
      let updatedCart = [...state.cart];
      let index = updatedCart.findIndex((cartItem) => cartItem.id === id);
      if (index !== -1) {
        updatedCart[index].quantity += 1;
        updatedCart[index].itemSum =
          updatedCart[index].quantity * updatedCart[index].price;
      }

      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum,
        0
      );

      return { cart: updatedCart, cartCount: totalCount, totalSum: totalSum };
    });
  },

  decreaseQuantity: (id) => {
    console.log("dec");
    return set((state) => {
      let updatedCart = [...state.cart];
      let index = updatedCart.findIndex((cartItem) => cartItem.id === id);
      if (index !== -1) {
        updatedCart[index].quantity -= 1;
        if (updatedCart[index].quantity === 0) {
          updatedCart.splice(index, 1);
        } else {
          updatedCart[index].itemSum =
            updatedCart[index].quantity * updatedCart[index].price;
        }
      }

      let totalCount = updatedCart.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      let totalSum = updatedCart.reduce(
        (total, cartItem) => total + cartItem.itemSum,
        0
      );

      return { cart: updatedCart, cartCount: totalCount, totalSum: totalSum };
    });
  },
}));
