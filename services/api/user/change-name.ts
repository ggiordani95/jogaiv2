import { api } from "../api";

type ChangeUsername = {
	first_name: string;
	last_name: string;
};

export async function changeName({ ...props }: ChangeUsername) {
	const response = await api.authenticatedRequest<
		{ data: { first_name: string; last_name: string } },
		ChangeUsername
	>({
		method: "PATCH",
		url: "/user",
		data: { ...props },
	});

	return response.data;
}
