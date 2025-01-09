import { api } from "../api";
import { LOGIN_RESPONSE } from "./register-password";

export async function passwordAuthentication(email: string, password: string) {
  const response = await api.request<LOGIN_RESPONSE, LoginRequest>({
    method: "POST",
    url: "auth/password",
    data: {
      email,
      password,
      device_name: "any",
    },
  });
  return response.data.data;
}
