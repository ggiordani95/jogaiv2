import { api } from "../api";

export type EmailCodeResponse =
  | "USER_NOT_FOUND"
  | "REGISTERED_WITH_PASSWORD"
  | "USER_ERROR";

export type EmailResponse = Readonly<{
  message: string;
  code: EmailCodeResponse;
  data: [];
}>;

type EmailRequest = {
  email: string;
};

export async function findUserByEmail(email: string) {
  const response = await api.request<EmailResponse, EmailRequest>({
    method: "GET",
    url: `/auth/find-user-by-email?email=${email}`,
  });
  return response.data;
}
