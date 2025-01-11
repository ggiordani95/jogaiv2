import { api } from "../api";

export type ChangePasswordRequest = {
	current_password: string;
	new_password: string;
	new_password_confirmation: string;
};

export async function changePassword({ ...props }: ChangePasswordRequest) {
	const response = await api.authenticatedRequest<
		{ success: boolean; message: string },
		ChangePasswordRequest
	>({
		method: "PATCH",
		url: "/auth/update-password",
		data: { ...props },
	});

	return response.data;
}
