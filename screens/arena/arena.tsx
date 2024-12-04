import { View, Text } from "react-native";
import React from "react";
import { ArenaHeader } from "./header";
import { ArenaInfo } from "./info";

const Arena = () => {
  return (
    <View>
      <ArenaHeader count="2" />
      <ArenaInfo />
    </View>
  );
};

export default Arena;
