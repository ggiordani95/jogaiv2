import { api } from '../api';

type GenerateCodeRequest = {
    mobile: string;
};

export async function generateCodeMobile(mobile: string) {
    const response = await api.authenticatedRequest<any, GenerateCodeRequest>({
        method: 'PATCH',
        url: `/auth/generate-verify-mobile-code`,
        data: { mobile },
    });

    return '124823';
}
