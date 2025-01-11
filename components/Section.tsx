import { UI } from "@/theme/ui/constants/UIConstants";
import { LinearGradient } from "expo-linear-gradient";
import { colorScheme } from "nativewind";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SectionProps {
  children: React.ReactNode;
  style?: object;
}

export const Section = ({ children, style }: SectionProps) => {
  const useColorScheme = colorScheme.get();
  return (
    <LinearGradient
      className="flex h-full w-screen"
      colors={
        useColorScheme == "dark"
          ? [UI.Colors.Black80, UI.Colors.Black100]
          : [UI.Colors.White100, UI.Colors.White80]
      }
      style={{ flex: 1 }}
    >
      <SafeAreaView>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = {
  section: {
    flex: 1,
  },
};
