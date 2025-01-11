import { View } from "@/theme/ui/components/View";
import { TextInput } from "@/theme/ui/components/TextInput";
import { Text } from "@/theme/ui/components/Text";
import { Button } from "@/theme/ui/components/Button";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, useColorScheme } from "react-native";
import { useRouter } from "expo-router";

export const PasswordHero = ({ email }: { email: string }) => {
  const [password, setPassword] = useState<string>("");
  const passwordRef = useRef<any>(null);

  const colorScheme = useColorScheme();

  const router = useRouter();

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  return (
    <View w="100%" gap="xl" flex={14}>
      <View gap="md">
        <Text
          preset={"body"}
          color={"secondary"}
          family={"primaryRegular"}
          text={"Parece que você já possui uma conta."}
        />
        <TextInput
          preset={"disabled"}
          placeholder={"Digite seu email"}
          onChangeText={() => ""}
          enabled={false}
          value={email}
        />
        <TextInput
          preset={"default"}
          placeholder={"Digite sua senha"}
          onChangeText={() => ""}
          ref={passwordRef}
          value={password}
        />
        <TouchableOpacity
          onPress={() => router.push("/(modals)/login/forgot-password")}
        >
          <View w="100%" mb="xs">
            <Text
              preset={"body"}
              color={colorScheme === "dark" ? "main" : "primary"}
              family={"primaryRegular"}
              text={"Esqueceu a senha?"}
            />
          </View>
        </TouchableOpacity>
        <Button
          preset={"primary"}
          onPress={() => null}
          isLoading={false}
          text={"Continuar"}
        />
      </View>
    </View>
  );
};
