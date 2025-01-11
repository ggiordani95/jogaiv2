import { api } from "../../api";

export async function sendUpVoteArena({ id }: { id: string }) {
  const response = await api.authenticatedRequest<any>({
    method: "PATCH",
    url: `/arenas/${id}/upvote`,
  });

  return response.data.data;
}
