import { DefaultResponse } from "../../default-response";

export type CityResource = Readonly<{
  city: string;
  latitude: string;
  longitude: string;
  state_uf: string;
  ibge_code: number;
}>;

export type NearestCityResponse = DefaultResponse<CityResource[]>;
