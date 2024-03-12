import { create } from "zustand";

export const useStore = create((set) => ({
  cart: [],
  Users: [],
  count: 0,
  totalSum: 0,
  orderNr: "",
  eta: 0,
  setOrderNr: (orderNr) => set({ orderNr }),
  setEta: (eta) => set({ eta }),

  resetCart: () => set({ cart: [], count: 0, totalSum: 0 }), //När man backar ur köpet tillbaka till menun ska korgen tömmas.

  addcoffeeToCart: (item) => {
    set((state) => {
      let newCart = [...state.cart];
      console.log(newCart);
      let index = newCart.findIndex((cartItem) => cartItem.id === item.id);

      if (index !== -1) {
        //betyder att ett id finns i korgen.
        newCart[index].qty += 1; //Plussa på produkten.
        newCart[index].itemSum = newCart[index].qty * newCart[index].price; //Räkna ut nya priset.
      } else {
        //Annars om produkten inte finns i korgen sedan tidigare lägg till produkten i korgen.
        newCart.push({ ...item, qty: 1, itemSum: item.price * 1 }); // Lägg till den i korgen.
      }

      let totalCount = newCart.reduce(
        //Summera antalet produkter i korgen in i en variabel.
        (total, cartItem) => total + cartItem.qty,
        0
      );

      let totalSum = newCart.reduce(
        //Summera kostanderna i korgen in i en variabel.

        (total, cartItem) => total + cartItem.itemSum,
        0
      );

      return { cart: newCart, count: totalCount, totalSum: totalSum };
    });
  },

  increaseQty: (id) => {
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

  addUser: (item) => {
    set((state) => {
      let newUser = [...state.cart];
      let index = newUser.findIndex((cartItem) => cartItem.id === item.id);

      if (index !== -1) {
        console.log("User already exists");
      } else {
        //Annars om produkten inte finns i korgen sedan tidigare lägg till produkten i korgen.
        newUser.push({ ...item, name: "", Email: "" }); // Lägg till den i korgen.
      }
    });
  },
}));
