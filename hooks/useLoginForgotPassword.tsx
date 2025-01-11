import { forgotPassword } from "@/services/api/login/forgot-password";
import { useQuery } from "@tanstack/react-query";

export const useLoginForgotPassword = ({ email }: { email: string }) => {
  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["forgot-password", email],
    queryFn: async () => await forgotPassword({ email }),
    enabled: false,
    staleTime: 0,
  });

  return { refetch, isLoading, data, isError };
};
