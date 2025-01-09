import { SCHEDULES_TYPE } from "@/stores/schedules";
import { api } from "../api";

type Props = {
  id: string | null;
};

export async function scheduleDetailService({ ...props }: Props) {
  const response = await api.authenticatedRequest<any, Props>({
    method: "GET",
    url: `/appointments/${props.id}`,
  });
  return response?.data?.data;
}
