import { api } from '../api';

export async function googleRequestAuthentication(token: string) {
    const response = await api.request<LoginResponse, Object>({
        method: 'POST',
        url: `auth/google?id_token=${token}`,
    });
    return response.data;
}
