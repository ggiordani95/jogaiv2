import { passwordAuthentication } from "@/services/api/login/password-authentication";
import { useQuery } from "@tanstack/react-query";

export function useLoginPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { isLoading, data, refetch, isError } = useQuery({
    queryKey: ["password", password],
    queryFn: async () => await passwordAuthentication(email, password),
    enabled: false,
    staleTime: 0,
  });

  return {
    isLoading,
    data,
    refetch,
    isError,
  };
}
