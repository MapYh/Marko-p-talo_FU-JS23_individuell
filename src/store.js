import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  orderNr: "Place a order first",
  eta: 0,
  beanTitle: "",
  beanPrice: 0,
  setBeanTitle: (beanTitle) => set({ beanTitle }),
  setBeanPrice: (beanPrice) => set({ beanPrice }),
  setordernumber: (orderNr) => set({ orderNr }),
  setEta: (eta) => set({ eta }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
