import { View } from "@/theme/ui/components/View";
import { PasswordHeader } from "./header";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { PasswordHero } from "./hero";
import { ModalBackground } from "@/components/ModalBackground";

export const Password = ({ email }: { email: string }) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["email"],
    });
  }, []);

  return (
    <ModalBackground>
      <View
        global={"partialSafeArea"}
        direction="column"
        align="center"
        gap="lg"
        flex={1}
      >
        <PasswordHeader />
        <PasswordHero email={email} />
        <View flex={1}></View>
      </View>
    </ModalBackground>
  );
};
