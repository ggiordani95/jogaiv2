import { View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Spacing } from "@/constants/Spacing";
import { ThemedTouchable } from "./ThemedTouchable";
import { ThemedText } from "./ThemedText";
import { Image } from "react-native";

type PROPS = {
  headerTitle?: string;
};

export const ScrollList = ({ headerTitle }: PROPS) => {
  return (
    <View style={{ marginVertical: 4, marginTop: 20 }}>
      {headerTitle && (
        <ThemedText variant="large" weight="bold" ml={Spacing.small}>
          {headerTitle}
        </ThemedText>
      )}
      <ScrollView
        style={{ marginVertical: Spacing.small }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          marginLeft: Spacing.small,
        }}
      >
        <ThemedTouchable
          onPress={() => ""}
          label={"Futebol Society"}
          image={
            <Image
              source={require("@/assets/images/tennis.png")}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                marginLeft: 18,
              }}
            />
          }
        />
        <ThemedTouchable
          onPress={() => ""}
          label={"Futebol 11"}
          image={
            <Image
              source={require("@/assets/images/soccer.png")}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                marginLeft: 18,
              }}
            />
          }
        />
        <ThemedTouchable
          onPress={() => ""}
          label={"Futebol 7"}
          image={
            <Image
              source={require("@/assets/images/soccer.png")}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                marginLeft: 18,
              }}
            />
          }
        />
        <ThemedTouchable
          onPress={() => ""}
          label={"Volêi"}
          image={
            <Image
              source={require("@/assets/images/tennis.png")}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                marginLeft: 18,
              }}
            />
          }
        />
        <ThemedTouchable
          onPress={() => ""}
          label={"Padel"}
          image={
            <Image
              source={require("@/assets/images/tennis.png")}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                marginLeft: 18,
              }}
            />
          }
        />
        <ThemedTouchable
          onPress={() => ""}
          label={"Basquete"}
          image={
            <Image
              source={require("@/assets/images/basket.png")}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                marginLeft: 18,
              }}
            />
          }
        />
      </ScrollView>
    </View>
  );
};
