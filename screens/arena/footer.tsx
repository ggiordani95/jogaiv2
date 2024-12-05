import React from "react";
import { View, Image } from "react-native";
import { ArenaType } from "./arena.store";
import CustomText from "@/components/customs/text/custom.text";

const ArenaFooter = ({ store }: { store: ArenaType }) => {
  return (
    <View className="flex flex-col pl-6 gap-9 mt-24 h-16">
      <View className="flex flex-1 mr-6 rounded-xl bg-yellow-400 justify-center items-center">
        <CustomText
          fontWeight={"Regular"}
          text={"Continuar"}
          size={"Small"}
          color={"Reverse"}
        />
      </View>
    </View>
  );
};

export default ArenaFooter;
