import { api } from "../../api";
import { SearchCityResponse } from "./search-city.respose";

export async function searchCity({ name }: SearchCityRequest) {
  const response = await api.request<SearchCityResponse>({
    method: "GET",
    url: "/location/cities",
    params: {
      search: name,
    },
  });

  return response.data;
}
