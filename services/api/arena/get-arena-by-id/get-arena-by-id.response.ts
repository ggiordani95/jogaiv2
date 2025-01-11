import type { Sport } from "@/utils/types/sport";
import type { DefaultResponse } from "../../default-response";

export type GetArenaByIdResponse = DefaultResponse<IArena>;

export interface IArena {
  cover_image_path: string;
  id: string;
  display_name: string;
  contacts: Contact[];
  address: Address;
  business_hours: BusinessHours;
  fields: Field[];
  sports: Sport[];
  services: Service[];
  socials: Socials[];
}

type Socials = {
  type: string;
  username: string;
  url: string;
};

export interface Service {
  id: string;
  name: string;
  duration: number;
  description?: string;
  sports: Sport[];
  price_range: any;
}

export interface Contact {
  type: string;
  value: string;
  is_main: boolean;
}

export interface Address {
  zip_code: string;
  street: string;
  number: string;
  complement: any;
  district: string;
  latitude: string;
  longitude: string;
  city: City;
}

export interface City {
  name: string;
  state: State;
}

export interface State {
  name: string;
  code: string;
}

export interface BusinessHours {
  monday: BusinessHour[];
  tuesday: BusinessHour[];
  wednesday: BusinessHour[];
  thursday: BusinessHour[];
  friday: BusinessHour[];
  saturday: BusinessHour[];
  sunday: BusinessHour[];
}

export interface BusinessHour {
  start: string;
  end: string;
}

export interface Field {
  id: string;
  name: string;
  services: Service[];
}
