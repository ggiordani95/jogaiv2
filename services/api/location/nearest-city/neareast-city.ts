import { api } from "../../api";
import { NearestCityResponse } from "./nearest-city.response";

export async function fetchNearestCity({
  latitude,
  longitude,
  ibge_code,
}: NearestCityRequest) {
  const response = await api.authenticatedRequest<NearestCityResponse>({
    method: "GET",
    url: `/location/cities/nearest`,
    params: {
      latitude: latitude.substring(0, 9),
      longitude: longitude.substring(0, 9),
      ibge_code: ibge_code,
    },
  });

  return response.data;
}
