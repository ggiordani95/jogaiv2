import { LinearGradient } from "expo-linear-gradient";
import { useColorScheme } from "react-native";

export const ModalBackground = ({ children }: { children: JSX.Element }) => {
  const colorScheme = useColorScheme();

  return (
    <LinearGradient
      colors={
        colorScheme === "dark"
          ? ["rgb(22, 22, 22)", "rgb(13, 13, 13)", "#0d121a"]
          : ["#ffffff", "#f0f0f0", "#e0e0e0"]
      }
      style={{ flex: 1 }}
    >
      {children}
    </LinearGradient>
  );
};
