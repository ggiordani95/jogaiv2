import { DefaultResponse } from '../../default-response';

type CityResource = Readonly<{
    id: number;
    city: string;
    name: string;
    latitude: string;
    longitude: string;
    full_name: string;
    state_name: string;
    state_uf: string;
}>;

export type SearchCityResponse = DefaultResponse<CityResource[]>;
