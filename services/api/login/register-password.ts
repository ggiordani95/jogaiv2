import { api } from "../api";

export type LOGIN_RESPONSE_CODE = "LOGGED_IN" | "LOGGED_OUT";

export type REGISTER_USER_TYPE = {
  email: string;
  password: string;
  device_name: string;
  first_name: string;
  last_name: string;
  sex: string;
  birth_date: string;
};

export type LOGGED_USER_TYPE = {
  email: string;
  first_name: string;
  last_name: string;
  mobile: string | null;
  mobile_verification_code_sent_at: string | null;
  mobile_verified_at: string | null;
  token: string;
  birth_date: string | null;
};

export interface LOGIN_RESPONSE {
  code: LOGIN_RESPONSE_CODE;
  data: LOGGED_USER_TYPE;
  message: string;
}

export async function register(data: REGISTER_USER_TYPE) {
  const birthDate =
    data.birth_date.split("-")[2] +
    "-" +
    data.birth_date.split("-")[1] +
    "-" +
    data.birth_date.split("-")[0];
  const dataAdapter = {
    ...data,
    birth_date: birthDate,
    device_name: "any",
  };
  const response = await api.request<LOGIN_RESPONSE, REGISTER_USER_TYPE>({
    method: "POST",
    url: "/auth/register/with-password",
    params: dataAdapter,
  });
  return response.data;
}
