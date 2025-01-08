import { create } from "zustand";

type CityState = {
  city: string | null;
  pathname: string | null;
  setPathname: (pathname: string | null) => void;
};

export const useCityStore = create<CityState>((set) => ({
  city: null,
  pathname: null,
  setPathname: (pathname: string | null) => set({ pathname }),
}));
