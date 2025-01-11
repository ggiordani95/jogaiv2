import { CityResource } from "../../services/api/location/nearest-city/nearest-city.response";
import { LOGIN_RESPONSE } from "@/services/api/login/register-password";

export interface ILocation {
  latitude: string;
  longitude: string;
  city?: string;
}

export type USER_TYPE = {
  city?: CityResource;
} & LOGIN_RESPONSE["data"];

export interface Schema {
  city: CityResource;
  user: USER_TYPE;
  termsOfUse: boolean;
  [other: string]: any;
}

export type TestReturnType<
  Key extends keyof Schema,
  ReturnType
> = Key extends string ? ReturnType : Schema[Key];
