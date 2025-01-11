import { View } from "@/theme/ui/components/View";
import { LinearGradient } from "expo-linear-gradient";
import { LoginHeader } from "./header";
import { LoginHero } from "./hero";

export const Login = () => {
  return (
    <LinearGradient
      colors={["rgb(22, 22, 22)", "rgb(13, 13, 13)", "#0d121a"]}
      style={{ flex: 1 }}
    >
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
    </LinearGradient>
  );
};
