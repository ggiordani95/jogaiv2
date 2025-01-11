import { api } from "../../api";
import { NearArenasRequestBase } from "./near-arenas.request";
import { NearArenasResponse } from "./near-arenas.respose";

export async function fetchNearArenas(request: NearArenasRequestBase) {
  const params = {
    latitude: request.latitude,
    longitude: request.longitude,
    sport_code: request.sport_code,
    page: request.page,
    date: request.date,
    start_time: request.start_time,
    end_time: request.end_time,
  };

  const fetchArenaName = async () => {
    const response = await api.authenticatedRequest<
      NearArenasResponse | any,
      any
    >({
      method: "GET",
      url: "/arenas",
      params: {
        ...params,
        name: request.name,
      },
    });
    return response.data;
  };

  if (request.name) return fetchArenaName();

  const response = await api.authenticatedRequest<
    NearArenasResponse | any,
    any
  >({
    method: "GET",
    url: "/arenas",
    params: {
      ...params,
    },
  });

  return response.data;
}
