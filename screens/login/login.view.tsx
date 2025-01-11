import { View } from "@/theme/ui/components/View";
import { LoginHeader } from "./header";
import { LoginHero } from "./hero";
import { ModalBackground } from "@/components/ModalBackground";

export const Login = () => {
  return (
    <ModalBackground>
      <View
        global={"partialSafeArea"}
        direction="column"
        align="center"
        gap="lg"
        flex={1}
      >
        <LoginHeader />
        <LoginHero />
        <View flex={1} />
      </View>
    </ModalBackground>
  );
};
