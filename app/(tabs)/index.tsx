import { Section } from "@/components/Section";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import React from "react";
import { TextInput } from "@/theme/ui/components/TextInput";
import { View } from "@/theme/ui/components/View";

export default function HomeScreen() {
  const router = useRouter();
  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) return;
    setTimeout(() => {
      router.push("/(modals)/login");
    }, 1000);
  }, []);

  return (
    <Section>
      <View direction="column" justify="space-between" h={"100%"}>
        <View globalPresets="partialSafeArea">
          <TextInput
            preset={"default"}
            placeholder={"Buscar arena"}
            onChangeText={() => ""}
          />
        </View>
      </View>
    </Section>
  );
}
