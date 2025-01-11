import { useAuthStore } from "@/domain/Auth/auth";
import { api } from "../api";

type Props = {
  page: number;
  per_page: number;
  order_direction: string;
  upcoming: number;
  timezone: string;
  isAuthenticated: boolean;
};

export async function schedulesService({ ...props }: Props) {
  if (!props.isAuthenticated) return { data: [], lastPage: 0 };
  const response = await api.authenticatedRequest<any, Props>({
    method: "GET",
    url: `/appointments`,
    params: { ...props },
  });
  return {
    lastPage: response.data.meta.last_page,
    data: response.data.data,
  };
}
