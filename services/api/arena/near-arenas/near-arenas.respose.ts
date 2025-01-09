import { DefaultResponse } from "../../default-response";

export type ArenaResource = Readonly<{
  id: number;
  display_name: string;
  meters_distance_between_user_and_arena: string;
  cover_image_path: string;
  slug: string;
}>;

export type NearArenasResponse = DefaultResponse<ArenaResource[]>;
