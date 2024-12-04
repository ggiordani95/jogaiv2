import { View, Image, Text } from "react-native";

export const ArenaInfo = ({ ...props }) => {
  return (
    <View className="flex flex-row items-center w-full pl-9 pt-6 flex-1 gap-4">
      <Image
        style={{
          width: 30,
          height: 30,
        }}
        width={30}
        height={30}
        source={require("@/assets/images/arenalogo.png")}
      />
      <Text
        className="text-4xl text-white"
        style={{ fontFamily: "NetflixSansLight" }}
      >
        Arena do Gui
      </Text>
    </View>
  );
};
