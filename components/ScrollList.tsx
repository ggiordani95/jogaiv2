import { View, ViewProps } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { ThemedText } from "./ThemedText";
import { Spacing } from "@/constants/Spacing";
import { useThemeColor } from "@/styles/hooks/useThemeColor";
import { ThemedTouchable } from "./ThemedTouchable";

export const ScrollList = () => {
  return (
    <ScrollView
      horizontal
      style={{ maxHeight: 48, marginVertical: Spacing.medium }}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 18,
      }}
    >
      <ThemedTouchable onPress={() => ""} label={"Futebol Society"} />
      <ThemedTouchable onPress={() => ""} label={"Futebol 11"} />
      <ThemedTouchable onPress={() => ""} label={"Futebol 7"} />
      <ThemedTouchable onPress={() => ""} label={"Volêi"} />
      <ThemedTouchable onPress={() => ""} label={"Padel"} />
      <ThemedTouchable onPress={() => ""} label={"Futebol Society"} />
    </ScrollView>
  );
};
