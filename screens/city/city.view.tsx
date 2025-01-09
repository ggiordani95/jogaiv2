import { Section } from "@/components/Section";
import { TextInput } from "@/theme/ui/components/TextInput";
import { Text } from "@/theme/ui/components/Text";
import { View } from "@/theme/ui/components/View";
import { Octicons } from "@expo/vector-icons";
import { Button } from "@/theme/ui/components/Button";
import { useCityLocation } from "./useCityLocation";
import { useCityStore } from "@/stores/zustand/city";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

export default function City() {
  const {} = useCityLocation();

  return (
    <Section>
      <View direction="column" justify="space-between" h={"100%"}>
        <View globalPresets="partialSafeArea">
          <TextInput
            placeholder="Digite o nome da cidade"
            preset={"default"}
            onChangeText={() => ""}
          />
        </View>
        <Footer />
      </View>
    </Section>
  );
}

const Footer = () => {
  const city = useCityStore((state) => state.city);

  const translateY = useSharedValue(240);

  useEffect(() => {
    if (city) {
      translateY.value = withSpring(0, {
        damping: 12,
        stiffness: 90,
      });
    } else {
      translateY.value = withTiming(240, { duration: 300 });
    }
  }, [city]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!city) return null;

  return (
    <Animated.View
      style={[
        {
          width: "100%",
          borderRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          justifyContent: "center",
          gap: 24,
          height: 240,
          backgroundColor: "#131313",
        },
        animatedStyle,
      ]}
    >
      <View
        bg="secondary"
        padding={12}
        globalPresets={["partialSafeArea"]}
        justify="center"
        align="center"
        style={{
          borderWidth: 1,
          borderColor: "#4b4b4b",
          borderRadius: 8,
          maxWidth: 160,
          position: "absolute",
          right: 0,
          top: -38,
        }}
      >
        <Text
          preset={"body"}
          color={"primary"}
          family={"primaryRegular"}
          text={"Recomendado"}
        />
      </View>
      <View direction="row" gap="md" align="center">
        <View
          ml="lg"
          gap="sm"
          justify="center"
          padding={16}
          style={{ paddingVertical: 14 }}
          bg="mark"
          br="sm"
        >
          <Octicons name="location" size={24} color="white" />
        </View>

        <View>
          <Text
            preset={"h5"}
            color={"primary"}
            family={"secondaryBold"}
            text={city?.city ?? ""}
          />
          <Text
            preset={"h5"}
            color={"secondary"}
            family={"secondaryBold"}
            text={(city?.state_uf ?? "") + ", " + "Brasil"}
          />
        </View>
      </View>
      <View globalPresets={"partialSafeArea"}>
        <Button preset={"primary"} text={"Confirmar cidade"} />
      </View>
    </Animated.View>
  );
};
