import useExpoLocation from "@/hooks/useExpoLocation";
import useIbgeCode from "@/hooks/useIbgeCode";
import { useCityStore } from "@/stores/zustand/city";
import { useEffect } from "react";

export const useCityLocation = () => {
  const { errorMsg, address, location } = useExpoLocation();
  const {
    data: ibgeCode,
    isLoading,
    error,
  } = useIbgeCode(address?.city || null, address?.region || null);

  useEffect(() => {
    if (!address || !ibgeCode) return;

    useCityStore
      .getState()
      .setCity({
        city: address?.city ?? "",
        latitude: location?.coords.latitude?.toString() ?? "",
        longitude: location?.coords.longitude?.toString() ?? "",
        state_uf: address.region ?? "",
        ibge_code: Number(ibgeCode),
      });
  }, [ibgeCode, address]);

  return {};
};
