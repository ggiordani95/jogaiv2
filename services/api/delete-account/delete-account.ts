import { api } from "../api";

export async function deleteAccount() {
  const response = await api.authenticatedRequest<any>({
    method: "DELETE",
    url: `/user`,
  });

  return response.data.data;
}
