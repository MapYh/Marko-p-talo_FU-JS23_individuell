import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  count: 0,
  totalSum: 0,
  orderNr: "",
  eta: 0,
  setOrderNr: (orderNr) => set({ orderNr }),
  setEta: (eta) => set({ eta }),

  addToCart: (item) => {
    set((state) => {
      let newCart = [...state.cart];
      let index = newCart.findIndex((cartItem) => cartItem.id === item.id);

      if (index !== -1) {
        newCart[index].qty += 1;
        newCart[index].itemSum = newCart[index].qty * newCart[index].price;
      } else {
        newCart.push({ ...item, qty: 1, itemSum: item.price * 1 });
      }

      let totalCount = newCart.reduce(
        (total, cartItem) => total + cartItem.qty,
        0
      );

      let totalSum = newCart.reduce(
        (total, cartItem) => total + cartItem.itemSum,
        0
      );

      return { cart: newCart, count: totalCount, totalSum: totalSum };
    });
  },

  increaseQty: (id) => {
    console.log("inc");
    return set((state) => {
      let newCart = [...state.cart];
      let index = newCart.findIndex((cartItem) => cartItem.id === id);
      if (index !== -1) {
        newCart[index].qty += 1;
        newCart[index].itemSum = newCart[index].qty * newCart[index].price;
      }

      let totalCount = newCart.reduce(
        (total, cartItem) => total + cartItem.qty,
        0
      );

      let totalSum = newCart.reduce(
        (total, cartItem) => total + cartItem.itemSum,
        0
      );

      return { cart: newCart, cartCount: totalCount, totalSum: totalSum };
    });
  },

  decreaseQty: (id) => {
    console.log("dec");
    return set((state) => {
      let newCart = [...state.cart];
      let index = newCart.findIndex((cartItem) => cartItem.id === id);
      if (index !== -1) {
        newCart[index].qty -= 1;
        if (newCart[index].qty === 0) {
          newCart.splice(index, 1);
        } else {
          newCart[index].itemSum = newCart[index].qty * newCart[index].price;
        }
      }

      let totalCount = newCart.reduce(
        (total, cartItem) => total + cartItem.qty,
        0
      );

      let totalSum = newCart.reduce(
        (total, cartItem) => total + cartItem.itemSum,
        0
      );

      return { cart: newCart, cartCount: totalCount, totalSum: totalSum };
    });
  },
}));
