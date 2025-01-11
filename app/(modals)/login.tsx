import { Calendar } from "@/components/Calendar";
import { SchedulePlanner } from "@/components/SchedulePlanner";
import { Button } from "@/theme/ui/components/Button";
import { TextInput } from "@/theme/ui/components/TextInput";
import { View } from "@/theme/ui/components/View";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "react-native";

export default function Page() {
  return (
    <LinearGradient
      colors={["rgb(0, 0, 0)", "rgb(12, 12, 12)", "rgb(8, 8, 8)", "black"]}
      style={{ flex: 1 }}
    >
      <View
        globalPresets={"partialSafeArea"}
        direction="column"
        justify="center"
        gap="lg"
      >
        <Image
          source={require("@/assets/images/jogai.png")}
          contentFit="cover"
          style={{ width: 150, height: 72 }}
        />
        <TextInput
          preset={"default"}
          placeholder={"Digite seu email"}
          onChangeText={() => ""}
        ></TextInput>
        <Button
          preset={"primary"}
          onPress={() => ""}
          text={"Entre ou cadastre-se"}
        />
      </View>
    </LinearGradient>
  );
}
