import { api } from "../../api";
import { GetArenaByIdResponse } from "./get-arena-by-id.response";

export async function getArenaById({
  item,
}: {
  item: { slug: string; slugCity: string; public_id: string };
}) {
  const response = await api.request<GetArenaByIdResponse>({
    method: "GET",
    url: `/arenas/${item.slugCity}/${item.slug}/${item.public_id}`,
  });

  return response.data.data;
}
