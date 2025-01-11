import { View } from "@/theme/ui/components/View";
import { LinearGradient } from "expo-linear-gradient";

export const Register = () => {
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
        <View flex={1}></View>
      </View>
    </LinearGradient>
  );
};
