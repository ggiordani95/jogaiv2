import { useEffect } from "react";
import { Router, useRouter } from "expo-router";
import { EmailResponse } from "@/services/api/login/find-user-by-email";
import { useQueryClient } from "@tanstack/react-query";

const enum RedirectLogin {
  REGISTERED_WITH_PASSWORD = "REGISTERED_WITH_PASSWORD",
  USER_NOT_FOUND = "USER_NOT_FOUND",
}

export const useLoginRedirect = (router: Router, email: string) => ({
  [RedirectLogin.REGISTERED_WITH_PASSWORD]: {
    action: () =>
      router.push({ pathname: "/(modals)/login/password", params: { email } }),
  },
  [RedirectLogin.USER_NOT_FOUND]: {
    action: () =>
      router.push({ pathname: "/(modals)/login/register", params: { email } }),
  },
});

export const useRedirectByEmailResponse = ({
  data,
  email,
}: {
  data: EmailResponse | undefined;
  email: string;
}) => {
  const router: Router = useRouter();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (!data?.code) return;
    useLoginRedirect(router, email)[data.code].action();
    queryClient.removeQueries({ queryKey: ["email"] });
    queryClient.invalidateQueries({ queryKey: ["email"] });
  }, [data]);

  return {};
};
