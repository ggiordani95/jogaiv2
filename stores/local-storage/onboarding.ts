import { getItemLocalStorage } from "@/utils/storage/get-item-local-storage";
import { removeFromLocalStorage } from "@/utils/storage/remove-item-local-storage";
import { setItemLocalStorage } from "@/utils/storage/set-item-local-storage";

export const getOnboardingDoneLocalStorage = async () => {
  return await getItemLocalStorage("onboarding");
};
export const setOnboardingDoneLocalStorage = async ({
  onboarding_done,
}: {
  onboarding_done: boolean;
}) => {
  return await setItemLocalStorage("onboarding", onboarding_done);
};
export const removeOnboardingDoneLocalStorage = async () => {
  return await removeFromLocalStorage("onboarding");
};
