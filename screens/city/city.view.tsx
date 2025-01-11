import { Section } from "@/components/Section";
import { TextInput } from "@/theme/ui/components/TextInput";
import { View } from "@/theme/ui/components/View";
import { useCityLocation } from "./hooks/useCityLocation";
import { useCityStore } from "@/stores/zustand/city";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import React from "react";
import { CitiesList } from "@/components/CitiesList";
import { Footer } from "./footer";

export default function City() {
  const { isLoading } = useCityLocation();

  useEffect(() => {
    return () => useCityStore.getState().setCity(null);
  }, []);

  return (
    <Section>
      <View direction="column" justify="space-between" h={"100%"}>
        {isLoading ? (
          <View align="center" justify="center" flex={1}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <React.Fragment>
            <View globalPresets="partialSafeArea">
              <TextInput
                placeholder="Digite o nome da cidade"
                preset={"default"}
                onChangeText={() => ""}
              />
            </View>
            <CitiesList />
            <Footer />
          </React.Fragment>
        )}
      </View>
    </Section>
  );
}
