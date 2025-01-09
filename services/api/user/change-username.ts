import { api } from "../api";

type ChangeUsername = {
	first_name: string;
	last_name: string;
};

export async function changeUsername({ ...props }: ChangeUsername) {
	const response = await api.authenticatedRequest<any, ChangeUsername>({
		method: "PATCH",
		url: "/user",
		data: { ...props },
	});
	return response.data;
}
