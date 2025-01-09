import { api } from '../api';

type VerifyMobileRequest = {
    code: number;
};

export async function verifyMobile(code: number) {
    const response = await api.authenticatedRequest<any, VerifyMobileRequest>({
        method: 'PATCH',
        url: `/auth/verify-mobile?code=${'830342'}`,
    });
    return response.data;
}
