import { useThemeColor } from "@/styles/hooks/useThemeColor";
import { View } from "react-native";

interface SectionProps {
  children: React.ReactNode;
  style?: object;
}

export const Section = ({ children, style }: SectionProps) => {
  const background = useThemeColor({}, "background");
  return (
    <View style={[styles.section, style, { backgroundColor: background }]}>
      {children}
    </View>
  );
};

const styles = {
  section: {
    flex: 1,
  },
};
