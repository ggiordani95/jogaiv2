import React from "react";
import { View, Image } from "react-native";
import { ArenaType } from "./arena.store";
import CustomText from "@/components/customs/text/custom.text";
import SoccerIcon from "@/components/icons/soccer.icon";

const ArenaSelect = ({ store }: { store: ArenaType }) => {
  return (
    <View className="flex flex-col pl-6 gap-9 mt-9">
      <View className="flex flex-row justify-between items-center px-6 p-4 gap-4 flex-1 bg-zinc-900 rounded-2xl border-t-0 mr-6">
        <View className="flex flex-row gap-3 items-center">
          <View className="p-2 rounded-xl bg-yellow-200 justify-center items-center">
            <SoccerIcon />
          </View>

          <CustomText
            fontWeight={"Medium"}
            text={"Futebol Society"}
            size={"Small"}
            color={"Primary"}
          />
        </View>
        <CustomText
          fontWeight={"Medium"}
          text={"Alterar"}
          size={"Small"}
          color={"Theme"}
        />
      </View>
    </View>
  );
};

ArenaSelect.Logo = ({ source, ...props }: { source: { uri: string } }) => {
  return (
    <Image
      style={{
        width: 30,
        height: 30,
      }}
      source={source}
      {...props}
    />
  );
};

export default ArenaSelect;
