import { TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import SearchFilter from "@/components/SearchFilter";
import { Section } from "@/components/Section";
import { FontAwesome6 } from "@expo/vector-icons";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { UI } from "@/theme/ui/UI";
import { UIGlobal } from "@/theme/ui/presets/UIGlobal";

export default function HomeScreen() {
  const router = useRouter();
  const isAuthenticated = true;
  useEffect(() => {
    if (isAuthenticated) return;
    setTimeout(() => {
      router.push("/(modals)/login");
    }, 1000);
  }, []);
  return (
    <Section>
      {/* <>
        <DayPlanner />
      </> */}
      <></>
      <UI.View globalPresets={"partialSafeArea"}>
        <UI.TextInput
          preset="variant"
          placeholder="aba"
          onChangeText={() => {}}
        />
      </UI.View>
      <UI.Text preset="body" color="secondary" text="Sample Text" />
      <UI.View
        preset={"rowCentered"}
        globalPresets={"safeAreaLeft"}
        gap="lg"
        mb="xs"
        bg="main"
        br="sm"
      ></UI.View>
    </Section>
  );
}

const SearchFilterComponent = () => {
  return (
    <SearchFilter
      placeholder="Buscar arena"
      bgColorVariant="bgContentPrimary"
      headerComponent={
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 16,
            gap: 8,
            height: 32,
          }}
          // onPress={() => router.push("/(modals)/login")}
        >
          <ThemedText variant="medium" weight="bold">
            Data e hora
          </ThemedText>
          <FontAwesome6 name="chevron-down" size={18} color={"white"} />
        </TouchableOpacity>
      }
    />
  );
};
