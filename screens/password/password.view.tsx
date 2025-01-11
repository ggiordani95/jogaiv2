import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { LinearGradient } from "expo-linear-gradient";
import { PasswordHeader } from "./header";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const Password = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["email"],
    });
  }, []);
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
        <PasswordHeader />
        {/* <PasswordHero /> */}
        <View flex={1}></View>
      </View>
    </LinearGradient>
  );
};
