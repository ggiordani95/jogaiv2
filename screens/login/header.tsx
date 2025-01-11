import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export const LoginHeader = () => {
  const router = useRouter();
  return (
    <View pos="relative" w="100%" flex={1}>
      <View w="100%" pos="absolute" mt="sm">
        <TouchableOpacity onPress={() => router.back()}>
          <Octicons name="x" size={24} color="#aeaeae" />
        </TouchableOpacity>
      </View>
      <View w="100%" align="center" mt="sm">
        <Text
          preset={"body"}
          color={"primary"}
          family={"primaryRegular"}
          text={"Entrar ou cadastrar-se"}
        />
      </View>
      <View w={"100%"} mt="lg" h={2} bg="terciary" />
    </View>
  );
};
