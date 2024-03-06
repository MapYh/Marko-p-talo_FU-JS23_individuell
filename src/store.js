import { create } from "zustand";

export const useStore = create((set) => ({
  count: 0,
  orderNr: "string",
  eta: 0,
  setordernumber: (orderNr) => set({ orderNr }),
  setEta: (eta) => set({ eta }),
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
