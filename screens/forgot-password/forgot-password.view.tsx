import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { LinearGradient } from "expo-linear-gradient";
import { ForgotPasswordHeader } from "./header";
import React from "react";
import { ForgotPasswordHero } from "./hero";
import { ModalBackground } from "@/components/ModalBackground";

export const ForgotPassword = ({ email }: { email: string }) => {
  return (
    <ModalBackground>
      <View
        global={"partialSafeArea"}
        direction="column"
        align="center"
        gap="lg"
        flex={1}
      >
        <ForgotPasswordHeader />
        <ForgotPasswordHero email={email} />
        <View flex={1}></View>
      </View>
    </ModalBackground>
  );
};
