import { View, ScrollView, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import SearchFilter from "@/components/SearchFilter";
import { ScrollList } from "@/components/ScrollList";

import { Section } from "@/components/Section";
import { FontAwesome6 } from "@expo/vector-icons";
import { useThemeColor } from "@/styles/hooks/useThemeColor";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { SchedulePlanner } from "@/components/SchedulePlanner";

export default function HomeScreen() {
  const textColor = useThemeColor({}, "text");

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
      {/* <ScrollView>
        <SearchFilter
          bgColorVariant="bgContentPrimary"
          headerComponent={
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 16,
                gap: 8,
              }}
              onPress={() => router.push("/(modals)/login")}
            >
              <ThemedText variant="large" weight="bold">
                Calendário
              </ThemedText>
              <FontAwesome6 name="chevron-down" size={18} color={textColor} />
            </TouchableOpacity>
          }
        />
        <ScrollList headerTitle="Escolha o esporte" />
      </ScrollView> */}
      <View style={{ paddingTop: 90 }}></View>
      <SchedulePlanner />
    </Section>
  );
}
