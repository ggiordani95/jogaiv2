export type NearArenasRequestBase = {
    latitude: string;
    longitude: string;
    sport_code: string;
    name?: string | null;
    page: string;
    date: string;
    start_time: string;
    end_time: string;
};
