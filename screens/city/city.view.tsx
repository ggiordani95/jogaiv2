import { Section } from "@/components/Section";
import useExpoLocation from "@/hooks/useExpoLocation";
import { TextInput } from "@/theme/ui/components/TextInput";
import { Text } from "@/theme/ui/components/Text";
import { View } from "@/theme/ui/components/View";
import { Image } from "expo-image";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { Button } from "@/theme/ui/components/Button";

export default function City() {
  const { errorMsg, location } = useExpoLocation();
  console.log({ errorMsg, location });
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
        <View
          bg="secondary"
          style={{
            width: "100%",
            borderRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          h={240}
          justify="center"
          gap="lg"
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
              text={"Localização atual"}
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
                text={"Caxias do Sul"}
              />
              <Text
                preset={"h5"}
                color={"secondary"}
                family={"secondaryBold"}
                text={"RS, Brasil"}
              />
            </View>
          </View>

          <View globalPresets={"partialSafeArea"}>
            <Button preset={"primary"} text={"Confirmar cidade"} />
          </View>
        </View>
      </View>
    </Section>
  );
}
