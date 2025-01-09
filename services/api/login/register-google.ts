import { api } from "../api";

type SignUpResponse = Readonly<{
	message: string;
	code: string;
	data: [];
}>;

type RegisterPasswordRequest = {
	email: string;
	password: string;
	device_name: string;
	first_name: string;
	last_name: string;
	sex: string;
	birth_date: string;
};

export async function registerWithGoogle(data: RegisterPasswordRequest) {
	const modifiedData = {
		...data,
		birth_date: "1992-01-15",
		device_name: "any",
	};
	const response = await api.request<any, RegisterPasswordRequest>({
		method: "POST",
		url: "/auth/register/with-google",
		params: modifiedData,
	});

	return response.data;
}
