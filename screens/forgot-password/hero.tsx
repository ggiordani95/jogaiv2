import { View } from "@/theme/ui/components/View";
import { TextInput } from "@/theme/ui/components/TextInput";
import { Text } from "@/theme/ui/components/Text";
import { Button } from "@/theme/ui/components/Button";
import { useEffect, useState } from "react";
import { useLoginForgotPassword } from "@/hooks/useLoginForgotPassword";

export const ForgotPasswordHero = ({ email }: { email: string }) => {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const { refetch, isLoading, data, isError } = useLoginForgotPassword({
    email,
  });

  useEffect(() => {
    if (data) {
      setEmailSent(true);
    }
  }, []);

  return (
    <View w="100%" gap="xl" flex={14}>
      <View gap="lg">
        <TextInput
          preset={"default"}
          placeholder={"Digite seu email"}
          onChangeText={() => ""}
          value={email}
        />
        <Button
          preset={"primary"}
          onPress={() => refetch()}
          isLoading={isLoading}
          text={"Enviar link de redefinição"}
        />
      </View>
    </View>
  );
};
