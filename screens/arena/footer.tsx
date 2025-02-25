import React from "react";
import { View, Image } from "react-native";
import { ArenaType } from "./arena.store";
import { Text } from "@/theme/ui/components/Text";

const ArenaFooter = ({ store }: { store: ArenaType }) => {
  return (
    <View className="flex flex-col pl-6 gap-9 mt-24 h-16">
      <View className="flex flex-1 mr-6 rounded-2xl bg-yellow-400 justify-center items-center">
        <Text
          preset={"body"}
          color={"button"}
          family={"primaryRegular"}
          text={""}
        />
      </View>
    </View>
  );
};

export default ArenaFooter;
