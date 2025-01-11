import { Password } from "@/screens/password/password.view";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  const { email } = useLocalSearchParams();
  const slugAsString: string = Array.isArray(email) ? email[0] : email;
  return <Password email={slugAsString} />;
}
