import { useThemeColor } from "@/styles/hooks/useThemeColor";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SectionProps {
  children: React.ReactNode;
  style?: object;
}

export const Section = ({ children, style }: SectionProps) => {
  return (
    <LinearGradient
      className="flex h-full w-screen"
      colors={["#04070d", "#04070d"]}
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
