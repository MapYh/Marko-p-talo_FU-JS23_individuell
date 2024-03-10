import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  orderNr: "Place a order first",
  eta: 0,
  beanTitle: "",
  beanPrice: 0,
  coffeeList: [
    {
      coffeTitle: "No coffee",
      coffePrice: 0,
      coffeeId: "test",
      coffeCount: 0,
    },
  ],
  updateCount: [
    {
      coffeTitle: "No coffee",
      coffePrice: 0,
      coffeeId: "test",
      coffeCount: 0,
    },
  ],

  setCoffeeList: (coffeTitle, coffePrice, coffeeId, coffeCount) => {
    /* if (typeof coffeTitle === "string") { */
    /* if (coffeCount === 1) { */
    /* coffeCount++; */
    /* } */
    /* } else { */
    set((state) => ({
      coffeeList: [
        ...state.coffeeList,
        { coffeTitle, coffePrice, coffeeId, coffeCount },
      ],
    }));
  },
  /*  }, */
  setupdateCount: (coffeCount) =>
    set((state) => ({
      coffeeList: [
        {
          ...state.coffeeList,
          coffeCount: coffeCount + 1,
        },
      ],
    })),

  deleteItem: (value) => {
    set((oldValues) => {
      return oldValues.filter((fruit) => fruit !== value);
    });
  },

  /*  addItemToCart: (coffeTitle, coffePrice, coffeeId, coffeCount, coffeeList) => {
    const itemExists = coffeeList.find(
      (cartitem) => cartitem.coffeeId === coffeeList.coffeeId
    );
    if (itemExists) {
      console.log("store already", itemExists);
      if () {
        console.log()
      }
    } else {
      set((state) => ({
        coffeeList: [
          ...state.coffeeList,
          { coffeTitle, coffePrice, coffeeId, coffeCount },
        ],
      }));
    }
 if (coffeeList.coffeCount === 0) {
      set((state) => ({
        items: state.coffeeList.filter((coffeeList) => coffeeList.id !== id),
      }));
    }
  }, 
  */

  setBeanTitle: (beanTitle) => set({ beanTitle }),
  setBeanPrice: (beanPrice) => set({ beanPrice }),
  setordernumber: (orderNr) => set({ orderNr }),
  setEta: (eta) => set({ eta }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
