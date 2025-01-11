import { CityResource } from "@/services/api/location/nearest-city/nearest-city.response";
import { getItemLocalStorage } from "@/utils/storage/get-item-local-storage";
import { removeFromLocalStorage } from "@/utils/storage/remove-item-local-storage";
import { setItemLocalStorage } from "@/utils/storage/set-item-local-storage";

export const getCityLocalStorage = async () => {
  return await getItemLocalStorage("city");
};
export const setCityLocalStorage = async ({ city }: { city: CityResource }) => {
  return await setItemLocalStorage("city", city);
};
export const removeCityLocalStorage = async () => {
  return await removeFromLocalStorage("city");
};
