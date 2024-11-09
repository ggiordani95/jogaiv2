import { View, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import SearchFilter from "@/components/SearchFilter";
import { ScrollList } from "@/components/ScrollList";
import LottieComponent from "@/components/LottieComponent";
import Sports from "@/assets/lotties/sports.json";
import Calendar from "@/assets/lotties/calendar.json";
import SliderLottieComponent from "@/components/SliderLottieComponent";

import { Section } from "@/components/Section";

export default function HomeScreen() {
  return (
    <Section>
      <ScrollView>
        <View style={{ marginTop: 60 }}></View>
        <SearchFilter
          bgColorVariant="bgContentPrimary"
          headerComponent={
            <>
              <ThemedText variant="large" weight="bold">
                Buscar
              </ThemedText>
            </>
          }
        />

        <ScrollList />
      </ScrollView>
      {/* <SliderLottieComponent source={Sports} source2={Calendar} /> */}
    </Section>
  );
}
