import { CityResource } from "@/services/api/location/nearest-city/nearest-city.response";
import { create } from "zustand";
import { getCityLocalStorage } from "../local-storage/city";

type CityState = {
  city: CityResource | null;
  pathname: string | null;
  setPathname: (pathname: string | null) => void;
  setCity: (city: CityResource | null) => void;
  initializeCity: () => Promise<void>;
};

export const useCityStore = create<CityState>((set) => ({
  city: null,
  pathname: null,
  setPathname: (pathname: string | null) => set({ pathname }),
  setCity: (city: CityResource | null) => set({ city }),
  initializeCity: async () => {
    const city = await getCityLocalStorage();
    if (city) {
      set({ city });
    }
  },
}));
