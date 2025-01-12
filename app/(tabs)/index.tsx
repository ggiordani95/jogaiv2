import { Section } from "@/components/Section";
import { useCallback, useEffect } from "react";
import { useRouter } from "expo-router";
import React from "react";
import { TextInput } from "@/theme/ui/components/TextInput";
import { View } from "@/theme/ui/components/View";
import { useUserStore } from "@/stores/zustand/auth";
import SearchFilter from "@/components/SearchFilter";
import { Touchable } from "@/theme/ui/components/Touchable";
import SoccerIcon from "@/components/icons/soccer.icon";
import { useCityStore } from "@/stores/zustand/city";

export default function HomeScreen() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  const city = useCityStore((state) => state.city);

  const cityName = useCallback(() => {
    if (!city) return "";
    return city.city + " - " + city.state_uf;
  }, [city]);

  useEffect(() => {
    if (user) return;
    setTimeout(() => {
      router.push("/(modals)/login");
    }, 1000);
  }, []);

  return (
    <Section>
      <View direction="column" justify="space-between" h={"100%"}>
        <View global="partialSafeArea" gap="md">
          <TextInput
            preset={"default"}
            placeholder={"Buscar arena"}
            onChangeText={() => ""}
          />
          <View direction="row" gap="md">
            <Touchable
              image={<SoccerIcon color={"black"} />}
              onPress={() => ""}
              active
              label={"Futebol Society"}
            />
            <Touchable
              image={<SoccerIcon color={"black"} />}
              onPress={() => ""}
              label={cityName()}
            />
          </View>
        </View>
      </View>
    </Section>
  );
}
