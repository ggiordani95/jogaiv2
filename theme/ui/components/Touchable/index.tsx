import {
  TouchableOpacity,
  TouchableOpacityProps,
  useColorScheme,
} from "react-native";
import { Text } from "@/theme/ui/components/Text";
import { UI } from "../../constants/UIConstants";
export const Touchable = ({ ...props }: UITouchableProps) => {
  const colorScheme = useColorScheme() ?? "light";

  return (
    <TouchableOpacity
      style={[
        {
          alignItems: "center",
          flexDirection: "row",
          gap: 4,
          marginTop: 6,
          padding: 6,
          borderRadius: 6,
          paddingHorizontal: 12,
          backgroundColor: props.active
            ? UI.Colors.Primary100
            : UI.ThemeColorType[colorScheme].bgContentSecondary,
        },
      ]}
    >
      {/* {props.image && props.image} */}
      <Text
        preset="body"
        color={props.active ? "button" : "secondary"}
        family="primaryRegular"
        text={props.label}
      />
    </TouchableOpacity>
  );
};

type UITouchableProps = TouchableOpacityProps & {
  onPress: () => void;
  label: string;
  active?: boolean;
  image?: JSX.Element;
};
