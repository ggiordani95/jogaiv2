import { api } from "../api";

type Props = {
  id: string;
};

export async function cancelSchedule({ ...props }: Props) {
  const response = await api.authenticatedRequest<any, Props>({
    method: "PATCH",
    url: `/appointments/${props.id}/cancel`,
  });
  if (response.status !== 204) return undefined;
  return { data: response || [] };
}
