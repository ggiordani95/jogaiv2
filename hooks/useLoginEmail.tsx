import {
  EmailResponse,
  findUserByEmail,
} from "@/services/api/login/find-user-by-email";
import { useQuery } from "@tanstack/react-query";

type PROPS = {
  email: string;
};

type RESPONSE = {
  isLoading: boolean;
  isError: boolean;
  data: EmailResponse | undefined;
  refetch: () => void;
};

export function useLoginEmail({ email }: PROPS): RESPONSE {
  const { isLoading, isError, data, refetch } = useQuery({
    queryKey: ["email", email],
    queryFn: async () => await findUserByEmail(email),
    enabled: false,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isError,
    data,
    refetch,
  };
}
