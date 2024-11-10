import LottieComponent from "@/components/LottieComponent";
import { Section } from "@/components/Section";
import Sports from "@/assets/lotties/sports.json";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/styles/hooks/useThemeColor";

export default function Page() {
  const backgroundColor = useThemeColor({}, "primary");
  return (
    <Section>
      <View
        style={{
          height: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: backgroundColor,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
            flex: 1,
            borderBottomEndRadius: 60,
            borderBottomStartRadius: 60,
          }}
        >
          <LottieComponent source={Sports} />
        </View>
        <View
          style={{
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: "100%",
            paddingBottom: 30,
          }}
        >
          <ThemedText>Olá, mundo!</ThemedText>
        </View>
      </View>
    </Section>
  );
}
