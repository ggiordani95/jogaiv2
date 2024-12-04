import { useRouter } from "expo-router";
import { TouchableOpacity, useWindowDimensions, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const RouterBackAction = () => {
  const navigation = useRouter();
  return (
    <View className="h-24 flex justify-center items-center absolute left-4">
      <TouchableOpacity onPress={() => navigation.back()}>
        <Svg width={32} height={32} viewBox={`0 0 32 60`} fill="white">
          <Path
            d="M28.1664 43.852L25.7385 46.2412C24.7105 47.2529 23.0482 47.2529 22.0311 46.2412L0.771008 25.3296C-0.257003 24.318 -0.257003 22.6821 0.771008 21.6811L22.0311 0.758759C23.0591 -0.25292 24.7215 -0.25292 25.7385 0.758759L28.1664 3.14804C29.2053 4.17048 29.1835 5.83868 28.1226 6.83959L14.9444 19.195H46.3753C47.8298 19.195 49 20.3466 49 21.778V25.222C49 26.6534 47.8298 27.805 46.3753 27.805H14.9444L28.1226 40.1604C29.1944 41.1613 29.2163 42.8295 28.1664 43.852Z"
            fill="white"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};
