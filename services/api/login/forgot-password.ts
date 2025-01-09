import { api } from "../api";

export async function forgotPassword({ email }: { email: string }) {
  const response = await api.request<any, { email: string }>({
    method: "POST",
    url: "/auth/forgot-password",
    data: { email: email },
  });
  return response.data;
}
