import { Text, UITextProps } from "./components/Text";
import { TextInput, UITextInputProps } from "./components/TextInput";
import { UIViewProps, View } from "./components/View";

export const UI = ({ children }: { children: JSX.Element }) => {
  return <>{children}</>;
};

UI.Text = ({ ...props }: UITextProps) => {
  return <Text {...props} />;
};

UI.View = ({ ...props }: UIViewProps) => {
  return <View {...props}>{props.children}</View>;
};

UI.TextInput = ({ ...props }: UITextInputProps) => {
  return <TextInput {...props} />;
};
