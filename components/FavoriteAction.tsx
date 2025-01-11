import { View, Text } from "react-native";
import React from "react";
import HeartIcon from "./icons/heart.icon";

export const FavoriteAction = ({ ...props }: { count: number }) => {
  return (
    <View className="w-24 h-24 flex flex-row justify-center items-center absolute right-4 gap-2">
      <HeartIcon color="white" />
      <Text className="text-2xl mb-[10px] font-bold text-white">
        {props.count}
      </Text>
    </View>
  );
};
