import { CityResource } from "@/services/api/location/nearest-city/nearest-city.response";
import { useCityStore } from "@/stores/zustand/city";
import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export const CityItem = ({ city }: { city: CityResource }) => {
  const setCity = useCityStore((state) => state.setCity);
  const citySelected = useCityStore((state) => state.city);
  return (
    <TouchableOpacity onPress={() => setCity(city)}>
      <View direction="row" gap="md" align="center" style={{ marginTop: 24 }}>
        <View
          ml="lg"
          gap="sm"
          justify="center"
          padding={16}
          style={{ paddingVertical: 14 }}
          bg={citySelected?.city === city.city ? "mark" : "terciary"}
          br="sm"
        >
          <Octicons name="location" size={24} color="white" />
        </View>
        <View>
          <Text
            preset={"h5"}
            color={"primary"}
            family={"secondaryBold"}
            text={city.city}
          />
          <Text
            preset={"h5"}
            color={"secondary"}
            family={"secondaryBold"}
            text={city.state_uf + ", Brasil"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
