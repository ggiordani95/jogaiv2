import { View } from "@/theme/ui/components/View";
import { Text } from "@/theme/ui/components/Text";
import { TextInput } from "@/theme/ui/components/TextInput";
import { Button } from "@/theme/ui/components/Button";
import { TouchableOpacity, StyleSheet, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { useLoginEmail } from "@/hooks/useLoginEmail";
import { useRedirectByEmailResponse } from "@/hooks/useLoginRedirect";
import { useEmailStore } from "@/stores/zustand/email";

export const LoginHero = () => {
  const email = useEmailStore((state) => state.email);
  const setEmail = useEmailStore((state) => state.setEmail);

  const { refetch, data, isError, isLoading } = useLoginEmail({ email });
  useRedirectByEmailResponse({ data, email });

  const handleRefetch = () => {
    refetch();
  };
  const colorScheme = useColorScheme();

  return (
    <View w="100%" gap="xl" flex={15}>
      <View gap="lg" mt="sm">
        <TextInput
          preset={isError ? "defaultError" : "default"}
          placeholder={"Digite seu email"}
          onChangeText={(e) => setEmail(e.toLocaleLowerCase())}
          value={email}
        />
        <Button
          preset={"primary"}
          onPress={email.length >= 6 ? handleRefetch : () => null}
          isLoading={isLoading}
          text={"Continuar"}
        />
        <View direction="row" gap="md" align="center">
          <View flex={1} h={2} bg="terciary" />
          <Text
            preset={"body"}
            color={"primary"}
            family={"primaryRegular"}
            text={"ou"}
          />
          <View flex={1} h={2} bg="terciary" />
        </View>
        <TouchableOpacity
          onPress={() => ""}
          style={[
            styles.googleButton,
            { backgroundColor: colorScheme === "dark" ? "#3a3a3a" : "#cfcfcf" },
          ]}
        >
          <View pos="absolute" ml="xl">
            <Image
              source={require("@/assets/images/logogoogle.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <View w={"100%"} align="center" style={{ opacity: 0.8 }}>
            <Text
              preset={"body"}
              color={"primary"}
              family={"primaryRegular"}
              text={"Continuar com Google"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  googleButton: {
    height: 45,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});
